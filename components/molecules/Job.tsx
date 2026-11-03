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
  // Phones read top to bottom; desktop splits into two columns that each start
  // right below their own block, so achievements sit just under the logo.
  const renderAchievement = (index: number) => {
    const achievement = achievements[index];
    return (
      <div key={achievement.title} className="job-achievement" style={{ order: 3 + index }}>
        <Item
          icon="diamond-alt"
          type="secondary"
          title={achievement.title}
          text={achievement.description}
          tags={achievement.tech}
        />
      </div>
    );
  };
  const leftIndexes = achievements.map((_, index) => index).filter((index) => index % 2 === 0);
  const rightIndexes = achievements.map((_, index) => index).filter((index) => index % 2 === 1);

  return (
    <>
      <div className="job">
        <div className="job-column">
          <div className="job-header">
            <Logo logoName={career.logo} shouldInvert={true} />
            <Link href={`https://${career.url}`} weight="normal">{career.url}</Link>
          </div>
          {!!achievements.length && (
            <div className="job-achievements-heading">
              <Heading tag="h3" size="xs">Achievements</Heading>
            </div>
          )}
          {leftIndexes.map(renderAchievement)}
        </div>

        <div className="job-column">
          <div className="job-details">
            <div>
              <Heading tag="h3" size="xs">About</Heading>
              <Paragraph>{career.about}</Paragraph>
            </div>

            <div>
              <Heading tag="h3" size="xs">Functions</Heading>
              <Paragraph>{career.functions}</Paragraph>
            </div>
          </div>
          {rightIndexes.map(renderAchievement)}
        </div>
      </div>
      <style jsx>{`
        .job {
          display: flex;
          flex-direction: column;
        }

        /* Phones: the columns dissolve and the order props restore reading order. */
        .job-column {
          display: contents;
        }

        .job-header {
          order: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
          margin-bottom: 25px;
        }

        /* One logo box for every company: wide marks hit the width, tall ones the height. */
        .job-header :global(.logo) {
          width: 220px;
          max-width: 100%;
          height: 64px;
          aspect-ratio: auto;
          object-fit: contain;
        }

        .job-details {
          order: 1;
          display: flex;
          flex-direction: column;
          gap: 25px;
          margin-bottom: 25px;
        }

        .job-achievements-heading {
          order: 2;
          margin-bottom: 10px;
        }

        @media (min-width: 1140px) {
          .job {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 40px;
            align-items: start;
          }

          .job-column {
            display: flex;
            flex-direction: column;
          }

          .job-header,
          .job-details {
            margin-bottom: 40px;
            padding-left: var(--job-text-indent, 30px);
          }

          .job-header {
            align-items: flex-start;
          }

          .job-header :global(.logo) {
            object-position: left center;
          }
        }
      `}</style>
    </>
  );
};

export default Job;
