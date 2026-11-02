import React, { ReactNode } from "react";

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children }) => {
  return (
    <>
      <section className="resume-section">
        <h2>{title}</h2>
        <div className="resume-section-body">{children}</div>
      </section>
      <style jsx>{`
        .resume-section {
          margin-top: 14pt;
        }

        h2 {
          font-family: var(--font-headings);
          font-size: 10.5pt;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--resume-text);
          padding-bottom: 3pt;
          margin-bottom: 7pt;
          border-bottom: 1.5pt solid var(--resume-accent);
          break-after: avoid;
        }

        .resume-section-body {
          display: flex;
          flex-direction: column;
          gap: 8pt;
        }
      `}</style>
    </>
  );
};

export default ResumeSection;
