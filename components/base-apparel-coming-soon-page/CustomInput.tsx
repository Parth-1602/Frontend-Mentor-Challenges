import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ErrorIcon from "@mui/icons-material/Error";
import useStyles from "./styles";

const CustomInput = () => {
  const classes = useClasses(useStyles);
  const [email, setEmail] = React.useState("");
  const [showError, setShowError] = React.useState(false);

  const handleSubmit = () => {
    if (email !== "") {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      } else {
        setShowError(true);
      }
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      <Box className={classes.inputWrapper}>
        <input
          onChange={(e) => {
            setShowError(false);
            setEmail(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              handleSubmit();
            }
          }}
          placeholder="Email Address"
          className={showError ? classes.errorInputBox : classes.inputBox}
        />
        <button onClick={handleSubmit} className={classes.submitButton}>
          <ArrowForwardIosIcon className={classes.buttonIcon} />
        </button>
        {showError ? <ErrorIcon className={classes.errorIcon} /> : null}
      </Box>
      {showError ? (
        <Typography
          className={classes.errorText}
          variant="subtitle1"
          component="p"
        >
          Please provide a valid email
        </Typography>
      ) : null}
    </>
  );
};

export default CustomInput;
