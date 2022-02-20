import { Box, Typography } from "@mui/material";
import * as React from "react";
import useClasses from "../../src/useClasses";
import ErrorIcon from "@mui/icons-material/Error";
import useStyles from "./styles";

const CustomInput = (props) => {
  const classes = useClasses(useStyles);
  const { placeholder, errorText, value, onChange, isErrored } = props;

  return (
    <Box className={classes.inputOuterWrapper}>
      <Box className={classes.inputWrapper}>
        <input
          className={isErrored ? classes.errorInputField : classes.inputField}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {isErrored ? <ErrorIcon className={classes.errorIcon} /> : null}
      </Box>
      {isErrored ? (
        <Typography
          className={classes.errorText}
          variant="subtitle1"
          component="p"
        >
          {errorText}
        </Typography>
      ) : null}
    </Box>
  );
};

export default CustomInput;
