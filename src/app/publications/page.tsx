"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  publications,
} from "@/resources/publications";

const statusMap = {
  accepted: "🟢 Accepted",
  under_review: "🟡 Under Review",
  major_revision: "🟠 Major Revision",
  published: "🔵 Published",
};

export default function PublicationsPage() {
  const [
    openAbstract,
    setOpenAbstract,
  ] = useState<string | null>(null);

  const [
    copiedBibtex,
    setCopiedBibtex,
  ] = useState<string | null>(null);

  /* ========================================================= */
  /* Years */
  /* ========================================================= */

  const years = [
    ...new Set(
      publications.map(
        (paper) => paper.year
      )
    ),
  ].sort(
    (a, b) => b - a
  );

  /* ========================================================= */
  /* Open Years */
  /* ========================================================= */

  const [
    openYears,
    setOpenYears,
  ] = useState<number[]>(
    years.length > 0
      ? [years[0]]
      : []
  );

  /* ========================================================= */
  /* Anchor Navigation */
  /* ========================================================= */

  useEffect(() => {
    const openHashTarget = () => {
      const hash =
        decodeURIComponent(
          window.location.hash.replace(
            "#",
            ""
          )
        );

      if (!hash) {
        return;
      }

      const targetPaper =
        publications.find(
          (paper) =>
            paper.anchor === hash
        );

      if (!targetPaper) {
        return;
      }

      setOpenYears((prev) => {
        if (
          prev.includes(
            targetPaper.year
          )
        ) {
          return prev;
        }

        return [
          ...prev,
          targetPaper.year,
        ];
      });

      window.setTimeout(() => {
        const element =
          document.getElementById(
            hash
          );

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 120);
    };

    openHashTarget();

    window.addEventListener(
      "hashchange",
      openHashTarget
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        openHashTarget
      );
    };
  }, []);

  /* ========================================================= */
  /* Year Controls */
  /* ========================================================= */

  const toggleYear = (
    year: number
  ) => {
    setOpenYears((prev) =>
      prev.includes(year)
        ? prev.filter(
            (item) =>
              item !== year
          )
        : [
            ...prev,
            year,
          ]
    );
  };

  const expandAll = () => {
    setOpenYears(years);
  };

  const collapseAll = () => {
    setOpenYears([]);
  };

  return (
    <main
      style={{
        width:
          "min(100% - 40px, 1000px)",
        margin:
          "0 auto",
        padding:
          "120px 0 80px",
      }}
    >
      {/* ===================================================== */}
      {/* Page Title */}
      {/* ===================================================== */}

      <header
        style={{
          marginBottom:
            "50px",
        }}
      >
        <h1
          style={{
            fontSize:
              "40px",
            marginBottom:
              "12px",
          }}
        >
          Publications
        </h1>

        <p
          style={{
            fontSize:
              "16px",
            opacity:
              0.7,
          }}
        >
          Peer-reviewed journal and conference publications.
        </p>
      </header>

      {/* ===================================================== */}
      {/* Types + Controls */}
      {/* ===================================================== */}

      <section
        style={{
          marginBottom:
            "48px",
          paddingBottom:
            "30px",
          borderBottom:
            "1px solid var(--neutral-alpha-medium)",
        }}
      >
        <div
          style={{
            display:
              "flex",
            justifyContent:
              "space-between",
            alignItems:
              "flex-start",
            gap:
              "20px",
          }}
        >
          {/* Types */}

          <div>
            <h2
              style={{
                fontSize:
                  "20px",
                marginTop:
                  0,
                marginBottom:
                  "16px",
              }}
            >
              Types
            </h2>

            <div
              style={{
                display:
                  "flex",
                gap:
                  "12px",
                flexWrap:
                  "wrap",
              }}
            >
              <span
                style={{
                  padding:
                    "7px 13px",
                  borderRadius:
                    "6px",
                  background:
                    "#8B5CF6",
                  color:
                    "white",
                  fontSize:
                    "14px",
                  fontWeight:
                    700,
                }}
              >
                Conference
              </span>

              <span
                style={{
                  padding:
                    "7px 13px",
                  borderRadius:
                    "6px",
                  background:
                    "#0EA5E9",
                  color:
                    "white",
                  fontSize:
                    "14px",
                  fontWeight:
                    700,
                }}
              >
                Journal
              </span>
            </div>
          </div>

          {/* Expand / Collapse */}

          <div
            style={{
              display:
                "flex",
              gap:
                "8px",
              paddingTop:
                "2px",
              flexWrap:
                "wrap",
              justifyContent:
                "flex-end",
            }}
          >
            <button
              type="button"
              onClick={
                expandAll
              }
              style={{
                padding:
                  "7px 12px",
                border:
                  "1px solid var(--neutral-alpha-medium)",
                borderRadius:
                  "6px",
                background:
                  "transparent",
                color:
                  "inherit",
                fontSize:
                  "13px",
                fontWeight:
                  500,
                cursor:
                  "pointer",
              }}
            >
              Expand All
            </button>

            <button
              type="button"
              onClick={
                collapseAll
              }
              style={{
                padding:
                  "7px 12px",
                border:
                  "1px solid var(--neutral-alpha-medium)",
                borderRadius:
                  "6px",
                background:
                  "transparent",
                color:
                  "inherit",
                fontSize:
                  "13px",
                fontWeight:
                  500,
                cursor:
                  "pointer",
              }}
            >
              Collapse All
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* Publications */}
      {/* ===================================================== */}

      {years.map(
        (year) => {
          const papersForYear =
            publications
              .filter(
                (paper) =>
                  paper.year ===
                  year
              )
              .sort(
                (a, b) =>
                  (b.monthNumber ??
                    0) -
                  (a.monthNumber ??
                    0)
              );

          const isYearOpen =
            openYears.includes(
              year
            );

          return (
            <section
              key={year}
              style={{
                marginBottom:
                  isYearOpen
                    ? "54px"
                    : "30px",
              }}
            >
              {/* ============================================= */}
              {/* Year Header */}
              {/* ============================================= */}

              <button
                type="button"
                onClick={() =>
                  toggleYear(
                    year
                  )
                }
                style={{
                  width:
                    "100%",
                  display:
                    "flex",
                  alignItems:
                    "center",
                  gap:
                    "12px",
                  marginBottom:
                    isYearOpen
                      ? "24px"
                      : "0px",
                  padding:
                    0,
                  border:
                    "none",
                  background:
                    "transparent",
                  color:
                    "inherit",
                  cursor:
                    "pointer",
                  textAlign:
                    "left",
                }}
              >
                <span
                  style={{
                    fontSize:
                      "30px",
                    fontWeight:
                      600,
                    lineHeight:
                      1,
                    whiteSpace:
                      "nowrap",
                  }}
                >
                  {year}
                </span>

                <span
                  style={{
                    fontSize:
                      "14px",
                    opacity:
                      0.6,
                    lineHeight:
                      1,
                    transform:
                      isYearOpen
                        ? "rotate(0deg)"
                        : "rotate(-90deg)",
                    transition:
                      "transform 0.2s ease",
                  }}
                >
                  ▼
                </span>

                <span
                  style={{
                    fontSize:
                      "18px",
                    fontWeight:
                      400,
                    opacity:
                      0.6,
                    whiteSpace:
                      "nowrap",
                  }}
                >
                  {
                    papersForYear.length
                  }{" "}
                  Publication
                  {papersForYear.length >
                  1
                    ? "s"
                    : ""}
                </span>

                <div
                  style={{
                    flex:
                      1,
                    height:
                      "1px",
                    background:
                      "var(--neutral-alpha-medium)",
                    marginLeft:
                      "6px",
                  }}
                />
              </button>

              {/* ============================================= */}
              {/* Cards */}
              {/* ============================================= */}

              {isYearOpen &&
                papersForYear.map(
                  (paper) => {
                    const paperKey =
                      `${paper.year}-${paper.venue}-${paper.title}`;

                    const typeColor =
                      paper.type ===
                      "conference"
                        ? "#8B5CF6"
                        : "#0EA5E9";

                    const isAbstractOpen =
                      openAbstract ===
                      paperKey;

                    const isBibtexCopied =
                      copiedBibtex ===
                      paperKey;

                    return (
                      <article
                        key={
                          paperKey
                        }
                        id={
                          paper.anchor
                        }
                        style={{
                          scrollMarginTop:
                            "110px",
                          position:
                            "relative",
                          border:
                            "1px solid var(--neutral-alpha-medium)",
                          borderRadius:
                            "18px",
                          padding:
                            "24px",
                          marginBottom:
                            "20px",
                          background:
                            "var(--neutral-alpha-weak)",
                        }}
                      >
                        {/* =================================== */}
                        {/* Main Card Layout */}
                        {/* =================================== */}

                        <div
                          style={{
                            display:
                              "flex",
                            gap:
                              "24px",
                            alignItems:
                              "flex-start",
                          }}
                        >
                          {/* Thumbnail */}

                          {paper.thumbnail && (
                            <div
                              style={{
                                width:
                                  "220px",
                                minWidth:
                                  "220px",
                                display:
                                  "flex",
                                alignItems:
                                  "center",
                                justifyContent:
                                  "center",
                                padding:
                                  "8px",
                              }}
                            >
                              <img
                                src={
                                  paper.thumbnail
                                }
                                alt={`${paper.title} thumbnail`}
                                style={{
                                  width:
                                    "100%",
                                  height:
                                    "auto",
                                  maxHeight:
                                    "180px",
                                  objectFit:
                                    "contain",
                                  display:
                                    "block",
                                }}
                              />
                            </div>
                          )}

                          {/* ================================= */}
                          {/* Publication Information */}
                          {/* ================================= */}

                          <div
                            style={{
                              flex:
                                1,
                              minWidth:
                                0,
                            }}
                          >
                            {/* Venue / Status */}

                            <div
                              style={{
                                display:
                                  "flex",
                                alignItems:
                                  "center",
                                gap:
                                  "10px",
                                marginBottom:
                                  "16px",
                                flexWrap:
                                  "wrap",
                              }}
                            >
                              <span
                                style={{
                                  padding:
                                    "6px 12px",
                                  borderRadius:
                                    "6px",
                                  background:
                                    typeColor,
                                  color:
                                    "white",
                                  fontSize:
                                    "14px",
                                  fontWeight:
                                    700,
                                }}
                              >
                                {
                                  paper.venue
                                }
                              </span>

                              {paper.status !==
                                "published" && (
                                <span
                                  style={{
                                    fontSize:
                                      "13px",
                                    opacity:
                                      0.68,
                                  }}
                                >
                                  {
                                    statusMap[
                                      paper
                                        .status
                                    ]
                                  }
                                </span>
                              )}
                            </div>

                            {/* Title */}

                            <h3
                              style={{
                                fontSize:
                                  "22px",
                                lineHeight:
                                  1.4,
                                marginTop:
                                  0,
                                marginBottom:
                                  "12px",
                              }}
                            >
                              {
                                paper.title
                              }
                            </h3>

                            {/* Authors */}

                            <p
                              style={{
                                fontSize:
                                  "17px",
                                lineHeight:
                                  1.6,
                                marginTop:
                                  0,
                                marginBottom:
                                  "6px",
                              }}
                            >
                              {paper.authors
                                .split(
                                  "Cheol-Ho Choi"
                                )
                                .map(
                                  (
                                    part,
                                    idx,
                                    arr
                                  ) => (
                                    <span
                                      key={
                                        idx
                                      }
                                    >
                                      {
                                        part
                                      }

                                      {idx <
                                        arr.length -
                                          1 && (
                                        <strong
                                          style={{
                                            fontWeight:
                                              700,
                                            textDecoration:
                                              "underline",
                                            textDecorationColor:
                                              "#60A5FA",
                                            textDecorationThickness:
                                              "2px",
                                            textUnderlineOffset:
                                              "4px",
                                          }}
                                        >
                                          Cheol-Ho
                                          Choi
                                        </strong>
                                      )}
                                    </span>
                                  )
                                )}
                            </p>

                            {/* Publisher */}

                            <p
                              style={{
                                lineHeight:
                                  1.6,
                                marginTop:
                                  0,
                                marginBottom:
                                  "6px",
                                opacity:
                                  0.7,
                              }}
                            >
                              <em>
                                {
                                  paper.publisher
                                }
                              </em>
                            </p>

                            {/* Metadata */}

                            <p
                              style={{
                                fontSize:
                                  "15px",
                                opacity:
                                  0.6,
                                marginTop:
                                  "4px",
                                marginBottom:
                                  "20px",
                              }}
                            >
                              {paper.type ===
                              "conference" ? (
                                <>
                                  {paper.city &&
                                  paper.country
                                    ? `${paper.city}, ${paper.country}`
                                    : null}

                                  {paper.month && (
                                    <>
                                      {
                                        " · "
                                      }
                                      {
                                        paper.month
                                      }
                                    </>
                                  )}

                                  {paper.pages && (
                                    <>
                                      {
                                        " · pp. "
                                      }
                                      {
                                        paper.pages
                                      }
                                    </>
                                  )}

                                  {paper.acceptanceRate && (
                                    <>
                                      {" "}
                                      (Acceptance
                                      rate:{" "}
                                      {
                                        paper.acceptanceRate
                                      }
                                      )
                                    </>
                                  )}
                                </>
                              ) : (
                                <>
                                  {paper.volume &&
                                    `Vol. ${paper.volume}`}

                                  {paper.number &&
                                    `, No. ${paper.number}`}

                                  {paper.month &&
                                    ` · ${paper.month}`}

                                  {paper.pages &&
                                    ` · pp. ${paper.pages}`}
                                </>
                              )}
                            </p>

                            {/* Keywords */}

                            <div
                              style={{
                                display:
                                  "flex",
                                gap:
                                  "9px",
                                flexWrap:
                                  "wrap",
                                marginBottom:
                                  "22px",
                              }}
                            >
                              {paper.keywords.map(
                                (
                                  keyword
                                ) => (
                                  <span
                                    key={
                                      keyword
                                    }
                                    style={{
                                      padding:
                                        "5px 10px",
                                      border:
                                        "1px solid var(--neutral-alpha-medium)",
                                      borderRadius:
                                        "999px",
                                      fontSize:
                                        "14px",
                                      opacity:
                                        0.85,
                                    }}
                                  >
                                    {
                                      keyword
                                    }
                                  </span>
                                )
                              )}
                            </div>

                            {/* Buttons */}

                            <div
                              style={{
                                display:
                                  "flex",
                                gap:
                                  "10px",
                                flexWrap:
                                  "wrap",
                              }}
                            >
                              {/* Abstract */}

                              <button
                                type="button"
                                onClick={() =>
                                  setOpenAbstract(
                                    isAbstractOpen
                                      ? null
                                      : paperKey
                                  )
                                }
                                style={{
                                  padding:
                                    "8px 14px",
                                  border:
                                    "1px solid var(--neutral-alpha-strong)",
                                  borderRadius:
                                    "6px",
                                  background:
                                    "transparent",
                                  color:
                                    "inherit",
                                  fontSize:
                                    "14px",
                                  fontWeight:
                                    600,
                                  cursor:
                                    "pointer",
                                }}
                              >
                                {isAbstractOpen
                                  ? "Hide Abstract"
                                  : "Abstract"}
                              </button>

                              {/* PDF */}

                              {paper.pdf && (
                                <a
                                  href={
                                    paper.pdf
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{
                                    padding:
                                      "8px 14px",
                                    border:
                                      "1px solid var(--neutral-alpha-strong)",
                                    borderRadius:
                                      "6px",
                                    color:
                                      "inherit",
                                    textDecoration:
                                      "none",
                                    fontSize:
                                      "14px",
                                    fontWeight:
                                      600,
                                  }}
                                >
                                  PDF
                                </a>
                              )}

                              {/* DOI */}

                              {paper.doi && (
                                <a
                                  href={
                                    paper.doi
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{
                                    padding:
                                      "8px 14px",
                                    border:
                                      "1px solid var(--brand-alpha-strong)",
                                    borderRadius:
                                      "6px",
                                    color:
                                      "var(--brand-on-background-strong)",
                                    textDecoration:
                                      "none",
                                    fontSize:
                                      "15px",
                                    fontWeight:
                                      600,
                                  }}
                                >
                                  DOI
                                </a>
                              )}

                              {/* Project */}

                              {paper.project && (
                                <a
                                  href={
                                    paper.project
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{
                                    padding:
                                      "8px 14px",
                                    border:
                                      "1px solid var(--neutral-alpha-strong)",
                                    borderRadius:
                                      "6px",
                                    color:
                                      "inherit",
                                    textDecoration:
                                      "none",
                                    fontSize:
                                      "14px",
                                    fontWeight:
                                      600,
                                  }}
                                >
                                  Project
                                </a>
                              )}

                              {/* BibTeX */}

                              {paper.bibtex && (
                                <button
                                  type="button"
                                  onClick={async () => {
                                    await navigator.clipboard.writeText(
                                      paper.bibtex!
                                    );

                                    setCopiedBibtex(
                                      paperKey
                                    );

                                    window.setTimeout(
                                      () => {
                                        setCopiedBibtex(
                                          null
                                        );
                                      },
                                      2000
                                    );
                                  }}
                                  style={{
                                    padding:
                                      "8px 14px",
                                    border:
                                      "1px solid var(--neutral-alpha-strong)",
                                    borderRadius:
                                      "6px",
                                    background:
                                      "transparent",
                                    color:
                                      "inherit",
                                    fontSize:
                                      "14px",
                                    fontWeight:
                                      600,
                                    cursor:
                                      "pointer",
                                  }}
                                >
                                  {isBibtexCopied
                                    ? "Copied!"
                                    : "Copy BibTeX"}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* =================================== */}
                        {/* Abstract */}
                        {/* =================================== */}

                        {isAbstractOpen && (
                          <div
                            style={{
                              marginTop:
                                "20px",
                              padding:
                                "18px",
                              border:
                                "1px dashed var(--neutral-alpha-strong)",
                              borderRadius:
                                "10px",
                              background:
                                "var(--neutral-alpha-weak)",
                              fontSize:
                                "15px",
                              lineHeight:
                                1.75,
                              textAlign:
                                "justify",
                            }}
                          >
                            <strong
                              style={{
                                display:
                                  "block",
                                marginBottom:
                                  "8px",
                              }}
                            >
                              Abstract
                            </strong>

                            {
                              paper.abstract
                            }
                          </div>
                        )}
                      </article>
                    );
                  }
                )}
            </section>
          );
        }
      )}
    </main>
  );
}