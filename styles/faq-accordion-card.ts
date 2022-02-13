const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage:
      "linear-gradient(to bottom,hsl(273, 75%, 66%) 20%, hsl(240, 73%, 65%) 80%)",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  card: {
    backgroundColor: "#ffffff",
    display: "flex",
    width: "65%",
    borderRadius: theme.spacing(2),
    boxShadow: "0px 40px 50px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "90%",
      margin: theme.spacing(26, 0),
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: theme.spacing(20, 0),
    },
  },
  leftCard: {
    position: "relative",
    backgroundColor: "#ffffff",
    borderRadius: theme.spacing(2),
    width: "50%",
    backgroundImage:
      "url(/images/faq-accordion-card/bg-pattern-desktop.svg), url(/images/faq-accordion-card/illustration-woman-online-desktop.svg)",
    backgroundSize: "150% 150%, 100%, 100%",
    backgroundPosition: "-350px -150px, -80px 50%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "150px",
      backgroundImage: "none",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100px",
    },
  },
  boxImage: {
    position: "absolute",
    top: "42%",
    left: "-90px",
    transition: "all .2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.2)",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobileImage: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      position: "absolute",
      top: "-10%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  },
  mobileShadow: {
    display: "none",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      display: "block",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  },
  rightCard: {
    width: "50%",
    padding: theme.spacing(10, 10, 10, 0),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(4),
    },
  },
  mainHeading: {
    fontFamily: "Kumbh Sans, sans-serif",
    fontWeight: 700,
    fontSize: "35px",
    marginBottom: theme.spacing(4),
    color: "hsl(238, 29%, 16%)",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "28px",
    },
  },
});

export default useStyles;
