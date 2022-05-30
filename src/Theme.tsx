// @ts-nocheck
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let lightTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    mode: "light",
    socialMediaDashboardTheme: {
      background: "hsl(0, 0%, 100%)",
      backgroundPattern: "hsl(225, 100%, 98%)",
      cardBG: "hsl(227, 47%, 96%)",
      cardHoverBG: "hsl(227, 47%, 90%)",
      textSecondary: "hsl(228, 12%, 44%)",
      textPrimary: "hsl(230, 17%, 14%)",
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

let darkTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    mode: "dark",
    socialMediaDashboardTheme: {
      background: "hsl(230, 17%, 14%)",
      backgroundPattern: "hsl(232, 19%, 15%)",
      cardBG: "hsl(228, 28%, 20%)",
      cardHoverBG: "hsl(228, 28%, 36%)",
      textSecondary: "hsl(228, 34%, 66%)",
      textPrimary: "hsl(0, 0%, 100%)",
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };
