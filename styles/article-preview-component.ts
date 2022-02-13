const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(210, 46%, 95%)",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  card: {
    backgroundColor: "#FFFFFF",
    maxWidth: "60%",
    display: "flex",
    borderRadius: theme.spacing(1),
  },
  mobileImageCard: {
    display: "none",
    position: "relative",
    borderRadius: theme.spacing(1.5, 1.5, 0, 0),
  },
  mobileImage: {
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing(1.5, 1.5, 0, 0),
  },
  cardLeft: {
    width: "50%",
    borderRadius: theme.spacing(1, 0, 0, 1),
  },
  cardRight: {
    width: "50%",
    padding: theme.spacing(6),
    borderRadius: theme.spacing(1.5, 0, 0, 1.5),
  },
  desktopImage: {
    width: "100%",
    borderRadius: theme.spacing(1, 0, 0, 1),
  },
  articleName: {
    fontFamily: "Manrope, sans-serif",
    color: "hsl(217, 19%, 35%)",
    marginBottom: theme.spacing(1.5),
    fontSize: "22px",
    fontWeight: 700,
  },
  descriptionText: {
    fontFamily: "Manrope, sans-serif",
    marginBottom: theme.spacing(4),
    color: "hsl(214, 17%, 51%)",
    fontSize: "13px",
    fontWeight: 500,
  },
});

export default useStyles;
