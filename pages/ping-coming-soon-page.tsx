import { Box, Typography, Avatar } from "@mui/material";
import * as React from "react";
import useClasses from "../src/useClasses";
import Head from "next/head";
import CustomInput from "../components/ping-coming-soon-page/CustomInput";
import { FaFacebookF } from "react-icons/fa";
import useStyles from "../styles/ping-coming-soon-page";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const PingComingSoon = () => {
  const classes = useClasses(useStyles);

  return (
    <div role="main">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box>
        <Box className={classes.contentWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ping-coming-soon-page/logo.svg"
            alt="logo"
            className={classes.logo}
          />
          <Typography
            variant="h1"
            component="h1"
            className={classes.mainHeading}
          >
            We are launching{" "}
            <Typography
              variant="h1"
              component="span"
              className={classes.mainSpanHeading}
            >
              soon!
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.description}
          >
            Subscribe and get notified
          </Typography>
          <CustomInput />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ping-coming-soon-page/illustration-dashboard.png"
            alt="dashboard-image"
            className={classes.mainImage}
          />
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
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.copyrightText}
          >
            &copy; Copyright Ping. All rights reserved
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default PingComingSoon;
