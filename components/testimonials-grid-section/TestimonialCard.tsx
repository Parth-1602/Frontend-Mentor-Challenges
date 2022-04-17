import { cardStyles } from "./styles";
import { Avatar, Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";

const TestimonialCard = (props) => {
  const classes = useClasses(cardStyles);
  const {
    bgColor,
    avatarSrc,
    authorName,
    authorNameAndTitleColor,
    designation,
    designationColor,
    cardTitle,
    cardReview,
    reviewColor,
    boxShadow = false,
    hasBackgroundImage = false,
  } = props;

  return (
    <Box
      className={classes.card}
      style={{
        backgroundColor: bgColor,
        boxShadow: boxShadow ? "8px 8px 16px  hsl(0, 0%, 81%)" : "none",
        backgroundImage: hasBackgroundImage
          ? "url(/images/testimonials-grid-section/bg-pattern-quotation.svg)"
          : "none",
      }}
    >
      <Box className={classes.authorWrapper}>
        <Avatar src={avatarSrc} className={classes.authorProfileImage} />
        <Box className={classes.authorDetailsWrapper}>
          <Typography
            variant="subtitle1"
            component="p"
            style={{ color: authorNameAndTitleColor }}
            className={classes.authorName}
          >
            {authorName}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            style={{ color: designationColor }}
            className={classes.authorDesignation}
          >
            {designation}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h2"
        component="h2"
        style={{ color: authorNameAndTitleColor }}
        className={classes.cardTitle}
      >
        {cardTitle}
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        style={{ color: reviewColor }}
        className={classes.cardReview}
      >
        {`" ${cardReview} "`}
      </Typography>
    </Box>
  );
};

export default TestimonialCard;
