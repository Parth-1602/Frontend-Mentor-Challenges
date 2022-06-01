import * as React from "react";
import useClasses from "../../src/useClasses";
import { Box, Typography } from "@mui/material";
import { mainSectionMobileStyles } from "./styles";

const MainSectionMobile = () => {
  const classes = useClasses(mainSectionMobileStyles);

  return (
    <Box>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/insure-landing-page/image-intro-mobile.jpg"
        alt="intro-image"
        className={classes.heroImage}
      />
      <Box className={classes.sectionWrapper}>
        <Box className={classes.backgroundWrapper}></Box>
        <Box className={classes.designWrapper}></Box>
        <Box className={classes.contentBox}>
          <Box>
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
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.description}
            >
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that&apos;s
              right for you. Ensure you and your loved ones are protected.
            </Typography>
            <button className={classes.mainSectionButton}>VIEW PLANS</button>
          </Box>
        </Box>
        <hr className={classes.lightDivider} />
      </Box>
    </Box>
  );
};

export default MainSectionMobile;
