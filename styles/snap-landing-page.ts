const useStyles = (theme: any) => ({
  pageWrapper: {
    height: "100vh",
    position: "relative",
    backgroundColor: "hsl(0, 0%, 98%)",
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
  mobileHeroImage: {
    width: "100%",
    height: "100%",
  },
  mainContainer: {
    display: "flex",
    padding: theme.spacing(3, 22, 0, 18),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: theme.spacing(2),
    },
  },
  leftCard: {
    width: "55%",
    height: "calc(100vh - 230px)",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      width: "100%",
      textAlign: "center",
    },
  },
  mainHeadingWrapper: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
  mainHeading: {
    fontFamily: "Epilogue, sans-serif",
    fontWeight: 700,
    fontSize: "72px",
    lineHeight: "72px",
    color: "hsl(0, 0%, 8%)",
  },
  mobileHeading: {
    fontFamily: "Epilogue, sans-serif",
    fontWeight: 700,
    fontSize: "28px",
    color: "hsl(0, 0%, 8%)",
  },
  description: {
    fontFamily: "Epilogue, sans-serif",
    fontWeight: 500,
    fontSize: "18px",
    color: "hsl(0, 0%, 41%)",
    lineHeight: "28px",
    width: "70%",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "21px",
      width: "100%",
      marginBottom: theme.spacing(3),
    },
  },
  rightCard: {
    width: "45%",
    height: "calc(100vh - 230px)",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  learnMoreButton: {
    fontFamily: "Epilogue, sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    color: "hsl(0, 0%, 98%)",
    border: "2px solid hsl(0, 0%, 8%)",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1.5, 2),
    backgroundColor: "hsl(0, 0%, 8%)",
    transition: "0.3s all ease",
    "&:hover": {
      cursor: "pointer",
      color: "hsl(0, 0%, 8%)",
      border: "2px solid hsl(0, 0%, 8%)",
      backgroundColor: "transparent",
    },
  },
});

export default useStyles;
