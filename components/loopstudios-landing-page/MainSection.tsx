import * as React from "react";
import { Box, Hidden, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { mainSectionStyles } from "./styles";

const MainSection = () => {
  const classes = useClasses(mainSectionStyles);
  const [isDropdown, setIsDropdown] = React.useState(false);

  return (
    <Box className={classes.sectionWrapper}>
      <Box className={classes.appBar}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/loopstudios-landing-page/logo.svg"
          alt="logo"
          className={classes.logo}
        />
        <Hidden mdDown>
          <ul className={classes.menuList}>
            <li className={classes.menuItem}>About</li>
            <li className={classes.menuItem}>Careers</li>
            <li className={classes.menuItem}>Events</li>
            <li className={classes.menuItem}>Products</li>
            <li className={classes.menuItem}>Support</li>
          </ul>
        </Hidden>
        <Hidden mdUp>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/loopstudios-landing-page/icon-hamburger.svg"
            alt="hamburger-icon"
            onClick={() => setIsDropdown(true)}
          />
        </Hidden>
      </Box>
      <Box className={classes.contentWrapper}>
        <Box className={classes.headingWrapper}>
          <Typography
            variant="h1"
            component="h1"
            className={classes.mainHeading}
          >
            IMMERSIVE
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            className={classes.mainHeading}
          >
            EXPERIENCES
          </Typography>
          <Hidden mdDown>
            <Typography
              variant="h2"
              component="h2"
              className={classes.mainHeading}
            >
              THAT DELIVER
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography
              variant="h2"
              component="h2"
              className={classes.mainHeading}
            >
              THAT
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              className={classes.mainHeading}
            >
              DELIVER
            </Typography>
          </Hidden>
        </Box>
      </Box>
      {isDropdown && (
        <Box className={classes.mobileMenuWrapper}>
          <Box className={classes.appBar}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loopstudios-landing-page/logo.svg"
              alt="logo"
              className={classes.mobileMenuLogo}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loopstudios-landing-page/icon-close.svg"
              alt="close-icon"
              onClick={() => setIsDropdown(false)}
            />
          </Box>
          <ul className={classes.mobileMenuList}>
            <li className={classes.mobileMenuItem}>ABOUT</li>
            <li className={classes.mobileMenuItem}>CAREERS</li>
            <li className={classes.mobileMenuItem}>EVENTS</li>
            <li className={classes.mobileMenuItem}>PRODUCTS</li>
            <li className={classes.mobileMenuItem}>SUPPORT</li>
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default MainSection;
