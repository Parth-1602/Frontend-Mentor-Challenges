const useStyles = (theme: any) => ({
  pageWrapper: {
    backgroundImage: "url(/images/huddle-landing-page/bg-desktop.svg)",
    backgroundSize: "100% 100%",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundColor: "hsl(257, 40%, 49%)",
    padding: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
      height: "100%",
      backgroundSize: "100% 40%",
      backgroundImage: "url(/images/huddle-landing-page/bg-mobile.svg)",
    },
  },
  logo: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      height: "40px",
      marginBottom: theme.spacing(4),
    },
  },
  centerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "85%",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      flexDirection: "column",
    },
  },
  contentWrapper: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  leftCard: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  mainImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  rightCard: {
    width: "50%",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(4, 0),
    },
  },
  headingWrapper: {
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
  },
  mainHeading: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "40px",
    color: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
      textAlign: "center",
    },
  },
  description: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
    width: "90%",
    color: "#FFFFFF",
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      textAlign: "center",
      width: "100%",
      marginBottom: theme.spacing(3.5),
    },
  },
  buttonWrapper: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  registerButton: {
    padding: theme.spacing(1.5),
    width: "200px",
    borderRadius: "25px",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    fontSize: "18px",
    border: "none",
    backgroundColor: "#FFFFFF",
    color: " hsl(257, 40%, 49%)",
    transition: "0.5s all ease",
    boxShadow: "8px 8px 15px  hsl(257, 40%, 35%)",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(300, 69%, 73%)",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1, 0.5),
      width: "180px",
      fontSize: "15px",
      fontWeight: 400,
      marginBottom: theme.spacing(4),
    },
  },
  socialIconsWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  socialIconContainer: {
    marginLeft: theme.spacing(2),
    backgroundColor: "transparent",
    border: "1px solid #FFF",
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      border: "1px solid hsl(300, 69%, 65%)",
    },
    [theme.breakpoints.down("md")]: {
      width: "25px",
      height: "25px",
      marginLeft: theme.spacing(1.5),
    },
  },
  facebookIcon: {
    color: "#FFFFFF",
    transition: "0.5s all ease",
    "&:hover": {
      color: "hsl(300, 69%, 65%)",
    },
    [theme.breakpoints.down("md")]: {
      width: "16px",
      height: "16px",
    },
  },
  socialIcon: {
    color: "#FFFFFF",
    transition: "0.5s all ease",
    "&:hover": {
      color: "hsl(300, 69%, 65%)",
    },
    [theme.breakpoints.down("md")]: {
      width: "16px",
      height: "16px",
    },
  },
});

export default useStyles;

// font-family: 'Open Sans', sans-serif;
// font-family: 'Poppins', sans-serif;
