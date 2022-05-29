export const imageStyles = (theme: any) => ({
  imageWrapper: {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  profileImage: {
    width: "100%",
    height: "100%",
    display: "flex",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  actionButtonsWrapper: {
    position: "absolute",
    bottom: "-25px",
    left: "70px",
    borderRadius: "25px",
    boxShadow: "0px 10px 20px #d5d5e5",
    [theme.breakpoints.down("md")]: {
      left: "50%",
      bottom: "-15px",
      transform: "translate(-50%,0)",
    },
  },
  actionButtonLeft: {
    border: "none",
    width: "50px",
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(2),
    borderRadius: "25px 0px 0px 25px",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
      width: "55px",
    },
  },
  actionButtonRight: {
    border: "none",
    width: "50px",
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(2),
    borderRadius: "0px 25px 25px 0px",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
      width: "55px",
    },
  },
});

export const testimonialStyles = (theme: any) => ({
  testimonialWrapper: {
    position: "absolute",
    top: "50%",
    left: "180px",
    transform: "translate(0%,-50%)",
    width: "43%",
    backgroundImage:
      "url(/images/coding-bootcamp-testimonials-slider/pattern-quotes.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "75px 0px",
    paddingTop: "70px",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: 0,
      left: 0,
      transform: "translate(0)",
      paddingTop: "35px",
      width: "100%",
      backgroundSize: "20%",
      marginTop: theme.spacing(6),
      backgroundPosition: "50% 0px",
    },
  },
  testimonialText: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 300,
    fontSize: "32px",
    lineHeight: "40px",
    color: "hsl(240, 38%, 20%)",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "26px",
      textAlign: "center",
    },
  },
  byWrapper: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      marginTop: theme.spacing(2),
    },
  },
  name: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "18px",
    color: "hsl(240, 38%, 20%)",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
  },
  designation: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "18px",
    color: "hsl(240, 18%, 77%)",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
      marginLeft: 0,
      marginTop: theme.spacing(1),
    },
  },
});
