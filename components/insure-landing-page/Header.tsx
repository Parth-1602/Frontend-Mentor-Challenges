import * as React from "react";
import useClasses from "../../src/useClasses";
import { Box, Hidden, Typography } from "@mui/material";
import { headerStyles } from "./styles";

const Header = () => {
  const classes = useClasses(headerStyles);
  const [isNavMenu, setIsNavMenu] = React.useState(false);

  return (
    <Box className={classes.headerWrapper}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/insure-landing-page/logo.svg" alt="logo" />
      <Hidden mdDown>
        <Box className={classes.menuItemsWrapper}>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.menuLink}
          >
            HOW WE WORK
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.menuLink}
          >
            BLOG
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.menuLink}
          >
            ACCOUNT
          </Typography>
          <button className={classes.headerButton}>VIEW PLANS</button>
        </Box>
      </Hidden>
      <Hidden mdUp>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/insure-landing-page/icon-hamburger.svg"
          alt="menu-icon"
          onClick={() => setIsNavMenu(true)}
        />
      </Hidden>
      {isNavMenu && (
        <Box className={classes.navMenuWrapper}>
          <Box className={classes.headerWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/insure-landing-page/logo.svg" alt="logo" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/insure-landing-page/icon-close.svg"
              alt="close-icon"
              onClick={() => setIsNavMenu(false)}
            />
          </Box>
          <Box className={classes.navMenuContentWrapper}>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.navMenuLink}
            >
              HOW WE WORK
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.navMenuLink}
            >
              BLOG
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.navMenuLink}
            >
              ACCOUNT
            </Typography>
            <button className={classes.navMenuButton}>VIEW PLANS</button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
