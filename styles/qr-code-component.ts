const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(212, 45%, 89%)",
    height: "100vh",
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
    width: "100%",
    height: "250px",
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
