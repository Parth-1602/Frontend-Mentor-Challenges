const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url(/images/1/pattern-background-desktop.svg)",
    backgroundColor: "hsl(212, 45%, 89%)",
    height: "100vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(/images/1/pattern-background-mobile.svg)",
    },
  },
  card: {
    backgroundColor: "#ffffff",
    maxWidth: "300px",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "350px",
    },
  },
  qrImage: {
    borderRadius: "8px",
  },
  contentWrapper: {
    textAlign: "center",
  },
  headingText: {
    margin: theme.spacing(2, 0),
    fontFamily: "Outfit, sans-serif",
    color: "hsl(218, 44%, 22%)",
    fontSize: "22px",
    fontWeight: 700,
  },
  subtitleText: {
    margin: theme.spacing(2, 0),
    fontFamily: "Outfit, sans-serif",
    color: "hsl(220, 15%, 55%)",
    fontSize: "15px",
    lineHeight: "1.4",
    fontWeight: 400,
  },
});

export default useStyles;
