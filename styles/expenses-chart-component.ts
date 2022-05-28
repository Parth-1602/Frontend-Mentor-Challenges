const useStyles = (theme: any) => ({
  pageWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "hsl(27, 66%, 92%)",
  },
  headerWrapper: {
    backgroundColor: "hsl(10, 79%, 65%)",
    display: "flex",
    justifyContent: "space-between",
    width: "500px",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  myBalanceText: {
    fontSize: "18px",
    fontWeight: 400,
    fontFamily: "DM Sans, sans-serif",
    color: "hsl(33, 100%, 98%)",
  },
  balanceAmount: {
    fontSize: "30px",
    fontWeight: 700,
    fontFamily: "DM Sans, sans-serif",
    color: "hsl(33, 100%, 98%)",
  },
  chartWrapper: {
    backgroundColor: "hsl(33, 100%, 98%)",
    width: "500px",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      padding: theme.spacing(1.5),
    },
  },
  chartHeading: {
    fontSize: "30px",
    fontWeight: 700,
    fontFamily: "DM Sans, sans-serif",
    color: "hsl(25, 47%, 15%)",
    marginBottom: theme.spacing(4),
  },
  divider: {
    borderTop: "none",
    borderBottom: "2px solid hsl(27, 66%, 92%)",
    borderLeft: "none",
    borderRight: "none",
  },
  monthStatsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2, 0),
  },
  subtitleText: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "18px",
    fontFamily: "DM Sans, sans-serif",
    color: "hsl(28, 10%, 53%)",
  },
  thisMonthAmount: {
    fontSize: "35px",
    fontWeight: 700,
    fontFamily: "DM Sans, sans-serif",
    color: "hsl(25, 47%, 15%)",
  },
  lastMonthPercentage: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "18px",
    textAlign: "right",
    fontFamily: "DM Sans, sans-serif",
    color: "hsl(25, 47%, 15%)",
  },
});

export default useStyles;
