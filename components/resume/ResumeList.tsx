import React from "react";

interface ResumeListItem {
  label: string;
  text: string;
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
            <dd>{item.text}</dd>
          </div>
        ))}
      </dl>
      <style jsx>{`
        .resume-list {
          display: flex;
          flex-direction: column;
          gap: 3pt;
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
      `}</style>
    </>
  );
};

export default ResumeList;
