const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "flex-end",
    background:
      "url(/images/coding-bootcamp-testimonials-slider/pattern-bg.svg), url(/images/coding-bootcamp-testimonials-slider/pattern-curve.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "90% 50%, bottom left",
    padding: theme.spacing(0, 20),
    [theme.breakpoints.down("md")]: {
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      padding: theme.spacing(4),
      backgroundPosition: "50% 5%, bottom left",
      backgroundSize: "90% 50%, 100% 12%",
    },
  },
});

export default useStyles;
