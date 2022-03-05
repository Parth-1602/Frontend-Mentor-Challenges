import * as React from "react";
import { Box, Typography, Hidden, ClickAwayListener } from "@mui/material";
import useClasses from "../../src/useClasses";
import { mainSectionStyles } from "./styles";

const MainSection = () => {
  const classes = useClasses(mainSectionStyles);
  const [isDropDown, setIsDropDown] = React.useState(false);

  console.log(isDropDown);

  return (
    <Box className={classes.sectionWrapper}>
      <Box className={classes.appBar}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/sunnyside-agency-landing-page/logo.svg" alt="logo" />
        <Hidden mdDown>
          <ul className={classes.menuItemsWrapper}>
            <li className={classes.menuItem}>
              <a href="#">About</a>
            </li>
            <li className={classes.menuItem}>
              <a href="#">Services</a>
            </li>
            <li className={classes.menuItem}>
              <a href="#">Projects</a>
            </li>
            <li className={classes.menuItem}>
              <button className={classes.contactButton}>contact</button>
            </li>
          </ul>
        </Hidden>
        <Hidden mdUp>
          <ClickAwayListener onClickAway={() => setIsDropDown(false)}>
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                onClick={() => setIsDropDown(!isDropDown)}
                src="/images/sunnyside-agency-landing-page/icon-hamburger.svg"
                alt="menu-icon"
                className={classes.menuIcon}
              />
              {isDropDown && (
                <Box className={classes.popMenu}>
                  <ul className={classes.popMenuItemsWrapper}>
                    <li className={classes.popMenuItem}>
                      <a href="#">About</a>
                    </li>
                    <li className={classes.popMenuItem}>
                      <a href="#">Services</a>
                    </li>
                    <li className={classes.popMenuItem}>
                      <a href="#">Projects</a>
                    </li>
                    <li className={classes.popMenuItem}>
                      <button className={classes.popMenuContactButton}>
                        contact
                      </button>
                    </li>
                  </ul>
                </Box>
              )}
            </>
          </ClickAwayListener>
        </Hidden>
      </Box>
      <Typography variant="h1" component="h1" className={classes.mainHeading}>
        WE ARE CREATIVES
      </Typography>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/sunnyside-agency-landing-page/icon-arrow-down.svg"
        alt="arrow-down-icon"
        className={classes.arrowDownIcon}
      />
    </Box>
  );
};

export default MainSection;
