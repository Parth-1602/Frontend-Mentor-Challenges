import * as React from "react";
import { Box, Typography, ClickAwayListener } from "@mui/material";
import useClasses from "../../src/useClasses";
import useStyles from "./styles";

const DropDown = (props) => {
  const { children, title } = props;
  const classes = useClasses(useStyles);
  const [isDropDown, setIsDropDown] = React.useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsDropDown(false)}>
      <Box
        className={classes.dropButtonWrapper}
        onClick={() => setIsDropDown(!isDropDown)}
      >
        <Typography
          variant="subtitle1"
          component="p"
          className={
            isDropDown ? classes.dropButtonActiveText : classes.dropButtonText
          }
        >
          {title}
        </Typography>
        {isDropDown ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/snap-landing-page/icon-arrow-up.svg"
            alt="up-arrow"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/snap-landing-page/icon-arrow-down.svg"
            alt="down-arrow"
          />
        )}
        {isDropDown && <Box className={classes.dropBox}>{children}</Box>}
      </Box>
    </ClickAwayListener>
  );
};

export default DropDown;
