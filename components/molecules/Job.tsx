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
  return (
    <>
      <div className="job">
        <div className="job-info">
          <div className="job-header">
            <Logo logoName={career.logo} shouldInvert={true} />
            <Link href={`https://${career.url}`} weight="normal">{career.url}</Link>
          </div>
          <div>
            <Heading tag="h3" size="xs">About</Heading>
            <Paragraph>{career.about}</Paragraph>
          </div>

          <div>
            <Heading tag="h3" size="xs">Functions</Heading>
            <Paragraph>{career.functions}</Paragraph>
          </div>
        </div>

        {!!career.achievements?.length && <div className="job-achievements">
          <Heading tag="h3" size="xs">My achievements</Heading>
          <div className="job-achievements-list">
            {career.achievements.map((achievement) => (
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
        </div>}
      </div>
      <style jsx>{`
        .job {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 25px;
        }

        .job-info {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .job-achievements {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .job-header {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
        }

        @media (min-width: 1140px) {
          .job {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 35px;
          }

          .job-info {
            grid-column: 1;
            grid-row: 1;
            align-self: start;
            position: sticky;
            top: calc(var(--document-bar-height) + 24px);
          }

          .job-achievements {
            grid-column: 2;
            grid-row: 1;
          }

          .job-achievements > :global(.heading) {
            margin-left: 25px;
          }

          .job-header {
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
};

export default Job;
