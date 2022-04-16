import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import useStyles from "./styles";

const DropDownMenuItem = (props) => {
  const { itemName, imgSrc = "" } = props;
  const classes = useClasses(useStyles);

  return (
    <Box className={classes.dropDownMenuItemWrapper}>
      {imgSrc !== "" ? (
        //eslint-disable-next-line @next/next/no-img-element
        <img src={imgSrc} alt="menu-icon" className={classes.menuIcon} />
      ) : null}
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.dropDownMenuItemText}
      >
        {itemName}
      </Typography>
    </Box>
  );
};

export default DropDownMenuItem;
