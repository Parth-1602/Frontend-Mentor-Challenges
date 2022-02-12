const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage:
      "linear-gradient(to bottom,hsl(273, 75%, 66%) 20%, hsl(240, 73%, 65%) 80%)",
  },
  card: {
    backgroundColor: "#ffffff",
    display: "flex",
    minWidth: "65%",
    borderRadius: theme.spacing(2),
    boxShadow: "0px 40px 50px rgba(0, 0, 0, 0.25)",
  },
  leftCard: {
    position: "relative",
    backgroundColor: "#ffffff",
    borderRadius: theme.spacing(2),
    width: "50%",
  },
  rightCard: {
    width: "50%",
    padding: theme.spacing(8, 8, 8, 2),
  },
  mainHeading: {
    fontFamily: "Kumbh Sans, sans-serif",
    fontWeight: 700,
    fontSize: "35px",
    marginBottom: theme.spacing(4),
    color: "hsl(238, 29%, 16%)",
  },
});

export default useStyles;
