import * as React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import useClasses from "../../src/useClasses";
import { testimonialStyles } from "./styles";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const classes = useClasses(testimonialStyles);

  return (
    <Box className={classes.sectionWrapper}>
      <Typography
        variant="h4"
        component="h4"
        className={classes.sectionHeading}
      >
        CLIENT TESTIMONIALS
      </Typography>
      <Box className={classes.testimonialsWrapper}>
        <TestimonialCard
          imageSrc="/images/sunnyside-agency-landing-page/image-emily.jpg"
          comment="We put our trust in Sunnyside and they delivered, making sure our needs
        were met and deadlines were always hit."
          author="Emily R."
          post="Marketing Director"
        />
        <TestimonialCard
          imageSrc="/images/sunnyside-agency-landing-page/image-thomas.jpg"
          comment="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying  and enjoyable experience."
          author="Thomas S."
          post="Chief Operating Officer"
        />
        <TestimonialCard
          imageSrc="/images/sunnyside-agency-landing-page/image-jennie.jpg"
          comment="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          author="Jennie F."
          post="Business Owner"
        />
      </Box>
    </Box>
  );
};

export default Testimonials;
