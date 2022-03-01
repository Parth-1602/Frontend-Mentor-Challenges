const useStyles = (theme: any) => ({
  designBox: {
    borderRadius: theme.spacing(2),
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      paddingLeft: 0,
      paddingTop: theme.spacing(3),
    },
  },
  detailCard: {
    height: "80%",
    backgroundColor: "hsl(235, 46%, 20%)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    transition: "0.5s all ease",
    "&:hover": {
      backgroundColor: "hsl(235, 45%, 45%)",
      cursor: "pointer",
    },
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      marginBottom: 0,
    },
  },
  activityTitle: {
    color: "#FFFFFF",
    fontFamily: "Rubik, sans-serif",
    fontSize: "18px",
    fontWeight: 400,
  },
  menuIcon: {
    width: "25px",
    height: "25px",
    color: "hsl(235, 45%, 61%)",
    transition: "0.5s all ease",
    "&:hover": {
      color: "#FFFFFF",
      cursor: "pointer",
    },
  },
  mobileTimeFrameWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  activityStat: {
    color: "#FFFFFF",
    fontFamily: "Rubik, sans-serif",
    fontSize: "50px",
    fontWeight: 300,
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
    },
  },
  lastActivityStat: {
    color: "hsl(235, 45%, 61%)",
    fontFamily: "Rubik, sans-serif",
    fontSize: "18px",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
});

export default useStyles;
