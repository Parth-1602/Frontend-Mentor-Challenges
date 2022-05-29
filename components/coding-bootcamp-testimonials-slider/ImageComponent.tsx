import { imageStyles } from "./styles";
import { Box } from "@mui/material";
import useClasses from "../../src/useClasses";

const ImageComponent = ({
  imageSrc,
  changeTestimonialData,
  currentTestimonialDataIndex,
  totalTestimonials,
}) => {
  const classes = useClasses(imageStyles);

  const handlePrevTestimonialChange = () => {
    if (currentTestimonialDataIndex === 0) {
      changeTestimonialData(totalTestimonials - 1);
    } else {
      changeTestimonialData(currentTestimonialDataIndex - 1);
    }
  };

  const handleNextTestimonialChange = () => {
    if (currentTestimonialDataIndex === totalTestimonials - 1) {
      changeTestimonialData(0);
    } else {
      changeTestimonialData(currentTestimonialDataIndex + 1);
    }
  };

  return (
    <Box className={classes.imageWrapper}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt="profile-image"
        className={classes.profileImage}
      />
      <Box className={classes.actionButtonsWrapper}>
        <button
          onClick={handlePrevTestimonialChange}
          className={classes.actionButtonLeft}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/coding-bootcamp-testimonials-slider/icon-prev.svg"
            alt="prev-button"
          />
        </button>
        <button
          onClick={handleNextTestimonialChange}
          className={classes.actionButtonRight}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/coding-bootcamp-testimonials-slider/icon-next.svg"
            alt="next-button"
          />
        </button>
      </Box>
    </Box>
  );
};

export default ImageComponent;
