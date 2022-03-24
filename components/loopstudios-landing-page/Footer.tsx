import * as React from "react";
import { Box, Typography, Hidden } from "@mui/material";
import useClasses from "../../src/useClasses";
import { footerSectionStyles } from "./styles";

const Footer = () => {
  const classes = useClasses(footerSectionStyles);

  return (
    <Box className={classes.sectionWrapper}>
      <Box className={classes.logoWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/loopstudios-landing-page/logo.svg"
          alt="logo"
          className={classes.logo}
        />
        <Hidden mdDown>
          <Box className={classes.socialIconsWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loopstudios-landing-page/icon-facebook.svg"
              alt="social-icon"
              className={classes.socialIcon}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loopstudios-landing-page/icon-twitter.svg"
              alt="social-icon"
              className={classes.socialIcon}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loopstudios-landing-page/icon-pinterest.svg"
              alt="social-icon"
              className={classes.socialIcon}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loopstudios-landing-page/icon-instagram.svg"
              alt="social-icon"
              className={classes.socialIcon}
            />
          </Box>
        </Hidden>
      </Box>
      <Box className={classes.copyrightWrapper}>
        <ul className={classes.footerMenuList}>
          <li className={classes.footerMenuItem}>About</li>
          <li className={classes.footerMenuItem}>Careers</li>
          <li className={classes.footerMenuItem}>Events</li>
          <li className={classes.footerMenuItem}>Products</li>
          <li className={classes.footerMenuItem}>Support</li>
        </ul>
        <Hidden mdUp>
          <Box className={classes.socialIconsWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loopstudios-landing-page/icon-facebook.svg"
              alt="social-icon"
              className={classes.socialIcon}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loopstudios-landing-page/icon-twitter.svg"
              alt="social-icon"
              className={classes.socialIcon}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loopstudios-landing-page/icon-pinterest.svg"
              alt="social-icon"
              className={classes.socialIcon}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loopstudios-landing-page/icon-instagram.svg"
              alt="social-icon"
              className={classes.socialIcon}
            />
          </Box>
        </Hidden>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.copyrightText}
        >
          &copy; 2021 Loopstudios. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
