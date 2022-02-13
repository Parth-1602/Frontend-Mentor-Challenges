import * as React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import useClasses from "../src/useClasses";
import useStyles from "../styles/article-preview-component";
import DesktopAuthorBox from "../components/article-preview-component/DektopAuthorBox";

const ArticlePreview = () => {
  const classes = useClasses(useStyles);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box role="main" className={classes.card}>
          <Box className={classes.mobileImageCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/stats-preview-card-component/image-header-mobile.jpg"
              alt="Main Image"
              className={classes.mobileImage}
            />
          </Box>

          <Box className={classes.cardLeft}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/article-preview-component/drawers.jpg"
              alt="main Image"
              className={classes.desktopImage}
            />
          </Box>
          <Box className={classes.cardRight}>
            <Typography
              className={classes.articleName}
              variant="h1"
              component="h1"
              gutterBottom
            >
              Shift the overall look and feel by addding these wonderful touches
              to furniture in your home
            </Typography>
            <Typography
              className={classes.descriptionText}
              variant="subtitle2"
              component="p"
            >
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I&apos;ve got some simple
              tips to help you make any room feel complete.
            </Typography>
            <DesktopAuthorBox
              avatarSrc="/images/article-preview-component/avatar-michelle.jpg"
              articleDate={"28 Jun 2020"}
              name={"Michellle Appleton"}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ArticlePreview;
