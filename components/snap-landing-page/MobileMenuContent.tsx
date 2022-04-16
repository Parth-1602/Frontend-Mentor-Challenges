import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { mobileMenuStyles } from "./styles";

const MobileMenuContent = (props) => {
  const { onClose } = props;
  const classes = useClasses(mobileMenuStyles);
  const [isFeatureDrop, setIsFeatureDrop] = React.useState(false);
  const [isCompanyDrop, setIsCompanyDrop] = React.useState(false);

  return (
    <Box className={classes.menuContentWrapper}>
      <Box className={classes.closeIconWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/snap-landing-page/icon-close-menu.svg"
          alt="close-icon"
          onClick={() => {
            onClose();
            setIsFeatureDrop(false);
            setIsCompanyDrop(false);
          }}
        />
      </Box>
      <Box
        className={classes.menuItemWrapper}
        onClick={() => setIsFeatureDrop(!isFeatureDrop)}
      >
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.menuItemText}
        >
          Features
        </Typography>
        {isFeatureDrop ? (
          //eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/snap-landing-page/icon-arrow-up.svg"
            alt="up-arrow"
          />
        ) : (
          //eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/snap-landing-page/icon-arrow-down.svg"
            alt="down-arrow"
          />
        )}
      </Box>
      {isFeatureDrop && (
        <Box>
          <Box className={classes.dropDownWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/snap-landing-page/icon-todo.svg"
              alt="menu-icon"
            />
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.dropDownItem}
            >
              Todo List
            </Typography>
          </Box>
          <Box className={classes.dropDownWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/snap-landing-page/icon-calendar.svg"
              alt="menu-icon"
            />
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.dropDownItem}
            >
              Calendar
            </Typography>
          </Box>
          <Box className={classes.dropDownWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/snap-landing-page/icon-reminders.svg"
              alt="menu-icon"
            />
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.dropDownItem}
            >
              Reminders
            </Typography>
          </Box>
          <Box className={classes.dropDownWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/snap-landing-page/icon-planning.svg"
              alt="menu-icon"
            />
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.dropDownItem}
            >
              Planning
            </Typography>
          </Box>
        </Box>
      )}
      <Box
        className={classes.menuItemWrapper}
        onClick={() => setIsCompanyDrop(!isCompanyDrop)}
      >
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.menuItemText}
        >
          Company
        </Typography>
        {isCompanyDrop ? (
          //eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/snap-landing-page/icon-arrow-up.svg"
            alt="up-arrow"
          />
        ) : (
          //eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/snap-landing-page/icon-arrow-down.svg"
            alt="down-arrow"
          />
        )}
      </Box>
      {isCompanyDrop && (
        <Box>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.dropDownItemWithoutIcon}
          >
            History
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.dropDownItemWithoutIcon}
          >
            Our Team
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.dropDownItemWithoutIcon}
          >
            Blog
          </Typography>
        </Box>
      )}
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.menuItemTextWithout}
      >
        Careers
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.menuItemTextWithout}
      >
        About
      </Typography>
    </Box>
  );
};

export default MobileMenuContent;
