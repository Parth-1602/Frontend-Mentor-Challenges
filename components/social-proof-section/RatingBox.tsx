import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import useStyles from "./styles";

const RatingBox = (props) => {
  const classes = useClasses(useStyles);
  const { description, rating, marginLeft } = props;
  const ratingMap = new Array(5);
  console.log(ratingMap);

  return (
    <Box style={{ marginLeft }} className={classes.ratingBox}>
      <Box>
        {Array.apply(null, new Array(rating)).map(() => {
          return (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/social-proof-section/icon-star.svg"
                alt="star-icon"
                className={classes.starIcon}
              />
            </>
          );
        })}
      </Box>
      <Typography
        className={classes.ratingDescription}
        variant="subtitle1"
        component="p"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default RatingBox;
