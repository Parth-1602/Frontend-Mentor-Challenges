export const mainSectionStyles = (theme: any) => ({
  sectionWrapper: {
    backgroundImage:
      "url(/images/sunnyside-agency-landing-page/desktop/image-header.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    height: "100vh",
    padding: theme.spacing(4),
    position: "relative",
    [theme.breakpoints.down("md")]: {
      backgroundImage:
        "url(/images/sunnyside-agency-landing-page/mobile/image-header.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
  },
  appBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  menuItemsWrapper: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
  },
  menuItem: {
    marginLeft: theme.spacing(4),
    fontFamily: "Barlow, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "hsl(0, 0%, 100%)",
  },
  contactButton: {
    textTransform: "uppercase",
    fontFamily: "Fraunces, serif",
    fontWeight: 700,
    borderRadius: "25px",
    padding: theme.spacing(1, 2),
    fontSize: "12px",
    backgroundColor: "hsl(0, 0%, 100%)",
    color: "hsl(212, 27%, 19%)",
    transition: "0.3s all ease",
    border: "none",
    "&:hover": {
      cursor: "pointer",
      color: " hsl(0, 0%, 100%)",
      backgroundColor: "hsla(0, 0%, 100%, 0.3)",
    },
  },
  mainHeading: {
    marginTop: theme.spacing(15),
    textAlign: "center",
    letterSpacing: "8px",
    fontFamily: "Fraunces, serif",
    fontSize: "48px",
    fontWeight: 900,
    color: "hsl(0, 0%, 100%)",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(12),
      fontSize: "40px",
      letterSpacing: "4px",
    },
  },
  arrowDownIcon: {
    position: "absolute",
    left: "50%",
    bottom: "30%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("md")]: {
      bottom: "20%",
    },
  },
  popMenu: {
    position: "absolute",
    width: "100%",
    padding: theme.spacing(3),
    textAlign: "center",
    top: 60,
    right: 0,
    backgroundColor: "hsl(0, 0%, 100%)",
    "&::after": {
      content: `" "`,
      position: "absolute",
      top: "-20px",
      right: 0,
      margin: theme.spacing(0, "auto"),
      width: 0,
      height: 0,
      borderTop: "20px solid transparent",
      borderBottom: "20px solid  hsl(0, 0%, 100%)",
      borderLeft: "20px solid transparent",
      borderRight: "20px solid hsl(0, 0%, 100%)",
    },
  },
  popMenuItemsWrapper: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  popMenuItem: {
    marginBottom: theme.spacing(2.5),
    fontFamily: "Barlow, sans-serif",
    fontSize: "16px",
    fontWeight: 600,
    color: "hsl(232, 10%, 55%)",
  },
  popMenuContactButton: {
    textTransform: "uppercase",
    fontFamily: "Fraunces, serif",
    fontWeight: 700,
    borderRadius: "25px",
    padding: theme.spacing(1.5, 2.5),
    fontSize: "12px",
    backgroundColor: "hsl(51, 100%, 49%)",
    color: "hsl(212, 27%, 19%)",
    border: "none",
  },
});

export const section1Styles = (theme: any) => ({
  sectionWrapper: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  leftCard: {
    backgroundColor: " hsla(7, 99%, 70%, 0.1)",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(6, 4),
    },
  },
  contentWrapper: {
    width: "55%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  cardHeading: {
    fontFamily: "Fraunces, serif",
    fontSize: "40px",
    fontWeight: 700,
    color: "hsl(212, 27%, 19%)",
    marginBottom: theme.spacing(3),
  },
  cardDescription: {
    fontFamily: "Barlow, sans-serif",
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: 400,
    color: "hsl(212, 27%, 19%)",
    marginBottom: theme.spacing(3),
  },
  learnMoreButton: {
    textTransform: "uppercase",
    border: "none",
    position: "relative",
    fontFamily: "Fraunces, serif",
    fontSize: "14px",
    fontWeight: 900,
    color: "hsla(212, 27%, 19%, 0.7)",
    backgroundColor: "transparent",
    transition: "0.5s all ease",
    "&:after": {
      content: `""`,
      position: "absolute",
      bottom: -2,
      left: 0,
      right: 0,
      background: "hsla(51, 100%, 49%, 0.3)",
      height: "6px",
      borderRadius: "10px",
    },
    "&:hover": {
      cursor: "pointer",
      color: "hsl(212, 27%, 19%)",
      "&:after": {
        background: "hsl(51, 100%, 49%)",
      },
    },
  },
  rightCard: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  sectionImage: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
});

