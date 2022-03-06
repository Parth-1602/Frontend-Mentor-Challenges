import * as React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import Head from "next/head";
import useStyles from "../styles/advice-generator-app";
import useClasses from "../src/useClasses";

const AdviceGenerator = () => {
  const classes = useClasses(useStyles);
  const [slip, setSlip] = React.useState(null);
  const [isFetching, setIsFetching] = React.useState(false);

  const fetchAdvice = () => {
    setIsFetching(true);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((result) => {
        if (result && result.slip) {
          console.log(result.slip);
          setSlip(result.slip);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  React.useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div role="main">
      <Head>
        <title>Advice Generator App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.card}>
          {!isFetching ? (
            <Box className={classes.quoteWrapper}>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.adviceId}
              >
                {`ADVICE #${slip && slip.id ? slip.id : null}`}
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                className={classes.advice}
              >
                {slip && slip.advice ? `"${slip.advice}"` : null}
              </Typography>
            </Box>
          ) : (
            <Box className={classes.quoteWrapper}>
              <CircularProgress className={classes.loader} />
            </Box>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/advice-generator-app/pattern-divider-desktop.svg"
            alt="divider"
            className={classes.divider}
          />
          <Box className={classes.diceWrapper} onClick={() => fetchAdvice()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/advice-generator-app/icon-dice.svg"
              alt="dice-icon"
              className={classes.diceIcon}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AdviceGenerator;
