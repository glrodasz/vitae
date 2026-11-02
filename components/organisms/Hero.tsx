import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../layout/PageContainer";
import Relocation from "./Relocation";
import ThemeToggle from "../molecules/ThemeToggle";
import { profile } from "../../data/profile";
import { pdfPath } from "../../data/site";

const [firstName, ...lastNames] = profile.name.split(" ");

const Hero: React.FC = () => {
  return (
    <>
      <header className="cv-hero">
        <PageContainer>
          <div className="cv-topbar">
            <a className="cv-topbar-back" href={profile.website.url}>
              ← {profile.website.label}
            </a>
            <ThemeToggle isHidden={false} />
          </div>

          <div className="cv-hero-grid">
            <div className="cv-hero-text">
              <p className="cv-eyebrow">Curriculum Vitae</p>
              <h1>
                {firstName} <strong>{lastNames.join(" ")}</strong>
              </h1>
              <p className="cv-role">
                {profile.role} · {profile.location}
              </p>
              <p className="cv-tagline">{profile.tagline}</p>
              <div className="cv-actions">
                <a className="cv-button cv-button--primary" href={pdfPath} download>
                  Download PDF
                </a>
                <Link className="cv-button" href="/resume">
                  Two-page CV →
                </Link>
              </div>
            </div>

            <figure className="cv-photo">
              <Image
                src="/images/guillermo-rodas.png"
                alt={profile.name}
                width={320}
                height={320}
                priority
              />
            </figure>
          </div>

          <div className="cv-relocation">
            <Relocation />
          </div>
        </PageContainer>
      </header>
      <style jsx>{`
        .cv-hero {
          padding: 16px 0 40px;
          border-bottom: 1px solid var(--border);
        }

        .cv-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-bottom: 16px;
          margin-bottom: 40px;
          border-bottom: 1px solid var(--border);
        }

        .cv-topbar-back {
          font-family: var(--font-mono);
          font-size: 1.2rem;
          color: var(--heading-secondary);
          text-decoration: none;
        }

        .cv-topbar-back:hover {
          color: var(--text);
        }

        .cv-hero-grid {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          gap: 32px;
        }

        .cv-hero-text {
          width: 100%;
        }

        .cv-eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          padding: 4px 10px;
          border: 1px solid var(--golden-yellow);
          font-family: var(--font-mono);
          font-size: 1.1rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text);
        }

        h1 {
          font-family: var(--font-headings);
          font-size: 4.4rem;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--text);
        }

        h1 strong {
          color: var(--primary);
        }

        .cv-role {
          margin-top: 12px;
          font-family: var(--font-body);
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text);
        }

        .cv-tagline {
          margin-top: 8px;
          max-width: 52ch;
          font-family: var(--font-body);
          font-size: 1.6rem;
          line-height: 1.5;
          color: var(--paragraph-primary);
        }

        .cv-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .cv-actions :global(.cv-button) {
          display: inline-flex;
          align-items: center;
          padding: 10px 18px;
          border: 1px solid var(--text);
          border-radius: 6px;
          font-family: var(--font-body);
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text);
          text-decoration: none;
        }

        .cv-actions :global(.cv-button--primary) {
          border-color: var(--golden-yellow);
          background: var(--golden-yellow);
          color: var(--on-accent);
        }

        .cv-photo {
          flex-shrink: 0;
          width: 200px;
          margin: 0;
          padding: 6px;
          border: 1px solid var(--border);
          background: var(--surface);
        }

        .cv-photo :global(img) {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 1;
          object-fit: cover;
          filter: grayscale(0.15);
        }

        .cv-relocation {
          margin-top: 40px;
        }

        @media (min-width: 1140px) {
          .cv-hero-grid {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 64px;
          }

          h1 {
            font-size: 6rem;
          }

          .cv-photo {
            width: 280px;
          }

          .cv-relocation {
            display: flex;
            justify-content: flex-start;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
