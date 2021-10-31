import { Box } from "@mui/material";
import * as React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ p: 2, mt: 7 }} component="main">
        {children}
      </Box>
    </>
  );
};

export default Layout;
