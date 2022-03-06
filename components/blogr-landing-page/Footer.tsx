import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { footerStyles } from "./styles";
import FooterList from "./FooterList";

const Footer = () => {
  const classes = useClasses(footerStyles);

  return (
    <Box className={classes.sectionWrapper}>
      <Box>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/blogr-landing-page/logo.svg" alt="logo" />
      </Box>
      <FooterList
        title="Product"
        listItems={[
          "Overview",
          "Pricing",
          "Marketplace",
          "Features",
          "Integrations",
        ]}
      />
      <FooterList
        title="Company"
        listItems={["About", "Team", "Blog", "Careers"]}
      />
      <FooterList
        title="Connect"
        listItems={["Contact", "Newsletter", "LinkedIn"]}
      />
    </Box>
  );
};

export default Footer;
