import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useStyles from "./styles";

const CustomInput = () => {
  const classes = useClasses(useStyles);
  const [email, setEmail] = React.useState("");
  const [showError, setShowError] = React.useState(false);
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));

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
          placeholder="Your email address..."
          className={showError ? classes.errorInputBox : classes.inputBox}
        />
        {showError && smallDevice ? (
          <Typography
            className={classes.errorMobileText}
            variant="subtitle1"
            component="p"
          >
            <i>Please provide a valid email address</i>
          </Typography>
        ) : null}
        <button
          name="submit-button"
          onClick={handleSubmit}
          className={classes.submitButton}
        >
          Notify Me
        </button>
      </Box>
      {showError && !smallDevice ? (
        <Typography
          className={classes.errorText}
          variant="subtitle1"
          component="p"
        >
          <i>Please provide a valid email address</i>
        </Typography>
      ) : null}
    </>
  );
};

export default CustomInput;
