export default function CVPage() {
  return (
    <main
      style={{
        width: "min(100% - 32px, 1200px)",
        margin: "0 auto",
        padding: "110px 0 60px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          marginBottom: "24px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "40px",
              margin: 0,
            }}
          >
            Curriculum Vitae (CV)
          </h1>

          <p
            style={{
              marginTop: "8px",
              opacity: 0.65,
            }}
          >
            Curriculum Vitae of Cheol-Ho Choi
          </p>
        </div>

        <a
          href="/cv/Cheol-Ho_Choi_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open CV PDF"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 14px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "10px",
            color: "#30b3ff",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          <span
            style={{
              fontSize: "24px",
              lineHeight: 1,
            }}
          >
            📄
          </span>

          PDF
        </a>
      </div>

      {/* PDF Viewer */}
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 210px)",
          minHeight: "760px",
          border: "1px solid rgba(255,255,255,0.16)",
          borderRadius: "12px",
          overflow: "hidden",
          background: "#fff",
        }}
      >
        <object
            data="/cv/CV_C.Choi_240907.pdf#view=FitH"
            type="application/pdf"
            width="100%"
            height="100%"
            >
            <p>
                PDF preview is unavailable.{" "}
                <a href="/cv/Cheol-Ho_Choi_CV.pdf" target="_blank">
                Open the CV
                </a>
            </p>
            </object>
      </div>
    </main>
  );
}