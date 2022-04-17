const useStyles = (theme: any) => ({
  pageWrapper: {
    backgroundColor: "hsl(210, 46%, 95%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(20),
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      padding: theme.spacing(9, 3),
    },
  },
  gridWrapper: {
    display: "flex",
    alignItems: "stretch",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  longCard: {
    width: "33.32%",
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: 0,
      marginTop: theme.spacing(3),
    },
  },
});

export default useStyles;
