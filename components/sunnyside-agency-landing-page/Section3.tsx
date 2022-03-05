import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { section3Styles } from "./styles";

const Section3 = () => {
  const classes = useClasses(section3Styles);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.sectionWrapper}>
      <Box className={classes.leftCard}>
        {isSmall ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sunnyside-agency-landing-page/mobile/image-graphic-design.jpg"
              alt="section-image"
              className={classes.cardImage}
            />
          </>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sunnyside-agency-landing-page/desktop/image-graphic-design.jpg"
              alt="section-image"
              className={classes.cardImage}
            />
          </>
        )}
        <Box className={classes.infoWrapper}>
          <Typography
            variant="h3"
            component="h3"
            className={`${classes.cardHeading} ${classes.graphicCard}`}
          >
            Graphic Design
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={`${classes.cardDescription} ${classes.graphicCard}`}
          >
            Great design makes you memorable. We deliver artwork that
            underscored your brand message and captures potential clients&apos;
            attention.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.rightCard}>
        {isSmall ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sunnyside-agency-landing-page/mobile/image-photography.jpg"
              alt="section-image"
              className={classes.cardImage}
            />
          </>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sunnyside-agency-landing-page/desktop/image-photography.jpg"
              alt="section-image"
              className={classes.cardImage}
            />
          </>
        )}
        <Box className={classes.infoWrapper}>
          <Typography
            variant="h3"
            component="h3"
            className={`${classes.cardHeading} ${classes.photographyCard}`}
          >
            Photography
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={`${classes.cardDescription} ${classes.photographyCard}`}
          >
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Section3;
