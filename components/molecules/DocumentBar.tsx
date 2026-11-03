import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../../data/profile";
import { useMatchWidth } from "../../hooks/useMatchWidth";

/** Shows the brand once the name on the page (marked data-brand-anchor) scrolls away. */
const useBrandVisible = (): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const anchor = document.querySelector("[data-brand-anchor]");
    if (!anchor) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { rootMargin: "-52px 0px 0px 0px" }
    );
    observer.observe(anchor);
    return () => observer.disconnect();
  }, []);

  return isVisible;
};

/**
 * Sticky strip that names the document and the host at every scroll
 * position, so the CV is never mistaken for the main site.
 */
const DocumentBar: React.FC = () => {
  const isBrandVisible = useBrandVisible();
  // The name scales to span the tagline so the two lines read as one lockup, as on guillermorodas.com.
  const brandNameRef = useRef<HTMLSpanElement>(null);
  const brandTaglineRef = useRef<HTMLSpanElement>(null);
  useMatchWidth(brandNameRef, brandTaglineRef, [profile.name, profile.role]);

  return (
    <>
      <div className="document-bar">
        <div className="document-bar-inner">
          <div className={isBrandVisible ? "document-bar-start is-brand" : "document-bar-start"}>
            <p className="document-bar-label" aria-hidden={isBrandVisible}>
              {profile.documentLabel}
            </p>
            <a
              className="document-bar-brand"
              href="#top"
              aria-hidden={!isBrandVisible}
              tabIndex={isBrandVisible ? 0 : -1}
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {/* Same mark and lockup as guillermorodas.com */}
              <Image className="document-bar-brand-mark" src="/vectors/brand-mark.svg" alt="" width={32} height={32} />
              <span className="document-bar-brand-text">
                <span ref={brandNameRef} className="document-bar-brand-name">{profile.name}</span>
                <span ref={brandTaglineRef} className="document-bar-brand-tagline">{profile.role}</span>
              </span>
            </a>
          </div>
          <nav className="document-bar-actions" aria-label="CV actions">
            <ThemeToggle isHidden={false} />
          </nav>
        </div>
      </div>
      <style jsx>{`
        .document-bar {
          position: sticky;
          top: 0;
          z-index: 30;
          box-sizing: border-box;
          /* Fixed height: sticky carousel tabs sit exactly below it. */
          height: var(--document-bar-height);
          background: var(--background);
          border-bottom: 1px solid var(--border);
        }

        .document-bar-inner {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          gap: 6px 20px;
          height: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
          font-family: var(--font-mono);
          font-size: 1.15rem;
        }

        .document-bar-label {
          white-space: nowrap;
          padding-left: 10px;
          border-left: 3px solid var(--golden-yellow);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text);
        }

        .document-bar-start {
          position: relative;
          display: grid;
          align-items: center;
          min-width: 0;
        }

        .document-bar-start > * {
          grid-area: 1 / 1;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .document-bar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: inherit;
          text-decoration: none;
          opacity: 0;
          transform: translateY(6px);
          pointer-events: none;
        }

        .is-brand .document-bar-label {
          opacity: 0;
          transform: translateY(-6px);
        }

        .is-brand .document-bar-brand {
          opacity: 1;
          transform: none;
          pointer-events: auto;
        }

        .document-bar-brand :global(.document-bar-brand-mark) {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
        }

        .document-bar-brand-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          line-height: 1.2;
        }

        .document-bar-brand-name {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1;
          color: var(--golden-yellow);
          white-space: nowrap;
        }

        .document-bar-brand-tagline {
          font-family: var(--font-body);
          font-size: 0.9rem;
          line-height: 1.2;
          color: var(--heading-secondary);
          white-space: nowrap;
        }

        @media (prefers-reduced-motion: reduce) {
          .document-bar-start > * {
            transition: none;
          }
        }

        .document-bar-actions {
          display: flex;
          flex-wrap: nowrap;
          white-space: nowrap;
          align-items: center;
          gap: 6px 18px;
        }

        @media (max-width: 640px) {
          .document-bar-inner {
            gap: 12px;
            font-size: 1rem;
          }

          .document-bar-label {
            letter-spacing: 0.06em;
          }

          .document-bar-actions {
            gap: 12px;
          }

          .document-bar-brand {
            gap: 8px;
          }

          .document-bar-brand :global(.document-bar-brand-mark) {
            width: 24px;
            height: 24px;
          }

          .document-bar-brand-name {
            font-size: 1.2rem;
            letter-spacing: 1px;
          }

          .document-bar-brand-tagline {
            display: none;
          }
        }

        @media (min-width: 1140px) {
          .document-bar-inner {
            padding: 0 80px;
          }
        }
      `}</style>
    </>
  );
};

export default DocumentBar;
