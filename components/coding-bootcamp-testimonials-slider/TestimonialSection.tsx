import { testimonialStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";

const TestimonialSection = ({ testimonialData }) => {
  const classes = useClasses(testimonialStyles);

  return (
    <Box className={classes.testimonialWrapper}>
      <Typography
        variant="h1"
        component="h1"
        className={classes.testimonialText}
      >
        &quot; {testimonialData && testimonialData.testimonial} &quot;
      </Typography>
      <Box className={classes.byWrapper}>
        <Typography variant="subtitle1" component="p" className={classes.name}>
          {testimonialData && testimonialData.name}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.designation}
        >
          {testimonialData && testimonialData.designation}
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
