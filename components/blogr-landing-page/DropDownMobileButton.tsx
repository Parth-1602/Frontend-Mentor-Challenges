import * as React from "react";
import useClasses from "../../src/useClasses";
import { Box, ClickAwayListener, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { introSectionStyles } from "./styles";

const DropDownMobileButton = ({ buttonText, dropDownList }) => {
  const classes = useClasses(introSectionStyles);
  const [isDropDown, setIsDropDown] = React.useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsDropDown(false)}>
      <>
        <Box
          className={classes.dropButtonMobileWrapper}
          onClick={() => setIsDropDown(!isDropDown)}
        >
          <Typography
            variant="subtitle1"
            component="p"
            className={
              isDropDown
                ? classes.activeButtonMobileText
                : classes.buttonMobileText
            }
          >
            {buttonText}
          </Typography>
          {isDropDown ? (
            <KeyboardArrowUpIcon className={classes.arrowUpMobileIcon} />
          ) : (
            <KeyboardArrowDownIcon className={classes.arrowDownMobileIcon} />
          )}
        </Box>
        {isDropDown && (
          <Box className={classes.dropDownMobileMenu}>
            {dropDownList.map((item, i) => {
              return (
                <Typography
                  key={i}
                  variant="subtitle1"
                  component="p"
                  className={classes.mobileMenuItem}
                >
                  {item}
                </Typography>
              );
            })}
          </Box>
        )}
      </>
    </ClickAwayListener>
  );
};

export default DropDownMobileButton;
