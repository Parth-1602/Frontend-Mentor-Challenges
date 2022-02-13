const useStyles = (theme: any) => ({
  main: {
    margin: 0,
    padding: 0,
  },
  pageWrapper: {
    height: "100vh",
    backgroundImage:
      "url(/images/social-proof-section/bg-pattern-top-desktop.svg),url(/images/social-proof-section/bg-pattern-bottom-desktop.svg) ",
    backgroundSize: "40% 40%, 70% 70%",
    backgroundPosition: "left top, right bottom",
    backgroundRepeat: "no-repeat",
    padding: theme.spacing(14),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      backgroundImage:
        "url(/images/social-proof-section/bg-pattern-top-mobile.svg),url(/images/social-proof-section/bg-pattern-bottom-mobile.svg) ",
      backgroundSize: "100% 30%, 100% 30%",
      padding: theme.spacing(4),
    },
  },
  topSection: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  leftSide: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  mainHeading: {
    color: "hsl(300, 43%, 22%)",
    fontSize: "40px",
    width: "65%",
    marginBottom: theme.spacing(1),
    fontFamily: "Spartan, sans-serif",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      fontSize: "30px",
      textAlign: "center",
    },
  },
  description: {
    color: "hsl(303, 10%, 53%)",
    fontSize: "14px",
    width: "75%",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      fontSize: "13px",
      textAlign: "center",
      marginBottom: theme.spacing(2),
    },
  },
  rightSide: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  commentSection: {
    display: "flex",
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginTop: theme.spacing(4),
    },
  },
});

export default useStyles;
