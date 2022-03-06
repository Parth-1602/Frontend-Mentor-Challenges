import * as React from "react";
import useClasses from "../src/useClasses";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useStyles from "../styles/intro-component-with-signup-form";
import SignupForm from "../components/intro-component-with-signup-form/SignupForm";

const IntroSignUp = () => {
  const classes = useClasses(useStyles);
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div role="main">
      <Head>
        <title>Intro Component Sign Up</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.mainContainer}>
        <Box className={classes.leftBox}>
          <Typography
            variant="h1"
            component="h1"
            className={classes.mainHeading}
          >
            Learning to code by watching others
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.descriptionText}
          >
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </Typography>
        </Box>
        <Box className={classes.rightBox}>
          <Box className={classes.offerBox}>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.offerText}
            >
              Try it free 7 days{" "}
              <Typography
                variant="subtitle1"
                component="span"
                className={classes.offerSpanText}
              >
                then $20/mo. thereafter
              </Typography>
            </Typography>
          </Box>
          <SignupForm />
        </Box>
      </Box>
    </div>
  );
};

export default IntroSignUp;
