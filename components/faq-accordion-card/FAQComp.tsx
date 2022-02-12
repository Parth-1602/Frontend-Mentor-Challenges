import * as React from "react";
import useClasses from "../../src/useClasses";
import { Box, Typography, ClickAwayListener } from "@mui/material";
import useStyles from "./styles";

const FAQComp = (props) => {
  const classes = useClasses(useStyles);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const { question, answer } = props;

  return (
    <ClickAwayListener onClickAway={() => setShowAnswer(false)}>
      <Box className={classes.faqWrapper}>
        <Box
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
          className={classes.questionWrapper}
        >
          <Typography
            className={
              showAnswer ? classes.questionOpenText : classes.questionText
            }
            variant="body1"
            component="p"
          >
            {question}
          </Typography>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/faq-accordion-card/icon-arrow-down.svg"
            alt="arrow-icon"
            className={showAnswer ? classes.invertArrow : null}
          />
        </Box>
        {showAnswer ? (
          <Typography
            className={classes.answerText}
            variant="subtitle1"
            component="p"
          >
            {answer}
          </Typography>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export default FAQComp;
