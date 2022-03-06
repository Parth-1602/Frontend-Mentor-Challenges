import * as React from "react";
import Head from "next/head";
import MainSection from "../components/sunnyside-agency-landing-page/MainSection";
import Section1 from "../components/sunnyside-agency-landing-page/Section1";
import Section2 from "../components/sunnyside-agency-landing-page/Section2";
import Section3 from "../components/sunnyside-agency-landing-page/Section3";
import Testimonials from "../components/sunnyside-agency-landing-page/Testimonials";
import ImageGallery from "../components/sunnyside-agency-landing-page/ImageGallery";
import Footer from "../components/sunnyside-agency-landing-page/Footer";

const SunnySideAgencyLandingPage = () => {
  return (
    <div role="main">
      <Head>
        <title>Sunnyside</title>;
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Fraunces:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MainSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Testimonials />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default SunnySideAgencyLandingPage;
