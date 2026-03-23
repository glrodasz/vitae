import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Icon from "../atoms/Icon";
import Link from "../atoms/Link";
import PageContainer from "../layout/PageContainer";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <PageContainer>
          <div className="footer-container">
            <img className="footer-logo" src={`/vectors/footer.svg`} alt="" />

            <div className="footer-content">
              <Heading>
                <strong>Say Hello!</strong>
              </Heading>
              <Paragraph isInverted>
                It would be a pleasure to meet you!
              </Paragraph>
              <div className="footer-icon-list">
                <div className="footer-icon-item">
                  <Icon name="email" />
                  <Link href="mailto:me@guillermorodas.com" isInverted>
                    me(at)guillermorodas.com
                  </Link>
                </div>
                <div className="footer-icon-item">
                  <Icon name="link" />
                  <Link href="https://guillermorodas.com" isInverted>
                    guillermorodas.com
                  </Link>
                </div>
                <div className="footer-icon-item">
                  <Icon name="bubble" />
                  <Link href="https://undefined.sh" isInverted>
                    undefined.sh
                  </Link>
                </div>
              </div>
              <div className="footer-social">
                <Heading size="xxs" isInverted isMarginless>
                  @guillermorodas
                </Heading>
                <div>
                  <Link href="https://youtube.com/c/guillermorodas" isInline>
                    <Icon name="youtube" hasBackground />
                  </Link>
                  <Link href="https://twitch.tv/guillermorodas" isInline>
                    <Icon name="twitch" hasBackground />
                  </Link>
                  <Link href="https://x.com/guillermorodas" isInline>
                    <Icon name="x" hasBackground />
                  </Link>
                  <Link href="https://instagram.com/_guillermorodas" isInline>
                    <Icon name="instagram" hasBackground />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </footer>

      <style jsx>{`
        footer {
          padding: 80px 0 0;
          background: var(--black);
        }

        .footer-container {
          display: flex;
          flex-direction: column-reverse;
          justify-content: center;
        }

        .footer-logo {
          display: none;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 50px;
        }

        .footer-icon-list {
          display: flex;
          flex-direction: column;
          margin: 10px 0 30px;
          gap: 15px;
        }

        .footer-icon-item {
          display: flex;
          align-items: center;
        }

        .footer-icon-item > :global(div) {
          margin-right: 10px;
        }

        .footer-social {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        @media (min-width: 1140px) {
          .footer-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            gap: 100px;
          }

          .footer-content {
            align-items: flex-start;
            grid-column: 2/3;
            padding-bottom: 0;
          }

          .footer-social {
            margin-bottom: 30px;
          }

          .footer-logo {
            display: block;
            height: 100%;
            object-fit: contain;
            object-position: center 150px;
          }
        }

        @media print {
          footer {
            break-before: page;
            page-break-before: always;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
