const useStyles = (theme: any) => ({
  pageWrapper: {
    backgroundColor: "hsl(204, 43%, 93%)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
  card: {
    width: "45%",
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: theme.spacing(8, 0),
    },
  },
  topCard: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: theme.spacing(5),
    borderRadius: theme.spacing(1, 1, 0, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  topCardHeading: {
    fontSize: "25px",
    fontWeight: 700,
    color: "hsl(179, 62%, 43%)",
    fontFamily: "Karla, sans-serif",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  topCardSubHeading: {
    fontSize: "20px",
    fontWeight: 700,
    color: "hsl(71, 73%, 54%)",
    fontFamily: "Karla, sans-serif",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  topCardDescription: {
    fontSize: "16px",
    fontWeight: 400,
    color: "hsl(218, 22%, 67%)",
    fontFamily: "Karla, sans-serif",
    lineHeight: "22px",
    [theme.breakpoints.down("md")]: {
      lineHeight: "26px",
    },
  },
  bottomCard: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  leftCard: {
    backgroundColor: "hsl(179, 62%, 43%)",
    width: "50%",
    padding: theme.spacing(5),
    borderRadius: theme.spacing(0, 0, 0, 1),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(3),
      borderRadius: 0,
    },
  },
  leftCardSubHeading: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#FFFFFF",
    fontFamily: "Karla, sans-serif",
    marginBottom: theme.spacing(1.5),
  },
  priceWrapper: {
    display: "flex",
    alignItems: "center",
  },
  planPrice: {
    fontSize: "25px",
    fontWeight: 700,
    color: "#FFFFFF",
    fontFamily: "Karla, sans-serif",
    marginRight: theme.spacing(1),
  },
  spanText: {
    fontSize: "16px",
    fontWeight: 400,
    color: "hsl(218, 22%, 80%)",
    fontFamily: "Karla, sans-serif",
  },
  leftCardDescription: {
    fontSize: "16px",
    fontWeight: 400,
    color: "hsl(204, 43%, 93%)",
    fontFamily: "Karla, sans-serif",
    marginBottom: theme.spacing(4),
  },
  signUpButton: {
    width: "100%",
    border: "none",
    padding: theme.spacing(1.5),
    backgroundColor: "hsl(71, 73%, 54%)",
    borderRadius: theme.spacing(1),
    fontWeight: 700,
    fontFamily: "Karla, sans-serif",
    color: "hsl(204, 43%, 93%)",
    boxShadow: "4px 4px 10px hsl(179, 62%, 30%)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  rightCard: {
    backgroundColor: "hsl(179, 40%, 60%)",
    width: "50%",
    borderRadius: theme.spacing(0, 0, 1, 0),
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(3),
      borderRadius: theme.spacing(0, 0, 1, 1),
    },
  },
  rightCardSubHeading: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#FFFFFF",
    fontFamily: "Karla, sans-serif",
    marginBottom: theme.spacing(1.5),
  },
  featuresList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  listItem: {
    fontSize: "16px",
    fontWeight: 400,
    color: "hsl(204, 43%, 93%)",
    fontFamily: "Karla, sans-serif",
  },
});

export default useStyles;
