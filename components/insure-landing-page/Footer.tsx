import * as React from "react";
import useClasses from "../../src/useClasses";
import { Box } from "@mui/material";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { footerStyles } from "./styles";
import FooterMenuBlock from "./FooterMenuBlock";

const Footer = () => {
  const classes = useClasses(footerStyles);
  return (
    <Box className={classes.footerWrapper}>
      <Box className={classes.socialIconsWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/insure-landing-page/logo.svg" alt="logo" />
        <Box className={classes.socialIconsInnerWrapper}>
          <AiFillFacebook className={classes.socialIcon} size={28} />
          <AiOutlineTwitter className={classes.socialIcon} size={28} />
          <BsPinterest className={classes.socialIcon} size={28} />
          <AiOutlineInstagram className={classes.socialIcon} size={28} />
        </Box>
      </Box>
      <hr className={classes.divider} />
      <Box className={classes.footerLinksWrapper}>
        <FooterMenuBlock
          footerMenuHeading="OUR COMPANY"
          footerMenuList={[
            "HOW WE WORK",
            "WHY INSURE?",
            "VIEW PLANS",
            "REVIEWS",
          ]}
        />
        <FooterMenuBlock
          footerMenuHeading="HELP ME"
          footerMenuList={["FAQ", "TERMS OF USE", "PRIVACY POLICY", "COOKIES"]}
        />
        <FooterMenuBlock
          footerMenuHeading="CONTACT"
          footerMenuList={["SALES", "SUPPORT", "LIVE CHAT"]}
        />
        <FooterMenuBlock
          footerMenuHeading="OTHERS"
          footerMenuList={["CAREERS", "PRESS", "LICENSES"]}
        />
      </Box>
    </Box>
  );
};

export default Footer;
