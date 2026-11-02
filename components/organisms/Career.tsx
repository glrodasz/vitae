import React from "react";
import PageContainer from "../layout/PageContainer";
import Heading from "../atoms/Heading";
import Carousel from "../molecules/Carousel";
import Job from "../molecules/Job";
import { calculateDuration } from "../../utils";
import { careers } from "../../data/careers";

const Career: React.FC = () => {
  return (
    <PageContainer withCarousel>
      <Heading size="md" isCentered>
        <strong>Career</strong> experience
      </Heading>
      <Carousel
        items={careers.map((career) => ({
          title: career.date ? career.date : String(new Date().getFullYear()),
          subtitle: career.company,
          heading: calculateDuration(career.startDate, career.endDate),
          content: <Job career={career} />,
        }))}
      />
    </PageContainer>
  );
};

export default Career;
