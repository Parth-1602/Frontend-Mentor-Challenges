import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { modalSuccessContentStyles } from "./styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ModalSuccess = ({ handleSuccessModal }) => {
  const classes = useClasses(modalSuccessContentStyles);

  return (
    <Box className={classes.modalWrapper}>
      <CheckCircleIcon className={classes.checkIcon} />
      <Typography variant="h5" component="h5" className={classes.heading}>
        Thanks for your support!
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.description}
      >
        Your pledge brings us one step close to sharing Mastercraft Bamboo Riser
        worldwide. You will get an email once our campaign is completed.
      </Typography>
      <button
        onClick={() => handleSuccessModal(false)}
        className={classes.gotItButton}
      >
        Got it!
      </button>
    </Box>
  );
};

export default ModalSuccess;
