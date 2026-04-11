import Head from "next/head";
import { GetStaticProps } from "next";

import { printDescription, printPageTitle } from "../data/site";
import Profile from "../components/organisms/Profile";
import Career from "../components/organisms/Career";
import Footer from "../components/organisms/Footer";
import Skills from "../components/organisms/Skills";
import Knowledge from "../components/organisms/Knowledge";
import { ViewMode } from "../contexts/ViewModeContext";
import { knowledge } from "../data/knowledge";
import { achievements } from "../data/achievements";

const Print = () => {
  return (
    <>
      <Head>
        <title>{printPageTitle}</title>
        <meta name="description" content={printDescription} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <div className="container print-container">
        <Profile />
        <Skills />
        <Career />
        <Knowledge title={["Knowledge", "background"]} items={knowledge} />
        <Knowledge title={["Volunteer", "experience"]} items={achievements} />
        <Footer />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            gap: 60px;
          }

          @media print {
            .container {
              gap: 40px;
            }
          }
        `}
      </style>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ viewMode: ViewMode }> = async () => {
  return {
    props: {
      viewMode: 'flattened',
    },
  };
};

export default Print;
