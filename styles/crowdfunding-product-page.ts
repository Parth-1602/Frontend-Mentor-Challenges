const useStyles = (theme: any) => ({
  pageWrapper: {
    backgroundColor: "hsla(0, 0%, 48%, 0.1)",
    height: "100%",
    paddingBottom: theme.spacing(3),
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-100px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginTop: "-70px",
    },
  },
  imageBarWrapper: {
    position: "relative",
    backgroundColor: "transparent",
  },
});

export default useStyles;
