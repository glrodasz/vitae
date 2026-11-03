import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageContainer from "../layout/PageContainer";
import { profile } from "../../data/profile";
import { languages } from "../../data/languages";
import { yearsOfExperience } from "../../data/experience";
import { pdfPathFor, portraitPath } from "../../data/site";
import useTheme from "../../hooks/useTheme";

/**
 * CV masthead: a record card with the essentials, not a marketing hero.
 */
const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();
  const languageList = (
    <span className="cv-languages">
      {languages.map((language, index) => (
        <React.Fragment key={language.title}>
          {index > 0 && (
            <span className="cv-separator" aria-hidden="true">
              •
            </span>
          )}
          <span className="cv-language">
            {language.title} <span className="cv-level">{language.proeficiency}</span>
          </span>
        </React.Fragment>
      ))}
    </span>
  );

  const facts: {
    label: string;
    value: React.ReactNode;
    href?: string;
    isWide?: boolean;
  }[] = [
    { label: "Role", value: profile.role },
    { label: "Based in", value: profile.location },
    { label: "Experience", value: `${yearsOfExperience} years` },
    { label: "Contact", value: profile.email, href: `mailto:${profile.email}` },
    {
      label: "Languages",
      value: languageList,
      isWide: true,
    },
  ];

  const [firstName, ...lastNames] = profile.name.split(" ");

  return (
    <>
      <header className="cv-masthead">
        <PageContainer>
          <div className="cv-record">
            <div className="cv-record-body">
              <h1 data-brand-anchor>
                <span className="cv-first-name">{firstName}</span> {lastNames.join(" ")}
              </h1>
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
                <a className="cv-cta is-primary" href={pdfPathFor(isDarkMode)} download>
                  Download PDF <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="cv-portrait" aria-hidden="true">
              <div className="cv-portrait-frame">
                <Image src={portraitPath} alt="" width={800} height={800} priority />
              </div>
              <span className="cv-portrait-accent is-large" />
              <span className="cv-portrait-accent is-small" />
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
        }

        .cv-fact {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid var(--border);
        }

        .cv-fact:last-child {
          border-bottom: none;
        }

        dt {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--heading-secondary);
          padding-top: 2px;
          padding-right: 4px;
          text-align: right;
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

        .cv-facts :global(.cv-languages) {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 4px 12px;
        }

        .cv-facts :global(.cv-language) {
          white-space: nowrap;
        }

        .cv-facts :global(.cv-level) {
          margin-left: 2px;
          color: var(--heading-secondary);
          font-family: var(--font-mono);
          font-size: 0.75em;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .cv-facts :global(.cv-separator) {
          color: var(--golden-yellow);
        }

        /* On narrow screens each language gets its own line, no separators. */
        @media (max-width: 639px) {
          .cv-facts :global(.cv-languages) {
            flex-direction: column;
          }

          .cv-facts :global(.cv-separator) {
            display: none;
          }
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

        .cv-portrait {
          display: none;
        }

        @media (min-width: 1140px) {
          /* Dark band on desktop in both themes, like the footer. */
          .cv-masthead {
            --text: var(--white);
            --paragraph-primary: #d9d6cf;
            --heading-secondary: #9a958a;
            --border: #3a3a3a;

            position: relative;
            overflow: hidden;
            padding: 64px 0;
            background: var(--black);
          }

          .cv-masthead::after {
            content: "";
            position: absolute;
            top: 50%;
            right: -180px;
            width: 520px;
            height: 520px;
            background: color-mix(in srgb, var(--golden-yellow) 14%, transparent);
            transform: translateY(-50%) rotate(45deg);
          }

          .cv-record {
            position: relative;
            z-index: 1;
            flex-direction: row;
            align-items: stretch;
            gap: 56px;
          }

          .cv-record-body {
            flex: 1;
            min-width: 0;
          }

          h1 {
            font-size: 6.4rem;
            line-height: 1.02;
            letter-spacing: -0.01em;
          }

          .cv-first-name {
            color: var(--golden-yellow);
          }

          .cv-tagline {
            margin-top: 12px;
            font-size: 2rem;
            max-width: 36ch;
          }

          .cv-facts {
            margin-top: 32px;
          }

          .cv-fact {
            grid-template-columns: 130px 1fr;
            padding: 10px 0;
          }

          dd {
            font-size: 1.7rem;
          }

          .cv-ctas {
            margin-top: 32px;
          }

          /* Full photo rising from the bottom edge of the dark band. */
          .cv-record-body {
            align-self: center;
          }

          .cv-portrait {
            display: block;
            position: relative;
            flex: 0 0 460px;
            align-self: flex-end;
            margin-bottom: -64px;
          }

          /* Diamond behind the torso, where the photo carries its weight. */
          .cv-portrait::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 66%;
            width: 300px;
            height: 300px;
            background: var(--golden-yellow);
            transform: translate(-50%, -50%) rotate(45deg);
          }

          .cv-portrait-frame {
            position: relative;
            z-index: 1;
            height: 600px;
          }

          .cv-portrait-frame :global(img) {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: bottom center;
          }

          .cv-portrait-accent {
            position: absolute;
            z-index: 2;
            background: var(--golden-yellow);
            transform: rotate(45deg);
          }

          .cv-portrait-accent.is-large {
            width: 40px;
            height: 40px;
            left: 0;
            top: 260px;
          }

          .cv-portrait-accent.is-small {
            width: 24px;
            height: 24px;
            right: 8px;
            bottom: 120px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
