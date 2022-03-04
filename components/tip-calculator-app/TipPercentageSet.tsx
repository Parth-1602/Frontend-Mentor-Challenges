import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import useStyles from "./styles";
import useClasses from "../../src/useClasses";

const tipButtons = [
  { buttonText: "5%", value: "5" },
  { buttonText: "10%", value: "10" },
  { buttonText: "15%", value: "15" },
  { buttonText: "25%", value: "25" },
  { buttonText: "50%", value: "50" },
];

const TipPercentageSet = ({
  handleButtonClick,
  tipAmount,
  customTipAmount,
  customTipError,
  handleCustomTipAmountChange,
}) => {
  const classes = useClasses(useStyles);

  return (
    <>
      <Box className={classes.tipButtonsWrapper}>
        <Typography variant="subtitle1" component="p" className={classes.label}>
          Select Tip %
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {tipButtons.map((button) => {
          return (
            <Grid key={button.value} item xs={6} sm={4}>
              <button
                onClick={() => handleButtonClick(button.value)}
                className={`${classes.tipButton} ${
                  tipAmount === button.value && classes.tipButtonActive
                }`}
              >
                {button.buttonText}
              </button>
            </Grid>
          );
        })}
        <Grid item xs={4}>
          <input
            placeholder="Custom"
            onChange={handleCustomTipAmountChange}
            value={customTipAmount}
            className={`${classes.customInput} ${
              customTipError && classes.errorCustomInput
            }`}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TipPercentageSet;
