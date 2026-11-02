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
        <div className="job-header">
          <Logo logoName={career.logo} shouldInvert={true} />
          <Link href={`https://${career.url}`} weight="normal">{career.url}</Link>
        </div>
        <div>
          <Heading size="xs">About</Heading>
          <Paragraph>{career.about}</Paragraph>
        </div>

        <div>
          <Heading size="xs">Functions</Heading>
          <Paragraph>{career.functions}</Paragraph>
        </div>

        {!!career.achievements?.length && <div className="job-achievements">
          <Heading size="xs">My achievements</Heading>
          <div className="job-achievements-list">
            {career.achievements.map((achievement) => (
              <Item
                key={achievement.title}
                icon="diamond-alt"
                type="secondary"
                title={achievement.title}
                text={achievement.description}
                footer={achievement.tech?.join(" · ")}
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

          .job-achievements {
            grid-column: 2;
            grid-row: 1/5;
          }

          .job-achievements > :global(.heading) {
            margin-left: 25px;
          }

          .job-header {
            align-items: flex-start;
          }
        }

        @media print {
          .job {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 35px !important;
            grid-template-areas:
              "header achievements"
              "about achievements"
              "functions achievements" !important;
          }

          .job-header {
            grid-area: header !important;
            align-items: flex-start !important;
          }

          .job-header :global(.logo) {
            max-width: 200px !important;
            width: 100% !important;
            height: auto !important;
          }

          .job-header :global(a) {
            text-align: left !important;
            align-self: flex-start !important;
          }

          .job > div:nth-child(2) {
            grid-area: about !important;
          }

          .job > div:nth-child(3) {
            grid-area: functions !important;
          }

          .job-achievements {
            grid-area: achievements !important;
            grid-column: 2 !important;
            grid-row: 1 / 5 !important;
          }

          .job-achievements-list {
            display: flex !important;
            flex-direction: column !important;
            gap: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default Job;
