"use client";

import { useState } from "react";
import { publications } from "@/resources/publications";

const statusMap = {
  accepted: "🟢 Accepted",
  under_review: "🟡 Under Review",
  major_revision: "🟠 Major Revision",
  published: "🔵 Published",
};

export default function PublicationsPage() {
  const [openAbstract, setOpenAbstract] = useState<string | null>(null);
  const [copiedBibtex, setCopiedBibtex] = useState<string | null>(null);

  // 등록된 논문의 연도를 최신순으로 추출
  const years = [...new Set(publications.map((paper) => paper.year))].sort(
    (a, b) => b - a
  );

  return (
    <main
      style={{
        width: "min(100% - 40px, 1000px)",
        margin: "0 auto",
        padding: "120px 0 80px",
      }}
    >
      {/* Page title */}
      <header
        style={{
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "12px",
          }}
        >
          Publications
        </h1>

        <p
          style={{
            fontSize: "16px",
            opacity: 0.7,
          }}
        >
          Peer-reviewed journal and conference publications.
        </p>
      </header>

      {/* Publication type legend */}
      <section
        style={{
          marginBottom: "48px",
          paddingBottom: "30px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            marginBottom: "16px",
          }}
        >
          Types
        </h2>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              padding: "7px 13px",
              borderRadius: "6px",
              background: "#8B5CF6",
              color: "white",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Int&apos;l Conference
          </span>

          <span
            style={{
              padding: "7px 13px",
              borderRadius: "6px",
              background: "#0EA5E9",
              color: "white",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Int&apos;l Journal
          </span>
        </div>
      </section>

      {/* Publications grouped by year */}
      {years.map((year) => {
        const papersForYear = publications
        .filter((paper) => paper.year === year)
        .sort((a, b) => (b.monthNumber ?? 0) - (a.monthNumber ?? 0));

        return (
          <section
            key={year}
            style={{
              marginBottom: "54px",
            }}
          >
            {/* Year header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                marginBottom: "24px",
              }}
            >
              <h2
                style={{
                    margin: 0,
                    fontSize: "30px",
                    fontWeight: 600,
                }}
                >
                {year}

                <span
                    style={{
                    fontSize: "20px",
                    fontWeight: 400,
                    opacity: 0.6,
                    marginLeft: "12px",
                    }}
                >
                    {papersForYear.length} Publication
                    {papersForYear.length > 1 ? "s" : ""}
                </span>
              </h2>

              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "rgba(255, 255, 255, 0.16)",
                }}
              />
            </div>

            {/* Cards for this year */}
            {papersForYear.map((paper) => {
              const paperKey = `${paper.year}-${paper.venue}-${paper.title}`;

              const typeColor =
                paper.type === "conference" ? "#8B5CF6" : "#0EA5E9";

              const isAbstractOpen = openAbstract === paperKey;
              const isBibtexCopied = copiedBibtex === paperKey;

              return (
                <article
                  key={paperKey}
                  style={{
                    position: "relative",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    borderRadius: "18px",
                    padding: "24px",
                    marginBottom: "20px",
                    background: "rgba(255, 255, 255, 0.02)",
                  }}
                >
                  {/* Venue and status */}
                    <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "16px",
                        flexWrap: "wrap",
                    }}
                    >
                    <span
                        style={{
                        padding: "6px 12px",
                        borderRadius: "6px",
                        background: typeColor,
                        color: "white",
                        fontSize: "14px",
                        fontWeight: 700,
                        }}
                    >
                        {paper.venue}
                    </span>

                    <span
                        style={{
                        fontSize: "13px",
                        opacity: 0.68,
                        }}
                    >
                        {statusMap[paper.status]}
                    </span>
                    </div>

                  {/* Paper title */}
                  <h3
                    style={{
                      fontSize: "22px",
                      lineHeight: 1.4,
                      marginBottom: "12px",
                    }}
                  >
                    {paper.title}
                  </h3>

                  {/* Authors */}
                    <p
                    style={{
                        fontSize: "17px",
                        lineHeight: 1.6,
                        marginBottom: "6px",
                    }}
                    >
                    {paper.authors.split("Cheol-Ho Choi").map((part, idx, arr) => (
                        <span key={idx}>
                        {part}

                        {idx < arr.length - 1 && (
                            <strong
                            style={{
                                fontWeight: 700,
                                textDecoration: "underline",
                                textDecorationColor: "#60A5FA",
                                textDecorationThickness: "2px",
                                textUnderlineOffset: "4px",
                            }}
                            >
                            Cheol-Ho Choi
                            </strong>
                        )}
                        </span>
                    ))}
                    </p>

                  {/* Publisher */}
                  <p
                    style={{
                      lineHeight: 1.6,
                      marginBottom: "6px",
                      opacity: 0.7,
                    }}
                  >
                    <em>{paper.publisher}</em>
                  </p>
                  <p
                    style={{
                        fontSize: "15px",
                        opacity: 0.6,
                        marginTop: "4px",
                        marginBottom: "20px",
                    }}
                    >
                    {paper.type === "conference" ? (
                        <>
                        {paper.city && paper.country
                            ? `${paper.city}, ${paper.country}`
                            : null}

                        {paper.month && (
                            <>
                            {" · "}
                            {paper.month}
                            </>
                        )}

                        {paper.pages && (
                            <>
                            {" · pp. "}
                            {paper.pages}
                            </>
                        )}

                        {paper.acceptanceRate && (
                            <>
                            {" "}
                            (Acceptance rate: {paper.acceptanceRate})
                            </>
                        )}
                        </>
                    ) : (
                        <>
                        {paper.volume && `Vol. ${paper.volume}`}
                        {paper.number && `, No. ${paper.number}`}
                        {paper.month && ` · ${paper.month}`}
                        {paper.pages && ` · pp. ${paper.pages}`}
                        </>
                    )}
                    </p>

                  {/* Keywords */}
                  <div
                    style={{
                      display: "flex",
                      gap: "9px",
                      flexWrap: "wrap",
                      marginBottom: "22px",
                    }}
                  >
                    {paper.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        style={{
                          padding: "5px 10px",
                          border:
                            "1px solid rgba(255, 255, 255, 0.22)",
                          borderRadius: "999px",
                          fontSize: "14px",
                          opacity: 0.85,
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* Abstract */}
                    <button
                      type="button"
                      onClick={() =>
                        setOpenAbstract(
                          isAbstractOpen ? null : paperKey
                        )
                      }
                      style={{
                        padding: "8px 14px",
                        border:
                          "1px solid rgba(255, 255, 255, 0.6)",
                        borderRadius: "6px",
                        background: "transparent",
                        color: "inherit",
                        fontSize: "14px",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {isAbstractOpen
                        ? "Hide Abstract"
                        : "Abstract"}
                    </button>

                    {/* PDF */}
                    {paper.pdf && (
                      <a
                        href={paper.pdf}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          padding: "8px 14px",
                          border:
                            "1px solid rgba(255, 255, 255, 0.6)",
                          borderRadius: "6px",
                          color: "inherit",
                          textDecoration: "none",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        PDF
                      </a>
                    )}

                    {/* Publisher page */}
                    {paper.doi && (
                    <a
                        href={paper.doi}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                        padding: "8px 14px",
                        border: "1px solid #0788bd",
                        borderRadius: "6px",
                        color: "#30b3ff",
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: 600,
                        }}
                    >
                        DOI
                    </a>
                    )}

                    {/* Project */}
                    {paper.project && (
                      <a
                        href={paper.project}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          padding: "8px 14px",
                          border:
                            "1px solid rgba(255, 255, 255, 0.6)",
                          borderRadius: "6px",
                          color: "inherit",
                          textDecoration: "none",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        Project
                      </a>
                    )}

                    {/* Copy BibTeX */}
                    {paper.bibtex && (
                      <button
                        type="button"
                        onClick={async () => {
                          await navigator.clipboard.writeText(
                            paper.bibtex!
                          );

                          setCopiedBibtex(paperKey);

                          window.setTimeout(() => {
                            setCopiedBibtex(null);
                          }, 2000);
                        }}
                        style={{
                          padding: "8px 14px",
                          border:
                            "1px solid rgba(255, 255, 255, 0.6)",
                          borderRadius: "6px",
                          background: "transparent",
                          color: "inherit",
                          fontSize: "14px",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        {isBibtexCopied
                          ? "Copied!"
                          : "Copy BibTeX"}
                      </button>
                    )}
                  </div>

                  {/* Expandable abstract */}
                  {isAbstractOpen && (
                    <div
                      style={{
                        marginTop: "20px",
                        padding: "18px",
                        border:
                          "1px dashed rgba(255, 255, 255, 0.5)",
                        borderRadius: "10px",
                        background:
                          "rgba(255, 255, 255, 0.025)",
                        fontSize: "15px",
                        lineHeight: 1.75,
                        textAlign: "justify",
                      }}
                    >
                      <strong
                        style={{
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        Abstract
                      </strong>

                      {paper.abstract}
                    </div>
                  )}
                </article>
              );
            })}
          </section>
        );
      })}
    </main>
  );
}