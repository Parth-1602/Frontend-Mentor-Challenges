import * as React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import useClasses from "../src/useClasses";
import testimonials from "../src/coding-bootcamp-testimonials-slider/testimonials.json";
import ImageComponent from "../components/coding-bootcamp-testimonials-slider/ImageComponent";
import TestimonialSection from "../components/coding-bootcamp-testimonials-slider/TestimonialSection";
import useStyles from "../styles/coding-bootcamp-testimonials-slider";

const CodingBootcampTestimonials = () => {
  const classes = useClasses(useStyles);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = React.useState(0);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(null);

  React.useEffect(() => {
    setCurrentTestimonial(testimonials[0]);
  }, []);

  React.useEffect(() => {
    setCurrentTestimonial(testimonials[activeTestimonialIndex]);
  }, [activeTestimonialIndex]);

  return (
    <div>
      <Head>
        <title>Coding Bootcamp Testimonials</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <ImageComponent
          imageSrc={currentTestimonial && currentTestimonial.imgSrc}
          changeTestimonialData={setActiveTestimonialIndex}
          currentTestimonialDataIndex={activeTestimonialIndex}
          totalTestimonials={testimonials.length}
        />
        <TestimonialSection testimonialData={currentTestimonial} />
      </Box>
    </div>
  );
};

export default CodingBootcampTestimonials;
