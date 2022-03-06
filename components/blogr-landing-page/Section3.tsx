import * as React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import useClasses from "../../src/useClasses";
import { section3Styles } from "./styles";
import { useTheme } from "@mui/material/styles";

const Section3 = () => {
  const classes = useClasses(section3Styles);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.sectionWrapper}>
      {isSmall ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blogr-landing-page/illustration-laptop-mobile.svg"
            alt="editor-icon"
            className={classes.heroMobileImage}
          />
        </>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blogr-landing-page/illustration-laptop-desktop.svg"
            alt="editor-icon"
            className={classes.heroImage}
          />
        </>
      )}
      <Box className={classes.contentWrapper}>
        <Box>
          <Typography
            variant="h3"
            component="h3"
            className={classes.sectionSubHeading}
          >
            Free, open, simple
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.description}
          >
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features suc as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics, The architecture is clean and is relatively easy to
            learn.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            component="h3"
            className={classes.sectionSubHeading}
          >
            Powerful tooling
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.description}
          >
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Section3;
