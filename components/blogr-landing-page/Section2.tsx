import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { section2Styles } from "./styles";

const Section2 = () => {
  const classes = useClasses(section2Styles);

  return (
    <Box className={classes.sectionWrapper}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/blogr-landing-page/illustration-phones.svg"
        alt="editor-icon"
        className={classes.heroImage}
      />
      <Box className={classes.contentWrapper}>
        <Typography
          variant="h2"
          component="h2"
          className={classes.sectionHeading}
        >
          State of the Art Infrastructure
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.description}
        >
          With reliability and speed for ultra-fast connectivity. This ensures
          your site will load instantly, no matter where your readers are,
          keeping your site competitive.
        </Typography>
      </Box>
    </Box>
  );
};

export default Section2;
