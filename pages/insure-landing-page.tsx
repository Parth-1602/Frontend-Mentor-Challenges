import * as React from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "../components/insure-landing-page/Header";
import MainSection from "../components/insure-landing-page/MainSection";
import FeatureSection from "../components/insure-landing-page/FeatureSection";
import MoreSection from "../components/insure-landing-page/MoreSection";
import Footer from "../components/insure-landing-page/Footer";
import MainSectionMobile from "../components/insure-landing-page/MainSectionMobile";

const InsureLanding = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div role="main">
      <Head>
        <title>Insure</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box>
        <Header />
        {isSmall ? <MainSectionMobile /> : <MainSection />}
        <FeatureSection />
        <MoreSection />
        <Footer />
      </Box>
    </div>
  );
};

export default InsureLanding;
