import * as React from "react";
import { Box } from "@mui/material";
import useClasses from "../../src/useClasses";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { footerStyles } from "./styles";

const Footer = () => {
  const classes = useClasses(footerStyles);

  return (
    <Box className={classes.footerWrapper}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/sunnyside-agency-landing-page/logo-dark.svg"
        alt="logo"
        className={classes.logo}
      />
      <ul className={classes.menuItemsWrapper}>
        <li className={classes.menuItem}>About</li>
        <li className={classes.menuItem}>Services</li>
        <li className={classes.menuItem}>Projects</li>
      </ul>
      <Box>
        <FacebookIcon className={classes.footerIcon} />
        <InstagramIcon className={classes.footerIcon} />
        <TwitterIcon className={classes.footerIcon} />
        <PinterestIcon className={classes.footerIcon} />
      </Box>
    </Box>
  );
};

export default Footer;
