import { Box, Typography, Switch, Hidden } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";
import useClasses from "../../src/useClasses";
import { headerStyles } from "./styles";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  padding: 4,
  margin: theme.spacing(0, 0, 0, 1),
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      "& + .MuiSwitch-track": {
        backgroundImage:
          "linear-gradient(to top right, hsl(210, 78%, 56%) , hsl(146, 68%, 55%) 60%)",
      },
      "& > .MuiSwitch-thumb": {
        color: "#1d2029",
      },
    },
    "&:hover": {
      "& + .MuiSwitch-track": {
        backgroundImage:
          "linear-gradient(to top right, hsl(210, 78%, 56%), hsl(146, 68%, 55%) 60%)",
      },
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 44 / 2,
    backgroundColor: "hsl(230, 22%, 74%)",
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    color: "#FFFFFF",
    width: 20,
    height: 20,
    margin: 0.5,
  },
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(0, 0.5),
  },
}));

const Header = ({ toggleMode }) => {
  const classes = useClasses(headerStyles);
  const [isDark, setIsDark] = React.useState(false);

  return (
    <Box className={classes.headerWrapper}>
      <Box>
        <Typography variant="h1" component="h1" className={classes.heading}>
          Social Media Dashboard
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.subHeading}
        >
          Total Followers: 23,004
        </Typography>
      </Box>
      <Hidden mdDown>
        <Box className={classes.toggleModeWrapper}>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.switchLabel}
          >
            Dark Mode
          </Typography>
          <CustomSwitch
            checked={isDark}
            onChange={() => {
              setIsDark(!isDark);
              toggleMode();
            }}
          />
        </Box>
      </Hidden>
      <Hidden mdUp>
        <hr className={classes.divider} />
      </Hidden>
      <Hidden mdUp>
        <Box className={classes.toggleModeMobileWrapper}>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.switchLabel}
          >
            Dark Mode
          </Typography>
          <CustomSwitch
            checked={isDark}
            onChange={() => {
              setIsDark(!isDark);
              toggleMode();
            }}
          />
        </Box>
      </Hidden>
    </Box>
  );
};

export default Header;
