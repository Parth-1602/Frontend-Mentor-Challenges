import { Box, Typography, Hidden } from "@mui/material";
import DropDown from "./DropDown";
import DropDownMenuItem from "./DropDownMenuItem";
import useClasses from "../../src/useClasses";
import { appBarStyles } from "./styles";

const AppBar = (props) => {
  const classes = useClasses(appBarStyles);
  const { setDropDown } = props;

  return (
    <Box className={classes.appBar}>
      <Box className={classes.logoWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/snap-landing-page/logo.svg"
          alt="logo"
          className={classes.logo}
        />
        <Hidden mdDown>
          <DropDown title="Features">
            <DropDownMenuItem
              itemName="Todo List"
              imgSrc="/images/snap-landing-page/icon-todo.svg"
            />
            <DropDownMenuItem
              itemName="Calender"
              imgSrc="/images/snap-landing-page/icon-calendar.svg"
            />
            <DropDownMenuItem
              itemName="Reminders"
              imgSrc="/images/snap-landing-page/icon-reminders.svg"
            />
            <DropDownMenuItem
              itemName="Planning"
              imgSrc="/images/snap-landing-page/icon-planning.svg"
            />
          </DropDown>
          <DropDown title="Company">
            <DropDownMenuItem itemName="History" />
            <DropDownMenuItem itemName="Our Team" />
            <DropDownMenuItem itemName="Blog" />
          </DropDown>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.menuItem}
          >
            Careers
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.menuItem}
          >
            About
          </Typography>
        </Hidden>
      </Box>
      <Hidden mdDown>
        <Box className={classes.actionButtonsWrapper}>
          <button className={classes.loginButton}>Login</button>
          <button className={classes.registerButton}>Register</button>
        </Box>
      </Hidden>
      <Hidden mdUp>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/snap-landing-page/icon-menu.svg"
          alt="menu-icon"
          onClick={setDropDown}
        />
      </Hidden>
    </Box>
  );
};

export default AppBar;
