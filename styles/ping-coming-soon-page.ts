const useStyles = (theme: any) => ({
  contentWrapper: {
    width: "40%",
    margin: theme.spacing(8, "auto"),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: theme.spacing(12, "auto"),
    },
  },
  logo: {
    marginBottom: theme.spacing(3.5),
  },
  mainHeading: {
    fontSize: "40px",
    fontFamily: "Libre Franklin, sans-serif",
    color: "hsl(0, 0%, 59%)",
    fontWeight: 300,
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  mainSpanHeading: {
    fontSize: "40px",
    fontFamily: "Libre Franklin, sans-serif",
    color: "hsl(209, 33%, 12%)",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  description: {
    fontSize: "18px",
    marginTop: theme.spacing(1),
    fontFamily: "Libre Franklin, sans-serif",
    color: "hsl(209, 33%, 12%)",
    fontWeight: 300,
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      marginTop: theme.spacing(3),
    },
  },
  mainImage: {
    width: "100%",
    marginTop: theme.spacing(8),
  },
  socialIconsWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(12),
    },
  },
  socialIconContainer: {
    backgroundColor: "#FFFFFF",
    border: "1px solid hsl(0, 0%, 75%)",
    width: "30px",
    height: "30px",

    marginRight: theme.spacing(2.5),
    transition: "0.5s all ease-in-out",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(223, 87%, 63%)",
      border: "1px solid hsl(223, 87%, 63%)",
    },
  },
  socialIcon: {
    color: "hsl(223, 87%, 63%)",
    fontSize: "18px",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
  copyrightText: {
    fontSize: "12px",
    marginTop: theme.spacing(1.5),
    fontFamily: "Libre Franklin, sans-serif",
    color: "hsl(0, 0%, 59%)",
    fontWeight: 300,
  },
  facebookIcon: {
    color: "hsl(223, 87%, 63%)",
    width: "15px",
    height: "15px",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
});

export default useStyles;
