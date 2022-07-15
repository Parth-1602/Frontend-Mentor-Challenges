const useStyles = (theme: any) => ({
  pageWrapper: {
    height: "100vh",
    backgroundColor: "hsl(30, 38%, 92%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  contentWrapper: {
    display: "flex",
    width: "560px",
    height: "400px",
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "95%",
      height: "100%",
      margin: theme.spacing(4, 0),
    },
  },
  leftCard: {
    width: "50%",
    borderRadius: theme.spacing(1, 0, 0, 1),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderRadius: theme.spacing(1, 1, 0, 0),
    },
  },
  productImage: {
    width: "100%",
    height: "100%",
    display: "flex",
    borderRadius: theme.spacing(1, 0, 0, 1),
    [theme.breakpoints.down("sm")]: {
      borderRadius: theme.spacing(1, 1, 0, 0),
    },
  },
  rightCard: {
    width: "50%",
    backgroundColor: "hsl(0, 0%, 100%)",
    borderRadius: theme.spacing(0, 1, 1, 0),
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderRadius: theme.spacing(0, 0, 1, 1),
    },
  },
  productCategory: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    color: "hsl(228, 12%, 48%)",
    fontWeight: 500,
    letterSpacing: "3px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
  },
  productName: {
    fontFamily: "Fraunces, sans-serif",
    fontSize: "28px",
    color: "hsl(212, 21%, 14%)",
    fontWeight: 700,
    lineHeight: "28px",
    marginBottom: theme.spacing(2.5),
  },
  productDescription: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    color: "hsl(228, 12%, 48%)",
    fontWeight: 500,
    lineHeight: "19px",
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.down("sm")]: {
      lineHeight: "19px",
      marginBottom: theme.spacing(5),
    },
  },
  pricingBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  productPrice: {
    fontFamily: "Fraunces, sans-serif",
    fontSize: "28px",
    color: "hsl(158, 36%, 37%)",
    fontWeight: 700,
    lineHeight: "28px",
    marginRight: theme.spacing(2),
  },
  productMrp: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    color: "hsl(228, 12%, 48%)",
    fontWeight: 500,
    lineHeight: "19px",
    textDecoration: "line-through",
  },
  actionButton: {
    border: "none",
    backgroundColor: "hsl(158, 36%, 37%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat, sans-serif",
    color: "hsl(0, 0%, 100%)",
    fontWeight: 500,
    fontSize: "14px",
    width: "100%",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    transition: "all 0.5s ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(158, 36%, 17%)",
    },
  },
  buttonIcon: {
    marginRight: theme.spacing(1.5),
  },
});

export default useStyles;
