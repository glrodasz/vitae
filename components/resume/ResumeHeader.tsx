import React from "react";
import { Profile } from "../../types/data";

interface ResumeHeaderProps {
  profile: Profile;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({ profile }) => {
  const contacts = [
    { label: profile.email, url: `mailto:${profile.email}` },
    profile.website,
    ...profile.links,
  ];

  return (
    <>
      <header className="resume-header">
        <h1 data-brand-anchor>{profile.name}</h1>
        <p className="resume-header-role">
          {profile.role} · {profile.location}
        </p>
        <p className="resume-header-contact">
          {contacts.map((contact, index) => (
            <React.Fragment key={contact.url}>
              {index > 0 && <span aria-hidden="true"> · </span>}
              <a href={contact.url}>{contact.label}</a>
            </React.Fragment>
          ))}
        </p>
      </header>
      <style jsx>{`
        .resume-header {
          text-align: center;
          padding-bottom: 2pt;
        }

        h1 {
          font-family: var(--font-headings);
          font-size: 22pt;
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.1;
          color: var(--resume-text);
        }

        .resume-header-role {
          margin-top: 3pt;
          font-size: 11pt;
          color: var(--resume-text);
        }

        .resume-header-contact {
          margin-top: 4pt;
          font-family: var(--font-mono);
          font-size: 8.5pt;
          color: var(--resume-muted);
        }

        .resume-header-contact a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default ResumeHeader;
