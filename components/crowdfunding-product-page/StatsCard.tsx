import * as React from "react";
import useClasses from "../../src/useClasses";
import { Box, Typography } from "@mui/material";
import { statsCardStyles } from "./styles";

const StatsCard = () => {
  const classes = useClasses(statsCardStyles);

  return (
    <Box className={classes.statsWrapper}>
      <Box className={classes.statsInnerWrapper}>
        <Box className={classes.statWrapper}>
          <Typography variant="h2" component="h2" className={classes.stat}>
            $89,914
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.statDescription}
          >
            of $100,000 backed
          </Typography>
        </Box>
        <Box className={classes.statWrapper}>
          <Typography variant="h2" component="h2" className={classes.stat}>
            5,007
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.statDescription}
          >
            total backers
          </Typography>
        </Box>
        <Box className={classes.statWrapper}>
          <Typography variant="h2" component="h2" className={classes.stat}>
            56
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.statDescription}
          >
            days left
          </Typography>
        </Box>
      </Box>
      <Box className={classes.progressBar}>
        <Box className={classes.progressIndicator}></Box>
      </Box>
    </Box>
  );
};

export default StatsCard;
