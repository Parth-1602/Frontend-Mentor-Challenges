import { AppBar, Toolbar, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import NextLink from "next/link";
import Image from "next/image";
import * as React from "react";
import useClasses from "../../src/useClasses";
import commonStyles from "./styles";

const Header = () => {
  const classes = useClasses(commonStyles);
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <NextLink href="/">
          <a>
            <Image
              width="32px"
              height="32px"
              src="/favicon.png"
              alt="Frontend Mentor Challenges"
              title="Frontend Challenges"
            />
          </a>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
