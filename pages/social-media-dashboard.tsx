import * as React from "react";
import useClasses from "../src/useClasses";
import { Box, Grid, Typography } from "@mui/material";
import useStyles from "../styles/social-media-dashboard";
import Header from "../components/social-media-dashboard/Header";
import Head from "next/head";
import socialSummaryData from "../src/social-media-dashboard/social-summary.json";
import overviewData from "../src/social-media-dashboard/overview.json";
import SocialSummaryCard from "../components/social-media-dashboard/SocialSummaryCard";
import OverviewCard from "../components/social-media-dashboard/OverviewCard";

const SocialMediaDashboard = ({ toggleSocialMediaDashboardTheme }) => {
  const classes = useClasses(useStyles);

  return (
    <div role="main">
      <Head>
        <title>Social Media Dashboard</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.backgroundPattern} />
        <Header toggleMode={toggleSocialMediaDashboardTheme} />
        <Grid
          container
          className={classes.socialSummaryCardsWrapper}
          columnSpacing={4}
          rowSpacing={4}
        >
          {socialSummaryData.map((data, i) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <SocialSummaryCard
                  indicatorColor={data.indicatorColor}
                  socialIcon={data.socialIcon}
                  socialName={data.socialName}
                  stat={data.stat}
                  statText={data.statText}
                  isIncreased={data.isIncreased}
                  changedAmount={data.changedAmount}
                />
              </Grid>
            );
          })}
        </Grid>
        <Typography
          variant="h2"
          component="h2"
          className={classes.overviewHeading}
        >
          Overview - Today
        </Typography>
        <Grid
          container
          className={classes.overviewCardsWrapper}
          columnSpacing={4}
          rowSpacing={4}
        >
          {overviewData.map((data, i) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <OverviewCard
                  socialIcon={data.socialIcon}
                  overviewHeading={data.overviewHeading}
                  stat={data.stat}
                  isIncreased={data.isIncreased}
                  changedAmount={data.changedAmount}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default SocialMediaDashboard;
