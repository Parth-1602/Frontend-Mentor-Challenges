export const introSectionStyles = (theme: any) => ({
  sectionWrapper: {
    backgroundImage:
      "url(/images/blogr-landing-page/bg-pattern-intro-desktop.svg), linear-gradient(to right,hsl(13, 100%, 72%), hsl(353, 100%, 62%) )",
    backgroundPosition: "25% 50%",
    backgroundRepeat: "no-repeat",
    borderBottomLeftRadius: theme.spacing(8),
    padding: theme.spacing(6, 12),
    [theme.breakpoints.down("md")]: {
      backgroundImage:
        "url(/images/blogr-landing-page/bg-pattern-intro-mobile.svg), linear-gradient(to right,hsl(13, 100%, 72%), hsl(353, 100%, 62%) )",
      padding: theme.spacing(6, 3),
      backgroundPosition: "35% 35%",
    },
  },
  appBar: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
  },
  dropButtonWrapper: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginLeft: theme.spacing(3),
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  buttonText: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsla(0, 0%, 100%, 0.6)",
    fontSize: "14px",
    fontWeight: 600,
    transition: "0.5s all ease",
    "&:hover": {
      textDecoration: "underline",
      color: "hsl(0, 0%, 100%)",
      cursor: "pointer",
    },
  },
  activeButtonText: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(0, 0%, 100%)",
    textDecoration: "underline",
    fontSize: "14px",
    fontWeight: 600,
    "&:hover": {
      textDecoration: "underline",
      color: "hsl(0, 0%, 100%)",
      cursor: "pointer",
    },
  },
  arrowUpIcon: {
    width: "18px",
    height: "18px",
    color: "hsl(0, 0%, 100%)",
  },
  arrowDownIcon: {
    marginLeft: theme.spacing(0.1),
    width: "18px",
    height: "18px",
    color: "hsla(0, 0%, 100%, 0.6)",
    "&:hover": {
      color: "hsl(0, 0%, 100%)",
      cursor: "pointer",
    },
  },
  dropDownMenu: {
    backgroundColor: "hsl(0, 0%, 100%)",
    position: "absolute",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    top: 32,
    left: 0,
  },
  menuItem: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(208, 49%, 24%)",
    transition: "0.3s all ease-in-out",
    marginBottom: theme.spacing(0.5),
    minWidth: "100px",
    maxWidth: "100px",
    fontSize: "14px",
    fontWeight: 400,
    "&:hover": {
      cursor: "pointer",
      fontWeight: 600,
    },
  },
  loginButton: {
    border: "none",
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    color: "hsla(0, 0%, 100%, 0.5)",
    backgroundColor: "transparent",
    transition: "0.5s all ease",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
      color: "hsl(0, 0%, 100%)",
    },
  },
  signUpButton: {
    border: "none",
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    color: "hsl(356, 100%, 66%)",
    backgroundColor: "hsl(0, 0%, 100%)",
    padding: theme.spacing(1, 2),
    marginLeft: theme.spacing(2),
    borderRadius: "25px",
    transition: "0.5s all ease",
    "&:hover": {
      backgroundColor: "hsl(355, 100%, 74%)",
      cursor: "pointer",
      color: "hsl(0, 0%, 100%)",
    },
  },
  mainHeading: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(0, 0%, 100%)",
    fontSize: "48px",
    textAlign: "center",
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(2),
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "34px",
    },
  },
  subText: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsla(0, 0%, 100%, 0.5)",
    fontSize: "16px",
    textAlign: "center",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "18px",
    },
  },
  ctaButtonsWrapper: {
    textAlign: "center",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
  },
  ctaStartButton: {
    border: "1px solid hsl(356, 100%, 66%)",
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    color: "hsl(356, 100%, 66%)",
    padding: theme.spacing(1.5),
    marginRight: theme.spacing(2),
    borderRadius: "25px",
    backgroundColor: "hsl(0, 0%, 100%)",
    transition: "0.5s all ease",
    "&:hover": {
      backgroundColor: "hsl(355, 100%, 74%)",
      border: "1px solid hsl(355, 100%, 74%)",
      cursor: "pointer",
      color: "hsl(0, 0%, 100%)",
    },
  },
  ctaLearnButton: {
    backgroundColor: "transparent",
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    color: "hsl(0, 0%, 100%)",
    padding: theme.spacing(1.5, 2),
    marginRight: theme.spacing(2),
    borderRadius: "25px",
    border: "1px solid hsl(0, 0%, 100%)",
    transition: "0.5s all ease",
    "&:hover": {
      backgroundColor: "hsl(0, 0%, 100%)",
      border: "1px solid hsl(0, 0%, 100%)",
      cursor: "pointer",
      color: "hsl(356, 100%, 66%)",
    },
  },
  popMenu: {
    position: "absolute",
    backgroundColor: "hsl(0, 0%, 100%)",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    maxHeight: "350px",
    overflowY: "auto",
    width: "100%",
    top: 50,
    right: 0,
  },
  dropButtonMobileWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    margin: theme.spacing(1.5, 0),
  },
  buttonMobileText: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(208, 49%, 24%)",
    fontSize: "14px",
    fontWeight: 600,
    transition: "0.5s all ease",
  },
  activeButtonMobileText: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(208, 49%, 24%)",
    textDecoration: "underline",
    fontSize: "14px",
    fontWeight: 600,
  },
  arrowUpMobileIcon: {
    width: "18px",
    height: "18px",
    color: "hsl(13, 100%, 72%)",
  },
  arrowDownMobileIcon: {
    marginLeft: theme.spacing(0.2),
    width: "18px",
    height: "18px",
    color: "hsl(13, 100%, 72%)",
  },
  dropDownMobileMenu: {
    backgroundColor: "hsla(240, 2%, 79%, 0.5)",
    width: "100%",
    textAlign: "center",
    marginTop: theme.spacing(1.5),
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(2),
  },
  mobileMenuItem: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(207, 13%, 34%)",
    marginBottom: theme.spacing(0.5),
    fontSize: "14px",
    fontWeight: 600,
  },
  divider: {
    border: "none",
    borderTop: "1px solid hsl(240, 2%, 79%)",
  },
  buttonsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },
  mobileLoginButton: {
    width: "100px",
    backgroundColor: "transparent",
    fontFamily: "Ubuntu, sans-serif",
    padding: theme.spacing(1, 2),
    color: "hsl(208, 49%, 24%)",
    fontSize: "14px",
    fontWeight: 500,
    border: "none",
  },
  mobileSignUpButton: {
    width: "100px",
    backgroundImage:
      "linear-gradient(to right, hsl(13, 100%, 72%),  hsl(353, 100%, 62%))",
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(0, 0%, 100%)",
    fontSize: "14px",
    padding: theme.spacing(1, 2),
    borderRadius: "25px",
    fontWeight: 500,
    border: "none",
    marginTop: theme.spacing(1),
  },
});

