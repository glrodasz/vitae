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

        <div className="profile-summary">
          {data.summary.map((paragraph, index) => (
            <Paragraph key={index} size={isMobile ? "md" : "lg"} isJustified={!isMobile}>
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

        .profile-summary {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .profile-summary :global(.paragraph) {
          margin-bottom: 0;
        }

      `}</style>
    </PageContainer>
  );
};

export default Profile;
