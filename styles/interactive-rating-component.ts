const useStyles = (theme: any) => ({
  pageWrapper: {
    backgroundColor: "hsl(216, 12%, 8%)",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
  },
  ratingCard: {
    background:
      "linear-gradient(to bottom,hsl(213, 19%, 18%),hsl(213, 19%, 12%))",
    width: 400,
    padding: theme.spacing(3),
    borderRadius: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: "90%",
      padding: theme.spacing(2),
    },
  },
  iconWrapper: {
    backgroundColor: "hsl(213, 19%, 22%)",
    marginBottom: theme.spacing(4),
  },
  ratingCardHeading: {
    fontSize: "24px",
    fontFamily: "Overpass, sans-serif",
    color: "hsl(0, 0%, 100%)",
    fontWeight: 700,
    marginBottom: theme.spacing(1.5),
  },
  ratingCardDescription: {
    fontSize: "15px",
    fontFamily: "Overpass, sans-serif",
    color: "hsl(217, 12%, 63%)",
    fontWeight: 400,
    marginBottom: theme.spacing(3),
  },
  ratingButtonsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
  },
  numberWrapper: {
    backgroundColor: "hsl(213, 19%, 20%)",
    fontSize: "16px",
    color: "hsl(216, 12%, 54%)",
    width: "50px",
    height: "50px",
    transition: "0.5s all ease",
    "&:hover": {
      backgroundColor: "hsl(25, 97%, 53%)",
      color: "hsl(0, 0%, 100%)",
      cursor: "pointer",
    },
  },
  numberActiveWrapper: {
    backgroundColor: "hsl(217, 12%, 63%)",
    color: "hsl(0, 0%, 100%)",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "hsl(25, 97%, 53%)",
    border: "none",
    borderRadius: "25px",
    padding: theme.spacing(2, 0),
    fontSize: "15px",
    fontFamily: "Overpass, sans-serif",
    color: "hsl(0, 0%, 100%)",
    letterSpacing: "2.5px",
    fontWeight: 700,
    transition: "0.5s all ease",
    "&:hover": {
      color: "hsl(25, 97%, 53%)",
      backgroundColor: "hsl(0, 0%, 100%)",
      cursor: "pointer",
    },
  },
  thanksCard: {
    background:
      "linear-gradient(to bottom,hsl(213, 19%, 18%),hsl(213, 19%, 12%))",
    width: 400,
    padding: theme.spacing(5, 3),
    borderRadius: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      padding: theme.spacing(3, 2),
    },
  },
  thanksRatingWrapper: {
    backgroundColor: "hsl(213, 19%, 22%)",
    borderRadius: "25px",
    width: "200px",
    padding: theme.spacing(0.5, 0),
    margin: theme.spacing(3, "auto"),
  },
  thanksRatingText: {
    fontSize: "15px",
    fontFamily: "Overpass, sans-serif",
    color: "hsl(25, 97%, 45%)",
    fontWeight: 400,
  },
});

export default useStyles;
