const useStyles = (theme: any) => ({
  pageWrapper: {
    minHeight: "100vh",
    backgroundColor: theme.palette.socialMediaDashboardTheme.background,
    padding: theme.spacing(6, 16),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 3),
    },
  },
  backgroundPattern: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "30%",
    backgroundColor: theme.palette.socialMediaDashboardTheme.backgroundPattern,
    borderRadius: theme.spacing(0, 0, 4, 4),
  },
  socialSummaryCardsWrapper: {
    position: "relative",
    zIndex: 2,
    margin: theme.spacing(2, 0),
    marginLeft: theme.spacing(-4),
  },
  overviewHeading: {
    position: "relative",
    zIndex: 2,
    fontFamily: "Inter, sans-serif",
    fontSize: "28px",
    fontWeight: 700,
    marginTop: theme.spacing(4),
    color: theme.palette.socialMediaDashboardTheme.textSecondary,
  },
  overviewCardsWrapper: {
    position: "relative",
    zIndex: 2,
    margin: theme.spacing(1, 0),
    marginLeft: theme.spacing(-4),
  },
});

export default useStyles;
