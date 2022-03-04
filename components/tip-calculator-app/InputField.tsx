import * as React from "react";
import useClasses from "../../src/useClasses";
import Head from "next/head";
import useStyles from "./styles";
import { Box, Typography } from "@mui/material";

const InputField = ({
  label,
  icon,
  placeholder,
  onChange,
  value,
  errorText,
  hasError,
}) => {
  const classes = useClasses(useStyles);

  return (
    <>
      <Box className={classes.labelWrapper}>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.inputLabel}
        >
          {label}
        </Typography>
        {hasError && (
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.errorText}
          >
            {errorText}
          </Typography>
        )}
      </Box>
      <Box className={classes.inputBoxWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="dollar-icon" className={classes.inputBoxIcon} />
        <input
          onChange={onChange}
          value={value}
          className={`${classes.inputBox} ${hasError && classes.errorInputBox}`}
          placeholder={placeholder}
        />
      </Box>
    </>
  );
};

export default InputField;