export const section2Styles = (theme: any) => ({
  sectionWrapper: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  leftCard: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  sectionImage: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  rightCard: {
    backgroundColor: " hsla(7, 99%, 70%, 0.1)",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(6, 4),
    },
  },
  contentWrapper: {
    width: "55%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  cardHeading: {
    fontFamily: "Fraunces, serif",
    fontSize: "40px",
    fontWeight: 700,
    color: "hsl(212, 27%, 19%)",
    marginBottom: theme.spacing(3),
  },
  cardDescription: {
    fontFamily: "Barlow, sans-serif",
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: 400,
    color: "hsl(212, 27%, 19%)",
    marginBottom: theme.spacing(3),
  },
  learnMoreButton: {
    textTransform: "uppercase",
    border: "none",
    position: "relative",
    fontFamily: "Fraunces, serif",
    fontSize: "14px",
    fontWeight: 900,
    color: "hsla(212, 27%, 19%, 0.7)",
    backgroundColor: "transparent",
    transition: "0.5s all ease",
    "&:after": {
      content: `""`,
      position: "absolute",
      bottom: -2,
      left: 0,
      right: 0,
      background: "hsl(7, 99%, 70%, 0.3)",
      height: "6px",
      borderRadius: "10px",
    },
    "&:hover": {
      cursor: "pointer",
      color: "hsl(212, 27%, 19%)",
      "&:after": {
        background: "hsl(7, 99%, 70%)",
      },
    },
  },
});

export const section3Styles = (theme: any) => ({
  sectionWrapper: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  leftCard: {
    width: "50%",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  rightCard: {
    width: "50%",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  cardImage: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  infoWrapper: {
    position: "absolute",
    width: "50%",
    left: "50%",
    bottom: -40,
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      bottom: -20,
    },
  },
  cardHeading: {
    fontFamily: "Fraunces, serif",
    fontSize: "32px",
    textAlign: "center",
    fontWeight: 700,
    marginBottom: theme.spacing(3),
  },
  cardDescription: {
    fontFamily: "Barlow, sans-serif",
    fontSize: "18px",
    textAlign: "center",
    lineHeight: "24px",
    fontWeight: 400,
    marginBottom: theme.spacing(3),
  },
  graphicCard: {
    color: "hsl(167, 40%, 24%)",
  },
  photographyCard: {
    color: "hsl(198, 62%, 26%)",
  },
});

export const testimonialStyles = (theme: any) => ({
  sectionWrapper: {
    padding: theme.spacing(16),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 4),
    },
  },
  sectionHeading: {
    fontFamily: "Fraunces, serif",
    fontSize: "20px",
    textAlign: "center",
    letterSpacing: "4px",
    color: "hsl(210, 4%, 67%)",
    fontWeight: 700,
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(8),
      fontSize: "16px",
    },
  },
  testimonialsWrapper: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  card: {
    textAlign: "center",
    padding: theme.spacing(0, 3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      padding: 0,
      marginBottom: theme.spacing(8),
      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
  avatarIcon: {
    width: "50px",
    height: "50px",
    margin: theme.spacing(0, "auto"),
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  comment: {
    fontFamily: "Barlow, sans-serif",
    fontSize: "18px",
    color: "hsl(212, 27%, 19%)",
    fontWeight: 600,
    lineHeight: "24px",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  author: {
    fontFamily: "Fraunces, serif",
    fontSize: "18px",
    color: "hsl(212, 27%, 19%)",
    fontWeight: 900,
  },
  post: {
    fontFamily: "Barlow, sans-serif",
    fontSize: "13px",
    textAlign: "center",
    color: "hsl(210, 4%, 74%)",
    fontWeight: 600,
  },
});

export const imageGalleryStyles = (theme: any) => ({
  galleryWrapper: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  topImagesWrapper: {
    width: "50%",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  galleryImage: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
});

export const footerStyles = (theme: any) => ({
  footerWrapper: {
    backgroundColor: "hsl(168, 34%, 70%)",
    padding: theme.spacing(8),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
    },
  },
  menuItemsWrapper: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(3, 0, 6, 0),
  },
  menuItem: {
    marginRight: theme.spacing(6),
    fontFamily: "Barlow, sans-serif",
    fontSize: "13px",
    textAlign: "center",
    color: "hsl(168, 34%, 41%)",
    fontWeight: 600,
    transition: "0.5s all ease",
    "&:last-child": {
      marginRight: 0,
    },
    "&:hover": {
      cursor: "pointer",
      color: "hsl(0, 0%, 100%)",
    },
  },
  footerIcon: {
    width: "20px",
    height: "20px",
    color: "hsl(168, 34%, 41%)",
    marginRight: theme.spacing(2),
    transition: "0.5s all ease",
    "&:last-child": {
      marginRight: 0,
    },
    "&:hover": {
      cursor: "pointer",
      color: "hsl(0, 0%, 100%)",
    },
  },
});
