export const headerStyles = (theme: any) => ({
  headerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(3, 16),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  menuItemsWrapper: {
    display: "flex",
    alignItems: "center",
  },
  menuLink: {
    fontSize: "16px",
    fontFamily: "Karla, sans-serif",
    fontWeight: 700,
    color: "hsl(273, 4%, 51%)",
    marginRight: theme.spacing(2),
    "&:hover": {
      cursor: "pointer",
      color: "hsl(270, 9%, 17%)",
    },
  },
  headerButton: {
    border: "2px solid hsl(270, 9%, 17%)",
    backgroundColor: "transparent",
    padding: theme.spacing(1, 2.5),
    fontSize: "16px",
    fontFamily: "Karla, sans-serif",
    fontWeight: 700,
    color: "hsl(270, 9%, 17%)",
    transition: "0.5s all ease",
    "&:hover": {
      border: "2px solid hsl(270, 9%, 17%)",
      backgroundColor: "hsl(270, 9%, 17%)",
      color: "#FFFFFF",
      cursor: "pointer",
    },
  },
  navMenuWrapper: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    zIndex: 99,
    top: 0,
    left: 0,
  },
  navMenuContentWrapper: {
    background:
      "url(/images/insure-landing-page/bg-pattern-mobile-nav.svg),hsl(270, 9%, 17%)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    height: "100%",
    padding: theme.spacing(6, 3),
    textAlign: "center",
    backgroundSize: "100% 40%",
  },
  navMenuLink: {
    fontSize: "20px",
    fontFamily: "Karla, sans-serif",
    fontWeight: 400,
    color: "#FFFFFF",
    marginTop: theme.spacing(2),
  },
  navMenuButton: {
    border: "2px solid #FFFFFF",
    backgroundColor: "transparent",
    marginTop: theme.spacing(3),
    width: "100%",
    padding: theme.spacing(2),
    fontSize: "16px",
    fontFamily: "Karla, sans-serif",
    fontWeight: 700,
    color: "#FFFFFF",
    transition: "0.5s all ease",
  },
});

export const mainSectionStyles = (theme: any) => ({
  sectionWrapper: {
    position: "relative",
    padding: theme.spacing(12, 16, 0, 16),
  },
  backgroundWrapper: {
    width: "100%",
    height: "70%",
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: -1,
    backgroundColor: "hsl(256, 26%, 20%)",
  },
  contentBox: {
    display: "flex",
    alignItems: "flex-start",
    position: "relative",
    zIndex: 3,
  },
  darkDivider: {
    borderBottom: "1px solid #FFFFFF",
    width: "20%",
    padding: 0,
    margin: 0,
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
  },
  mainHeadingWrapper: {
    marginTop: theme.spacing(6),
  },
  mainHeading: {
    fontSize: "80px",
    lineHeight: "80px",
    color: "#FFFFFF",
    fontFamily: "DM Serif Display, serif",
    fontWeight: 400,
  },
  description: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FFFFFF",
    fontFamily: "Karla, san-serif",
    fontWeight: 400,
    width: "95%",
    marginTop: theme.spacing(3),
  },
  mainSectionButton: {
    border: "2px solid #FFFFFF",
    backgroundColor: "transparent",
    padding: theme.spacing(1, 2.5),
    fontSize: "16px",
    fontFamily: "Karla, sans-serif",
    fontWeight: 700,
    color: "#FFFFFF",
    marginTop: theme.spacing(4),
    transition: "0.5s all ease",
    "&:hover": {
      border: "2px solid #FFFFFF",
      backgroundColor: "#FFFFFF",
      color: "hsl(270, 9%, 17%)",
      cursor: "pointer",
    },
  },
  lightDivider: {
    borderBottom: "1px solid hsl(273, 4%, 51%)",
    width: "15%",
    paddingTop: theme.spacing(16),
    margin: 0,
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
  },
  designWrapper: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    backgroundImage:
      "url(/images/insure-landing-page/bg-pattern-intro-left-desktop.svg), url(/images/insure-landing-page/bg-pattern-intro-right-desktop.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 120%, 100% -80px",
  },
  heroImage: {
    position: "relative",
    zIndex: 0,
  },
});

export const mainSectionMobileStyles = (theme: any) => ({
  heroImage: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  sectionWrapper: {
    position: "relative",
    padding: theme.spacing(8, 3, 0, 3),
  },
  backgroundWrapper: {
    width: "100%",
    height: "70%",
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: -1,
    backgroundColor: "hsl(256, 26%, 20%)",
  },
  contentBox: {
    textAlign: "center",
  },
  mainHeading: {
    fontSize: "45px",
    lineHeight: "45px",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "DM Serif Display, serif",
    fontWeight: 400,
  },
  description: {
    fontSize: "14px",
    lineHeight: "22px",
    color: "#FFFFFF",
    fontFamily: "Karla, san-serif",
    fontWeight: 400,
    width: "100%",
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  mainSectionButton: {
    border: "2px solid #FFFFFF",
    backgroundColor: "transparent",
    padding: theme.spacing(1, 2.5),
    fontSize: "16px",
    fontFamily: "Karla, sans-serif",
    fontWeight: 700,
    color: "#FFFFFF",
    marginTop: theme.spacing(3),
  },
  lightDivider: {
    borderBottom: "1px solid hsl(273, 4%, 51%)",
    width: "50%",
    transform: "translate(50%,0%)",
    paddingTop: theme.spacing(32),
    margin: 0,
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
  },
  designWrapper: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    backgroundImage:
      "url(/images/insure-landing-page/bg-pattern-intro-left-mobile.svg), url(/images/insure-landing-page/bg-pattern-intro-right-mobile.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 0%, 100% 100%",
  },
});

