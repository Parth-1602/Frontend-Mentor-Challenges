const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(0, 0%, 95%)",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  cardsWrapper: {
    maxWidth: "60%",
    display: "flex",
    borderRadius: theme.spacing(1.5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      margin: theme.spacing(8, 0),
      maxWidth: "80%",
    },
  },
  card: {
    padding: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
    },
  },
  sedanCard: {
    backgroundColor: "hsl(31, 77%, 52%)",
    borderRadius: theme.spacing(1.5, 0, 0, 1.5),
    [theme.breakpoints.down("md")]: {
      borderRadius: theme.spacing(1.5, 1.5, 0, 0),
    },
  },
  suvCard: {
    backgroundColor: "hsl(184, 100%, 22%)",
  },
  luxuryCard: {
    backgroundColor: "hsl(179, 100%, 13%)",
    borderRadius: theme.spacing(0, 1.5, 1.5, 0),
    [theme.breakpoints.down("md")]: {
      borderRadius: theme.spacing(0, 0, 1.5, 1.5),
    },
  },
  cardHeading: {
    fontSize: "40px",
    color: "hsl(0, 0%, 95%)",
    margin: theme.spacing(3, 0),
    fontWeight: 700,
    fontFamily: "Big Shoulders Display, cursive",
  },
  cardDescription: {
    fontSize: "15px",
    color: "hsla(0, 0%, 100%, 0.75)",
    marginBottom: theme.spacing(10),
    fontWeight: 400,
    fontFamily: "Lexend Deca, sans-serif",
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  cardButton: {
    backgroundColor: "hsl(0, 0%, 95%)",
    borderRadius: "25px",
    textTransform: "none",
    padding: theme.spacing(1.5),
    width: "150px",
    "&:hover": {
      backgroundColor: "transparent",
      border: "1px solid hsl(0, 0%, 95%)",
      color: "hsl(0, 0%, 95%)",
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
      width: "120px",
    },
  },
  sedanButton: {
    color: "hsl(31, 77%, 52%)",
  },
  suvButton: {
    color: "hsl(184, 100%, 22%)",
  },
  luxuryButton: {
    color: "hsl(179, 100%, 13%)",
  },
});

export default useStyles;
