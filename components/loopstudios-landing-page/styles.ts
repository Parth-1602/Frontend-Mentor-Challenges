export const mainSectionStyles = (theme: any) => ({
  sectionWrapper: {
    backgroundImage:
      "url(/images/loopstudios-landing-page/desktop/image-hero.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    height: "90vh",
    padding: theme.spacing(8, 21),
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(8, 15),
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage:
        "url(/images/loopstudios-landing-page/mobile/image-hero.jpg)",
      padding: theme.spacing(5, 3),
      height: "100vh",
    },
  },
  appBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: "18%",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
  },
  menuList: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
  },
  menuItem: {
    fontFamily: "Alata, sans-serif",
    fontSize: "15px",
    paddingBottom: theme.spacing(0.5),
    marginLeft: theme.spacing(3),
    fontWeight: 400,
    color: "hsl(0, 0%, 100%)",
    transition: "0.5s all ease",
    "&:hover": {
      borderBottom: "3px solid hsl(0, 0%, 100%)",
      cursor: "pointer",
    },
  },
  contentWrapper: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  headingWrapper: {
    border: "3px solid hsl(0, 0%, 100%)",
    padding: theme.spacing(4, 0),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(16),
    width: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      boxSizing: "borderBox",
      padding: theme.spacing(2),
    },
  },
  mainHeading: {
    fontSize: "58px",
    fontFamily: "Josefin Sans, sans-serif",
    color: "hsl(0, 0%, 100%)",
    fontWeight: 300,
    lineHeight: "68px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "48px",
      lineHeight: "48px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "38px",
      lineHeight: "38px",
    },
  },
  mobileMenuWrapper: {
    backgroundColor: "hsl(0, 0%, 0%)",
    height: "100vh",
    position: "absolute",
    padding: theme.spacing(5, 3),
    width: "100%",
    top: 0,
    left: 0,
  },
  mobileMenuLogo: {
    width: "45%",
  },
  mobileMenuList: {
    listStyle: "none",
    marginTop: theme.spacing(20),
    padding: 0,
  },
  mobileMenuItem: {
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: "22px",
    marginBottom: theme.spacing(1),
    fontWeight: 300,
    color: "hsl(0, 0%, 100%)",
  },
});

export const aboutSectionStyles = (theme: any) => ({
  sectionWrapper: {
    padding: theme.spacing(18, 21),
    position: "relative",
    backgroundColor: "hsl(0, 0%, 100%)",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(14, 15),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(12, 3),
    },
  },
  sectionImage: {
    display: "flex",
    width: "65%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
  contentWrapper: {
    position: "absolute",
    width: "38%",
    backgroundColor: "hsl(0, 0%, 100%)",
    bottom: theme.spacing(18),
    right: theme.spacing(21),
    padding: theme.spacing(12, 0, 0, 12),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(4, 0, 0, 4),
      bottom: theme.spacing(14),
      right: theme.spacing(15),
    },
    [theme.breakpoints.down("md")]: {
      position: "static",
      textAlign: "center",
      width: "100%",
      padding: theme.spacing(6, 3),
    },
  },
  mainHeading: {
    fontSize: "45px",
    color: "hsl(0, 0%, 0%)",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 400,
    lineHeight: "45px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("lg")]: {
      fontSize: "35px",
    },
  },
  description: {
    fontSize: "15px",
    color: "hsl(0, 0%, 55%)",
    fontFamily: "Alata, sans-serif",
    fontWeight: 400,
    lineHeight: "22px",
  },
});

export const creationsSectionStyles = (theme: any) => ({
  sectionWrapper: {
    padding: theme.spacing(8, 21),
    backgroundColor: "hsl(0, 0%, 100%)",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(8, 15),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(8, 3),
    },
  },
  mainHeadingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  mainHeading: {
    fontSize: "36px",
    color: "hsl(0, 0%, 0%)",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 300,
  },
  seeAllButton: {
    backgroundColor: "transparent",
    border: "2px solid hsl(0, 0%, 0%)",
    color: "hsl(0, 0%, 0%)",
    fontSize: "15px",
    letterSpacing: "5px",
    fontFamily: "Alata, sans-serif",
    fontWeight: 400,
    padding: theme.spacing(1, 3),
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(0, 0%, 0%)",
      border: "2px solid hsl(0, 0%, 0%)",
      color: "hsl(0, 0%, 100%)",
    },
  },
  mobileButtonWrapper: {
    textAlign: "center",
    margin: theme.spacing(8, 0),
  },
  seeAllMobileButton: {
    backgroundColor: "transparent",
    border: "2px solid hsl(0, 0%, 0%)",
    color: "hsl(0, 0%, 0%)",
    fontSize: "15px",
    letterSpacing: "5px",
    fontFamily: "Alata, sans-serif",
    fontWeight: 400,
    padding: theme.spacing(1, 3),
  },
  card: {
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "hsl(0, 0%, 0%, 0.2)",
    width: "100%",
    height: "100%",
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(0, 0%, 100%, 0.7)",
      "& h4": {
        color: "hsl(0, 0%, 0%)",
      },
    },
  },
  titleWrapper: {
    position: "absolute",
    bottom: 30,
    left: 30,
    [theme.breakpoints.down("lg")]: {
      bottom: 15,
      left: 15,
    },
  },
  title: {
    fontSize: "32px",
    color: "hsl(0, 0%, 100%)",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 300,
    [theme.breakpoints.down("lg")]: {
      fontSize: "24px",
    },
  },
});

export const footerSectionStyles = (theme: any) => ({
  sectionWrapper: {
    padding: theme.spacing(4, 21),
    backgroundColor: "hsl(0, 0%, 0%)",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(4, 15),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 3),
    },
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  logo: {
    objectFit: "cover",
    width: "15%",
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
  },
  socialIconsWrapper: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      margin: theme.spacing(1, 0),
    },
  },
  socialIcon: {
    objectFit: "cover",
    width: "18px",
    marginLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    transition: "0.3s all ease",
    "&:hover": {
      cursor: "pointer",
      borderBottom: "2px solid hsl(0, 0%, 100%)",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      marginLeft: 0,
      margin: theme.spacing(0, 1),
      width: "20px",
    },
  },
  copyrightWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  footerMenuList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  footerMenuItem: {
    color: "hsl(0, 0%, 100%)",
    marginRight: theme.spacing(4),
    fontSize: "15px",
    fontFamily: "Alata, sans-serif",
    fontWeight: 400,
    paddingBottom: theme.spacing(1),
    transition: "0.3s all ease",
    "&:hover": {
      cursor: "pointer",
      borderBottom: "2px solid hsl(0, 0%, 100%)",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
    },
  },
  copyrightText: {
    color: "hsl(0, 0%, 41%)",
    fontSize: "15px",
    fontFamily: "Alata, sans-serif",
    fontWeight: 400,
  },
});
