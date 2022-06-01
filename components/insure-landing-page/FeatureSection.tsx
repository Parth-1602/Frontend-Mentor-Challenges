import * as React from "react";
import useClasses from "../../src/useClasses";
import { Avatar, Box, Typography } from "@mui/material";
import { featureSectionStyles } from "./styles";

const FeatureSection = () => {
  const classes = useClasses(featureSectionStyles);

  return (
    <Box className={classes.sectionWrapper}>
      <Typography variant="h2" component="h2" className={classes.mainHeading}>
        We&apos;re different
      </Typography>
      <Box className={classes.featuresWrapper}>
        <Box className={classes.featureWrapper}>
          <Avatar className={classes.iconContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/insure-landing-page/icon-snappy-process.svg"
              alt="feature-icon"
            />
          </Avatar>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.featureHeading}
          >
            Snappy Process
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.featureDescription}
          >
            Our application process can be completed in minutes, not hours.
            Dona&pos;t get struck filling in tedious forms.
          </Typography>
        </Box>
        <Box className={classes.featureWrapper}>
          <Avatar className={classes.iconContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/insure-landing-page/icon-affordable-prices.svg"
              alt="feature-icon"
            />
          </Avatar>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.featureHeading}
          >
            Affordable Prices
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.featureDescription}
          >
            We don&apos;t want you worrying about high monthly costs. Our prices
            may be low, but we still offer the best coverage possible.
          </Typography>
        </Box>
        <Box className={classes.featureWrapper}>
          <Avatar className={classes.iconContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/insure-landing-page/icon-people-first.svg"
              alt="feature-icon"
            />
          </Avatar>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.featureHeading}
          >
            People First
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.featureDescription}
          >
            Our plans aren&apos;t full of conditions and clauses to prevent
            payouts. We make sure you&apos;re covered when you need it.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureSection;
