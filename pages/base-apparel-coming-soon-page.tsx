import * as React from "react";
import useClasses from "../src/useClasses";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import CustomInput from "../components/base-apparel-coming-soon-page/CustomInput";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useStyles from "../styles/base-apparel-coming-soon-page";

const BaseApparelComingSoon = () => {
  const classes = useClasses(useStyles);
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div role="main">
      <Head>
        <title>Base Apparel</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.mainContainer}>
        {smallDevice ? (
          <Box className={classes.mobileLogo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/base-apparel-coming-soon-page/logo.svg"
              alt="logo"
            />
          </Box>
        ) : null}
        {smallDevice ? (
          <Box className={classes.mobileHeroImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/base-apparel-coming-soon-page/hero-mobile.jpg"
              alt="mobile-image"
              className={classes.mobileImage}
            />
          </Box>
        ) : null}
        <Box className={classes.leftCard}>
          {!smallDevice ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/base-apparel-coming-soon-page/logo.svg"
                alt="logo"
              />
            </>
          ) : null}
          <Box className={classes.centerContent}>
            <Typography
              className={classes.mainHeading1}
              variant="h1"
              component="h1"
            >
              WE&apos;RE
            </Typography>
            <Typography
              className={classes.mainHeading2}
              variant="h1"
              component="h1"
            >
              COMING
            </Typography>
            <Typography
              className={classes.mainHeading2}
              variant="h1"
              component="h1"
            >
              SOON
            </Typography>
            <Typography
              className={classes.description}
              variant="subtitle1"
              component="p"
            >
              Hello fellow shoppers! We&apos;re currently building our new
              fashion store. Add your email below to stay up-to-date with
              announcements and our launch deals.
            </Typography>
            <CustomInput />
          </Box>
        </Box>
        {!smallDevice ? (
          <Box className={classes.rightCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/base-apparel-coming-soon-page/hero-desktop.jpg"
              alt="hero-image"
              className={classes.heroImage}
            />
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default BaseApparelComingSoon;
