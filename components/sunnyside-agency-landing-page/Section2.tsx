import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { section2Styles } from "./styles";

const Section2 = () => {
  const classes = useClasses(section2Styles);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.sectionWrapper}>
      <Box className={classes.leftCard}>
        {isSmall ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sunnyside-agency-landing-page/mobile/image-stand-out.jpg"
              alt="section-image"
              className={classes.sectionImage}
            />
          </>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sunnyside-agency-landing-page/desktop/image-stand-out.jpg"
              alt="section-image"
              className={classes.sectionImage}
            />
          </>
        )}
      </Box>
      <Box className={classes.rightCard}>
        <Box className={classes.contentWrapper}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.cardHeading}
          >
            Stand out to the right audience
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.cardDescription}
          >
            Using a collaborative formula of designers, researchers,
            photographers, videograpgers, and copywriters, we&apos;ll build and
            extend your brand in digital places.
          </Typography>
          <button className={classes.learnMoreButton}>learn more</button>
        </Box>
      </Box>
    </Box>
  );
};

export default Section2;
