import * as React from "react";
import Image from "next/image";
import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
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
        <Box className={classes.card}>
          <Box
            sx={{
              p: {
                xs: "12px",
                sm: "16px",
              },
            }}
            className={classes.contentWrapper}
          >
            <Image
              src="/images/1/image-qr-code.png"
              alt="Main Image"
              width="400px"
              height="400px"
              className={classes.qrImage}
            />
            <Typography
              className={classes.headingText}
              variant="h1"
              component="div"
              gutterBottom
            >
              Improve your front-end skills by building projects
            </Typography>
            <Typography
              className={classes.subtitleText}
              variant="subtitle2"
              component="div"
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
