export const headerStyles = (theme: any) => ({
  headerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  divider: {
    width: "100%",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: `1px solid ${theme.palette.socialMediaDashboardTheme.textPrimary}`,
    margin: theme.spacing(2, 0),
  },
  heading: {
    fontFamily: "Inter, sans-serif",
    fontSize: "28px",
    fontWeight: 700,
    color: theme.palette.socialMediaDashboardTheme.textPrimary,
  },
  subHeading: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    color: theme.palette.socialMediaDashboardTheme.textSecondary,
  },
  toggleModeWrapper: {
    display: "flex",
    alignItems: "center",
  },
  toggleModeMobileWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  switchLabel: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    color: theme.palette.socialMediaDashboardTheme.textSecondary,
  },
});

export const socialSummaryCardStyles = (theme: any) => ({
  cardWrapper: {
    backgroundColor: theme.palette.socialMediaDashboardTheme.cardBG,
    borderRadius: theme.spacing(1),
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.socialMediaDashboardTheme.cardHoverBG,
    },
  },
  indicatorBorder: {
    height: "4px",
    borderRadius: theme.spacing(1, 1, 0, 0),
  },
  cardContentWrapper: {
    padding: theme.spacing(3, 0),
    textAlign: "center",
  },
  userNameWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },
  username: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    marginLeft: theme.spacing(1),
    color: theme.palette.socialMediaDashboardTheme.textSecondary,
  },
  stat: {
    fontFamily: "Inter, sans-serif",
    fontSize: "56px",
    fontWeight: 700,
    lineHeight: "56px",
    color: theme.palette.socialMediaDashboardTheme.textPrimary,
  },
  statText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "14px",
    marginTop: theme.spacing(2),
    letterSpacing: "5px",
    color: theme.palette.socialMediaDashboardTheme.textSecondary,
  },
  compareWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  todayText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    marginLeft: theme.spacing(0.5),
  },
});

export const overviewCardStyles = (theme: any) => ({
  cardWrapper: {
    backgroundColor: theme.palette.socialMediaDashboardTheme.cardBG,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.socialMediaDashboardTheme.cardHoverBG,
    },
  },
  overviewHeadingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
  },
  overviewHeading: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    color: theme.palette.socialMediaDashboardTheme.textSecondary,
  },
  statsWrapper: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  stat: {
    fontFamily: "Inter, sans-serif",
    fontSize: "34px",
    fontWeight: 700,
    lineHeight: "34px",
    color: theme.palette.socialMediaDashboardTheme.textPrimary,
  },
  statText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "14px",
    marginTop: theme.spacing(2),
    letterSpacing: "5px",
    color: theme.palette.socialMediaDashboardTheme.textSecondary,
  },
  compareWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  todayText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    marginLeft: theme.spacing(0.5),
  },
});
