import * as React from "react";
import useClasses from "../src/useClasses";
import { Avatar, Box, Typography } from "@mui/material";
import useStyles from "../styles/huddle-landing-page";
import { FaFacebookF } from "react-icons/fa";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Head from "next/head";

const HuddleLanding = () => {
  const classes = useClasses(useStyles);

  return (
    <div role="main">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/huddle-landing-page/logo.svg"
          alt="logo"
          className={classes.logo}
        />
        <Box className={classes.centerContent}>
          <Box className={classes.contentWrapper}>
            <Box className={classes.leftCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/huddle-landing-page/illustration-mockups.svg"
                alt="main-image"
                className={classes.mainImage}
              />
            </Box>
            <Box className={classes.rightCard}>
              <Box className={classes.headingWrapper}>
                <Typography
                  variant="h1"
                  component="h1"
                  className={classes.mainHeading}
                >
                  Build The Community
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  className={classes.mainHeading}
                >
                  Your Fans Will Love
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.description}
              >
                Huddle re-imagines the way we build communities. You have a
                voice, but so does our audience. Create connections with your
                users as you engage in genuine discussion.
              </Typography>
              <Box className={classes.buttonWrapper}>
                <button className={classes.registerButton}>Register</button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.socialIconsWrapper}>
          <a href="#">
            <Avatar className={classes.socialIconContainer}>
              <FaFacebookF className={classes.facebookIcon} />
            </Avatar>
          </a>
          <a href="#">
            <Avatar className={classes.socialIconContainer}>
              <TwitterIcon className={classes.socialIcon} />
            </Avatar>
          </a>
          <a href="#">
            <Avatar className={classes.socialIconContainer}>
              <InstagramIcon className={classes.socialIcon} />
            </Avatar>
          </a>
        </Box>
      </Box>
    </div>
  );
};

export default HuddleLanding;
