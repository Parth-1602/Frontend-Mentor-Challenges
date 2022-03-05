import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { section1Styles } from "./styles";

const Section1 = () => {
  const classes = useClasses(section1Styles);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.sectionWrapper}>
      <Box className={classes.leftCard}>
        <Box className={classes.contentWrapper}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.cardHeading}
          >
            Transform your brand
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.cardDescription}
          >
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </Typography>
          <button className={classes.learnMoreButton}>learn more</button>
        </Box>
      </Box>
      <Box className={classes.rightCard}>
        {isSmall ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sunnyside-agency-landing-page/mobile/image-transform.jpg"
              alt="section-image"
              className={classes.sectionImage}
            />
          </>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sunnyside-agency-landing-page/desktop/image-transform.jpg"
              alt="section-image"
              className={classes.sectionImage}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Section1;
