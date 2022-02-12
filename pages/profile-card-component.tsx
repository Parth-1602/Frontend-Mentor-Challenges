import * as React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import useClasses from "../src/useClasses";
import useStyles from "../styles/profile-card-component";

const ProfileCard = () => {
  const classes = useClasses(useStyles);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box role="main" className={classes.card}>
          <Box className={classes.cardAvatarWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile-card-component/bg-pattern-card.svg"
              alt="Card Background"
              className={classes.cardBg}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile-card-component/image-victor.jpg"
              alt="Avatar Image"
              className={classes.avatar}
            />
          </Box>
          <Box className={classes.contentWrapper}>
            <Box className={classes.topContent}>
              <Typography
                className={classes.profileName}
                variant="h1"
                component="h1"
                gutterBottom
              >
                Victor Crest
                <Typography
                  className={classes.profileAge}
                  variant="h1"
                  component="span"
                  gutterBottom
                >
                  26
                </Typography>
              </Typography>
              <Typography
                className={classes.profileLocation}
                variant="subtitle2"
                component="p"
              >
                London
              </Typography>
            </Box>
            <hr className={classes.divider} />
            <Box className={classes.statsBox}>
              <Box className={classes.statWrapper}>
                <Typography
                  className={classes.statValue}
                  variant="body1"
                  component="p"
                >
                  80K
                </Typography>
                <Typography
                  component="p"
                  className={classes.statName}
                  variant="body1"
                >
                  Followers
                </Typography>
              </Box>
              <Box className={classes.statWrapper}>
                <Typography
                  className={classes.statValue}
                  variant="body1"
                  component="p"
                >
                  803K
                </Typography>
                <Typography
                  component="p"
                  className={classes.statName}
                  variant="body1"
                >
                  Likes
                </Typography>
              </Box>
              <Box className={classes.statWrapper}>
                <Typography
                  className={classes.statValue}
                  variant="body1"
                  component="p"
                >
                  1.4K
                </Typography>
                <Typography
                  component="p"
                  className={classes.statName}
                  variant="body1"
                >
                  Photos
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProfileCard;
