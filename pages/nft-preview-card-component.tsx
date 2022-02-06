import * as React from "react";
import Head from "next/head";
import { Box, Typography, Avatar } from "@mui/material";
import useClasses from "../src/useClasses";
import useStyles from "../styles/nft-preview-card-component/styles";

const NFTPreviewCard = () => {
  const classes = useClasses(useStyles);
  const [overlay, setOverlay] = React.useState(false);

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700&display=swap"
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
          >
            <Box
              className={classes.imageOverlayContainer}
              onMouseOver={() => setOverlay(true)}
              onMouseOut={() => setOverlay(false)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/nft-preview-card-component/image-equilibrium.jpg"
                alt="Main Image"
                className={classes.ethImage}
              />
              {overlay ? (
                <Box className={classes.overlay}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/nft-preview-card-component/icon-view.svg"
                    alt="view icon"
                  />
                </Box>
              ) : null}
            </Box>
            <Typography
              className={classes.headingText}
              variant="h1"
              component="h1"
              gutterBottom
            >
              Equilibrium #3429
            </Typography>
            <Typography
              className={classes.subtitleText}
              variant="subtitle2"
              component="p"
            >
              Our Equilibrium collection promotes balance and calm.
            </Typography>
            <Box className={classes.infoBox}>
              <Box className={classes.iconText}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/nft-preview-card-component/icon-ethereum.svg"
                  alt="currencyIcon"
                />
                <Typography
                  className={classes.currencyValue}
                  variant="subtitle2"
                  component="p"
                >
                  0.041 ETH
                </Typography>
              </Box>
              <Box className={classes.iconText}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/nft-preview-card-component/icon-clock.svg"
                  alt="currencyIcon"
                />
                <Typography
                  className={classes.daysText}
                  variant="subtitle2"
                  component="p"
                >
                  3 days left
                </Typography>
              </Box>
            </Box>
            <hr className={classes.seperation} />
            <Box className={classes.authorBox}>
              <Avatar
                alt="Author Image"
                src="/images/2/image-avatar.png"
                sx={{ width: 30, height: 30, border: "1px solid #FFFFFF" }}
              />
              <Typography
                className={classes.authorMainText}
                variant="subtitle2"
                component="p"
              >
                Creation of{" "}
                <Typography
                  className={classes.authorSubText}
                  variant="subtitle2"
                  component="span"
                >
                  Jules Wyvern
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default NFTPreviewCard;
