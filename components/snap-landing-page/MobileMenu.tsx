import { Box } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import useStyles from "./styles";
import useClasses from "../../src/useClasses";

const MobileMenu = ({ children, onClose }) => {
  const classes = useClasses(useStyles);

  const handleClose = () => {
    onClose();
  };

  return (
    <Box component="div" className={classes.backdrop} onClick={handleClose}>
      <Box
        component="div"
        className={classes.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MobileMenu;
