import React from "react";

interface TagsProps {
  items: string[];
  label?: string;
}

/** Technologies as ghost pills. */
const Tags: React.FC<TagsProps> = ({ items, label = "Technologies" }) => {
  return (
    <>
      <ul className="tags" aria-label={label}>
        {items.map((item) => (
          <li key={item} className="tag">
            {item}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 8px 0 0;
          padding: 0;
          list-style: none;
        }

        .tag {
          padding: 4px 10px;
          border: 1px solid color-mix(in srgb, var(--heading-secondary) 45%, transparent);
          border-radius: 999px;
          color: var(--heading-secondary);
          font-family: var(--font-headings);
          font-size: 1.2rem;
          line-height: 1.2;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
};

export default Tags;
