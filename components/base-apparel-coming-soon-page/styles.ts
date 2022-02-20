const useStyles = (theme: any) => ({
  inputWrapper: {
    position: "relative",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  inputBox: {
    border: "1px solid hsl(0, 36%, 70%) !important",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    padding: theme.spacing(2, 4),
    height: "45px",
    width: "60%",
    color: "hsl(0, 6%, 24%)",
    fontSize: "14px",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 600,
    borderRadius: "25px",
    "&::placeholder": {
      fontSize: "14px",
      fontFamily: "Josefin Sans, sans-serif",
      fontWeight: 400,
      color: "hsl(0, 36%, 70%)",
    },
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(1.5, 3),
    },
  },
  errorInputBox: {
    border: "2px solid hsl(0, 93%, 68%) !important",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    padding: theme.spacing(2, 4),
    height: "45px",
    width: "60%",
    color: "hsl(0, 6%, 24%)",
    fontSize: "14px",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 600,
    borderRadius: "25px",
    "&::placeholder": {
      fontSize: "14px",
      fontFamily: "Josefin Sans, sans-serif",
      fontWeight: 400,
      color: "hsl(0, 36%, 70%)",
    },
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(1.5, 3),
    },
  },
  submitButton: {
    position: "absolute",
    top: 0,
    left: "52%",
    boxSizing: "border-box",
    height: "45px",
    borderRadius: "25px",
    border: "none",
    width: "70px",
    backgroundImage:
      "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
    "&:hover": {
      cursor: "pointer",
      backgroundImage: "none",
      backgroundColor: "hsl(0, 80%, 86%)",
    },
    [theme.breakpoints.down("md")]: {
      left: "85%",
      width: "60px",
    },
  },
  buttonIcon: {
    color: "#FFFFFF",
    width: "16px",
    height: "16px",
  },
  errorText: {
    fontSize: "12px",
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 400,
    color: "hsl(0, 93%, 68%)",
  },
  errorIcon: {
    color: "hsl(0, 93%, 68%)",
    width: "22px",
    height: "22px",
    position: "absolute",
    top: "50%",
    left: "49%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("md")]: {
      left: "80%",
    },
  },
});

export default useStyles;
