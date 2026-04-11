import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import PageContainer from "../layout/PageContainer";
import Item from "../molecules/Item";
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
          <Item icon="language" title="Languages" />
          <div className="languages">
            {data.languages.map((language, index) => (
              <Item
                key={index}
                flag={language.flag}
                title={language.title}
                type="secondary"
                text={language.proeficiency}
                isSameLine={isMobile}
              />
            ))}
          </div>
        </div>

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

        .languages {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 1140px) {
          .languages {
            flex-direction: row;
            grid-gap: 30px;
          }
        }

        @media print {
          .profile {
            gap: 16px !important;
          }

          .languages {
            flex-direction: column !important;
            gap: 4px !important;
          }
        }
      `}</style>
    </PageContainer>
  );
};

export default Profile;
