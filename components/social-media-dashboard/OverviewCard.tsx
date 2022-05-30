import { Box, Typography } from "@mui/material";
import * as React from "react";
import useClasses from "../../src/useClasses";
import { overviewCardStyles } from "./styles";

const OverviewCard = ({
  socialIcon,
  overviewHeading,
  stat,
  isIncreased,
  changedAmount,
}) => {
  const classes = useClasses(overviewCardStyles);

  const suffix = (statValue) => {
    if (statValue >= 10000 && statValue <= 999999) {
      return (statValue / 1000).toFixed(0) + "k";
    } else if (statValue >= 1000000 && statValue <= 99999999) {
      return (statValue / 1000000).toFixed(0) + "m";
    } else {
      return statValue;
    }
  };

  return (
    <Box className={classes.cardWrapper}>
      <Box className={classes.overviewHeadingWrapper}>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.overviewHeading}
        >
          {overviewHeading}
        </Typography>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={socialIcon} alt="social-icon" />
      </Box>
      <Box className={classes.statsWrapper}>
        <Typography variant="subtitle1" component="p" className={classes.stat}>
          {suffix(stat)}
        </Typography>
        <Box className={classes.compareWrapper}>
          {isIncreased ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/social-media-dashboard/icon-up.svg"
              alt="up-icon"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/social-media-dashboard/icon-down.svg"
              alt="down-icon"
            />
          )}
          <Typography
            variant="subtitle1"
            component="p"
            style={{
              color: isIncreased ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)",
            }}
            className={classes.todayText}
          >
            {changedAmount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewCard;
