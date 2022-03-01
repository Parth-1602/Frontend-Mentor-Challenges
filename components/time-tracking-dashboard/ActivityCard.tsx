import { Grid, Typography, Box } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import * as React from "react";
import useClasses from "../../src/useClasses";
import useStyles from "./styles";

const periodTextEnum = Object.freeze({
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
});

const ActivityCard = ({
  timeframes,
  title,
  bgColor,
  designImage,
  periodType,
}) => {
  const classes = useClasses(useStyles);
  const [currentTime, setCurrentTime] = React.useState(null);
  const [previousTime, setPreviousTime] = React.useState(null);
  const [lastText, setLastText] = React.useState(null);

  React.useEffect(() => {
    let requiredTimeFrames = timeframes[periodType];
    let requiredLastText = periodTextEnum[periodType];

    if (requiredLastText) {
      setLastText(requiredLastText);
    }

    if (periodType)
      if (
        requiredTimeFrames &&
        requiredTimeFrames.current &&
        requiredTimeFrames.previous
      ) {
        setCurrentTime(requiredTimeFrames.current);
        setPreviousTime(requiredTimeFrames.previous);
      }
  }, [periodType, timeframes]);

  return (
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
      <Box
        style={{
          background: `${bgColor} url(/images/time-tracking-dashboard/${designImage}) no-repeat 90% 0`,
        }}
        className={classes.designBox}
      >
        <Box className={classes.detailCard}>
          <Box className={classes.titleWrapper}>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.activityTitle}
            >
              {title}
            </Typography>
            <MoreHorizIcon className={classes.menuIcon} />
          </Box>
          <Box className={classes.mobileTimeFrameWrapper}>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.activityStat}
            >
              {`${currentTime ? currentTime : "0"}${
                currentTime > 1 ? "hrs" : "hr"
              }`}
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.lastActivityStat}
            >
              {lastText} -
              {`${previousTime ? previousTime : "0"}${
                previousTime > 1 ? "hrs" : "hr"
              }`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ActivityCard;
