import React, { ReactNode } from "react";

interface ResumeEntryProps {
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  detail?: ReactNode;
  bullets?: string[];
  children?: ReactNode;
}

const ResumeEntry: React.FC<ResumeEntryProps> = ({
  title,
  subtitle,
  meta,
  detail,
  bullets,
  children,
}) => {
  return (
    <>
      <article className="resume-entry">
        <div className="resume-entry-row">
          <h3>
            {title}
            {subtitle && <span className="resume-entry-subtitle"> · {subtitle}</span>}
          </h3>
          {meta && <span className="resume-entry-meta">{meta}</span>}
        </div>
        {detail && <p className="resume-entry-detail">{detail}</p>}
        {children}
        {!!bullets?.length && (
          <ul>
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </article>
      <style jsx>{`
        .resume-entry {
          break-inside: avoid;
        }

        .resume-entry-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12pt;
        }

        h3 {
          font-family: var(--font-headings);
          font-size: 10.5pt;
          font-weight: 700;
          color: var(--resume-text);
        }

        .resume-entry-subtitle {
          font-family: var(--font-body);
          font-weight: 400;
          color: var(--resume-muted);
        }

        .resume-entry-meta {
          flex-shrink: 0;
          font-family: var(--font-mono);
          font-size: 8.5pt;
          color: var(--resume-muted);
          white-space: nowrap;
        }

        .resume-entry-detail {
          font-style: italic;
          color: var(--resume-text);
        }

        ul {
          margin-top: 3pt;
          padding-left: 12pt;
          list-style: none;
        }

        li {
          position: relative;
          margin-top: 2pt;
        }

        li::before {
          content: "";
          position: absolute;
          left: -9pt;
          top: 0.62em;
          width: 4pt;
          height: 1.2pt;
          background: var(--resume-accent-ink);
        }
      `}</style>
    </>
  );
};

export default ResumeEntry;
