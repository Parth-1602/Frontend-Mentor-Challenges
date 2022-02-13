import * as React from "react";
import { Box, Typography, Avatar, ClickAwayListener } from "@mui/material";
import useClasses from "../../src/useClasses";
import useStyles from "./styles";

const MobileAuthorBox = (props) => {
  const classes = useClasses(useStyles);
  const { avatarSrc, name, articleDate } = props;
  const [isIconBox, setIsIconBox] = React.useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsIconBox(false)}>
      <Box
        className={
          isIconBox ? classes.authorDarkMobileBox : classes.authorMobileBox
        }
      >
        {!isIconBox ? (
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
        ) : (
          <Box className={classes.shareIconsMobileWrapper}>
            <Typography
              className={classes.shareMobileText}
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
                className={classes.socialMobileIcon}
              />
            </a>

            <a href="#">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/article-preview-component/icon-twitter.svg"
                alt="twitter icon"
                className={classes.socialMobileIcon}
              />
            </a>

            <a href="#">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/article-preview-component/icon-pinterest.svg"
                alt="pinterest icon"
                className={classes.socialMobileIcon}
              />
            </a>
          </Box>
        )}
        <Box>
          <Avatar
            onClick={() => setIsIconBox(!isIconBox)}
            className={
              isIconBox
                ? classes.shareIconMobileButtonDark
                : classes.shareIconButton
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {isIconBox ? (
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
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default MobileAuthorBox;
