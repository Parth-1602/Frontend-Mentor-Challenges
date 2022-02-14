const useStyles = (theme: any) => ({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: theme.spacing(1),
    boxShadow: "0px 10px 30px hsl(229, 6%, 66%)",
    padding: theme.spacing(3),
    width: "350px",
  },
  cardTitle: {
    fontSize: "20px",
    color: "hsl(234, 12%, 34%)",
    fontWeight: 600,
    fontFamily: "Poppins, sans-serif",
    marginBottom: theme.spacing(1.5),
  },
  cardDescription: {
    fontSize: "15px",
    color: "hsl(229, 6%, 66%)",
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
    marginBottom: theme.spacing(2),
    lineHeight: "22px",
  },
  cardIcon: {
    textAlign: "right",
  },
  cardImage: {
    width: "50px",
    height: "50px",
  },
});

export default useStyles;
