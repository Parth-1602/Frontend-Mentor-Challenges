import * as React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import useClasses from "../src/useClasses";
import useStyles from "../styles/challenge1/styles";

const Challenge1 = () => {
  const classes = useClasses(useStyles);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box role="main" className={classes.card}>
          <Box
            sx={{
              p: {
                xs: "12px",
                sm: "16px",
              },
            }}
            className={classes.contentWrapper}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              role="img"
              src="/images/1/image-qr-code.png"
              alt="Main Image"
              width="100%"
              height="250px"
              className={classes.qrImage}
            />
            <Typography
              role="heading"
              className={classes.headingText}
              variant="h1"
              component="h1"
              gutterBottom
            >
              Improve your front-end skills by building projects
            </Typography>
            <Typography
              role="description"
              className={classes.subtitleText}
              variant="subtitle2"
              component="p"
            >
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Challenge1;
