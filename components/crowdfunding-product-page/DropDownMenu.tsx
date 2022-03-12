import { Box, IconButton } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { dropDownStyles } from "./styles";
import useClasses from "../../src/useClasses";

const DropDownMenu = ({ show, children, width, onClose }) => {
  const classes = useClasses(dropDownStyles);
  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect(() => {
    setIsBrowser(true);
  }, [show]);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <Box
      component="div"
      className={classes.backdrop}
      onClick={handleCloseClick}
    >
      <Box
        component="div"
        className={classes.modal}
        style={{ width: width }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Box>
    </Box>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("dropdown")
    );
  } else {
    return null;
  }
};

export default DropDownMenu;
