const useStyles = (theme: any) => ({
  tableHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  thumbnail: {
    cursor: "pointer",
    width: "60px",
    height: "60px",
  },
  categoryBox: {
    textAlign: "center",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5),
  },
  newbieBox: {
    backgroundColor: "rgb(106, 190, 205)",
  },
  juniorBox: {
    backgroundColor: "rgb(170, 215, 66)",
  },
  intermediateBox: {
    backgroundColor: "rgb(241, 182, 4)",
  },
  advancedBox: {
    backgroundColor: "rgb(244, 137, 37)",
  },
  guruBox: {
    backgroundColor: "rgb(237, 44, 73)",
  },
  categoryText: {
    color: "#FFFFFF",
    fontWeight: 700,
  },
});

export default useStyles;
