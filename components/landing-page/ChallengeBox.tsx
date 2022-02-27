import * as React from "react";
import { Box, Typography, Grid, ClickAwayListener } from "@mui/material";
import useClasses from "../../src/useClasses";
import NextLink from "next/link";
import useStyles from "./styles";

const ChallengeBox = ({ details }) => {
  const classes = useClasses(useStyles);
  const [isOverlay, setIsOverlay] = React.useState(false);

  const getCategoryClass = () => {
    if (details.category === 1) {
      return classes.newbieBox;
    } else if (details.category === 2) {
      return classes.juniorBox;
    } else if (details.category === 3) {
      return classes.intermediateBox;
    } else if (details.category === 4) {
      return classes.advancedBox;
    } else {
      return classes.guruBox;
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOverlay(false)}>
      <Grid
        item
        lg={3}
        md={4}
        sm={6}
        xs={12}
        className={classes.challengeItem}
        onClick={() => setIsOverlay(!isOverlay)}
      >
        <Box className={classes.overlayWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={details.preview}
            alt="card-image"
            className={classes.cardImage}
          />
          {isOverlay ? (
            <Box className={classes.overlay}>
              <Typography
                variant="h3"
                component="h3"
                className={`${classes.cardHeading} ${getCategoryClass()}`}
              >
                {details.name}
              </Typography>
              <button className={classes.visitButton}>
                <NextLink href={details.route}>Visit</NextLink>
              </button>
            </Box>
          ) : null}
        </Box>
      </Grid>
    </ClickAwayListener>
  );
};

export default ChallengeBox;
