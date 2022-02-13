const useStyles = (theme: any) => ({
  authorBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  authorDetailsWrapper: {
    display: "flex",
    alignItems: "center",
  },
  authorDetails: {
    marginLeft: theme.spacing(1.5),
  },
  authorName: {
    fontFamily: "Manrope, sans-serif",
    color: "hsl(217, 19%, 35%)",
    fontSize: "13px",
    fontWeight: 700,
  },
  articleDate: {
    fontFamily: "Manrope, sans-serif",
    color: "hsl(212, 23%, 69%)",
    fontSize: "13px",
    fontWeight: 500,
  },
  shareIconButton: {
    backgroundColor: "hsl(210, 46%, 95%)",
    width: "30px",
    height: "30px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  shareIconButtonDark: {
    backgroundColor: "hsl(217, 19%, 35%)",
    width: "30px",
    height: "30px",
  },
  shareIcon: {
    width: "16px",
    height: "16px",
  },
  shareIconsWrapper: {
    position: "absolute",
    borderRadius: theme.spacing(0.5),
    top: "-70px",
    left: "-70px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "hsl(217, 19%, 35%)",
    padding: theme.spacing(1.5),
    "&::after": {
      content: `" "`,
      position: "absolute",
      bottom: "-10px",
      left: 0,
      right: 0,
      margin: theme.spacing(0, "auto"),
      width: 0,
      height: 0,
      borderTop: "10px solid  hsl(217, 19%, 35%)",
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
    },
  },
  shareText: {
    fontFamily: "Manrope, sans-serif",
    color: "hsl(212, 23%, 69%)",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "4px",
  },
  socialIcon: {
    width: "14px",
    height: "14px",
    margin: theme.spacing(0, 1),
    "&:hover": {
      cursor: "pointer",
    },
  },
  authorMobileBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  authorDarkMobileBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    backgroundColor: " hsl(217, 19%, 35%)",
    borderRadius: theme.spacing(0, 0, 1, 1),
  },
  shareIconsMobileWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  shareIconMobileButtonDark: {
    backgroundColor: "hsl(214, 17%, 51%)",
    width: "30px",
    height: "30px",
  },
  shareMobileText: {
    fontFamily: "Manrope, sans-serif",
    color: "hsl(212, 23%, 69%)",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "4px",
    marginRight: theme.spacing(2),
  },
  socialMobileIcon: {
    width: "18px",
    height: "18px",
    margin: theme.spacing(0, 1),
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default useStyles;
