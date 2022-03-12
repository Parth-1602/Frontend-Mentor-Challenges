import * as React from "react";
import useClasses from "../../src/useClasses";
import { appBarStyles } from "./styles";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import DropDownMenu from "./DropDownMenu";

const AppBar = () => {
  const classes = useClasses(appBarStyles);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const [isDropDown, setIsDropDown] = React.useState(false);

  return (
    <Box className={classes.appBarWrapper}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/crowdfunding-product-page/logo.svg"
        alt="logo"
        className={classes.logo}
      />
      {isSmall ? (
        <>
          {isDropDown ? ( //eslint-disable-next-line @next/next/no-img-element
            <img
              onClick={() => setIsDropDown(false)}
              alt="menu-icon"
              src="/images/crowdfunding-product-page/icon-close-menu.svg"
            />
          ) : (
            //eslint-disable-next-line @next/next/no-img-element
            <img
              onClick={() => setIsDropDown(true)}
              alt="menu-icon"
              src="/images/crowdfunding-product-page/icon-hamburger.svg"
            />
          )}

          <DropDownMenu
            width="100%"
            show={isDropDown}
            onClose={() => setIsDropDown(false)}
          >
            <Box className={classes.dropDownWrapper}>
              <Typography
                variant="h4"
                component="h4"
                className={classes.dropDownItem}
              >
                About
              </Typography>
              <Typography
                variant="h4"
                component="h4"
                className={classes.dropDownItem}
              >
                Discover
              </Typography>
              <Typography
                variant="h4"
                component="h4"
                className={classes.dropDownItem}
              >
                Get Started
              </Typography>
            </Box>
          </DropDownMenu>
        </>
      ) : (
        <ul className={classes.menuItemList}>
          <li className={classes.menuItem}>About</li>
          <li className={classes.menuItem}>Discover</li>
          <li className={classes.menuItem}>Get Started</li>
        </ul>
      )}
    </Box>
  );
};

export default AppBar;
