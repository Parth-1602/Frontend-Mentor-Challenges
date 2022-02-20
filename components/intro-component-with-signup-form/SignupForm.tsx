import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import useClasses from "../../src/useClasses";
import CustomInput from "./CustomInput";
import useStyles from "./styles";

const SignupForm = () => {
  const classes = useClasses(useStyles);
  const [fName, setFName] = React.useState({ value: "", error: false });
  const [lName, setLName] = React.useState({ value: "", error: false });
  const [email, setEmail] = React.useState({ value: "", error: false });
  const [password, setPassword] = React.useState({ value: "", error: false });

  const validateElements = () => {
    if (fName.value === "") {
      setFName({
        ...fName,
        error: true,
      });
    }
    if (lName.value === "") {
      setLName({
        ...lName,
        error: true,
      });
    }
    if (
      email.value === "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ) {
      setEmail({
        ...email,
        error: true,
      });
    }
    if (password.value === "") {
      setPassword({
        ...password,
        error: true,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateElements();
  };

  return (
    <form onSubmit={handleFormSubmit} className={classes.form}>
      <CustomInput
        placeholder={"First Name"}
        onChange={(e) => setFName({ value: e.target.value, error: false })}
        value={fName.value}
        errorText={"First Name cannot be empty"}
        isErrored={fName.error}
      />
      <CustomInput
        placeholder={"Last Name"}
        onChange={(e) => setLName({ value: e.target.value, error: false })}
        value={lName.value}
        errorText={"Last Name cannot be empty"}
        isErrored={lName.error}
      />
      <CustomInput
        placeholder={"Email Address"}
        onChange={(e) => setEmail({ value: e.target.value, error: false })}
        value={email.value}
        errorText={"Looks like this is not an email"}
        isErrored={email.error}
      />
      <CustomInput
        placeholder={"Password"}
        onChange={(e) => setPassword({ value: e.target.value, error: false })}
        value={password.value}
        errorText={"Password cannot be empty"}
        isErrored={password.error}
      />
      <button onClick={handleFormSubmit} className={classes.submitButton}>
        CLAIM YOUR FREE TRIAL
      </button>
      <Typography
        className={classes.disclaimer}
        variant="subtitle1"
        component="p"
      >
        By clicking the button you are agreeing to our{" "}
        <Typography
          className={classes.disclaimerSpan}
          variant="subtitle1"
          component="span"
        >
          <a href="#">Terms and Services</a>
        </Typography>
      </Typography>
    </form>
  );
};

export default SignupForm;
