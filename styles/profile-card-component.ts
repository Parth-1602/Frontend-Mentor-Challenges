const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url(/images/profile-card-component/bg-pattern-top.svg), url(/images/profile-card-component/bg-pattern-bottom.svg)",
    backgroundColor: "hsl(185, 75%, 39%)",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-50% 200%, 150% -150%",
  },
  card: {
    backgroundColor: "#ffffff",
    maxWidth: "450px",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  cardAvatarWrapper: {
    position: "relative",
  },
  cardBg: {
    borderRadius: "16px 16px 0 0",
    width: "450px",
    height: "150px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  avatar: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    border: "5px solid #ffffff",
  },
  contentWrapper: {
    textAlign: "center",
    marginTop: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
    },
  },
  topContent: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1.5, 0),
    },
  },
  profileName: {
    fontFamily: "Kumbh Sans, sans-serif",
    color: "hsl(229, 23%, 23%)",
    fontSize: "25px",
    fontWeight: 700,
  },
  profileAge: {
    fontFamily: "Kumbh Sans, sans-serif",
    color: "hsl(227, 10%, 46%)",
    fontSize: "25px",
    marginLeft: theme.spacing(1.5),
    fontWeight: 400,
  },
  profileLocation: {
    margin: theme.spacing(1, 0),
    fontFamily: "Kumbh Sans, sans-serif",
    color: "hsl(227, 10%, 46%)",
    fontSize: "18px",
    fontWeight: 400,
  },
  divider: {
    borderTop: 0,
    color: "hsl(0, 0%, 59%)",
  },
  statsBox: {
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 0),
    },
  },
  statValue: {
    fontFamily: "Kumbh Sans, sans-serif",
    color: "hsl(229, 23%, 23%)",
    fontSize: "22px",
    fontWeight: 700,
  },
  statName: {
    fontFamily: "Kumbh Sans, sans-serif",
    color: "hsl(227, 10%, 46%)",
    fontSize: "15px",
    letterSpacing: "1px",
    fontWeight: 400,
  },
});

export default useStyles;
