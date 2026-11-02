import Head from "next/head";
import Link from "next/link";

import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeSection from "../components/resume/ResumeSection";
import ResumeEntry from "../components/resume/ResumeEntry";
import ResumeList from "../components/resume/ResumeList";
import { absoluteUrl, pdfPath, resumeDescription, resumePageTitle } from "../data/site";
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
  return (
    <>
      <Head>
        <title>{resumePageTitle}</title>
        <meta name="description" content={resumeDescription} />
        <link rel="canonical" href={absoluteUrl("/resume")} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <nav className="resume-toolbar" aria-label="CV actions">
        <Link href="/">← Full CV</Link>
        <a className="resume-toolbar-primary" href={pdfPath} download>
          Download PDF
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
          <ResumeList items={resumeSkills} />
        </ResumeSection>

        <ResumeSection title="Education">
          {resumeEducation.map((item) => (
            <ResumeEntry
              key={item.label}
              title={item.label}
              subtitle={item.text}
              meta={item.meta}
            />
          ))}
        </ResumeSection>

        <ResumeSection title="Recognition & speaking">
          <ResumeList items={resumeRecognition} />
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

        .resume-toolbar .resume-toolbar-primary {
          padding: 8px 14px;
          border-radius: 6px;
          background: var(--accent);
          color: var(--on-accent);
          font-weight: 600;
        }

        .resume {
          --resume-text: #292929;
          --resume-muted: #5c5c5c;
          --resume-accent: #edb305;
          --resume-accent-ink: #cd8901;
          box-sizing: border-box;
          max-width: 210mm;
          min-height: 297mm;
          margin: 0 auto 48px;
          padding: 16mm 16mm 18mm;
          background: #fff;
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

        @media print {
          .resume-toolbar {
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
        }
      `}</style>
    </>
  );
};

export default Resume;
