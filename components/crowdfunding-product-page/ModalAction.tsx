import * as React from "react";
import { Box, Typography, Radio, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useClasses from "../../src/useClasses";
import ModalActionCards from "./ModalActionCards";
import ModalActionMobileCards from "./ModalActionMobileCards";
import { modalPledgeContentStyles } from "./styles";
import CloseIcon from "@mui/icons-material/Close";

const ModalAction = ({ handlePledgeModal, handleSuccessModal }) => {
  const classes = useClasses(modalPledgeContentStyles);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.modalWrapper}>
      <Box className={classes.headerWrapper}>
        <Typography variant="h5" component="h5" className={classes.heading}>
          Back this project
        </Typography>
        <CloseIcon
          className={classes.closeIcon}
          onClick={() => handlePledgeModal(false)}
        />
      </Box>
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.description}
      >
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world!
      </Typography>
      {isSmall ? (
        <ModalActionMobileCards
          handlePledgeModal={handlePledgeModal}
          handleSuccessModal={handleSuccessModal}
        />
      ) : (
        <ModalActionCards
          handlePledgeModal={handlePledgeModal}
          handleSuccessModal={handleSuccessModal}
        />
      )}
    </Box>
  );
};

export default ModalAction;
