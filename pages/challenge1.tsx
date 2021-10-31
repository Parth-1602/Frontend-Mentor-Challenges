import * as React from "react";
import Image from "next/image";
import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "../styles/challenge1/challenge1.module.css";

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

const Challenge1 = () => {
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
      <Box
        sx={{
          backgroundImage: {
            sm: "url(/images/1/pattern-background-desktop.svg)",
            xs: "url(/images/1/pattern-background-mobile.svg)",
          },
        }}
        className={styles.pageWrapper}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "300px",
              sm: "400px",
            },
          }}
          className={styles.card}
        >
          <Image
            src="/images/1/illustration-hero.svg"
            alt="Main Image"
            width="400px"
            height="200px"
            className={styles.heroImage}
          />
          <Box
            sx={{
              p: {
                xs: "24px",
                sm: "32px",
              },
            }}
            className={styles.contentWrapper}
          >
            <Typography
              className={styles.headingText}
              variant="h1"
              component="div"
              gutterBottom
            >
              Order Summary
            </Typography>
            <Typography
              className={styles.subtitleText}
              variant="subtitle2"
              component="div"
            >
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </Typography>
            <Box className={styles.planBox}>
              <Image
                src="/images/1/icon-music.svg"
                alt="Music Icon"
                width="40px"
                height="40px"
              />
              <Box className={styles.planDetails}>
                <Typography
                  className={styles.planDetailHeading}
                  variant="body1"
                >
                  Annual Plan
                </Typography>
                <Typography className={styles.planDetailInfo} variant="body1">
                  $59.99/year
                </Typography>
              </Box>
              <Typography className={styles.changeButton} variant="body1">
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

export default Challenge1;
