import * as React from "react";
import useClasses from "../src/useClasses";
import Head from "next/head";
import useStyles from "../styles/tip-calculator-app";
import {
  validateAmount,
  validateCustomTip,
  validatePeople,
  hasInputError,
  hasTipError,
  calculator,
} from "../src/tip-calculator-app.tsx/helperFunctions";
import InputField from "../components/tip-calculator-app/InputField";
import { Box } from "@mui/material";
import TipPercentageSet from "../components/tip-calculator-app/TipPercentageSet";
import DisplayBanner from "../components/tip-calculator-app/DisplayBanner";

const TipCalculatorApp = () => {
  const classes = useClasses(useStyles);
  const [billInputState, setBillInputState] = React.useState({
    value: "",
    hasError: false,
  });
  const [customTipInputState, setCustomTipInputState] = React.useState({
    value: "",
    hasError: false,
  });
  const [peopleInputState, setPeopleInputState] = React.useState({
    value: "",
    hasError: false,
  });
  const [tip, setTip] = React.useState("");
  const [toReset, setToReset] = React.useState(true);
  const [perPersonBillAmount, setPerPersonBillAmount] = React.useState("0.00");
  const [perPersonTipAmount, setPerPersonTipAmount] = React.useState("0.00");

  React.useEffect(() => {
    if (hasInputError(billInputState) || hasInputError(peopleInputState)) {
      setPerPersonBillAmount("0.00");
      setPerPersonTipAmount("0.00");
    }
    if (hasTipError(customTipInputState, tip)) {
      setPerPersonTipAmount("0.00");
    }
  }, [billInputState, peopleInputState, customTipInputState, tip]);

  React.useEffect(() => {
    if (
      billInputState.value !== "" ||
      customTipInputState.value !== "" ||
      tip !== "" ||
      peopleInputState.value !== ""
    ) {
      setToReset(false);
    } else {
      setToReset(true);
    }
  }, [billInputState, peopleInputState, customTipInputState, tip]);

  React.useEffect(() => {
    if (!hasInputError(billInputState) && !hasInputError(peopleInputState)) {
      const values = calculator(
        billInputState,
        peopleInputState,
        tip,
        customTipInputState
      );
      if (values.billAmount && values.tipAmount) {
        setPerPersonBillAmount(values.billAmount);
        setPerPersonTipAmount(values.tipAmount);
      }
    }
  }, [billInputState, peopleInputState, tip, customTipInputState]);

  return (
    <div role="main">
      <Head>
        <title>Tip Calculator</title>;
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tip-calculator-app/logo.svg"
          alt="logo"
          className={classes.logo}
        />
        <Box className={classes.card}>
          <Box className={classes.leftCard}>
            <Box className={classes.spacingBottom}>
              <InputField
                label="Bill"
                placeholder={0}
                errorText={"Invalid"}
                hasError={billInputState.hasError}
                icon="/images/tip-calculator-app/icon-dollar.svg"
                onChange={(e) => {
                  setBillInputState({
                    value: e.target.value,
                    hasError: validateAmount(e.target.value),
                  });
                }}
                value={billInputState.value}
              />
            </Box>
            <TipPercentageSet
              handleButtonClick={(amount) => {
                if (amount === tip) {
                  setTip("");
                } else {
                  setTip(amount);
                }
                setCustomTipInputState({ value: "", hasError: false });
              }}
              handleCustomTipAmountChange={(e) => {
                setCustomTipInputState({
                  value: e.target.value,
                  hasError: validateCustomTip(e.target.value),
                });
                setTip("");
              }}
              tipAmount={tip}
              customTipAmount={customTipInputState.value}
              customTipError={customTipInputState.hasError}
            />
            <Box className={classes.spacingTop}>
              <InputField
                label="Number of People"
                placeholder={0}
                errorText={"Invalid"}
                hasError={peopleInputState.hasError}
                icon="/images/tip-calculator-app/icon-person.svg"
                onChange={(e) => {
                  setPeopleInputState({
                    value: e.target.value,
                    hasError: validatePeople(e.target.value),
                  });
                }}
                value={peopleInputState.value}
              />
            </Box>
          </Box>
          <Box className={classes.rightCard}>
            <Box>
              <DisplayBanner
                mainHeading="Tip Amount"
                subHeading="/ person"
                value={perPersonTipAmount}
              />
              <DisplayBanner
                mainHeading="Total"
                subHeading="/ person"
                value={perPersonBillAmount}
              />
            </Box>
            <button
              onClick={() => {
                setBillInputState({
                  value: "",
                  hasError: false,
                });
                setPeopleInputState({
                  value: "",
                  hasError: false,
                });
                setCustomTipInputState({
                  value: "",
                  hasError: false,
                });
                setTip("");
              }}
              disabled={toReset}
              className={classes.resetButton}
            >
              RESET
            </button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TipCalculatorApp;
