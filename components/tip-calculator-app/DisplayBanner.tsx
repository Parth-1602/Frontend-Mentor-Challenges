import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import useStyles from "./styles";

const DisplayBanner = ({ mainHeading, subHeading, value }) => {
  const classes = useClasses(useStyles);
  return (
    <Box className={classes.calculatedAmountWrapper}>
      <Box>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.calculateMainLabel}
        >
          {mainHeading}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.calculateSubLabel}
        >
          {subHeading}
        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.calculatedAmount}
      >
        ${value}
      </Typography>
    </Box>
  );
};

export default DisplayBanner;
