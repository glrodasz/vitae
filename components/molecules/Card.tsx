import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

interface CardProps {
  title: string;
  subtitle: string;
  items: string[];
}

const Card: React.FC<CardProps> = ({ title, subtitle, items }) => {
  return (
    <>
      <div className="card">
        <header>
          <Heading size="xs">{title}</Heading>
          <Paragraph color="secondary" isMarginless>{subtitle}</Paragraph>
        </header>
        <hr className="card-rule" />
        <div className="card-items">
        {items.map((item) => (
          <Paragraph key={item} size="sm" color="secondary" isMarginless>{item}</Paragraph>
        ))}
        </div>
      </div>
      <style jsx>{`
        .card {
          background: var(--surface);
          border-top: 3px solid var(--golden-yellow);
          padding: 28px 32px;
          margin: 15px 0;
          width: 100%;
        }

        .card header :global(.paragraph) {
          font-family: var(--font-mono);
          font-size: 1.2rem;
          color: var(--heading-secondary);
        }

        .card-rule {
          margin: 14px 0;
          border: 0;
          height: 1px;
          background: var(--border);
        }

        .card-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .card .card-items :global(.paragraph) {
          color: var(--paragraph-primary);
        }
      `}</style>
    </>
  );
};

export default Card;
