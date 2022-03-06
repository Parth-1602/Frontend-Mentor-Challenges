import * as React from "react";
import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import useClasses from "../src/useClasses";
import useStyles from "../styles/order-summary-component";

const ProceedButton = styled(Button)({
  boxShadow: "0px 8px 8px  hsl(225, 100%, 94%)",
  textTransform: "none",
  fontSize: 13,
  borderRadius: "8px",
  marginTop: "16px",
  width: "100%",
  height: 40,
  fontWeight: 700,
  backgroundColor: "hsl(245, 75%, 52%)",
  fontFamily: "Red Hat Display, sans-serif",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "hsl(245, 75%, 52%)",
    boxShadow: "0px 8px 8px  hsl(225, 100%, 94%)",
  },
  "&:active": {
    boxShadow: "0px 8px 8px  hsl(225, 100%, 94%)",
    backgroundColor: "hsl(245, 50%, 60%)",
  },
});

const CancelButton = styled(Button)({
  textTransform: "none",
  fontSize: 13,
  marginTop: "16px",
  width: "100%",
  height: 40,
  fontWeight: 700,
  backgroundColor: "transparent",
  fontFamily: "Red Hat Display, sans-serif",
  color: "hsl(224, 23%, 55%)",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:active": {
    color: "hsl(223, 47%, 23%)",
  },
});

const OrderSummary = () => {
  <title>Order Summary</title>;
  const classes = useClasses(useStyles);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box role="main" className={classes.card}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/order-summary-component/illustration-hero.svg"
            alt="Main Image"
            className={classes.heroImage}
          />
          <Box
            sx={{
              p: {
                xs: "24px",
                sm: "32px",
              },
            }}
            className={classes.contentWrapper}
          >
            <Typography
              className={classes.headingText}
              variant="h1"
              component="h1"
              gutterBottom
            >
              Order Summary
            </Typography>
            <Typography
              className={classes.subtitleText}
              variant="subtitle2"
              component="p"
            >
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </Typography>
            <Box className={classes.planBox}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/order-summary-component/icon-music.svg"
                alt="Music Icon"
                className={classes.musicIcon}
              />
              <Box className={classes.planDetails}>
                <Typography
                  className={classes.planDetailHeading}
                  variant="body1"
                  component="p"
                >
                  Annual Plan
                </Typography>
                <Typography
                  component="p"
                  className={classes.planDetailInfo}
                  variant="body1"
                >
                  $59.99/year
                </Typography>
              </Box>
              <Typography
                component="p"
                className={classes.changeButton}
                variant="body1"
              >
                <a>Change</a>
              </Typography>
            </Box>
            <ProceedButton disableRipple>Proceed to Payment</ProceedButton>
            <CancelButton disableRipple>Cancel Order</CancelButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default OrderSummary;
