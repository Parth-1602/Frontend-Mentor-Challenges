import { Box, IconButton } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { modalStyles } from "./styles";
import useClasses from "../../src/useClasses";

const ModalWrapper = ({ show, children, width }) => {
  const classes = useClasses(modalStyles);
  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect(() => {
    setIsBrowser(true);
  }, [show]);

  const modalContent = show ? (
    <Box component="div" className={classes.backdrop}>
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
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

export default ModalWrapper;
