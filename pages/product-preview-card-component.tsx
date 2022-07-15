import * as React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import useClasses from "../src/useClasses";
import useStyles from "../styles/product-preview-card-component";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ProductPreviewCard = () => {
  const classes = useClasses(useStyles);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Head>
        <title>Product Preview Card</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.contentWrapper}>
          <Box className={classes.leftCard}>
            {isSmall ? (
              //eslint-disable-next-line @next/next/no-img-element
              <img
                className={classes.productImage}
                src="/images/product-preview-card-component/image-product-mobile.jpg"
                alt="product-image"
              />
            ) : (
              //eslint-disable-next-line @next/next/no-img-element
              <img
                className={classes.productImage}
                src="/images/product-preview-card-component/image-product-desktop.jpg"
                alt="product-image"
              />
            )}
          </Box>
          <Box className={classes.rightCard}>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.productCategory}
            >
              PERFUME
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              className={classes.productName}
            >
              Gabrielle Essence Eau De Parfum
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.productDescription}
            >
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL
            </Typography>
            <Box className={classes.pricingBox}>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.productPrice}
              >
                $149.99
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.productMrp}
              >
                $169.99
              </Typography>
            </Box>
            <button className={classes.actionButton}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/product-preview-card-component/icon-cart.svg"
                alt="icon-button"
                className={classes.buttonIcon}
              />
              Add to Cart
            </button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProductPreviewCard;
