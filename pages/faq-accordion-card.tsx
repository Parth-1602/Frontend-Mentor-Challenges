import * as React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import FAQComp from "../components/faq-accordion-card/FAQComp";
import data from "../src/faq-accordion-card/data.json";
import useClasses from "../src/useClasses";
import useStyles from "../styles/faq-accordion-card";

const FAQAccordion = () => {
  const classes = useClasses(useStyles);
  return (
    <div>
      <Head>
        <title>FAQ Accordion</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box role="main" className={classes.card}>
          <Box className={classes.leftCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/faq-accordion-card/illustration-box-desktop.svg"
              alt="box image"
              className={classes.boxImage}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/faq-accordion-card/illustration-woman-online-mobile.svg"
              alt="Mobile main image"
              className={classes.mobileImage}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/faq-accordion-card/bg-pattern-mobile.svg"
              alt="Mobile shadow"
              className={classes.mobileShadow}
            />
          </Box>
          <Box className={classes.rightCard}>
            <Typography
              className={classes.mainHeading}
              variant="h1"
              component="h1"
            >
              FAQ
            </Typography>
            {data.map((element, i) => {
              return (
                <FAQComp
                  key={i}
                  question={element.question}
                  answer={element.answer}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default FAQAccordion;
