import React from "react";
import classNames from "classnames";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

interface CardProps {
  title: string;
  subtitle: string;
  items: string[];
  isInverted?: boolean;
}

const Card: React.FC<CardProps> = ({ title, subtitle, items, isInverted }) => {
  return (
    <>
      <div
        className={classNames("card", {
          "card--inverted": isInverted,
        })}
      >
        <header>
          <Heading size="xs" freezeColor>{title}</Heading>
          <Paragraph color="secondary" isMarginless>{subtitle}</Paragraph>
        </header>
        <hr
          style={{
            margin: "10px 0",
            border: 0,
            height: "1px",
            background: "var(--white)",
          }}
        />
        <div className="card-items">
        {items.map((item) => (
          <Paragraph key={item} size="sm" color="secondary" isMarginless>{item}</Paragraph>
        ))}
        </div>
      </div>
      <style jsx>{`
        .card {
          background: var(--golden-yellow);
          padding: 30px 50px;
          margin: 15px 0;
          width: 100%;
        }

        .card-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .card--inverted {
          background: var(--black);
        }

        .card--inverted header :global(.heading) {
          color: var(--golden-yellow);
        }

        .card--inverted header :global(.paragraph) {
          color: var(--golden-yellow);
        }

        .card--inverted :global(.paragraph) {
          color: var(--white);
        }
      `}</style>
    </>
  );
};

export default Card;
