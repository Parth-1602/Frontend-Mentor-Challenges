import * as React from "react";
import useClasses from "../../src/useClasses";
import { Box, Typography } from "@mui/material";
import { moreSectionStyles } from "./styles";

const MoreSection = () => {
  const classes = useClasses(moreSectionStyles);

  return (
    <Box className={classes.sectionWrapper}>
      <Box className={classes.contentBox}>
        <Box>
          <Typography
            component="h2"
            variant="h2"
            className={classes.mainHeading}
          >
            Find out more
          </Typography>
          <Typography
            component="h2"
            variant="h2"
            className={classes.mainHeading}
          >
            about how we work
          </Typography>
        </Box>
        <button className={classes.moreSectionButton}>HOW WE WORK</button>
      </Box>
    </Box>
  );
};

export default MoreSection;
