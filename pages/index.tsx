import Head from "next/head";

import Hero from "../components/organisms/Hero";
import {
  absoluteUrl,
  defaultDescription,
  ogImagePath,
  pageTitle,
  personJsonLd,
} from "../data/site";
import Profile from "../components/organisms/Profile";
import Career from "../components/organisms/Career";
import Footer from "../components/organisms/Footer";
import Skills from "../components/organisms/Skills";
import Knowledge from "../components/organisms/Knowledge";
import { knowledge } from "../data/knowledge";
import { achievements } from "../data/achievements";

const Index = () => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={defaultDescription} />
        <link rel="canonical" href={absoluteUrl("/")} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:url" content={absoluteUrl("/")} />
        <meta property="og:image" content={absoluteUrl(ogImagePath)} />
        <meta
          property="og:image:alt"
          content="Guillermo Rodas — portrait photo"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={absoluteUrl(ogImagePath)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <div className="container">
        <Hero />
        <Profile />
        <Skills />
        <Career />
        <Knowledge title={["Recognition", "& community"]} items={achievements} />
        <Knowledge title={["Knowledge", "background"]} items={knowledge} />
        <Footer />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            gap: 60px;
          }
        `}
      </style>
    </>
  );
};

export default Index;
