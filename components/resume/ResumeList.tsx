import React from "react";

interface ResumeListItem {
  label: string;
  text: string;
  /** When present, rendered instead of text with each date styled as metadata. */
  entries?: { name: string; date?: string }[];
}

interface ResumeListProps {
  items: ResumeListItem[];
  /** Width of the label column, e.g. "22%". */
  labelWidth?: string;
}

const ResumeList: React.FC<ResumeListProps> = ({ items, labelWidth = "30%" }) => {
  return (
    <>
      <dl className="resume-list">
        {items.map((item) => (
          <div key={item.label} className="resume-list-row">
            <dt>{item.label}</dt>
            <dd>
              {item.entries
                ? item.entries.map((entry, index) => (
                    <React.Fragment key={`${entry.name}-${index}`}>
                      {index > 0 && <span className="resume-list-sep"> · </span>}
                      <span className="resume-list-entry">
                        {entry.name}
                        {entry.date && <span className="resume-list-date">{entry.date}</span>}
                      </span>
                    </React.Fragment>
                  ))
                : item.text}
            </dd>
          </div>
        ))}
      </dl>
      <style jsx>{`
        .resume-list {
          display: flex;
          flex-direction: column;
          /* Enough air that each row reads as its own item. */
          gap: 6pt;
        }

        .resume-list-row {
          display: grid;
          grid-template-columns: ${labelWidth} 1fr;
          gap: 10pt;
          break-inside: avoid;
        }

        dt {
          font-weight: 600;
          color: var(--resume-text);
        }

        dd {
          margin: 0;
        }

        .resume-list-entry {
          white-space: nowrap;
        }

        .resume-list-date {
          margin-left: 4pt;
          font-family: var(--font-mono);
          font-size: 8pt;
          color: var(--resume-muted);
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .resume-list-entry {
            white-space: normal;
          }
        }

        .resume-list-sep {
          color: var(--resume-accent-ink);
        }
      `}</style>
    </>
  );
};

export default ResumeList;
