import * as React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import FAQComp from "../components/faq-accordion-card/FAQComp";
import useClasses from "../src/useClasses";
import useStyles from "../styles/faq-accordion-card";

const QA = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: " How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const FAQAccordion = () => {
  const classes = useClasses(useStyles);
  return (
    <div>
      <Head>
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
          <Box className={classes.leftCard}></Box>
          <Box className={classes.rightCard}>
            <Typography
              className={classes.mainHeading}
              variant="h1"
              component="h1"
            >
              FAQ
            </Typography>
            {QA.map((element, i) => {
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
