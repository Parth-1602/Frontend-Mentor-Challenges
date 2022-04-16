import * as React from "react";
import { Box, Typography, Hidden } from "@mui/material";
import useClasses from "../src/useClasses";
import Head from "next/head";
import useStyles from "../styles/snap-landing-page";
import MobileMenu from "../components/snap-landing-page/MobileMenu";
import AppBar from "../components/snap-landing-page/AppBar";
import Clients from "../components/snap-landing-page/Clients";
import MobileMenuContent from "../components/snap-landing-page/MobileMenuContent";

const SnapLandingPage = () => {
  const classes = useClasses(useStyles);
  const [isMobileMenu, setIsMobileMenu] = React.useState(false);

  return (
    <div role="main">
      <Head>
        <title>Snap</title>;
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <AppBar setDropDown={() => setIsMobileMenu(true)} />
        <Hidden mdUp>
          <Box>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/snap-landing-page/image-hero-mobile.png"
              alt="mobile-image"
              className={classes.mobileHeroImage}
            />
          </Box>
        </Hidden>
        <Box className={classes.mainContainer}>
          <Box className={classes.leftCard}>
            <Box className={classes.mainHeadingWrapper}>
              <Hidden mdDown>
                <Typography
                  component="h1"
                  variant="h1"
                  className={classes.mainHeading}
                >
                  Make
                </Typography>
                <Typography
                  component="h2"
                  variant="h2"
                  className={classes.mainHeading}
                >
                  remote work
                </Typography>
              </Hidden>
              <Hidden mdUp>
                <Typography
                  component="h2"
                  variant="h2"
                  className={classes.mobileHeading}
                >
                  Make remote work
                </Typography>
              </Hidden>
            </Box>
            <Typography
              component="p"
              variant="subtitle1"
              className={classes.description}
            >
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </Typography>
            <button className={classes.learnMoreButton}>Learn more</button>
            <Clients />
          </Box>
          <Hidden mdDown>
            <Box className={classes.rightCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/snap-landing-page/image-hero-desktop.png"
                alt="hero-image"
                className={classes.heroImage}
              />
            </Box>
          </Hidden>
        </Box>
        {isMobileMenu && (
          <MobileMenu onClose={() => setIsMobileMenu(false)}>
            <MobileMenuContent onClose={() => setIsMobileMenu(false)} />
          </MobileMenu>
        )}
      </Box>
    </div>
  );
};

export default SnapLandingPage;
