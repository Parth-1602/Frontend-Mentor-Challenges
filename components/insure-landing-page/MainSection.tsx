import * as React from "react";
import useClasses from "../../src/useClasses";
import { Box, Typography } from "@mui/material";
import { mainSectionStyles } from "./styles";

const MainSection = () => {
  const classes = useClasses(mainSectionStyles);

  return (
    <Box className={classes.sectionWrapper}>
      <Box className={classes.backgroundWrapper}></Box>
      <Box className={classes.designWrapper}></Box>
      <Box className={classes.contentBox}>
        <Box>
          <hr className={classes.darkDivider} />
          <Box className={classes.mainHeadingWrapper}>
            <Typography
              variant="h1"
              component="h1"
              className={classes.mainHeading}
            >
              Humanizing
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              className={classes.mainHeading}
            >
              your insurance.
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.description}
          >
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that&apos;s right
            for you. Ensure you and your loved ones are protected.
          </Typography>
          <button className={classes.mainSectionButton}>VIEW PLANS</button>
        </Box>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/insure-landing-page/image-intro-desktop.jpg"
          alt="intro-image"
          className={classes.heroImage}
        />
      </Box>
      <hr className={classes.lightDivider} />
    </Box>
  );
};

export default MainSection;
