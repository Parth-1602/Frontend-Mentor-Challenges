const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(233, 47%, 7%)",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  card: {
    backgroundColor: "hsl(244, 38%, 16%)",
    maxWidth: "60%",
    display: "flex",
    borderRadius: theme.spacing(1.5),
    [theme.breakpoints.down("lg")]: {
      maxWidth: "80%",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      margin: theme.spacing(8, 0),
    },
  },
  mobileImageCard: {
    display: "none",
    position: "relative",
    borderRadius: theme.spacing(1.5, 1.5, 0, 0),
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  mobileImage: {
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing(1.5, 1.5, 0, 0),
  },
  mobileOverlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "hsla(277, 64%, 40%, 0.5)",
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: theme.spacing(1.5, 1.5, 0, 0),
  },
  cardLeft: {
    width: "50%",
    padding: theme.spacing(6),
    borderRadius: theme.spacing(1.5, 0, 0, 1.5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
      padding: theme.spacing(4),
    },
  },
  cardRight: {
    width: "50%",
    position: "relative",
    borderRadius: theme.spacing(0, 1.5, 1.5, 0),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  desktopImage: {
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing(0, 1.5, 1.5, 0),
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "hsla(277, 64%, 40%, 0.5)",
    borderRadius: theme.spacing(0, 1.5, 1.5, 0),
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  headingText: {
    fontFamily: "Inter, sans-serif",
    color: "hsl(0, 0%, 100%)",
    marginBottom: theme.spacing(3),
    fontSize: "30px",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: "27px",
    },
  },
  spanText: {
    fontFamily: "Inter, sans-serif",
    color: "hsl(277, 64%, 61%)",
    fontSize: "30px",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: "27px",
    },
  },
  subtitleText: {
    fontFamily: "Outfit, sans-serif",
    marginBottom: theme.spacing(8),
    color: "hsla(0, 0%, 100%, 0.75)",
    fontSize: "14px",
    lineHeight: "1.4",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
      fontSize: "12px",
    },
  },
  statsBox: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  statGroup: {
    marginRight: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginBottom: theme.spacing(4),
    },
  },
  statValue: {
    fontFamily: "Inter, sans-serif",
    color: "hsl(0, 0%, 100%)",
    fontSize: "18px",
    fontWeight: 700,
  },
  statName: {
    fontFamily: "Inter, sans-serif",
    color: "hsla(0, 0%, 100%, 0.6)",
    fontSize: "12px",
    fontWeight: 400,
  },
});

export default useStyles;
