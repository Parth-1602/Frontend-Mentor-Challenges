import * as React from "react";
import { Box, Hidden, Typography, ClickAwayListener } from "@mui/material";
import useClasses from "../../src/useClasses";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { introSectionStyles } from "./styles";
import DropDownButton from "./DropDownButton";
import DropDownMobileButton from "./DropDownMobileButton";

const IntroSection = () => {
  const classes = useClasses(introSectionStyles);
  const [isDropDown, setIsDropDown] = React.useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.sectionWrapper}>
      <Box className={classes.appBar}>
        <Box className={classes.logoWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blogr-landing-page/logo.svg"
            alt="logo"
            className={classes.logo}
          />
          <Hidden mdDown>
            <DropDownButton
              buttonText="Product"
              dropDownList={[
                "Overview",
                "Pricing",
                "Marketplace",
                "Features",
                "Integrations",
              ]}
            />
            <DropDownButton
              buttonText="Company"
              dropDownList={["About", "Team", "Blog", "Careers"]}
            />
            <DropDownButton
              buttonText="Connect"
              dropDownList={["Contact", "Newsletter", "LinkedIn"]}
            />
          </Hidden>
        </Box>
        <Hidden mdDown>
          <Box>
            <button className={classes.loginButton}>Login</button>
            <button className={classes.signUpButton}>Sign Up</button>
          </Box>
        </Hidden>
        <Hidden mdUp>
          <ClickAwayListener onClickAway={() => setIsDropDown(false)}>
            <>
              {isDropDown ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    onClick={() => setIsDropDown(false)}
                    src="/images/blogr-landing-page/icon-close.svg"
                    alt="menu-icon"
                    className={classes.menuIcon}
                  />
                </>
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    onClick={() => setIsDropDown(true)}
                    src="/images/blogr-landing-page/icon-hamburger.svg"
                    alt="menu-icon"
                    className={classes.menuIcon}
                  />
                </>
              )}
              {isDropDown && (
                <Box className={classes.popMenu}>
                  <DropDownMobileButton
                    buttonText="Product"
                    dropDownList={[
                      "Overview",
                      "Pricing",
                      "Marketplace",
                      "Features",
                      "Integrations",
                    ]}
                  />
                  <DropDownMobileButton
                    buttonText="Company"
                    dropDownList={["About", "Team", "Blog", "Careers"]}
                  />
                  <DropDownMobileButton
                    buttonText="Connect"
                    dropDownList={["Contact", "Newsletter", "LinkedIn"]}
                  />
                  <hr className={classes.divider} />
                  <Box className={classes.buttonsWrapper}>
                    <button className={classes.mobileLoginButton}>Login</button>
                    <button className={classes.mobileSignUpButton}>
                      Sign Up
                    </button>
                  </Box>
                </Box>
              )}
            </>
          </ClickAwayListener>
        </Hidden>
      </Box>
      <Box>
        <Typography variant="h1" component="h1" className={classes.mainHeading}>
          A modern publishing platform
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.subText}
        >
          Grow your audience and build your online brand
        </Typography>
        <Box className={classes.ctaButtonsWrapper}>
          <button className={classes.ctaStartButton}>Start for Free</button>
          <button className={classes.ctaLearnButton}>Learn More</button>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroSection;
