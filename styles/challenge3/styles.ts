const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url(/images/1/pattern-background-desktop.svg)",
    backgroundColor: "hsl(225, 100%, 94%)",
    height: "100vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(/images/1/pattern-background-mobile.svg)",
    },
  },
  card: {
    backgroundColor: "#ffffff",
    maxWidth: "400px",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  heroImage: {
    borderRadius: "16px 16px 0 0",
    width: "400px",
    height: "200px",
  },
  contentWrapper: {
    textAlign: "center",
  },
  headingText: {
    fontFamily: "Red Hat Display, sans-serif",
    color: "hsl(223, 47%, 23%)",
    fontSize: "25px",
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
    padding: "16px",
    display: "flex",
    alignItems: "center",
    borderRadius: theme.spacing(1),
  },
  musicIcon: {
    width: "40px",
    height: "40px",
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
    fontWeightt: 700,
    fontSize: "14px",
    textDecoration: "underline",
    color: "hsl(245, 75%, 52%)",
    "&:active": {
      color: "hsl(245, 75%, 65%)",
    },
  },
});

export default useStyles;
