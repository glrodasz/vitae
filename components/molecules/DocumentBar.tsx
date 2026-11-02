import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../../data/profile";
import { pdfPath, siteHost } from "../../data/site";

/**
 * Sticky strip that names the document and the host at every scroll
 * position, so the CV is never mistaken for the main site.
 */
const DocumentBar: React.FC = () => {
  return (
    <>
      <div className="document-bar">
        <div className="document-bar-inner">
          <p className="document-bar-label">
            <span>{profile.documentLabel}</span>
            <span className="document-bar-host"> · {siteHost}</span>
          </p>
          <nav className="document-bar-actions" aria-label="CV actions">
            <a href={pdfPath} download>
              <span className="document-bar-long">Download </span>PDF ↓
            </a>
            <Link className="document-bar-secondary" href="/resume">
              Two-page version
            </Link>
            <a className="document-bar-secondary" href={profile.website.url}>
              {profile.website.label} ↗
            </a>
            <ThemeToggle isHidden={false} />
          </nav>
        </div>
      </div>
      <style jsx>{`
        .document-bar {
          position: sticky;
          top: 0;
          z-index: 30;
          min-height: var(--document-bar-height);
          background: var(--background);
          border-bottom: 1px solid var(--border);
        }

        .document-bar-inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 6px 20px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 8px 20px;
          font-family: var(--font-mono);
          font-size: 1.15rem;
        }

        .document-bar-label {
          padding-left: 10px;
          border-left: 3px solid var(--golden-yellow);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text);
        }

        .document-bar-host {
          letter-spacing: normal;
          text-transform: none;
          color: var(--heading-secondary);
        }

        .document-bar-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px 18px;
        }

        .document-bar-actions :global(a) {
          color: var(--text);
          text-decoration: none;
          border-bottom: 1px solid transparent;
        }

        .document-bar-actions :global(a:hover) {
          border-bottom-color: var(--golden-yellow);
        }

        @media (max-width: 640px) {
          .document-bar-inner {
            flex-wrap: nowrap;
            gap: 12px;
            font-size: 1rem;
          }

          .document-bar-label {
            letter-spacing: 0.06em;
            white-space: nowrap;
          }

          .document-bar-actions {
            flex-wrap: nowrap;
            gap: 12px;
            white-space: nowrap;
          }

          .document-bar-host,
          .document-bar-long,
          .document-bar-actions :global(.document-bar-secondary) {
            display: none;
          }
        }

        @media (min-width: 1140px) {
          .document-bar-inner {
            padding: 8px 80px;
          }
        }
      `}</style>
    </>
  );
};

export default DocumentBar;
