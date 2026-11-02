import { ReactNode } from "react";
import classNames from "classnames";

interface HeadingProps {
  children: ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "disabled";
  weight?: "normal" | "bold";
  isCentered?: boolean;
  isMarginless?: boolean;
  isComfortable?: boolean;
  isInverted?: boolean;
  isInline?: boolean;
  freezeColor?: boolean;
}

const Heading = ({
  children,
  tag = "h1",
  size = "lg",
  color = "primary",
  weight = "bold",
  isCentered,
  isMarginless,
  isComfortable,
  isInverted,
  isInline,
  freezeColor = false,
}: HeadingProps) => {
  const Tag = tag;

  return (
    <>
      <Tag
        className={classNames("heading", `size-${size} color-${color} weight-${weight}`, {
          "is-centered": isCentered,
          "is-marginless": isMarginless,
          "is-comfortable": isComfortable,
          "is-inverted": isInverted,
          "is-inline": isInline,
          "freeze-mode": freezeColor,
        })}
      >
        {children}
      </Tag>
      <style jsx>{`
        .heading {
          font-family: var(--font-headings);
          line-height: 1;
          margin-bottom: 5px;
        }

        .heading :global(strong) {
          color: var(--primary);
        }

        .color-primary {
          color: var(--text);
        }

        .color-secondary {
          color: var(--heading-secondary);
        }

        .color-disabled {
          color: var(--gray);
        }

        .is-inverted {
          color: var(--white);
        }

        .is-inline {
          display: inline;
        }

        .size-lg {
          font-size: 4.8rem;
        }

        .size-md {
          font-size: 3.6rem;
        }

        .size-sm {
          font-size: 2.4rem;
        }

        .size-xs {
          font-size: 1.8rem;
        }

        .size-xxs {
          font-size: 1.6rem;
        }

        .is-centered {
          text-align: center;
        }

        .is-marginless {
          margin-bottom: 0;
        }

        .is-comfortable {
          margin-left: 10px;
          margin-right: 10px;
        }

        .weight-normal {
          font-weight: normal;
        }

        .weight-bold {
          font-weight: bold;
        }

        @media (min-width: 1140px) {
          .heading :global(strong.shadow) {
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2),
              -1px -1px 0 rgba(255, 255, 255);
          }
        }
      `}</style>
    </>
  );
};

export default Heading;
