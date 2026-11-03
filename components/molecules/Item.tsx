import Icon from "../atoms/Icon";
import Heading from "../atoms/Heading";
import Tags from "../atoms/Tags";
import Paragraph from "../atoms/Paragraph";
import classNames from "classnames";

const getHeadingSize = (type: ItemType): "xxs" | "xs" => (type === "secondary" ? "xxs" : "xs");

interface ParagraphsProps {
  text: string | string[][];
}

const Paragraphs: React.FC<ParagraphsProps> = ({ text }) => {
  if (Array.isArray(text)) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {text.map(([description, date]) => {
          return (
            <div key={description} className="sub-entry">
              <Paragraph isMarginless>{description}</Paragraph>
              <Heading
                color="secondary"
                size="xxs"
                weight="normal"
                isMarginless
              >
                {date}
              </Heading>
            </div>
          );
        })}
      </div>
    );
  }

  return <Paragraph isMarginless>{text}</Paragraph>;
};

type ItemType = "primary" | "secondary";

interface ItemProps {
  icon?: string;
  flag?: string;
  title?: string;
  type?: ItemType;
  text?: string | string[][];
  footer?: string;
  badge?: string;
  tags?: string[];
  isSameLine?: boolean;
}

const Item: React.FC<ItemProps> = ({
  icon,
  flag,
  title,
  type = "primary",
  text,
  footer,
  badge,
  tags,
  isSameLine
}) => {
  return (
    <>
      <div className={classNames("item", {
        "has-title": !!title && !!(icon || flag),
        "has-tags": !!tags?.length,
      })}>
        {(icon || flag) && (
          <div
            className={classNames("media", {
              "is-centered-with-text": !title,
            })}
          >
            {icon && <Icon size="md" name={icon} />}
            <Heading size="xs" isMarginless>
              {flag}
            </Heading>
          </div>
        )}
        <div className={classNames("content", {
          "is-same-line": isSameLine,
        })}>
          {title && !badge && (
            <Heading size={getHeadingSize(type)} color={type} isMarginless>
              {title}
            </Heading>
          )}
          {title && badge && (
            <div className="title-row">
              <Heading size={getHeadingSize(type)} color={type} isMarginless>
                {title}
              </Heading>
              <span className="badge">{badge}</span>
            </div>
          )}
          {text && <Paragraphs text={text} />}
          {footer && (
            <Heading color="secondary" size="xxs" weight="normal">
              {footer}
            </Heading>
          )}
          {!!tags?.length && <Tags items={tags} />}
        </div>
      </div>
      <style jsx>{`
        .item {
          display: flex;
          margin-bottom: 15px;
          align-items: ${text ? "flex-start" : "center"};
          gap: 10px;
        }

        .content {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 2px;
        }

        /* Name + date pairs: the name reads a step above the date, below the title. */
        .item :global(.sub-entry .paragraph) {
          color: var(--text);
          font-weight: 500;
        }

        .title-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 4px 8px;
        }

        .badge {
          padding: 2px 8px;
          border: 1px solid color-mix(in srgb, var(--heading-secondary) 45%, transparent);
          border-radius: 999px;
          color: var(--heading-secondary);
          font-family: var(--font-headings);
          font-size: 1.1rem;
          line-height: 1.2;
          white-space: nowrap;
        }

        .has-tags {
          margin-bottom: 32px;
        }

        .is-centered-with-text {
          margin-top: 5px;
        }

        /* Phones: only the title sits beside the icon; the rest uses the full width. */
        @media (max-width: 639px) {
          .has-title {
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 10px;
            row-gap: 4px;
            align-items: center;
          }

          .has-title .content {
            display: contents;
          }

          .has-title .content > :global(*) {
            grid-column: 1 / -1;
          }

          .has-title .content > :global(:first-child) {
            grid-column: 2;
          }
        }

        @media (min-width: 1140px) {
          .is-same-line {
            flex-direction: row;
            align-items: baseline;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Item;
