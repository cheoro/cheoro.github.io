"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  publications,
} from "@/resources/publications";

import styles from "./publications.module.scss";

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
      }, 150);
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
      className={styles.page}
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
          className={
            styles.typeHeader
          }
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
            className={
              styles.controls
            }
          >
            <button
              type="button"
              onClick={
                expandAll
              }
              className={
                styles.controlButton
              }
            >
              Expand All
            </button>

            <button
              type="button"
              onClick={
                collapseAll
              }
              className={
                styles.controlButton
              }
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
                className={
                  styles.yearHeader
                }
                style={{
                  marginBottom:
                    isYearOpen
                      ? "24px"
                      : "0px",
                }}
              >
                <span
                  className={
                    styles.yearText
                  }
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
                  className={
                    styles.publicationCount
                  }
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
                  className={
                    styles.yearDivider
                  }
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
                        className={
                          styles.card
                        }
                      >
                        <div
                          className={
                            styles.cardLayout
                          }
                        >
                          {/* ================================= */}
                          {/* Thumbnail */}
                          {/* ================================= */}

                          {paper.thumbnail && (
                            <div
                              className={
                                styles.thumbnail
                              }
                            >
                              {paper.thumbnail
                                .toLowerCase()
                                .endsWith(
                                  ".pdf"
                                ) ? (
                                <object
                                  data={`${paper.thumbnail}#toolbar=0&navpanes=0&scrollbar=0`}
                                  type="application/pdf"
                                  aria-label={`${paper.title} thumbnail`}
                                  className={
                                    styles.pdfThumbnail
                                  }
                                />
                              ) : (
                                <img
                                  src={
                                    paper.thumbnail
                                  }
                                  alt={`${paper.title} thumbnail`}
                                  className={
                                    styles.thumbnailImage
                                  }
                                />
                              )}
                            </div>
                          )}

                          {/* ================================= */}
                          {/* Publication Information */}
                          {/* ================================= */}

                          <div
                            className={
                              styles.paperInfo
                            }
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
                              className={
                                styles.paperTitle
                              }
                            >
                              {
                                paper.title
                              }
                            </h3>

                            {/* Authors */}

                            <p
                              className={
                                styles.authors
                              }
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
                              className={
                                styles.metadata
                              }
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
                              className={
                                styles.keywords
                              }
                            >
                              {paper.keywords.map(
                                (
                                  keyword
                                ) => (
                                  <span
                                    key={
                                      keyword
                                    }
                                    className={
                                      styles.keyword
                                    }
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
                              className={
                                styles.buttons
                              }
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  setOpenAbstract(
                                    isAbstractOpen
                                      ? null
                                      : paperKey
                                  )
                                }
                                className={
                                  styles.actionButton
                                }
                              >
                                {isAbstractOpen
                                  ? "Hide Abstract"
                                  : "Abstract"}
                              </button>

                              {paper.pdf && (
                                <a
                                  href={
                                    paper.pdf
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                  className={
                                    styles.actionLink
                                  }
                                >
                                  PDF
                                </a>
                              )}

                              {paper.doi && (
                                <a
                                  href={
                                    paper.doi
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                  className={
                                    styles.doiLink
                                  }
                                >
                                  DOI
                                </a>
                              )}

                              {paper.project && (
                                <a
                                  href={
                                    paper.project
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                  className={
                                    styles.actionLink
                                  }
                                >
                                  Project
                                </a>
                              )}

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
                                  className={
                                    styles.actionButton
                                  }
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
                            className={
                              styles.abstract
                            }
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