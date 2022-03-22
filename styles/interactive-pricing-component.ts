const useStyles = (theme: any) => ({
  pageWrapper: {
    height: "100vh",
    background:
      "url(/images/interactive-pricing-component/bg-pattern.svg), hsl(230, 100%, 99%)",
    backgroundSize: "100% 50%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      justifyContent: "flex-start",
    },
  },
  headingWrapper: {
    background:
      "url(/images/interactive-pricing-component/pattern-circles.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    textAlign: "center",
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(10, 1),
    },
  },
  mainHeading: {
    marginBottom: theme.spacing(1),
    fontSize: "30px",
    color: "hsl(227, 35%, 25%)",
    fontFamily: "Manrope, sans-serif",
    fontWeight: 800,
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
  },
  description: {
    fontSize: "15px",
    color: "hsl(225, 20%, 60%)",
    fontFamily: "Manrope, sans-serif",
    fontWeight: 400,
  },
  pricingCard: {
    backgroundColor: "hsl(0, 0%, 100%)",
    boxShadow: "8px 8px 30px hsl(223, 50%, 87%)",
    width: "550px",
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginBottom: theme.spacing(8),
    },
  },
  pricingCardInnerWrapper: {
    padding: theme.spacing(3, 5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  infoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  pageViewsText: {
    fontSize: "16px",
    color: "hsl(225, 20%, 60%)",
    fontFamily: "Manrope, sans-serif",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3, 0),
    },
  },
  priceWrapper: {
    display: "flex",
    alignItems: "center",
  },
  price: {
    fontSize: "36px",
    color: "hsl(227, 35%, 25%)",
    fontFamily: "Manrope, sans-serif",
    marginRight: theme.spacing(1),
    fontWeight: 800,
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  perMonthText: {
    fontSize: "15px",
    color: "hsl(225, 20%, 60%)",
    fontFamily: "Manrope, sans-serif",
    fontWeight: 400,
  },
  sliderWrapper: {
    margin: theme.spacing(3, 0),
  },
  sliderMobileWrapper: {
    width: "100%",
    margin: theme.spacing(2, 0),
  },
  toggleWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3),
    },
  },
  switchLabel: {
    fontSize: "15px",
    color: "hsl(225, 20%, 60%)",
    fontFamily: "Manrope, sans-serif",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
    },
  },
  discountWrapper: {
    backgroundColor: "hsl(14, 92%, 95%)",
    borderRadius: "25px",
    padding: theme.spacing(0, 1),
    marginLeft: theme.spacing(1.5),
  },
  discountText: {
    fontSize: "13px",
    color: "hsl(15, 100%, 70%)",
    fontFamily: "Manrope, sans-serif",
    fontWeight: 800,
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
    },
  },
  divider: {
    border: "none",
    borderTop: "1px solid hsl(0, 0%, 90%)",
  },
  actionCardWrapper: {
    padding: theme.spacing(3, 5),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1, 3),
      flexDirection: "column",
    },
  },
  featureWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  featureText: {
    fontSize: "15px",
    marginLeft: theme.spacing(1.5),
    color: "hsl(225, 20%, 60%)",
    fontFamily: "Manrope, sans-serif",
    fontWeight: 400,
  },
  startButton: {
    borderRadius: "25px",
    border: "none",
    backgroundColor: "hsl(227, 35%, 25%)",
    padding: theme.spacing(2, 6),
    fontSize: "15px",
    color: "hsl(226, 100%, 87%)",
    fontFamily: "Manrope, sans-serif",
    fontWeight: 800,
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      fontWeight: 800,
      color: "hsl(230, 100%, 99%)",
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3, 0),
      padding: theme.spacing(1.5, 6),
    },
  },
});

export default useStyles;
