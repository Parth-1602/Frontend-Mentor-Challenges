import * as React from "react";
import Head from "next/head";
import IntroSection from "../components/blogr-landing-page/IntroSection";
import Section1 from "../components/blogr-landing-page/Section1";
import Section2 from "../components/blogr-landing-page/Section2";
import Section3 from "../components/blogr-landing-page/Section3";
import Footer from "../components/blogr-landing-page/Footer";

const BlogrLandingPage = () => {
  return (
    <div role="main" style={{ backgroundColor: "hsla(0, 0%, 100%, 0.3)" }}>
      <Head>
        <title>Blogr</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass:wght@300;600&family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <IntroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default BlogrLandingPage;
