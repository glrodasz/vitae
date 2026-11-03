import React from "react";
import Item from "./Item";
import Logo from "../atoms/Logo";

import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Link from "../atoms/Link";
import { Career } from "../../types/data";

interface JobProps {
  career: Career;
}

const Job: React.FC<JobProps> = ({ career }) => {
  const achievements = career.achievements ?? [];

  return (
    <>
      <div className="job">
        {/* Desktop: logo, url and functions | about. Phones: logo, url, about, functions. */}
        <div className="job-info">
          <div className="job-column">
            <div className="job-header">
              <Logo logoName={career.logo} shouldInvert={true} />
              <Link href={`https://${career.url}`} weight="normal">{career.url}</Link>
            </div>
            <div className="job-functions">
              <Heading tag="h3" size="xs">Functions</Heading>
              <Paragraph>{career.functions}</Paragraph>
            </div>
          </div>
          <div className="job-column">
            <div className="job-about">
              <Heading tag="h3" size="xs">About</Heading>
              <Paragraph>{career.about}</Paragraph>
            </div>
          </div>
        </div>

        {!!achievements.length && (
          <div className="job-achievements">
            <Heading tag="h3" size="xs">Achievements</Heading>
            <div className="job-achievements-list">
              {achievements.map((achievement) => (
                <Item
                  key={achievement.title}
                  icon="diamond-alt"
                  type="secondary"
                  title={achievement.title}
                  text={achievement.description}
                  tags={achievement.tech}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .job {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .job-info {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        /* Phones: the columns dissolve and order restores logo, about, functions. */
        .job-column {
          display: contents;
        }

        .job-header {
          order: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
        }

        .job-about {
          order: 1;
        }

        .job-functions {
          order: 2;
        }

        /* One logo box for every company: wide marks hit the width, tall ones the height. */
        .job-header :global(.logo) {
          width: 220px;
          max-width: 100%;
          height: 64px;
          aspect-ratio: auto;
          object-fit: contain;
        }

        .job-achievements {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        @media (min-width: 1140px) {
          .job {
            gap: 40px;
          }

          .job-info {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 40px;
            align-items: start;
          }

          .job-column {
            display: flex;
            flex-direction: column;
            gap: 25px;
            padding-left: var(--job-text-indent, 30px);
          }

          .job-header {
            align-items: flex-start;
          }

          .job-header :global(.logo) {
            object-position: left center;
          }

          .job-achievements-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 40px;
            align-items: start;
          }
        }
      `}</style>
    </>
  );
};

export default Job;
