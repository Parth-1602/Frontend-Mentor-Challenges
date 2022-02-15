const useStyles = (theme: any) => ({
  mainContainer: {
    display: "flex",
    height: "100vh",
  },
  leftCard: {
    width: "60%",
    padding: theme.spacing(6, 18),
    backgroundImage:
      "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%)), linear-gradient(135deg,hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
  },
  centerContent: {
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  rightCard: {
    width: "40%",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  mainHeading1: {
    fontSize: "60px",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 300,
    color: "hsl(0, 36%, 70%)",
    letterSpacing: "16px",
  },
  mainHeading2: {
    fontSize: "60px",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 600,
    color: "hsl(0, 6%, 24%)",
    letterSpacing: "16px",
  },
  description: {
    fontSize: "16px",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 400,
    color: "hsl(0, 36%, 70%)",
    width: "70%",
    marginTop: theme.spacing(1.5),
  },
});

export default useStyles;
