import * as React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import useClasses from "../../src/useClasses";
import { testimonialStyles } from "./styles";

const TestimonialCard = ({ imageSrc, comment, author, post }) => {
  const classes = useClasses(testimonialStyles);

  return (
    <Box className={classes.card}>
      <Avatar src={imageSrc} className={classes.avatarIcon} />
      <Typography variant="subtitle1" component="p" className={classes.comment}>
        {comment}
      </Typography>
      <Box>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.author}
        >
          {author}
        </Typography>
        <Typography variant="subtitle1" component="p" className={classes.post}>
          {post}
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
