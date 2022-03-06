import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../src/useClasses";
import Head from "next/head";
import useStyles from "../styles/single-price-grid-component";

const SinglePriceComponent = () => {
  const classes = useClasses(useStyles);

  return (
    <div role="main">
      <Head>
        <title>Single Pricing Grid</title>;
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.card}>
          <Box className={classes.topCard}>
            <Typography
              variant="h1"
              component="h1"
              className={classes.topCardHeading}
            >
              Join our community
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              className={classes.topCardSubHeading}
            >
              30-day, hassle-free money back guarantee
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.topCardDescription}
            >
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills
            </Typography>
          </Box>
          <Box className={classes.bottomCard}>
            <Box className={classes.leftCard}>
              <Typography
                variant="h2"
                component="h2"
                className={classes.leftCardSubHeading}
              >
                Monthly Subscription
              </Typography>
              <Box className={classes.priceWrapper}>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={classes.planPrice}
                >
                  $29
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={classes.spanText}
                >
                  per month
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.leftCardDescription}
              >
                Full access for less than $1 a day
              </Typography>
              <button className={classes.signUpButton}>Sign Up</button>
            </Box>
            <Box className={classes.rightCard}>
              <Typography
                variant="h2"
                component="h2"
                className={classes.rightCardSubHeading}
              >
                Why Us
              </Typography>
              <ul className={classes.featuresList}>
                <li className={classes.listItem}>
                  Tutorials by industry experts
                </li>
                <li className={classes.listItem}>Peer & expert code review</li>
                <li className={classes.listItem}>Coding exercises</li>
                <li className={classes.listItem}>Access to our GitHub repos</li>
                <li className={classes.listItem}>Community forum</li>
                <li className={classes.listItem}>Flashcard decks</li>
                <li className={classes.listItem}>New videos every week</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SinglePriceComponent;