export const featureSectionStyles = (theme: any) => ({
  sectionWrapper: {
    position: "relative",
    padding: theme.spacing(6, 16),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 3),
    },
  },
  mainHeading: {
    fontSize: "64px",
    lineHeight: "64px",
    color: "hsl(256, 26%, 20%)",
    fontFamily: "DM Serif Display, serif",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "42px",
      lineHeight: "42px",
      textAlign: "center",
    },
  },
  iconContainer: {
    width: "70px",
    height: "70px",
    backgroundColor: " hsl(216, 30%, 68%)",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      width: "60px",
      height: "60px",
      margin: theme.spacing(0, "auto"),
    },
  },
  featuresWrapper: {
    display: "flex",
    margin: theme.spacing(8, 0),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      margin: 0,
    },
  },
  featureWrapper: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginTop: theme.spacing(6),
    },
  },
  featureHeading: {
    fontSize: "28px",
    lineHeight: "28px",
    color: "hsl(270, 9%, 17%)",
    fontFamily: "DM Serif Display, serif",
    fontWeight: 400,
    margin: theme.spacing(3, 0),
  },
  featureDescription: {
    fontSize: "16px",
    lineHeight: "22px",
    color: "hsl(273, 4%, 51%)",
    fontFamily: "Karla, san-serif",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
});

export const moreSectionStyles = (theme: any) => ({
  sectionWrapper: {
    padding: theme.spacing(0, 16, 20, 16),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 3, 10, 3),
    },
  },
  contentBox: {
    padding: theme.spacing(8, 10),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background:
      "url(/images/insure-landing-page/bg-pattern-how-we-work-desktop.svg), hsl(256, 26%, 20%)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(8, 3),
      flexDirection: "column",
      background:
        "url(/images/insure-landing-page/bg-pattern-how-we-work-mobile.svg), hsl(256, 26%, 20%)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
    },
  },
  mainHeading: {
    fontSize: "64px",
    lineHeight: "64px",
    color: "#FFFFFF",
    fontFamily: "DM Serif Display, serif",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "42px",
      lineHeight: "42px",
      textAlign: "center",
    },
  },
  moreSectionButton: {
    border: "2px solid #FFFFFF",
    backgroundColor: "transparent",
    padding: theme.spacing(1.5, 2.5),
    fontSize: "16px",
    fontFamily: "Karla, sans-serif",
    fontWeight: 700,
    color: "#FFFFFF",
    marginTop: theme.spacing(4),
    transition: "0.5s all ease",
    "&:hover": {
      border: "2px solid #FFFFFF",
      backgroundColor: "#FFFFFF",
      color: "hsl(270, 9%, 17%)",
      cursor: "pointer",
    },
  },
});

export const footerStyles = (theme: any) => ({
  footerWrapper: {
    padding: theme.spacing(8, 16),
    background:
      "url(/images/insure-landing-page/bg-pattern-footer-desktop.svg) hsl(0, 0%, 98%)",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(10, 3),
      background:
        "url(/images/insure-landing-page/bg-pattern-footer-mobile.svg) hsl(0, 0%, 98%)",
      backgroundRepeat: "no-repeat",
    },
  },
  socialIconsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  socialIconsInnerWrapper: {
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3),
      display: "flex",
      alignItems: "center",
    },
  },
  socialIcon: {
    marginLeft: theme.spacing(2),
    color: "hsl(273, 4%, 51%)",
    transition: "0.5s all ease",
    "&:hover": {
      color: "hsl(270, 9%, 17%)",
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(1.5),
    },
  },
  divider: {
    borderBottom: "1px solid hsl(273, 4%, 71%)",
    padding: 0,
    margin: theme.spacing(4, 0),
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
  },
  footerLinksWrapper: {
    display: "flex",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },
  footerMenuBlock: {
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginTop: theme.spacing(3),
    },
  },
  footerMenuHeading: {
    fontSize: "16px",
    lineHeight: "16px",
    color: "hsl(273, 4%, 51%)",
    fontFamily: "Karla, san-serif",
    fontWeight: 700,
    marginBottom: theme.spacing(4),
  },
  footerMenuItem: {
    fontSize: "16px",
    lineHeight: "16px",
    color: "hsl(270, 9%, 17%)",
    fontFamily: "Karla, san-serif",
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    transition: "0.5s all ease",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
});
