import Head from "next/head";
import Link from "next/link";

import DocumentBar from "../components/molecules/DocumentBar";
import useTheme from "../hooks/useTheme";
import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeSection from "../components/resume/ResumeSection";
import ResumeEntry from "../components/resume/ResumeEntry";
import ResumeList from "../components/resume/ResumeList";
import {
  absoluteUrl,
  ogImageAlt,
  ogImagePath,
  pdfPathFor,
  resumeDescription,
  resumePageTitle,
} from "../data/site";
import {
  resumeEducation,
  resumeExperience,
  resumeProfile,
  resumeProjects,
  resumeRecognition,
  resumeSkills,
  resumeSummary,
} from "../data/resume";

const Resume = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <Head>
        <title>{resumePageTitle}</title>
        <meta name="description" content={resumeDescription} />
        <link rel="canonical" href={absoluteUrl("/resume")} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={resumePageTitle} />
        <meta property="og:description" content={resumeDescription} />
        <meta property="og:url" content={absoluteUrl("/resume")} />
        <meta property="og:image" content={absoluteUrl(ogImagePath)} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:site_name" content="Guillermo Rodas" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={resumePageTitle} />
        <meta name="twitter:description" content={resumeDescription} />
        <meta name="twitter:image" content={absoluteUrl(ogImagePath)} />
        <meta name="twitter:image:alt" content={ogImageAlt} />
        <meta name="twitter:creator" content="@germorodas" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="resume-document-bar">
        <DocumentBar />
      </div>

      <nav className="resume-toolbar" aria-label="CV actions">
        <Link className="resume-toolbar-back" href="/">
          <span aria-hidden="true">←</span> Full CV
        </Link>
        <a className="resume-toolbar-primary" href={pdfPathFor(isDarkMode)} download>
          Download PDF <span aria-hidden="true">↓</span>
        </a>
      </nav>

      <main className="resume">
        <ResumeHeader profile={resumeProfile} />

        <ResumeSection title="Summary">
          <p>{resumeSummary}</p>
        </ResumeSection>

        <ResumeSection title="Experience">
          {resumeExperience.map((job) => (
            <ResumeEntry
              key={job.company}
              title={job.company}
              subtitle={job.tagline}
              meta={job.dates}
              detail={job.role}
              bullets={job.bullets}
            />
          ))}
        </ResumeSection>

        <ResumeSection title="Selected projects">
          {resumeProjects.map((project) => (
            <ResumeEntry
              key={project.name}
              title={project.name}
              subtitle={project.stack.join(", ")}
            >
              <p>{project.description}</p>
              <p className="resume-links">
                {project.links.map((link, index) => (
                  <span key={link.url}>
                    {index > 0 && " · "}
                    <a href={`https://${link.url}`}>{link.url}</a>
                  </span>
                ))}
              </p>
            </ResumeEntry>
          ))}
        </ResumeSection>

        <ResumeSection title="Skills">
          <ResumeList items={resumeSkills} labelWidth="22%" />
        </ResumeSection>

        <ResumeSection title="Education">
          {resumeEducation.map((item) => (
            <ResumeEntry
              key={item.label}
              title={item.label}
              subtitle={item.text}
              isSubtitleBelow
              meta={item.meta}
            />
          ))}
        </ResumeSection>

        <ResumeSection title="Recognition & speaking">
          <ResumeList items={resumeRecognition} labelWidth="34%" />
        </ResumeSection>
      </main>

      <style jsx>{`
        .resume-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 210mm;
          margin: 0 auto;
          padding: 16px;
          font-family: var(--font-body);
          font-size: 14px;
        }

        .resume-toolbar :global(a) {
          color: var(--text);
          text-decoration: none;
        }

        /* Same outline button as the "2-Page version" CTA on the full CV. */
        .resume-toolbar :global(.resume-toolbar-back) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          border: 1px solid var(--text);
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 1.2rem;
          letter-spacing: 0.04em;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .resume-toolbar :global(.resume-toolbar-back:hover),
        .resume-toolbar :global(.resume-toolbar-back:focus-visible) {
          border-color: var(--golden-yellow);
          color: var(--golden-yellow);
        }

        /* Same primary button as the Download PDF CTA under the masthead. */
        .resume-toolbar .resume-toolbar-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          border: 1px solid var(--golden-yellow);
          border-radius: 999px;
          background: var(--golden-yellow);
          color: #1a1a1a;
          font-family: var(--font-mono);
          font-size: 1.2rem;
          letter-spacing: 0.04em;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .resume-toolbar .resume-toolbar-primary:hover,
        .resume-toolbar .resume-toolbar-primary:focus-visible {
          background: transparent;
          color: var(--golden-yellow);
        }

        .resume {
          --resume-text: #292929;
          --resume-muted: #5c5c5c;
          --resume-accent: #edb305;
          --resume-accent-ink: #cd8901;
          --resume-paper: #fff;
          box-sizing: border-box;
          max-width: 210mm;
          min-height: 297mm;
          margin: 0 auto 48px;
          padding: 16mm 16mm 18mm;
          background: var(--resume-paper);
          color: var(--resume-text);
          font-family: var(--font-body);
          font-size: 9.5pt;
          line-height: 1.4;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08),
            0 12px 40px rgba(0, 0, 0, 0.08);
        }

        .resume-links {
          font-family: var(--font-mono);
          font-size: 8pt;
          color: var(--resume-muted);
        }

        .resume :global(a) {
          color: inherit;
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .resume {
            min-height: 0;
            padding: 24px 16px;
            box-shadow: none;
          }

          .resume :global(.resume-entry-row),
          .resume :global(.resume-list-row) {
            display: block;
          }

          .resume :global(.resume-entry-meta) {
            display: block;
            white-space: normal;
          }
        }

        /* Dark sheet, so the dark PDF matches the dark site. */
        :global(html.dark) .resume {
          --resume-text: #f2f2f2;
          --resume-muted: #a6a6a6;
          --resume-accent-ink: #edb305;
          --resume-paper: #1a1a1a;
          box-shadow: 0 0 0 1px #2c2c2c;
        }

        @media print {
          .resume-toolbar,
          .resume-document-bar {
            display: none;
          }

          .resume {
            max-width: none;
            min-height: 0;
            margin: 0;
            padding: 0;
            box-shadow: none;
          }
        }
      `}</style>
      <style jsx global>{`
        @page {
          size: A4;
          margin: 14mm 16mm;
        }

        @media print {
          html,
          body {
            background: #fff !important;
          }

          html.dark,
          html.dark body {
            background: #1a1a1a !important;
          }
        }
      `}</style>
    </>
  );
};

export default Resume;
