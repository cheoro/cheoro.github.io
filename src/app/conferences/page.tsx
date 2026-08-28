"use client";

import React, { useState } from "react";

import { conferenceYears } from "@/resources/conferences";

import styles from "./conferences.module.scss";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "14% 22% 20% 24% 20%",
  alignItems: "center",
  width: "100%",
} as const;

export default function ConferencesPage() {
  /* ========================================================= */
  /* Latest Year */
  /* ========================================================= */

  const latestYear =
    conferenceYears.length > 0
      ? Math.max(
          ...conferenceYears.map(
            (yearGroup) => yearGroup.year
          )
        )
      : null;

  /* ========================================================= */
  /* Open Years */
  /* ========================================================= */

  const [openYears, setOpenYears] = useState<Set<number>>(
    () =>
      latestYear !== null
        ? new Set([latestYear])
        : new Set()
  );

  /* ========================================================= */
  /* Toggle Year */
  /* ========================================================= */

  const toggleYear = (year: number) => {
    setOpenYears((current) => {
      const next = new Set(current);

      if (next.has(year)) {
        next.delete(year);
      } else {
        next.add(year);
      }

      return next;
    });
  };

  return (
    <main className={styles.page}>
      {/* ===================================================== */}
      {/* Page Header */}
      {/* ===================================================== */}

      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>
          Conferences
        </h1>

        <p className={styles.pageDescription}>
          Conference schedules and submission deadlines for research planning.
        </p>

        <p className={styles.lastUpdated}>
          Last updated: August 28, 2026
        </p>
      </header>

      {/* ===================================================== */}
      {/* Conference Years */}
      {/* ===================================================== */}

      {[...conferenceYears]
        .sort((a, b) => b.year - a.year)
        .map((yearGroup) => {
          const isOpen = openYears.has(
            yearGroup.year
          );

          return (
            <section
              key={yearGroup.year}
              className={styles.yearSection}
            >
              {/* ============================================= */}
              {/* Year Header */}
              {/* ============================================= */}

              <button
                type="button"
                onClick={() =>
                  toggleYear(yearGroup.year)
                }
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: 0,
                  margin: 0,
                  border: "none",
                  background: "transparent",
                  color: "inherit",
                  font: "inherit",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <span
                  className={styles.year}
                  style={{
                    flexShrink: 0,
                  }}
                >
                  {yearGroup.year}
                </span>

                <span
                  className={styles.count}
                  style={{
                    flexShrink: 0,
                  }}
                >
                  {yearGroup.conferences.length}{" "}
                  {yearGroup.conferences.length === 1
                    ? "Conference"
                    : "Conferences"}
                </span>

                <div
                  className={styles.yearDivider}
                  style={{
                    flex: 1,
                  }}
                />

                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: "20px",
                    textAlign: "center",
                    fontSize: "17px",
                    lineHeight: 1,
                    opacity: 0.5,
                    transform: isOpen
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                    transition:
                      "transform 0.18s ease",
                  }}
                >
                  ›
                </span>
              </button>

              {/* ============================================= */}
              {/* Conference Grid */}
              {/* ============================================= */}

              {isOpen && (
                <div
                  style={{
                    width: "100%",
                    marginTop: "30px",
                  }}
                >
                  {/* ========================================= */}
                  {/* Header */}
                  {/* ========================================= */}

                  <div
                    style={{
                      ...gridStyle,
                      paddingBottom: "14px",
                      borderBottom:
                        "1px solid var(--neutral-alpha-strong)",
                      fontSize: "11px",
                      fontWeight: 650,
                      lineHeight: 1.4,
                      textTransform: "uppercase",
                      letterSpacing: "0.045em",
                      opacity: 0.48,
                    }}
                  >
                    <div
                      style={{
                        paddingRight: "20px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Conference
                    </div>

                    <div
                      style={{
                        paddingLeft: "12px",
                        paddingRight: "20px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Field
                    </div>

                    <div
                      style={{
                        paddingLeft: "12px",
                        paddingRight: "20px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Location
                    </div>

                    <div
                      style={{
                        paddingLeft: "12px",
                        paddingRight: "20px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Submission Deadline
                    </div>

                    <div
                      style={{
                        paddingLeft: "12px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Conference Dates
                    </div>
                  </div>

                  {/* ========================================= */}
                  {/* Rows */}
                  {/* ========================================= */}

                  {yearGroup.conferences.map(
                    (conference) => (
                      <div
                        key={`${yearGroup.year}-${conference.name}`}
                        style={{
                          ...gridStyle,
                          minHeight: "64px",
                          borderBottom:
                            "1px solid var(--neutral-alpha-medium)",
                        }}
                      >
                        {/* =================================== */}
                        {/* Conference */}
                        {/* =================================== */}

                        <div
                          style={{
                            minWidth: 0,
                            padding:
                              "18px 20px 18px 0",
                          }}
                        >
                          <a
                            href={conference.website}
                            target="_blank"
                            rel="noreferrer"
                            title={
                              conference.fullName
                            }
                            style={{
                              display:
                                "inline-flex",
                              alignItems:
                                "center",
                              gap: "6px",
                              color:
                                "var(--brand-on-background-strong)",
                              fontSize: "16px",
                              fontWeight: 700,
                              lineHeight: 1.4,
                              textDecoration:
                                "none",
                              whiteSpace:
                                "nowrap",
                            }}
                            onClick={(event) =>
                              event.stopPropagation()
                            }
                          >
                            {conference.name}

                            <span
                              aria-hidden="true"
                              style={{
                                position:
                                  "relative",
                                top: "-1px",
                                fontSize:
                                  "11px",
                                fontWeight: 500,
                                opacity: 0.58,
                              }}
                            >
                              ↗
                            </span>
                          </a>
                        </div>

                        {/* =================================== */}
                        {/* Field */}
                        {/* =================================== */}

                        <div
                          style={{
                            minWidth: 0,
                            padding:
                              "18px 20px 18px 12px",
                            fontSize: "13px",
                            fontWeight: 500,
                            lineHeight: 1.5,
                            opacity: 0.76,
                          }}
                        >
                          {conference.field}
                        </div>

                        {/* =================================== */}
                        {/* Location */}
                        {/* =================================== */}

                        <div
                          style={{
                            minWidth: 0,
                            padding:
                              "18px 20px 18px 12px",
                            fontSize: "13px",
                            fontWeight: 500,
                            lineHeight: 1.5,
                            opacity:
                              conference.location ===
                              "TBD"
                                ? 0.34
                                : 0.82,
                          }}
                        >
                          {conference.location}
                        </div>

                        {/* =================================== */}
                        {/* Submission Deadline */}
                        {/* =================================== */}

                        <div
                          style={{
                            minWidth: 0,
                            padding:
                              "18px 20px 18px 12px",
                            fontSize: "13px",
                            fontWeight:
                              conference.submissionDeadline ===
                              "TBD"
                                ? 500
                                : 650,
                            lineHeight: 1.5,
                            opacity:
                              conference.submissionDeadline ===
                              "TBD"
                                ? 0.34
                                : 1,
                            color:
                              conference.submissionDeadline ===
                              "TBD"
                                ? undefined
                                : "var(--brand-on-background-strong)",
                          }}
                        >
                          {
                            conference.submissionDeadline
                          }
                        </div>

                        {/* =================================== */}
                        {/* Conference Dates */}
                        {/* =================================== */}

                        <div
                          style={{
                            minWidth: 0,
                            padding:
                              "18px 0 18px 12px",
                            fontSize: "13px",
                            fontWeight: 500,
                            lineHeight: 1.5,
                            opacity:
                              conference.conferenceDates ===
                              "TBD"
                                ? 0.34
                                : 0.82,
                          }}
                        >
                          {
                            conference.conferenceDates
                          }
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </section>
          );
        })}
    </main>
  );
}