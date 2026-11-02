import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import PageContainer from "../layout/PageContainer";
import data from "../../data";
import useBreakpoints from "../../hooks/useBreakpoints";

const Profile: React.FC = () => {
  const { isMobile } = useBreakpoints();

  return (
    <PageContainer>
      <div className="profile">
        <Heading size="md" isCentered>
          <strong>Personal</strong> profile
        </Heading>

        <div>
          {data.summary.map((paragraph, index) => (
            <Paragraph key={index} size="lg" isJustified={!isMobile}>
              {paragraph}
            </Paragraph>
          ))}
        </div>
      </div>
      <style jsx>{`
        .profile {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

      `}</style>
    </PageContainer>
  );
};

export default Profile;