export const section1Styles = (theme: any) => ({
  sectionWrapper: {
    padding: theme.spacing(20, 12),
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 3),
    },
  },
  heroImage: {
    position: "absolute",
    top: 20,
    right: "-28%",
  },
  heroMobileImage: {
    width: "100%",
    height: "100%",
  },
  sectionHeading: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(208, 49%, 24%)",
    marginBottom: theme.spacing(16),
    fontSize: "32px",
    textAlign: "center",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
      fontSize: "28px",
    },
  },
  contentWrapper: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3),
    },
  },
  sectionSubHeading: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(208, 49%, 24%)",
    fontSize: "24px",
    marginBottom: theme.spacing(3),
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
      fontSize: "24px",
      textAlign: "center",
    },
  },
  description: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsla(207, 13%, 34%, 0.5)",
    fontSize: "16px",
    lineHeight: "24px",
    width: "40%",
    marginBottom: theme.spacing(8),
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
      textAlign: "center",
      width: "100%",
    },
  },
});

export const section2Styles = (theme: any) => ({
  sectionWrapper: {
    borderBottomLeftRadius: theme.spacing(8),
    borderTopRightRadius: theme.spacing(8),
    padding: theme.spacing(16, 8),
    backgroundImage:
      "url(/images/blogr-landing-page/bg-pattern-circles.svg), linear-gradient(to right,hsl(237, 17%, 21%), hsl(237, 23%, 32%) )",
    backgroundPosition: "-40% 80%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(20),
      padding: theme.spacing(24, 3, 16, 3),
      backgroundPosition: "45% 120%",
    },
  },
  heroImage: {
    position: "absolute",
    top: -70,
    left: "64px",
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      width: "400px",
      left: "50%",
      top: 0,
      transform: "translate(-50%, -50%)",
    },
  },
  sectionHeading: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(0, 0%, 100%)",
    marginBottom: theme.spacing(3),
    fontSize: "32px",
    width: "40%",
    marginLeft: "auto",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      fontSize: "28px",
      textAlign: "center",
    },
  },
  description: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsla(0, 0%, 100%, 0.6)",
    fontSize: "16px",
    lineHeight: "24px",
    marginLeft: "auto",
    width: "40%",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
    },
  },
});

export const section3Styles = (theme: any) => ({
  sectionWrapper: {
    padding: theme.spacing(32, 12),
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 3),
    },
  },
  heroImage: {
    position: "absolute",
    top: 60,
    left: "-24%",
  },
  heroMobileImage: {
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    width: "50%",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  sectionSubHeading: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(208, 49%, 24%)",
    fontSize: "24px",
    marginBottom: theme.spacing(3),
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
      fontSize: "24px",
      textAlign: "center",
    },
  },
  description: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsla(207, 13%, 34%, 0.5)",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: theme.spacing(8),
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
      textAlign: "center",
      width: "100%",
    },
  },
});

export const footerStyles = (theme: any) => ({
  sectionWrapper: {
    padding: theme.spacing(8, 12),
    borderTopRightRadius: theme.spacing(8),
    backgroundColor: "hsl(240, 10%, 16%)",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 3),
      flexDirection: "column",
      alignItems: "center",
    },
  },
  footerHeading: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsl(0, 0%, 100%)",
    fontSize: "14px",
    lineHeight: "24px",
    marginBottom: theme.spacing(3),
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3, 0),
      textAlign: "center",
    },
  },
  footerList: {
    listStyle: "none",
    padding: 0,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      padding: 0,
    },
  },
  footerListItem: {
    fontFamily: "Ubuntu, sans-serif",
    color: "hsla(0, 0%, 100%, 0.5)",
    fontSize: "14px",
    marginBottom: theme.spacing(1),
    fontWeight: 400,
    transition: "0.5s all ease",
    "&:hover": {
      color: "hsl(0, 0%, 100%)",
      fontWeight: 500,
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
});