import * as React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import useClasses from "../src/useClasses";
import useStyles from "../styles/stats-preview-card-component/styles";

const Challenge4 = () => {
  const classes = useClasses(useStyles);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box role="main" className={classes.card}>
          <Box className={classes.mobileImageCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/stats-preview-card-component/image-header-mobile.jpg"
              alt="Main Image"
              className={classes.mobileImage}
            />
            <Box className={classes.mobileOverlay}></Box>
          </Box>

          <Box className={classes.cardLeft}>
            <Typography
              className={classes.headingText}
              variant="h1"
              component="h1"
              gutterBottom
            >
              Get{" "}
              <Typography
                className={classes.spanText}
                variant="h1"
                component="span"
                gutterBottom
              >
                insights
              </Typography>{" "}
              that help
              <br /> your business grow.
            </Typography>
            <Typography
              className={classes.subtitleText}
              variant="subtitle2"
              component="p"
            >
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </Typography>
            <Box className={classes.statsBox}>
              <Box className={classes.statGroup}>
                <Typography
                  className={classes.statValue}
                  variant="subtitle2"
                  component="h2"
                >
                  10k+
                </Typography>
                <Typography
                  className={classes.statName}
                  variant="subtitle2"
                  component="p"
                >
                  COMPANIES
                </Typography>
              </Box>
              <Box className={classes.statGroup}>
                <Typography
                  className={classes.statValue}
                  variant="subtitle2"
                  component="h2"
                >
                  314
                </Typography>
                <Typography
                  className={classes.statName}
                  variant="subtitle2"
                  component="p"
                >
                  TEMPLATES
                </Typography>
              </Box>
              <Box className={classes.statGroup}>
                <Typography
                  className={classes.statValue}
                  variant="subtitle2"
                  component="h2"
                >
                  12M+
                </Typography>
                <Typography
                  className={classes.statName}
                  variant="subtitle2"
                  component="p"
                >
                  QUERIES
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.cardRight}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/stats-preview-card-component/image-header-desktop.jpg"
              alt="Main Image"
              className={classes.desktopImage}
            />
            <Box className={classes.overlay}></Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Challenge4;
