const useStyles = (theme: any) => ({
  faqWrapper: {
    borderBottom: "2px solid hsl(240, 5%, 91%)",
    padding: theme.spacing(1, 0),
  },
  questionWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
    "&:hover": {
      cursor: "pointer",
    },
  },
  questionText: {
    fontFamily: "Kumbh Sans, sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    color: "hsl(237, 12%, 33%)",
    transition: "all .3s ease-out",
    "&:hover": {
      color: "hsl(14, 88%, 65%)",
      fontWeight: 700,
    },
  },
  questionOpenText: {
    fontFamily: "Kumbh Sans, sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    color: "hsl(238, 29%, 16%)",
  },
  answerText: {
    fontFamily: "Kumbh Sans, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    color: "hsl(240, 6%, 50%)",
  },
  invertArrow: {
    transform: "rotate(180deg)",
  },
});

export default useStyles;
