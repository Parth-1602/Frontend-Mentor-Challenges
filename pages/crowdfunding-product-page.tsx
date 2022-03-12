import * as React from "react";
import { Box, GlobalStyles } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Head from "next/head";
import useClasses from "../src/useClasses";
import useStyles from "../styles/crowdfunding-product-page";
import ProductCard from "../components/crowdfunding-product-page/ProductCard";
import StatsCard from "../components/crowdfunding-product-page/StatsCard";
import PledgeCard from "../components/crowdfunding-product-page/PledgeCard";
import ModalWrapper from "../components/crowdfunding-product-page/ModalWrapper";
import ModalAction from "../components/crowdfunding-product-page/ModalAction";
import ModalSuccess from "../components/crowdfunding-product-page/ModalSuccess";
import AppBar from "../components/crowdfunding-product-page/AppBar";

const globalStyles = {
  "*::-webkit-scrollbar": {
    width: 4,
    height: 4,
  },
  "*::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "hsl(176, 72%, 28%)",
    outline: "1px solid transparent",
    borderRadius: 2,
  },
};

const CrowdfundingProductPage = () => {
  const classes = useClasses(useStyles);
  const [isPledgeModal, setIsPledgeModal] = React.useState(false);
  const [isSuccessModal, setIsSuccesModal] = React.useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div role="main">
      <Head>
        <title>Crowdfunding Product Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles styles={globalStyles} />
      <Box className={classes.pageWrapper}>
        <ModalWrapper show={isPledgeModal} width={750}>
          <ModalAction
            handlePledgeModal={setIsPledgeModal}
            handleSuccessModal={setIsSuccesModal}
          />
        </ModalWrapper>
        <ModalWrapper show={isSuccessModal} width={550}>
          <ModalSuccess handleSuccessModal={setIsSuccesModal} />
        </ModalWrapper>
        <Box className={classes.imageBarWrapper}>
          <AppBar />
          {isSmall ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/crowdfunding-product-page/image-hero-mobile.jpg"
              alt="hero-logo"
              className={classes.heroImage}
            />
          ) : (
            //eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/crowdfunding-product-page/image-hero-desktop.jpg"
              alt="hero-logo"
              className={classes.heroImage}
            />
          )}
        </Box>
        <Box className={classes.contentWrapper}>
          <ProductCard openPledgeModal={() => setIsPledgeModal(true)} />
          <StatsCard />
          <PledgeCard openPledgeModal={() => setIsPledgeModal(true)} />
        </Box>
      </Box>
    </div>
  );
};

export default CrowdfundingProductPage;
