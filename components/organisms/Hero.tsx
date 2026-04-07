import React from "react";
import PageContainer from "../layout/PageContainer";
import Heading from "../atoms/Heading";
import Logo from "../atoms/Logo";
import Paragraph from "../atoms/Paragraph";
import Relocation from "./Relocation";
import Image from "next/image";
import ThemeToggle from "../molecules/ThemeToggle";
import useBreakpoints from "../../hooks/useBreakpoints";

const Hero: React.FC = () => {
  const { isMobile } = useBreakpoints();

  return (
    <>
      <header>
        <PageContainer fullHeight>
          <div className="hero-layout">
            <div className="hero-content-wrapper">
              <div className="hero-text">
                <div className="hero-logo">
                  <Logo shouldInvert="-light" />
                </div>
                <Heading size="sm">Hello,</Heading>
                <div className="hero-fullname">
                  <Heading>
                    I&apos;m <strong>Guillermo</strong>
                  </Heading>
                  <Heading>Rodas</Heading>
                </div>
                <Paragraph size="xl">
                  I help developers to improve their skills while creating
                  quality products.
                </Paragraph>
                <div className="hero-relocation">
                  <Relocation />
                </div>
              </div>
            </div>
            <div className="hero-photo-container">
              <Image
                className="hero-photo"
                src="/images/guillermo-rodas.png"
                alt="Guillermo Rodas"
                width={800}
                height={800}
                priority
              />
            </div>
            <div className="hero-theme-toggle">
              <ThemeToggle isHidden={isMobile} />
            </div>
          </div>
        </PageContainer>
      </header>
      <style jsx>{`
        header {
          --relocation-height: 130px;
          --header-mobile-min-height: 600px;

          position: relative;
          height: auto;
          min-height: var(--header-mobile-min-height);
          margin-bottom: var(--relocation-height);
          box-shadow: inset 0 -5px 10px rgba(0, 0, 0, 0.2);
        }

        .hero-layout {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          align-items: center;
        }

        .hero-content-wrapper {
          width: 100%;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          -webkit-text-stroke: 3px var(--text-inverted);
          paint-order: stroke fill;
        }

        .hero-text :global(.freeze-mode) {
          -webkit-text-stroke: 3px var(--text-inverted) !important;
        }

        .hero-logo {
          display: flex;
          justify-content: center;
          margin: 20px auto;
          min-height: 120px;
        }

        .hero-photo-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .hero-photo {
          --photo-mobile-max-width: 800px;

          display: block;
          bottom: 0;
          margin: 0 auto;
          width: 100%;
          max-width: var(--photo-mobile-max-width);
          aspect-ratio: 1;
        }

        .hero-relocation {
          position: absolute;
          bottom: calc(var(--relocation-height) * -1);
          left: 0;
          right: 0;
        }

        .hero-theme-toggle {
          position: absolute;
          top: 70px;
          right: 5%;
          z-index: 10;
        }

        @media (min-width: 1140px) {
          header {
            --header-desktop-max-height: 950px;

            display: flex;
            align-items: center;
            background: url("/vectors/hero.svg") no-repeat;
            background-position: top right;
            background-size: cover;
            width: 100%;
            height: 100%;
            max-height: var(--header-desktop-max-height);
            margin-bottom: 0;
          }

          .hero-text {
            align-items: flex-start;
          }

          .hero-layout {
            flex-direction: row;
            justify-content: center;
          }

          .hero-photo {
            --photo-desktop-min-width: 500px;

            max-height: 100%;
            object-fit: contain;
            align-self: flex-end;
            min-width: var(--photo-desktop-min-width);
            margin-top: 100px;
          }

          .hero-logo {
            position: absolute;
            top: 30px;
          }

          .hero-fullname {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }

          .hero-fullname strong {
            -webkit-text-stroke: 3px var(--black);
          }

          .hero-relocation {
            position: relative;
            bottom: 0;
          }
        }

        @media print {
          header {
            box-shadow: none !important;
            min-height: auto !important;
          }

          .hero-theme-toggle {
            display: none !important;
          }

          .hero-layout {
            gap: 30px;
          }

          .hero-photo {
            max-width: 400px !important;
            max-height: 400px !important;
            object-fit: contain !important;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
