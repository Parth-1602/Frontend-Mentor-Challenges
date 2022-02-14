import * as React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import useClasses from "../src/useClasses";
import useStyles from "../styles/4-card-feature-section";
import FeatureCard from "../components/4-card-feature-section/FeatureCard";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const FourCardFeature = () => {
  const classes = useClasses(useStyles);
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div role="main" className={classes.main}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.topSection}>
          <Typography
            className={classes.mainHeadingOne}
            variant="h1"
            component="h1"
          >
            Reliable, efficient delivery
          </Typography>
          <Typography
            className={classes.mainHeadingTwo}
            variant="h1"
            component="h2"
          >
            Powered by Technology
          </Typography>
          <Typography
            className={classes.descriptionText}
            variant="subtitle1"
            component="p"
          >
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </Typography>
        </Box>
        <Box className={classes.cardsWrapper}>
          <FeatureCard
            borderColor="hsl(180, 62%, 55%)"
            title="Supervisor"
            description="Monitors activity to identify project roadblocks"
            icon="/images/4-card-feature-section/icon-supervisor.svg"
            marginBottom={smallDevice ? 24 : 0}
          />
          <Box className={classes.middleCards}>
            <FeatureCard
              borderColor="hsl(0, 78%, 62%)"
              marginBottom={smallDevice ? 24 : 24}
              title="Team Builder"
              description="Scans our talent network to create the optimal team for your project"
              icon="/images/4-card-feature-section/icon-team-builder.svg"
            />
            <FeatureCard
              borderColor="hsl(34, 97%, 64%)"
              marginBottom={smallDevice ? 24 : 0}
              title="Karma"
              description="Regularly evaluates our talent to ensure quality"
              icon="/images/4-card-feature-section/icon-karma.svg"
            />
          </Box>
          <FeatureCard
            borderColor="hsl(212, 86%, 64%)"
            marginBottom={smallDevice ? 24 : 0}
            title="Calculator"
            description="Uses data from past projects to provide better delivery estimates"
            icon="/images/4-card-feature-section/icon-calculator.svg"
          />
        </Box>
      </Box>
    </div>
  );
};

export default FourCardFeature;
