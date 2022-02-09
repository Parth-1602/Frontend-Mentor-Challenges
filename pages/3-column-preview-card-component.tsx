import * as React from "react";
import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
import useClasses from "../src/useClasses";
import useStyles from "../styles/3-column-preview-card-component/styles";

const ThreeColumnPreviewCard = () => {
  const classes = useClasses(useStyles);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box role="main" className={classes.cardsWrapper}>
          <Box className={`${classes.card} ${classes.sedanCard}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/3-column-preview-card-component/icon-sedans.svg"
              alt="sedan-icon"
            />
            <Typography
              className={classes.cardHeading}
              variant="h1"
              component="h2"
              gutterBottom
            >
              SEDANS
            </Typography>
            <Typography
              className={classes.cardDescription}
              variant="subtitle2"
              component="p"
            >
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal doe cruising in the city or on your next road trip.
            </Typography>
            <Button className={`${classes.cardButton} ${classes.sedanButton}`}>
              Learn More
            </Button>
          </Box>
          <Box className={`${classes.card} ${classes.suvCard}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/3-column-preview-card-component/icon-suvs.svg"
              alt="suv-icon"
            />
            <Typography
              className={classes.cardHeading}
              variant="h1"
              component="h2"
              gutterBottom
            >
              SUVS
            </Typography>
            <Typography
              className={classes.cardDescription}
              variant="subtitle2"
              component="p"
            >
              Take an SUV for its spacious interior, power, and versataility.
              Perfect for your next family vacation and off-road adventures.
            </Typography>
            <Button className={`${classes.cardButton} ${classes.suvButton}`}>
              Learn More
            </Button>
          </Box>
          <Box className={`${classes.card} ${classes.luxuryCard}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/3-column-preview-card-component/icon-luxury.svg"
              alt="luxury-icon"
            />
            <Typography
              className={classes.cardHeading}
              variant="h1"
              component="h2"
              gutterBottom
            >
              LUXURY
            </Typography>
            <Typography
              className={classes.cardDescription}
              variant="subtitle2"
              component="p"
            >
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </Typography>
            <Button className={`${classes.cardButton} ${classes.luxuryButton}`}>
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ThreeColumnPreviewCard;
