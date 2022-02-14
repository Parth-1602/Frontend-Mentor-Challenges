const useStyles = (theme: any) => ({
  main: {
    padding: 0,
    margin: 0,
  },
  pageWrapper: {
    backgroundColor: "hsl(0, 0%, 98%)",
    height: "100vh",
    padding: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  topSection: {
    textAlign: "center",
  },
  mainHeadingOne: {
    fontSize: "30px",
    color: "hsl(234, 12%, 34%)",
    fontWeight: 300,
    fontFamily: "Poppins, sans-serif",
    marginBottom: theme.spacing(1),
  },
  mainHeadingTwo: {
    fontSize: "30px",
    color: "hsl(234, 12%, 34%)",
    fontWeight: 600,
    fontFamily: "Poppins, sans-serif",
    marginBottom: theme.spacing(2),
  },
  descriptionText: {
    fontSize: "15px",
    color: "hsl(229, 6%, 66%)",
    width: "35%",
    margin: theme.spacing(0, "auto"),
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
  },
  cardsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(6),
  },
  middleCards: {
    margin: theme.spacing(0, 4),
  },
});

export default useStyles;
