const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url(/images/1/pattern-background-desktop.svg)",
    backgroundColor: "hsl(217, 54%, 11%)",
    height: "100vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(/images/1/pattern-background-mobile.svg)",
    },
  },
  card: {
    backgroundColor: "hsl(216, 50%, 16%)",
    maxWidth: "300px",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "350px",
    },
  },
  imageOverlayContainer: {
    position: "relative",
    "&:hover": {
      cursor: "pointer",
    },
  },
  overlay: {
    borderRadius: "8px",
    width: "100%",
    height: "250px",
    backgroundColor: "hsla(178, 100%, 50%, 0.5)",
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  ethImage: {
    borderRadius: "8px",
    width: "100%",
    height: "250px",
  },
  headingText: {
    margin: theme.spacing(2, 0),
    fontFamily: "Outfit, sans-serif",
    color: "hsl(0, 0%, 100%)",
    fontSize: "20px",
    fontWeight: 700,
    transition: "all 0.3s ease",
    "&:hover": {
      cursor: "pointer",
      color: "hsl(178, 100%, 50%)",
    },
  },
  subtitleText: {
    margin: theme.spacing(1.5, 0),
    fontFamily: "Outfit, sans-serif",
    color: "hsl(215, 51%, 70%)",
    fontSize: "16px",
    lineHeight: "1.4",
    fontWeight: 300,
  },
  infoBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: theme.spacing(2, 0),
  },
  iconText: {
    display: "flex",
    alignItems: "center",
  },
  currencyValue: {
    marginLeft: theme.spacing(1),
    fontFamily: "Outfit, sans-serif",
    color: "hsl(178, 100%, 50%)",
    fontSize: "16px",
    fontWeight: 400,
  },
  daysText: {
    marginLeft: theme.spacing(1),
    fontFamily: "Outfit, sans-serif",
    color: "hsl(215, 51%, 70%)",
    fontSize: "15px",
    fontWeight: 400,
  },
  seperation: {
    borderTop: 0,
    borderColor: "hsl(215, 32%, 27%)",
  },
  authorBox: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(2, 0),
  },
  authorMainText: {
    marginLeft: theme.spacing(2),
    fontFamily: "Outfit, sans-serif",
    color: "hsl(215, 51%, 70%)",
    fontSize: "15px",
    fontWeight: 400,
  },
  authorSubText: {
    fontFamily: "Outfit, sans-serif",
    color: "hsl(0, 0%, 100%)",
    fontSize: "15px",
    fontWeight: 400,
    transition: "all 0.3s ease",
    "&:hover": {
      cursor: "pointer",
      color: "hsl(178, 100%, 50%)",
    },
  },
});

export default useStyles;
