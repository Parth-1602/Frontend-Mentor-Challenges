import * as React from "react";
import useClasses from "../src/useClasses";
import { Box, Typography } from "@mui/material";
import useStyles from "../styles/flyo-data-storage-component";
import Head from "next/head";

const FlyoDataStorageComponent = () => {
  const classes = useClasses(useStyles);

  return (
    <div role="main">
      <Head>
        <title>Flyo Data Storage</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.contentWrapper}>
          <Box className={classes.leftCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/flyo-data-storage-component/logo.svg"
              alt="logo"
            />
            <Box className={classes.iconsWrapper}>
              <Box className={classes.iconWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/flyo-data-storage-component/icon-document.svg"
                  alt="document-icon"
                />
              </Box>
              <Box className={classes.iconWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/flyo-data-storage-component/icon-folder.svg"
                  alt="folder-icon"
                />
              </Box>
              <Box className={classes.iconWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/flyo-data-storage-component/icon-upload.svg"
                  alt="upload-icon"
                />
              </Box>
            </Box>
          </Box>
          <Box className={classes.rightCard}>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.headingText}
            >
              You&apos;ve used{" "}
              <Typography
                variant="subtitle1"
                component="span"
                className={classes.storageSpan}
              >
                815 GB
              </Typography>{" "}
              of your storage
            </Typography>
            <Box className={classes.progressBar}>
              <Box className={classes.progressIndicator}>
                <Box className={classes.endCircle}></Box>
              </Box>
              <Box className={classes.storageBox}>
                <Typography
                  variant="subtitle1"
                  component="span"
                  className={classes.storageLeftText}
                >
                  185
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="span"
                  className={classes.gbLeftText}
                >
                  GB LEFT
                </Typography>
              </Box>
            </Box>
            <Box className={classes.markersWrapper}>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.marker}
              >
                0 GB
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.marker}
              >
                1000 GB
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default FlyoDataStorageComponent;
