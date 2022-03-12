import * as React from "react";
import useClasses from "../../src/useClasses";
import { Avatar, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { HiBookmark } from "react-icons/hi";
import { productCardStyles } from "./styles";

const ProductCard = ({ openPledgeModal }) => {
  const classes = useClasses(productCardStyles);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.productCard}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/crowdfunding-product-page/logo-mastercraft.svg"
        alt="mastercraft-logo"
        className={classes.mastercraftLogo}
      />
      <Typography variant="h1" component="h1" className={classes.productName}>
        Mastercraft Bamboo Monitor Rise
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.productDescription}
      >
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Typography>
      <Box className={classes.buttonsWrapper}>
        <button onClick={openPledgeModal} className={classes.backProjectButton}>
          Back this project
        </button>
        {isSmall ? (
          <Box
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={classes.bookmarkButtonWrapper}
          >
            <Avatar
              className={`${classes.bookmarkIconWrapper} ${
                isBookmarked && classes.bookmarkActiveIconWrapper
              }`}
            >
              <HiBookmark
                className={`${classes.bookmarkIcon} ${
                  isBookmarked && classes.bookmarkActiveIcon
                }`}
              />
            </Avatar>
          </Box>
        ) : (
          <Box
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={classes.bookmarkButtonWrapper}
          >
            <Avatar
              className={`${classes.bookmarkIconWrapper} ${
                isBookmarked && classes.bookmarkActiveIconWrapper
              }`}
            >
              <HiBookmark
                className={`${classes.bookmarkIcon} ${
                  isBookmarked && classes.bookmarkActiveIcon
                }`}
              />
            </Avatar>
            <button
              className={`${classes.bookmarkButton} ${
                isBookmarked && classes.bookmarkActiveButton
              }`}
            >
              Bookmark
            </button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductCard;
