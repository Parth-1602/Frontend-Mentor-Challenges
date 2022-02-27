const useStyles = (theme: any) => ({
  pageWrapper: {
    height: "100vh",
    backgroundColor: "hsl(217, 19%, 24%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "450px",
    minHeight: "300px",
    backgroundColor: " hsl(217, 19%, 38%)",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(4),
    position: "relative",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      padding: theme.spacing(2),
    },
  },
  quoteWrapper: {
    minHeight: "200px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2, 0),
  },
  adviceId: {
    fontSize: "13px",
    fontWeight: 800,
    color: "hsl(150, 100%, 66%)",
  },
  advice: {
    fontSize: "28px",
    fontWeight: 800,
    color: "hsl(193, 38%, 86%)",
    marginTop: theme.spacing(2),
  },
  loader: {
    width: "25px",
    height: "25px",
    color: "hsl(193, 38%, 86%)",
  },
  divider: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
  diceWrapper: {
    backgroundColor: "hsl(150, 100%, 66%)",
    width: "50px",
    height: "50px",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: -50,
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "100%",
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 0 30px 1px hsl(150, 100%, 66%)",
    },
  },
});

export default useStyles;
