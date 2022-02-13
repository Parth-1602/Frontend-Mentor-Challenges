import * as React from "react";
import { Box, Typography, Avatar, ClickAwayListener } from "@mui/material";
import useClasses from "../../src/useClasses";
import useStyles from "./styles";

const DesktopAuthorBox = (props) => {
  const classes = useClasses(useStyles);
  const { avatarSrc, name, articleDate } = props;
  const [showIcons, setShowIcons] = React.useState(false);

  return (
    <Box className={classes.authorBox}>
      <Box className={classes.authorDetailsWrapper}>
        <Avatar src={avatarSrc} />
        <Box className={classes.authorDetails}>
          <Typography
            className={classes.authorName}
            variant="subtitle2"
            component="p"
          >
            {name}
          </Typography>
          <Typography
            className={classes.articleDate}
            variant="subtitle2"
            component="p"
          >
            {articleDate}
          </Typography>
        </Box>
      </Box>
      <ClickAwayListener onClickAway={() => setShowIcons(false)}>
        <Box style={{ position: "relative" }}>
          <Avatar
            onClick={() => setShowIcons(!showIcons)}
            className={
              showIcons ? classes.shareIconButtonDark : classes.shareIconButton
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {showIcons ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/article-preview-component/icon-share-white.svg"
                  alt="share button"
                  className={classes.shareIcon}
                />
              </>
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/article-preview-component/icon-share.svg"
                  alt="share button"
                  className={classes.shareIcon}
                />
              </>
            )}
          </Avatar>
          {showIcons ? (
            <Box className={classes.shareIconsWrapper}>
              <Typography
                className={classes.shareText}
                variant="subtitle2"
                component="p"
              >
                SHARE
              </Typography>
              <a href="#">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/article-preview-component/icon-facebook.svg"
                  alt="faceboook icon"
                  className={classes.socialIcon}
                />
              </a>

              <a href="#">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/article-preview-component/icon-twitter.svg"
                  alt="twitter icon"
                  className={classes.socialIcon}
                />
              </a>

              <a href="#">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/article-preview-component/icon-pinterest.svg"
                  alt="pinterest icon"
                  className={classes.socialIcon}
                />
              </a>
            </Box>
          ) : null}
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default DesktopAuthorBox;
