import * as React from "react";
import Image from "next/image";
import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import useClasses from "../src/useClasses";
import useStyles from "../styles/challenge2/styles";

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

const Challenge2 = () => {
  const classes = useClasses(useStyles);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.card}>
          <Box className={classes.cardContent}>
            <Typography
              className={classes.headingText}
              variant="h1"
              component="div"
              gutterBottom
            >
              Get insights that help your business grow.
            </Typography>
            <Typography
              className={classes.subtitleText}
              variant="subtitle2"
              component="div"
            >
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience and overall efficiency.
            </Typography>
          </Box>
          <Image
            src="/images/2/image-header-desktop.jpg"
            alt="Main Image"
            width="500px"
            height="200px"
            className={classes.heroImage}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Challenge2;
