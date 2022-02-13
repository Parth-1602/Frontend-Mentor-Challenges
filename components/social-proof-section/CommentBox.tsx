import * as React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import useClasses from "../../src/useClasses";
import useStyles from "./styles";

const CommentBox = (props) => {
  const classes = useClasses(useStyles);
  const { avatarSrc, name, verifyType, comment, marginTop } = props;
  const ratingMap = new Array(5);
  console.log(ratingMap);

  return (
    <Box style={{ marginTop }} className={classes.commentBox}>
      <Box className={classes.profileWrapper}>
        <Avatar src={avatarSrc} className={classes.profileImage} />
        <Box>
          <Typography
            className={classes.profileName}
            variant="subtitle1"
            component="p"
          >
            {name}
          </Typography>
          <Typography
            className={classes.profileVerification}
            variant="subtitle1"
            component="p"
          >
            {verifyType}
          </Typography>
        </Box>
      </Box>
      <Typography className={classes.comment} variant="subtitle1" component="p">
        {`"${comment}"`}
      </Typography>
    </Box>
  );
};

export default CommentBox;
