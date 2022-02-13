const useStyles = (theme: any) => ({
  ratingBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "hsl(300, 24%, 96%)",
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    width: "70%",
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  starIcon: {
    marginRight: theme.spacing(1),
  },
  ratingDescription: {
    color: "hsl(300, 43%, 22%)",
    fontSize: "14px",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 700,
    marginLeft: theme.spacing(2),
  },
  commentBox: {
    backgroundColor: "hsl(300, 43%, 22%)",
    height: "90%",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(4),
    marginRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginBottom: theme.spacing(1.5),
      marginRight: 0,
      width: "100%",
    },
  },
  profileWrapper: {
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    marginRight: theme.spacing(1.5),
  },
  profileName: {
    color: "hsl(0, 0%, 100%)",
    fontSize: "12px",
    lineHeight: "18px",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 500,
  },
  profileVerification: {
    color: "hsl(333, 80%, 67%)",
    fontSize: "12px",
    lineHeight: "18px",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 500,
  },
  comment: {
    color: "hsl(0, 0%, 100%)",
    fontSize: "12px",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 400,
    marginTop: theme.spacing(2.5),
  },
});

export default useStyles;
