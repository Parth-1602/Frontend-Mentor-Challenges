import * as React from "react";
import useClasses from "../../src/useClasses";
import { Box, ClickAwayListener, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { introSectionStyles } from "./styles";

const DropDownButton = ({ buttonText, dropDownList }) => {
  const classes = useClasses(introSectionStyles);
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
          className={isDropDown ? classes.activeButtonText : classes.buttonText}
        >
          {buttonText}
        </Typography>
        {isDropDown ? (
          <KeyboardArrowUpIcon className={classes.arrowUpIcon} />
        ) : (
          <KeyboardArrowDownIcon className={classes.arrowDownIcon} />
        )}
        {isDropDown && (
          <Box className={classes.dropDownMenu}>
            {dropDownList.map((item, i) => {
              return (
                <Typography
                  key={i}
                  variant="subtitle1"
                  component="p"
                  className={classes.menuItem}
                >
                  {item}
                </Typography>
              );
            })}
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default DropDownButton;
