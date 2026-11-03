import { ReactNode } from "react";
import classNames from "classnames";

interface ParagraphProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "tertiary";
  isMarginless?: boolean;
  isInverted?: boolean;
  isJustified?: boolean;
  freezeColor?: boolean;
}

const Paragraph = ({
  children,
  size = "md",
  color = "primary",
  isMarginless,
  isInverted,
  isJustified,
  freezeColor = false,
}: ParagraphProps) => {
  return (
    <>
      <p
        className={classNames("paragraph", {
          [`size-${size}`]: size,
          [`color-${color}`]: color,
          "is-marginless": isMarginless,
          "is-inverted": isInverted,
          "is-justified": isJustified,
          "freeze-mode": freezeColor
        })}
      >
        {children}
      </p>
      <style jsx>{`
        .paragraph {
          font-family: var(--font-body);
          font-size: 1.6rem;
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .color-primary {
          color: var(--paragraph-primary);
        }

        .color-secondary {
          color: var(--paragraph-secondary);
        }

        .color-tertiary {
          color: var(--primary);
        }

        .size-xl {
          font-size: 2.8rem;
        }

        .size-lg {
          font-size: 1.8rem;
        }

        .size-md {
          font-size: 1.6rem;
        }

        .size-sm {
          font-size: 1.3rem;
        }

        .is-marginless {
          margin-bottom: 0;
        }

        .is-inverted {
          color: var(--white);
        }

        .is-justified {
          text-align: justify;
        }
      `}</style>
    </>
  );
};

export default Paragraph;
