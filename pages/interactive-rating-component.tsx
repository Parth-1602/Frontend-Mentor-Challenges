import * as React from "react";
import useClasses from "../src/useClasses";
import { Avatar, Box, Typography } from "@mui/material";
import useStyles from "../styles/interactive-rating-component";
import Head from "next/head";

const ratingList = [1, 2, 3, 4, 5];

const InteractiveRating = () => {
  const classes = useClasses(useStyles);
  const [rating, setRating] = React.useState(null);
  const [isDone, setIsDone] = React.useState(false);

  return (
    <div role="main">
      <Head>
        <title>Interactive Rating</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        {!isDone && (
          <Box className={classes.ratingCard}>
            <Avatar className={classes.iconWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/interactive-rating-component/icon-star.svg"
                alt="star-icon"
              />
            </Avatar>
            <Typography
              variant="h1"
              component="h1"
              className={classes.ratingCardHeading}
            >
              How did we do?
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.ratingCardDescription}
            >
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </Typography>
            <Box className={classes.ratingButtonsWrapper}>
              {ratingList.map((ele) => {
                return (
                  <Avatar
                    key={ele}
                    onClick={() => {
                      if (rating !== ele) {
                        setRating(ele);
                      } else {
                        setRating(null);
                      }
                    }}
                    className={`${classes.numberWrapper} ${
                      rating === ele && classes.numberActiveWrapper
                    }`}
                  >
                    {ele}
                  </Avatar>
                );
              })}
            </Box>
            <button
              onClick={() => {
                if (rating) {
                  setIsDone(true);
                }
              }}
              className={classes.submitButton}
            >
              SUBMIT
            </button>
          </Box>
        )}
        {isDone && (
          <Box className={classes.thanksCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/interactive-rating-component/illustration-thank-you.svg"
              alt="star-icon"
            />
            <Box className={classes.thanksRatingWrapper}>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.thanksRatingText}
              >
                You selected {rating} out of 5
              </Typography>
            </Box>
            <Typography
              variant="h1"
              component="h1"
              className={classes.ratingCardHeading}
            >
              Thank You!
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.ratingCardDescription}
            >
              We appreciate you taking the time to give a rating. If you ever
              need more support, don&apos;t hesitate to get in touch!
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default InteractiveRating;
