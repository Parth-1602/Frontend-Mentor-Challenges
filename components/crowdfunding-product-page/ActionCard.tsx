import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { pledgeCardStyles } from "./styles";

const ActionCard = ({
  heading,
  price,
  description,
  stock,
  isDisabled = false,
  openModal,
}) => {
  const classes = useClasses(pledgeCardStyles);
  return (
    <Box
      className={`${classes.actionCardWrapper} ${
        isDisabled && classes.actionCardDisabledWrapper
      }`}
    >
      <Box className={classes.headerWrapper}>
        <Typography
          variant="subtitle1"
          component="p"
          className={`${classes.heading} ${
            isDisabled && classes.headingDisabled
          }`}
        >
          {heading}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={`${classes.subHeading} ${
            isDisabled && classes.subHeadingDisabled
          }`}
        >
          Pledge ${price} or more
        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        component="p"
        className={`${classes.cardDescription} ${
          isDisabled && classes.cardDescriptionDisabled
        }`}
      >
        {description}
      </Typography>
      <Box className={classes.stockWrapper}>
        <Box className={classes.stockInnerWrapper}>
          <Typography
            variant="subtitle1"
            component="p"
            className={`${classes.stock} ${
              isDisabled && classes.stockDisabled
            }`}
          >
            {stock}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={`${classes.stockLeftText} ${
              isDisabled && classes.stockLeftTextDisabled
            }`}
          >
            left
          </Typography>
        </Box>
        {isDisabled ? (
          <button disabled className={classes.outOfStockButton}>
            Out of stock
          </button>
        ) : (
          <button onClick={openModal} className={classes.rewardButton}>
            Select Reward
          </button>
        )}
      </Box>
    </Box>
  );
};

export default ActionCard;
