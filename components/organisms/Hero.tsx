import React from "react";
import Link from "next/link";
import PageContainer from "../layout/PageContainer";
import { profile } from "../../data/profile";
import { languages } from "../../data/languages";
import { yearsOfExperience } from "../../data/experience";
import { pdfPath } from "../../data/site";

/**
 * CV masthead: a record card with the essentials, not a marketing hero.
 */
const Hero: React.FC = () => {
  const facts: { label: string; value: string; href?: string; isWide?: boolean }[] = [
    { label: "Role", value: profile.role },
    { label: "Based in", value: profile.location },
    { label: "Experience", value: `${yearsOfExperience} years` },
    { label: "Contact", value: profile.email, href: `mailto:${profile.email}` },
    {
      label: "Languages",
      value: languages
        .map((language) => `${language.title} (${language.proeficiency.toLowerCase()})`)
        .join(", "),
      isWide: true,
    },
  ];

  return (
    <>
      <header className="cv-masthead">
        <PageContainer>
          <div className="cv-record">
            <div className="cv-record-body">
              <h1>{profile.name}</h1>
              <p className="cv-tagline">{profile.tagline}</p>
              <dl className="cv-facts">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className={fact.isWide ? "cv-fact is-wide" : "cv-fact"}
                  >
                    <dt>{fact.label}</dt>
                    <dd>
                      {fact.href ? <a href={fact.href}>{fact.value}</a> : fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="cv-ctas">
                <Link className="cv-cta" href="/resume">
                  2-Page version
                </Link>
                <a className="cv-cta is-primary" href={pdfPath} download>
                  Download PDF <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </PageContainer>
      </header>
      <style jsx>{`
        .cv-masthead {
          padding: 40px 0;
        }

        .cv-record {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }


        h1 {
          font-family: var(--font-headings);
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.1;
          color: var(--text);
        }

        .cv-tagline {
          margin-top: 6px;
          font-family: var(--font-body);
          font-size: 1.6rem;
          line-height: 1.5;
          color: var(--paragraph-primary);
        }

        .cv-facts {
          display: grid;
          grid-template-columns: 1fr;
          margin-top: 20px;
          border-top: 1px solid var(--border);
        }

        .cv-fact {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid var(--border);
        }

        dt {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--heading-secondary);
          padding-top: 2px;
        }

        dd {
          margin: 0;
          font-family: var(--font-body);
          font-size: 1.5rem;
          color: var(--text);
        }

        dd a {
          color: inherit;
          text-decoration: none;
          border-bottom: 1px solid var(--golden-yellow);
        }

        .cv-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .cv-ctas :global(.cv-cta) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 18px;
          border: 1px solid var(--text);
          border-radius: 999px;
          color: var(--text);
          font-family: var(--font-mono);
          font-size: 1.2rem;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
        }

        .cv-ctas :global(.cv-cta:hover),
        .cv-ctas :global(.cv-cta:focus-visible) {
          border-color: var(--golden-yellow);
          color: var(--golden-yellow);
        }

        .cv-ctas :global(.cv-cta.is-primary) {
          background: var(--golden-yellow);
          border-color: var(--golden-yellow);
          color: #1a1a1a;
        }

        .cv-ctas :global(.cv-cta.is-primary:hover),
        .cv-ctas :global(.cv-cta.is-primary:focus-visible) {
          background: transparent;
          color: var(--golden-yellow);
        }

        @media (max-width: 480px) {
          .cv-ctas :global(.cv-cta) {
            flex: 1 1 0;
          }
        }

        @media (min-width: 1140px) {
          .cv-record {
            flex-direction: row;
            align-items: flex-start;
            gap: 40px;
          }

          .cv-record-body {
            flex: 1;
          }

          .cv-facts {
            grid-template-columns: 1fr 1fr;
            column-gap: 40px;
          }

          .cv-fact.is-wide {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
