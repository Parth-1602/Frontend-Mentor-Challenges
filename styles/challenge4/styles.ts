const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url(/images/1/pattern-background-desktop.svg)",
    backgroundColor: "hsl(233, 47%, 7%)",
    height: "100vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(/images/1/pattern-background-mobile.svg)",
    },
  },
  card: {
    backgroundColor: "hsl(244, 38%, 16%)",
    maxWidth: "60%",
    display: "flex",
    borderRadius: theme.spacing(1.5),
  },
  cardLeft: {
    width: "50%",
    padding: theme.spacing(6),
    borderRadius: theme.spacing(1.5),
  },
  cardRight: {
    width: "50%",
    position: "relative",
    borderRadius: theme.spacing(1.5),
  },
  desktopImage: {
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing(1.5),
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "hsla(277, 64%, 40%, 0.5)",
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
  },
  spanText: {
    fontFamily: "Inter, sans-serif",
    color: "hsl(277, 64%, 61%)",
    fontSize: "30px",
    fontWeight: 700,
  },
  subtitleText: {
    fontFamily: "Outfit, sans-serif",
    marginBottom: theme.spacing(8),
    color: "hsla(0, 0%, 100%, 0.75)",
    fontSize: "14px",
    lineHeight: "1.4",
    fontWeight: 400,
  },
  statsBox: {
    display: "flex",
  },
  statGroup: {
    marginRight: theme.spacing(8),
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
