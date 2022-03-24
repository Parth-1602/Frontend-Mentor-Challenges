import * as React from "react";
import useClasses from "../src/useClasses";
import Head from "next/head";
import MainSection from "../components/loopstudios-landing-page/MainSection";
import AboutSection from "../components/loopstudios-landing-page/AboutSection";
import Creations from "../components/loopstudios-landing-page/Creations";
import Footer from "../components/loopstudios-landing-page/Footer";

const LoopstudiosLanding = () => {
  return (
    <div role="main">
      <Head>
        <title>Loopstudios</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MainSection />
      <AboutSection />
      <Creations />
      <Footer />
    </div>
  );
};

export default LoopstudiosLanding;
