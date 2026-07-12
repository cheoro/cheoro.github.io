"use client";

import { useState } from "react";
import type { Publication } from "@/resources/publications";

type Props = {
  paper: Publication;
};

export default function PublicationCard({ paper }: Props) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  const typeLabel =
    paper.type === "conference" ? "Int'l Conference" : "Int'l Journal";

  return (
    <article className={`publication-card ${paper.type}`}>
      <div className="publication-side">
        <span className={`type-badge ${paper.type}`}>
          {typeLabel}
        </span>

        <span className={`venue-badge ${paper.type}`}>
          {paper.shortVenue}
        </span>
      </div>

      <div className="publication-main">
        <h2>{paper.title}</h2>

        <p className="publication-authors">{paper.authors}</p>

        <p className="publication-venue">
          <em>{paper.publication}</em>
          {paper.location ? `, ${paper.location}` : ""}
          {paper.pages ? `, ${paper.pages}` : ""}
        </p>

        {paper.status && (
          <p className="publication-status">{paper.status}</p>
        )}

        <div className="publication-actions">
          <button onClick={() => setShowAbstract(!showAbstract)}>
            {showAbstract ? "Hide Abstract" : "Abstract"}
          </button>

          {paper.bibtex && (
            <button onClick={() => setShowBibtex(!showBibtex)}>
              {showBibtex ? "Hide BibTeX" : "BibTeX"}
            </button>
          )}

          {paper.pdf && (
            <a href={paper.pdf} target="_blank" rel="noreferrer">
              PDF
            </a>
          )}

          {paper.html && (
            <a href={paper.html} target="_blank" rel="noreferrer">
              HTML
            </a>
          )}
        </div>

        {showAbstract && (
          <div className="publication-abstract">
            {paper.abstract}
          </div>
        )}

        {showBibtex && paper.bibtex && (
          <pre className="publication-bibtex">
            <code>{paper.bibtex}</code>
          </pre>
        )}
      </div>

      <div className="publication-year">{paper.year}</div>
    </article>
  );
}