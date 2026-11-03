import React from "react";
import Icon from "../atoms/Icon";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Tags from "../atoms/Tags";
import { Project as ProjectData } from "../../types/data";

interface ProjectProps {
  project: ProjectData;
}

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
);

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <>
      <article className="project">
        <div className="media">
          <Icon size="md" name="diamond-alt" />
        </div>
        <div className="content">
          <Heading size="xs" isMarginless>
            {project.name}
          </Heading>
          <Paragraph isMarginless>{project.description}</Paragraph>
          <Tags items={project.stack} />
          <div className="links">
            {project.links.map((link) => {
              const isRepo = link.url.startsWith("github.com");
              return (
                <a
                  key={link.url}
                  className="link-button"
                  href={`https://${link.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.url}
                >
                  {isRepo ? <GitHubIcon /> : <ExternalIcon />}
                  <span>{isRepo ? "GitHub" : "Website"}</span>
                </a>
              );
            })}
          </div>
        </div>
      </article>
      <style jsx>{`
        .project {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          min-width: 0;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        /* Phones: only the name sits beside the icon; the rest uses the full width. */
        @media (max-width: 639px) {
          .project {
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 10px;
            row-gap: 4px;
            align-items: center;
          }

          .content {
            display: contents;
          }

          .content > :global(*) {
            grid-column: 1 / -1;
          }

          .content > :global(:first-child) {
            grid-column: 2;
          }
        }

        .links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .link-button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border: 1px solid var(--golden-yellow);
          border-radius: 999px;
          background: var(--golden-yellow);
          color: #1a1a1a;
          font-family: var(--font-headings);
          font-size: 1.3rem;
          font-weight: 600;
          line-height: 1;
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .link-button:hover,
        .link-button:focus-visible {
          background: transparent;
          color: var(--golden-yellow);
        }
      `}</style>
    </>
  );
};

export default Project;
