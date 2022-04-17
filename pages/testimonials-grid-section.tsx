import * as React from "react";
import Head from "next/head";
import useStyles from "../styles/testimonials-grid-section";
import testimonials from "../src/testimonials-grid-section/testimonials.json";
import { Box, Grid } from "@mui/material";
import useClasses from "../src/useClasses";
import TestimonialCard from "../components/testimonials-grid-section/TestimonialCard";

const TestimonialGridSection = () => {
  const classes = useClasses(useStyles);

  return (
    <div role="main">
      <Head>
        <title>Testimonials Grid</title>;
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.gridWrapper}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <TestimonialCard
                bgColor={testimonials[0].bgColor}
                avatarSrc={testimonials[0].avatarSrc}
                authorName={testimonials[0].authorName}
                authorNameAndTitleColor={
                  testimonials[0].authorNameAndTitleColor
                }
                designation={testimonials[0].designation}
                designationColor={testimonials[0].designationColor}
                cardTitle={testimonials[0].cardTitle}
                cardReview={testimonials[0].cardReview}
                reviewColor={testimonials[0].reviewColor}
                hasBackgroundImage
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TestimonialCard
                bgColor={testimonials[1].bgColor}
                avatarSrc={testimonials[1].avatarSrc}
                authorName={testimonials[1].authorName}
                authorNameAndTitleColor={
                  testimonials[1].authorNameAndTitleColor
                }
                designation={testimonials[1].designation}
                designationColor={testimonials[1].designationColor}
                cardTitle={testimonials[1].cardTitle}
                cardReview={testimonials[1].cardReview}
                reviewColor={testimonials[1].reviewColor}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TestimonialCard
                bgColor={testimonials[3].bgColor}
                avatarSrc={testimonials[3].avatarSrc}
                authorName={testimonials[3].authorName}
                authorNameAndTitleColor={
                  testimonials[3].authorNameAndTitleColor
                }
                designation={testimonials[3].designation}
                designationColor={testimonials[3].designationColor}
                cardTitle={testimonials[3].cardTitle}
                cardReview={testimonials[3].cardReview}
                reviewColor={testimonials[3].reviewColor}
                boxShadow
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TestimonialCard
                bgColor={testimonials[4].bgColor}
                avatarSrc={testimonials[4].avatarSrc}
                authorName={testimonials[4].authorName}
                authorNameAndTitleColor={
                  testimonials[4].authorNameAndTitleColor
                }
                designation={testimonials[4].designation}
                designationColor={testimonials[4].designationColor}
                cardTitle={testimonials[4].cardTitle}
                cardReview={testimonials[4].cardReview}
                reviewColor={testimonials[4].reviewColor}
              />
            </Grid>
          </Grid>
          <Box className={classes.longCard}>
            <TestimonialCard
              bgColor={testimonials[2].bgColor}
              avatarSrc={testimonials[2].avatarSrc}
              authorName={testimonials[2].authorName}
              authorNameAndTitleColor={testimonials[2].authorNameAndTitleColor}
              designation={testimonials[2].designation}
              designationColor={testimonials[2].designationColor}
              cardTitle={testimonials[2].cardTitle}
              cardReview={testimonials[2].cardReview}
              reviewColor={testimonials[2].reviewColor}
              boxShadow
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TestimonialGridSection;
