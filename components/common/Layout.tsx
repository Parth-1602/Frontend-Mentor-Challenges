import { Box } from "@mui/material";
import * as React from "react";
import useClasses from "../../src/useClasses";
import Header from "./Header";
import commonStyles from "./styles";

const Layout = ({ children }) => {
  const classes = useClasses(commonStyles);
  return (
    <>
      <Header />
      <Box className={classes.main} component="main">
        {children}
      </Box>
    </>
  );
};

export default Layout;
