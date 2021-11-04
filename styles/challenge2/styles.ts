const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(233, 47%, 7%)",
    height: "100vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  card: {
    backgroundColor: "hsl(244, 38%, 16%)",
    borderRadius: theme.spacing(1),
    maxWidth: "85%",
    display: "flex",
  },
  cardContent: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
    },
  },
  heroImage: {
    borderRadius: "0 8px 8px 0",
  },
  headingText: {
    fontFamily: "Inter, sans-serif",
    color: "hsl(0, 0%, 100%)",
    fontSize: "30px",
    fontWeight: 900,
  },
  subtitleText: {
    margin: theme.spacing(2, 0),
    fontFamily: "Red Hat Display, sans-serif",
    color: "hsl(224, 23%, 55%)",
    fontSize: "15px",
    fontWeight: 500,
  },
  planBox: {
    backgroundColor: "hsl(225, 100%, 98%)",
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    borderRadius: theme.spacing(1),
  },
  planDetails: {
    marginLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  planDetailHeading: {
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: 900,
    fontSize: "16px",
    color: "hsl(223, 47%, 23%)",
  },
  planDetailInfo: {
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: 500,
    fontSize: "14px",
    color: "hsl(224, 23%, 55%)",
  },
  changeButton: {
    marginLeft: "auto",
    cursor: "pointer",
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    textDecoration: "underline",
    color: "hsl(245, 75%, 52%)",
    "&:active": {
      color: "hsl(245, 75%, 65%)",
    },
  },
});

export default useStyles;
