"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

type PublicationThumbnailProps = {
  src: string;
  alt: string;
};

export default function PublicationThumbnail({
  src,
  alt,
}: PublicationThumbnailProps) {
  const containerRef =
    useRef<HTMLDivElement | null>(null);

  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  const [isOpen, setIsOpen] =
    useState(false);

  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  /* ======================================================== */
  /* PDF Rendering */
  /* ======================================================== */

  useEffect(() => {
    let cancelled = false;

    let resizeObserver:
      ResizeObserver | null = null;

    let renderTask:
      any = null;

    const renderPdf = async () => {
      try {
        setLoading(true);
        setError(false);

        /* ==================================================== */
        /* PDF.js */
        /* ==================================================== */

        const pdfjs =
          await import(
            "pdfjs-dist/legacy/build/pdf.mjs"
          );

        pdfjs.GlobalWorkerOptions.workerSrc =
          "/pdf.worker.min.mjs";

        /* ==================================================== */
        /* Load PDF */
        /* ==================================================== */

        const loadingTask =
          pdfjs.getDocument({
            url: src,
          });

        const pdf =
          await loadingTask.promise;

        if (cancelled) {
          return;
        }

        const page =
          await pdf.getPage(1);

        if (cancelled) {
          return;
        }

        /* ==================================================== */
        /* Render function */
        /* ==================================================== */

        const drawPage = async () => {
          const container =
            containerRef.current;

          const canvas =
            canvasRef.current;

          if (
            !container ||
            !canvas ||
            cancelled
          ) {
            return;
          }

          const context =
            canvas.getContext(
              "2d",
              {
                alpha: false,
              }
            );

          if (!context) {
            return;
          }

          /* ================================================== */
          /* Display width */
          /* ================================================== */

          const cssWidth =
            Math.max(
              container.clientWidth,
              1
            );

          /* ================================================== */
          /* PDF original size */
          /* ================================================== */

          const baseViewport =
            page.getViewport({
              scale: 1,
            });

          /* ================================================== */
          /* High-quality rendering */
          /* ================================================== */

          const qualityScale =
            4;

          const renderWidth =
            cssWidth *
            qualityScale;

          const pdfScale =
            renderWidth /
            baseViewport.width;

          const viewport =
            page.getViewport({
              scale:
                pdfScale,
            });

          /* ================================================== */
          /* Canvas internal resolution */
          /* ================================================== */

          canvas.width =
            Math.ceil(
              viewport.width
            );

          canvas.height =
            Math.ceil(
              viewport.height
            );

          const cssHeight =
            cssWidth *
            (
              baseViewport.height /
              baseViewport.width
            );

          canvas.style.width =
            `${cssWidth}px`;

          canvas.style.height =
            `${cssHeight}px`;

          /* ================================================== */
          /* Clear */
          /* ================================================== */

          context.save();

          context.fillStyle =
            "#ffffff";

          context.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
          );

          context.restore();

          /* ================================================== */
          /* Cancel previous render if necessary */
          /* ================================================== */

          if (
            renderTask
          ) {
            try {
              renderTask.cancel();
            } catch {
              // Ignore cancellation errors.
            }
          }

          /* ================================================== */
          /* Render PDF */
          /* ================================================== */

          renderTask =
            page.render({
              canvasContext:
                context,
              viewport,
              canvas,
            });

          try {
            await renderTask.promise;
          } catch (
            renderError: any
          ) {
            /*
             * ResizeObserver can trigger another render
             * while the previous render is still active.
             * PDF.js throws RenderingCancelledException
             * in that case, which is safe to ignore.
             */
            if (
              renderError?.name !==
              "RenderingCancelledException"
            ) {
              throw renderError;
            }

            return;
          }

          if (
            cancelled
          ) {
            return;
          }

          /* ================================================== */
          /* Store high-resolution image for modal */
          /* ================================================== */

          try {
            const dataUrl =
              canvas.toDataURL(
                "image/png"
              );

            setPreviewUrl(
              dataUrl
            );
          } catch (
            previewError
          ) {
            console.error(
              "Failed to create publication preview:",
              previewError
            );
          }

          setLoading(false);
        };

        /* ==================================================== */
        /* Initial render */
        /* ==================================================== */

        await drawPage();

        /* ==================================================== */
        /* Responsive redraw */
        /* ==================================================== */

        if (
          containerRef.current
        ) {
          resizeObserver =
            new ResizeObserver(
              () => {
                drawPage();
              }
            );

          resizeObserver.observe(
            containerRef.current
          );
        }
      } catch (err) {
        console.error(
          "PDF thumbnail render failed:",
          err
        );

        if (
          !cancelled
        ) {
          setLoading(false);
          setError(true);
        }
      }
    };

    renderPdf();

    return () => {
      cancelled =
        true;

      if (
        resizeObserver
      ) {
        resizeObserver.disconnect();
      }

      if (
        renderTask
      ) {
        try {
          renderTask.cancel();
        } catch {
          // Ignore cleanup errors.
        }
      }
    };
  }, [src]);

  /* ======================================================== */
  /* ESC to close modal */
  /* ======================================================== */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown =
      (
        event: KeyboardEvent
      ) => {
        if (
          event.key ===
          "Escape"
        ) {
          setIsOpen(false);
        }
      };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen]);

  /* ======================================================== */
  /* Prevent background scrolling while enlarged */
  /* ======================================================== */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isOpen]);

  /* ======================================================== */
  /* Open preview */
  /* ======================================================== */

  const openPreview =
    () => {
      if (
        loading ||
        error ||
        !previewUrl
      ) {
        return;
      }

      setIsOpen(true);
    };

  /* ======================================================== */
  /* UI */
  /* ======================================================== */

  return (
    <>
      {/* ==================================================== */}
      {/* Thumbnail */}
      {/* ==================================================== */}

      <div
        ref={
          containerRef
        }
        aria-label={
          alt
        }
        role="button"
        tabIndex={
          loading ||
          error
            ? -1
            : 0
        }
        onClick={
          openPreview
        }
        onKeyDown={(
          event
        ) => {
          if (
            event.key ===
              "Enter" ||
            event.key ===
              " "
          ) {
            event.preventDefault();

            openPreview();
          }
        }}
        style={{
          width:
            "100%",

          display:
            "flex",
          alignItems:
            "center",
          justifyContent:
            "center",

          position:
            "relative",

          overflow:
            "hidden",

          cursor:
            loading ||
            error
              ? "default"
              : "zoom-in",
        }}
      >
        {/* ================================================== */}
        {/* Loading */}
        {/* ================================================== */}

        {loading && (
          <div
            style={{
              width:
                "100%",
              minHeight:
                "120px",

              display:
                "flex",
              alignItems:
                "center",
              justifyContent:
                "center",

              fontSize:
                "12px",
              opacity:
                0.45,
            }}
          >
            Loading
            preview...
          </div>
        )}

        {/* ================================================== */}
        {/* Error */}
        {/* ================================================== */}

        {error && (
          <div
            style={{
              width:
                "100%",
              minHeight:
                "120px",

              display:
                "flex",
              alignItems:
                "center",
              justifyContent:
                "center",

              fontSize:
                "12px",
              opacity:
                0.45,
            }}
          >
            Preview
            unavailable
          </div>
        )}

        {/* ================================================== */}
        {/* Canvas */}
        {/* ================================================== */}

        <canvas
          ref={
            canvasRef
          }
          aria-label={
            alt
          }
          style={{
            display:
              loading ||
              error
                ? "none"
                : "block",

            maxWidth:
              "100%",

            objectFit:
              "contain",

            pointerEvents:
              "none",

            userSelect:
              "none",
          }}
        />
      </div>

      {/* ==================================================== */}
      {/* Enlarged Preview */}
      {/* ==================================================== */}

      {isOpen &&
        previewUrl && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} enlarged preview`}
            onClick={() => {
              setIsOpen(
                false
              );
            }}
            style={{
              position:
                "fixed",

              inset: 0,

              zIndex:
                99999,

              display:
                "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              padding:
                "40px",

              background:
                "rgba(0, 0, 0, 0.88)",

              backdropFilter:
                "blur(6px)",

              cursor:
                "zoom-out",
            }}
          >
            {/* ============================================== */}
            {/* Close */}
            {/* ============================================== */}

            <button
              type="button"
              aria-label="Close preview"
              onClick={(
                event
              ) => {
                event.stopPropagation();

                setIsOpen(
                  false
                );
              }}
              style={{
                position:
                  "fixed",

                top:
                  "24px",

                right:
                  "28px",

                width:
                  "44px",

                height:
                  "44px",

                display:
                  "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                border:
                  "1px solid rgba(255,255,255,0.22)",

                borderRadius:
                  "50%",

                background:
                  "rgba(20,20,20,0.72)",

                color:
                  "#ffffff",

                fontSize:
                  "28px",

                fontWeight:
                  300,

                lineHeight:
                  1,

                cursor:
                  "pointer",

                zIndex:
                  100000,
              }}
            >
              ×
            </button>

            {/* ============================================== */}
            {/* Enlarged Figure */}
            {/* ============================================== */}

            <img
              src={
                previewUrl
              }
              alt={
                alt
              }
              draggable={
                false
              }
              onClick={(
                event
              ) => {
                event.stopPropagation();
              }}
              style={{
                display:
                  "block",

                maxWidth:
                  "min(92vw, 1400px)",

                maxHeight:
                  "88vh",

                width:
                  "auto",

                height:
                  "auto",

                objectFit:
                  "contain",

                background:
                  "#ffffff",

                boxShadow:
                  "0 24px 80px rgba(0,0,0,0.55)",

                cursor:
                  "default",

                userSelect:
                  "none",
              }}
            />
          </div>
        )}
    </>
  );
}