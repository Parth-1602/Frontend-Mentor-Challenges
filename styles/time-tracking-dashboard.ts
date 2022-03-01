const useStyles = (theme: any) => ({
  pageWrapper: {
    backgroundColor: "hsl(226, 43%, 10%)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
  contentWrapper: {
    display: "flex",
    width: "90%",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(8, 0),
      flexDirection: "column",
    },
  },
  leftCardWrapper: {
    backgroundColor: "hsl(235, 46%, 20%)",
    width: "20%",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  profileCard: {
    backgroundColor: "#5847eb",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(2.5),
    },
  },
  profileIcon: {
    width: "80px",
    height: "80px",
    border: "2px solid #FFF",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      marginBottom: 0,
      marginRight: theme.spacing(2),
      width: "70px",
      height: "70px",
    },
  },
  profileCardMainText: {
    fontFamily: "Rubik, sans-serif",
    color: "#FFF",
    fontSize: "40px",
    fontWeight: 300,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      marginBottom: 0,
      fontSize: "30px",
    },
  },
  profileCardSubText: {
    fontFamily: "Rubik, sans-serif",
    color: "#FFFFFFAA",
    fontSize: "14px",
    fontWeight: 400,
  },
  actionButtonsList: {
    listStyle: "none",
    margin: 0,
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2.5),
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  listButton: {
    marginBottom: theme.spacing(2),
    color: "hsl(235, 45%, 61%)",
    fontFamily: "Rubik, sans-serif",
    fontSize: "18px",
    fontWeight: 400,
    transition: "0.5s all ease",
    "&:hover": {
      color: "#FFFFFF",
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: 0,
    },
  },
  gridContainer: {
    width: "80%",
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      paddingLeft: 0,
      paddingTop: theme.spacing(3),
    },
  },
});

export default useStyles;
