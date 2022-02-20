const useStyles = (theme: any) => ({
  mainContainer: {
    background:
      "url(/images/intro-component-with-signup-form/bg-intro-desktop.png), hsl(0, 100%, 74%)",
    height: "100vh",
    display: "flex",
    padding: theme.spacing(15, 20),
    [theme.breakpoints.down("md")]: {
      background:
        "url(/images/intro-component-with-signup-form/bg-intro-mobile.png), hsl(0, 100%, 74%)",
      height: "auto",
      flexDirection: "column",
      padding: theme.spacing(12, 4),
    },
  },
  leftBox: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
      padding: theme.spacing(0),
    },
  },
  mainHeading: {
    fontSize: "40px",
    fontWeight: 700,
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  descriptionText: {
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      marginTop: theme.spacing(2),
    },
  },
  rightBox: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(6),
    },
  },
  offerBox: {
    width: "100%",
    backgroundColor: "hsl(248, 32%, 49%)",
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: theme.spacing(1),
    boxShadow: "0px 5px  hsla(249, 10%, 26%, 30%) ",
  },
  offerText: {
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
  },
  offerSpanText: {
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
    color: "hsl(246, 25%, 77%)",
  },
});

export default useStyles;
