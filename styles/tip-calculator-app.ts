const useStyles = (theme: any) => ({
  pageWrapper: {
    height: "100vh",
    backgroundColor: "hsl(185, 41%, 84%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
  logo: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(6),
    },
  },
  card: {
    display: "flex",
    width: "800px",
    backgroundColor: "hsl(0, 0%, 100%)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4),
    marginTop: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      borderRadius: theme.spacing(2, 2, 0, 0),
      flexDirection: "column",
    },
  },
  leftCard: {
    width: "50%",
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      paddingRight: 0,
    },
  },
  spacingBottom: {
    marginBottom: theme.spacing(3),
  },
  spacingTop: {
    marginTop: theme.spacing(3),
  },
  rightCard: {
    backgroundColor: "hsl(183, 100%, 15%)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
  },
  resetButton: {
    backgroundColor: "hsl(172, 67%, 45%)",
    border: "none",
    height: "40px",
    borderRadius: theme.spacing(0.5),
    width: "100%",
    fontSize: "18px",
    fontWeight: 700,
    color: "hsl(183, 100%, 15%)",
    fontFamily: "Space Mono, monospace",
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(185, 41%, 84%)",
    },
    "&:disabled": {
      backgroundColor: "hsl(186, 14%, 43%)",
      color: "hsl(184, 14%, 56%)",
      cursor: "default",
    },
  },
});

export default useStyles;
