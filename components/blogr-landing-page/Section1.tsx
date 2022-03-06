import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useClasses from "../../src/useClasses";
import { section1Styles } from "./styles";

const Section1 = () => {
  const classes = useClasses(section1Styles);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.sectionWrapper}>
      {!isSmall && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blogr-landing-page/illustration-editor-desktop.svg"
            alt="editor-icon"
            className={classes.heroImage}
          />
        </>
      )}
      <Box className={classes.contentWrapper}>
        <Typography
          variant="h2"
          component="h2"
          className={classes.sectionHeading}
        >
          Designed for the future
        </Typography>
        {isSmall && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/blogr-landing-page/illustration-editor-mobile.svg"
              alt="editor-icon"
              className={classes.heroMobileImage}
            />
          </>
        )}
        <Box className={classes.contentWrapper}>
          <Typography
            variant="h3"
            component="h3"
            className={classes.sectionSubHeading}
          >
            Introducing an extensible editor
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.description}
          >
            Blog featues an exceedingly intuitive interface which lets you focus
            on one thing: creating content. The editor supports management of
            multiple blogs and allows manipulation of embeds such as images,
            videos, and Markdown. Extensibility with plugins and themes provide
            easy ways to add functionality or change the looks of a blog
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            component="h3"
            className={classes.sectionSubHeading}
          >
            Robust content management
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.description}
          >
            Flexible content management enables users to easily move through
            posts. Increase usability of your blog by adding customized
            categories, sections format, or flow. With this functionality,
            you&apos;re in full control.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
