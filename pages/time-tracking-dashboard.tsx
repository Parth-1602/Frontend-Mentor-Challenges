import * as React from "react";
import useClasses from "../src/useClasses";
import { Box, Grid, Avatar, Typography } from "@mui/material";
import data from "../src/time-tracking-dashboard/data.json";
import Head from "next/head";
import useStyles from "../styles/time-tracking-dashboard";
import ActivityCard from "../components/time-tracking-dashboard/ActivityCard";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const periodEnum = Object.freeze({ 1: "daily", 2: "weekly", 3: "monthly" });

const TimeTrackingDashboard = () => {
  const classes = useClasses(useStyles);
  const [periodType, setPeriodType] = React.useState(periodEnum[1]);
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div role="main">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.contentWrapper}>
          <Box className={classes.leftCardWrapper}>
            <Box className={classes.profileCard}>
              <Avatar
                src="/images/time-tracking-dashboard/image-jeremy.png"
                className={classes.profileIcon}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={classes.profileCardSubText}
                >
                  Report for
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  className={classes.profileCardMainText}
                >
                  Jeremy Robson
                </Typography>
              </Box>
            </Box>
            <ul className={classes.actionButtonsList}>
              <li
                className={classes.listButton}
                onClick={() => setPeriodType(periodEnum[1])}
              >
                Daily
              </li>
              <li
                className={classes.listButton}
                onClick={() => setPeriodType(periodEnum[2])}
              >
                Weekly
              </li>
              <li
                className={classes.listButton}
                onClick={() => setPeriodType(periodEnum[3])}
              >
                Monthly
              </li>
            </ul>
          </Box>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={smallDevice ? 0 : 3}
            className={classes.gridContainer}
          >
            {data.map((activity, i) => {
              return (
                <ActivityCard
                  key={i}
                  title={activity.title}
                  timeframes={activity.timeframes}
                  periodType={periodType}
                  bgColor={activity.color}
                  designImage={activity.icon}
                />
              );
            })}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default TimeTrackingDashboard;
