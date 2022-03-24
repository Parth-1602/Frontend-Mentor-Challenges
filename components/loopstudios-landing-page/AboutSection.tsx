import * as React from "react";
import { Box, Hidden, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { aboutSectionStyles } from "./styles";

const AboutSection = () => {
  const classes = useClasses(aboutSectionStyles);

  return (
    <Box className={classes.sectionWrapper}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/loopstudios-landing-page/desktop/image-interactive.jpg"
        alt="section-image"
        className={classes.sectionImage}
      />
      <Box className={classes.contentWrapper}>
        <Typography variant="h3" component="h3" className={classes.mainHeading}>
          THE LEADER IN INTERACTIVE VR
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.description}
        >
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winging creations have transformed business through digital
          experiences that bind to their brand.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
