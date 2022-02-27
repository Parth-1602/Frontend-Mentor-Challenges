import * as React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import useClasses from "../src/useClasses";
import { challenges } from "../src/challenges";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Head from "next/head";
import useStyles from "../styles/style";
import ChallengeBox from "../components/landing-page/ChallengeBox";

const LandingPage = () => {
  const classes = useClasses(useStyles);

  return (
    <div role="main">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Typography variant="h1" component="h1" className={classes.mainHeading}>
          Frontend Mentor Challenges
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.description}
        >
          These are my solutions to Frontend Mentor Challenges using Next.JS,
          React and Material UI.
        </Typography>

        <Grid container className={classes.challengesWrapper} spacing={3}>
          {challenges.map((challenge_detail, i) => {
            return <ChallengeBox details={challenge_detail} key={i} />;
          })}
        </Grid>
      </Box>
      <Box className={classes.socialIconsWrapper}>
        <a
          href="https://www.facebook.com/parth.sharma.16021998/"
          target="_blank"
          rel="noreferrer"
        >
          <Avatar className={classes.socialIconContainer}>
            <FaFacebookF className={classes.socialIcon} />
          </Avatar>
        </a>
        <a
          href="https://github.com/Parth-1602/Frontend-Mentor-Challenges"
          target="_blank"
          rel="noreferrer"
        >
          <Avatar className={classes.socialIconContainer}>
            <FiGithub className={classes.socialIcon} />
          </Avatar>
        </a>
        <a
          href="https://instagram.com/parth_160298/"
          target="_blank"
          rel="noreferrer"
        >
          <Avatar className={classes.socialIconContainer}>
            <InstagramIcon className={classes.socialIcon} />
          </Avatar>
        </a>
      </Box>
    </div>
  );
};

export default LandingPage;
