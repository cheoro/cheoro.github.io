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

  useEffect(() => {
    let cancelled = false;
    let resizeObserver:
      ResizeObserver | null = null;

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
            canvas.getContext("2d", {
              alpha: false,
            });

          if (!context) {
            return;
          }

          /*
           * 실제 화면에서 사용 가능한 폭.
           *
           * publication card에서는 대략 220px 정도지만
           * resize에도 자동 대응한다.
           */
          const cssWidth =
            Math.max(
              container.clientWidth,
              1
            );

          /*
           * PDF 원본 크기.
           */
          const baseViewport =
            page.getViewport({
              scale: 1,
            });

          /*
           * 핵심:
           *
           * 화면 표시 크기의 4배 해상도로 렌더링.
           *
           * 예:
           * 실제 표시 = 220px
           * 내부 canvas = 약 880px
           *
           * 따라서 작은 글씨와 선이 훨씬 선명해짐.
           */
          const qualityScale = 4;

          const renderWidth =
            cssWidth *
            qualityScale;

          const pdfScale =
            renderWidth /
            baseViewport.width;

          const viewport =
            page.getViewport({
              scale: pdfScale,
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

          /*
           * 브라우저에 실제 보여주는 크기는
           * 원래 container 폭으로 유지.
           */
          const cssHeight =
            cssWidth *
            (baseViewport.height /
              baseViewport.width);

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
          /* Render PDF */
          /* ================================================== */

          await page.render({
            canvasContext:
              context,
            viewport,
            canvas,
          }).promise;

          if (
            !cancelled
          ) {
            setLoading(false);
          }
        };

        /*
         * 최초 렌더링
         */
        await drawPage();

        /*
         * 브라우저 크기가 변경되어도
         * 현재 표시 폭에 맞춰 다시 렌더링.
         */
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

        if (!cancelled) {
          setLoading(false);
          setError(true);
        }
      }
    };

    renderPdf();

    return () => {
      cancelled = true;

      if (
        resizeObserver
      ) {
        resizeObserver.disconnect();
      }
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      aria-label={alt}
      style={{
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        position: "relative",

        overflow: "hidden",
      }}
    >
      {/* ===================================================== */}
      {/* Loading */}
      {/* ===================================================== */}

      {loading && (
        <div
          style={{
            width: "100%",
            minHeight: "120px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: "12px",
            opacity: 0.45,
          }}
        >
          Loading preview...
        </div>
      )}

      {/* ===================================================== */}
      {/* Error */}
      {/* ===================================================== */}

      {error && (
        <div
          style={{
            width: "100%",
            minHeight: "120px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: "12px",
            opacity: 0.45,
          }}
        >
          Preview unavailable
        </div>
      )}

      {/* ===================================================== */}
      {/* Canvas */}
      {/* ===================================================== */}

      <canvas
        ref={canvasRef}
        aria-label={alt}
        style={{
          display:
            loading || error
              ? "none"
              : "block",

          maxWidth: "100%",

          /*
           * canvas 자체에서 정확한 aspect ratio를
           * 계산해서 width/height를 넣으므로
           * 여기서는 강제로 stretch하지 않는다.
           */
          objectFit: "contain",

          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </div>
  );
}