import { AppBar, Toolbar } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import * as React from "react";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#00AD7C",
        boxShadow: "none",
        maxHeight: 50,
        zIndex: 999,
      }}
    >
      <Toolbar
        sx={{
          minHeight: 50,
        }}
      >
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
