const useStyles = (theme: any) => ({
  challengeItem: {
    width: "100px",
    height: "250px",
    borderRadius: theme.spacing(1),
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.spacing(1),
  },
  overlayWrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  overlay: {
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: "#2C3333DD",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
  },
  cardHeading: {
    fontWeight: 700,
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    textAlign: "center",
    padding: theme.spacing(0.5),
  },
  categoryBox: {
    textAlign: "center",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5),
    margin: theme.spacing(2, 0),
  },
  newbieBox: {
    border: "3px solid rgb(106, 190, 205)",
    color: "rgb(106, 190, 205)",
  },
  juniorBox: {
    border: "3px solid rgb(170, 215, 66)",
    color: "rgb(170, 215, 66)",
  },
  intermediateBox: {
    border: "3px solid rgb(241, 182, 4)",
    color: "rgb(241, 182, 4)",
  },
  advancedBox: {
    border: "3px solid rgb(244, 137, 37)",
    color: "rgb(244, 137, 37)",
  },
  guruBox: {
    border: "3px solid rgb(237, 44, 73)",
    color: "rgb(237, 44, 73)",
  },
  categoryText: {
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
    color: "#FFFFFF",
    fontSize: "13px",
    textAlign: "center",
  },
  visitButton: {
    width: "80px",
    borderRadius: "25px",
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    fontWeight: 700,
    border: "none",
    backgroundColor: "#e50914",
    color: "#FFFFFF",
  },
});

export default useStyles;
