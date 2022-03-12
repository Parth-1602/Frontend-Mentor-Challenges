export const appBarStyles = (theme: any) => ({
  appBarWrapper: {
    width: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(4, 20),
    justifyContent: "space-between",
    top: 0,
    left: 0,
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 0),
      width: "90%",
      left: "50%",
      transform: "translate(-50%, 0)",
    },
  },
  menuItemList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  menuItem: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    color: "#FFFFFFDD",
    fontWeight: 500,
    marginLeft: theme.spacing(4),
    transition: "0.5s all ease",
    "&:hover": {
      color: "#FFFFFFFF",
      cursor: "pointer",
    },
  },
  dropDownWrapper: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: theme.spacing(1),
    left: 0,
    top: 80,
    border: "10px sold red",
  },
  dropDownItem: {
    fontSize: "20px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 500,
    borderBottom: "1px solid hsla(0, 0%, 48%, 0.3)",
    padding: theme.spacing(3, 2),
  },
});

export const productCardStyles = (theme: any) => ({
  productCard: {
    backgroundColor: "#FFFFFF",
    position: "relative",
    padding: theme.spacing(6),
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 3, 3, 3),
    },
  },
  mastercraftLogo: {
    position: "absolute",
    width: "50px",
    height: "50px",
    left: "50%",
    top: 0,
    transform: "translate(-50%, -50%)",
  },
  productName: {
    fontSize: "24px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
      marginBottom: theme.spacing(2),
    },
  },
  productDescription: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsla(0, 0%, 48%, 0.7)",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      lineHeight: "24px",
    },
  },
  buttonsWrapper: {
    marginTop: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3),
      justifyContent: "center",
    },
  },
  backProjectButton: {
    border: "none",
    backgroundColor: "hsl(176, 50%, 47%)",
    borderRadius: "25px",
    transition: "0.5s all ease",
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    color: "#FFFFFF",
    padding: theme.spacing(1.5, 2),
    fontWeight: 500,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(176, 72%, 28%)",
    },
  },
  bookmarkButtonWrapper: {
    display: "flex",
    position: "relative",
    "&:hover": {
      cursor: "pointer",
    },
  },
  bookmarkIconWrapper: {
    position: "absolute",
    backgroundColor: "hsl(0, 0%, 0%)",
    width: "45px",
    height: "45px",
    top: "50%",
    left: 20,
    transform: "translate(-50%, -50%)",
    transition: "0.5s all ease",
    "&:hover": {
      backgroundColor: "hsl(0, 0%, 0%, 0.5)",
    },
    [theme.breakpoints.down("md")]: {
      position: "static",
      transform: "none",
      marginLeft: theme.spacing(1),
    },
  },
  bookmarkActiveIconWrapper: {
    backgroundColor: "hsl(176, 72%, 28%)",
  },
  bookmarkIcon: {
    color: "hsl(0, 0%, 60%)",
    transition: "0.5s all ease",
    "&:hover": {
      color: "hsl(0, 0%, 70%)",
    },
  },
  bookmarkActiveIcon: {
    color: "#FFFFFF",
  },
  bookmarkButton: {
    border: "none",
    backgroundColor: "hsla(0, 0%, 48%, 0.1)",
    borderRadius: "25px",
    transition: "0.5s all ease",
    textAlign: "right",
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    padding: theme.spacing(1.5),
    width: "140px",
    fontWeight: 500,
    "&:hover": {
      cursor: "pointer",
      color: "hsl(0, 0%, 0%, 0.5)",
    },
  },
  bookmarkActiveButton: {
    color: "hsl(176, 72%, 28%)",
    fontWeight: 700,
  },
});

export const statsCardStyles = (theme: any) => ({
  statsWrapper: {
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(6),
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  statsInnerWrapper: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  statWrapper: {
    textAlign: "left",
    padding: theme.spacing(0, 6),
    borderRight: "1px solid hsla(0, 0%, 48%, 0.3)",
    "&:first-child": {
      paddingLeft: 0,
    },
    "&:last-child": {
      border: "none",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      border: "none",
      borderBottom: "1px solid hsla(0, 0%, 48%, 0.3)",
      padding: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  stat: {
    fontSize: "28px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
  },
  statDescription: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsla(0, 0%, 48%, 0.7)",
    marginBottom: theme.spacing(1),
    fontWeight: 500,
  },
  progressBar: {
    height: "10px",
    borderRadius: "25px",
    marginTop: theme.spacing(3),
    backgroundColor: "hsla(0, 0%, 48%, 0.1)",
  },
  progressIndicator: {
    backgroundColor: "hsl(176, 50%, 47%)",
    width: "89%",
    height: "10px",
    borderRadius: "25px",
  },
});

export const pledgeCardStyles = (theme: any) => ({
  pledgeWrapper: {
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(6),
    marginBottom: theme.spacing(6),
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  about: {
    fontSize: "18px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    marginBottom: theme.spacing(4),
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  description: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    lineHeight: "24px",
    color: "hsla(0, 0%, 48%, 0.6)",
    marginBottom: theme.spacing(4),
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  actionCardWrapper: {
    border: "2px solid hsla(0, 0%, 48%, 0.2)",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    position: "relative",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  actionCardDisabledWrapper: {
    border: "2px solid hsla(0, 0%, 48%, 0.1)",
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  heading: {
    fontSize: "18px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
  },
  headingDisabled: {
    color: "hsla(0, 0%, 0%, 0.5)",
  },
  subHeading: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(176, 50%, 47%)",
    fontWeight: 500,
  },
  subHeadingDisabled: {
    color: "hsla(176, 50%, 47%, 0.5)",
  },
  cardDescription: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    lineHeight: "24px",
    color: "hsla(0, 0%, 48%, 0.6)",
    margin: theme.spacing(2, 0),
    fontWeight: 500,
  },
  cardDescriptionDisabled: {
    color: "hsla(0, 0%, 48%, 0.3)",
  },
  stockWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  stockInnerWrapper: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(1.5),
    },
  },
  stock: {
    fontSize: "28px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
  },
  stockDisabled: {
    color: "hsla(0, 0%, 0%, 0.5)",
  },
  stockLeftText: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    marginLeft: theme.spacing(1),
    color: "hsla(0, 0%, 48%, 0.6)",
    fontWeight: 500,
  },
  stockLeftTextDisabled: {
    color: "hsla(0, 0%, 48%, 0.3)",
  },
  rewardButton: {
    border: "none",
    backgroundColor: "hsl(176, 50%, 47%)",
    borderRadius: "25px",
    transition: "0.5s all ease",
    fontSize: "13px",
    fontFamily: "Commissioner, sans-serif",
    color: "#FFFFFF",
    padding: theme.spacing(1.5, 3.5),
    fontWeight: 500,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(176, 72%, 28%)",
    },
  },
  outOfStockButton: {
    border: "none",
    backgroundColor: "hsla(0, 0%, 48%, 0.4)",
    borderRadius: "25px",
    transition: "0.5s all ease",
    fontSize: "13px",
    fontFamily: "Commissioner, sans-serif",
    color: "#FFFFFF",
    padding: theme.spacing(1.5, 3.5),
    fontWeight: 500,
  },
});

export const modalStyles = (theme: any) => ({
  backdrop: {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: 999,
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minHeight: 300,
    maxHeight: 600,
    overflow: "auto",
    backgroundColor: "#FFFFFF",
    zIndex: 9999,
    borderRadius: 4,
    [theme.breakpoints.down("md")]: {
      width: "90% !important",
      maxHeight: 500,
    },
  },
});

export const dropDownStyles = (theme: any) => ({
  backdrop: {
    width: "100%",
    height: "100%",
    zIndex: 999,
    left: 0,
    top: 0,
  },
  modal: {
    position: "absolute",
    top: 0,
    left: 20,
    backgroundColor: "#FFFFFF",
    zIndex: 9999,
    borderRadius: 2,
    [theme.breakpoints.down("md")]: {
      width: "90% !important",
      maxHeight: 500,
    },
  },
});

export const modalPledgeContentStyles = (theme: any) => ({
  modalWrapper: {
    padding: theme.spacing(3, 4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3, 2),
    },
  },
  headerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },
  closeIcon: {
    width: "20px",
    height: "20px",
    color: "hsla(0, 0%, 0%, 0.5)",
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      color: "hsla(0, 0%, 0%)",
    },
  },
  heading: {
    fontSize: "24px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      marginBottom: 0,
    },
  },
  description: {
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsla(0, 0%, 48%, 0.8)",
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
});

export const modalActionCardsStyles = (theme: any) => ({
  actionCardWrapper: {
    border: "2px solid hsla(0, 0%, 48%, 0.5)",
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1),
  },
  actionCardActiveWrapper: {
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1),
    border: "2px solid hsl(176, 50%, 47%)",
  },
  actionCardDisabledWrapper: {
    border: "2px solid hsla(0, 0%, 48%, 0.1)",
  },
  spacingLeft: {
    marginLeft: theme.spacing(1.5),
    marginTop: theme.spacing(0.5),
  },
  actionCardInnerWrapper: {
    display: "flex",
    alignItems: "flex-start",
    padding: theme.spacing(2),
  },
  radioButton: {
    width: "35px",
    height: "35px",
    "&.MuiRadio-root": {
      color: "hsla(0, 0%, 48%, 0.5)",
      border: "",
    },
    "&.Mui-checked": {
      color: "hsl(176, 50%, 47%)",
    },
  },
  cardHeaderWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeaderInnerWrapper: {
    display: "flex",
    alignItems: "center",
  },
  cardHeading: {
    fontSize: "18px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      color: "hsl(176, 50%, 47%)",
    },
  },
  cardHeadingDisabled: {
    color: "hsl(0, 0%, 0%, 0.6)",
  },
  cardSubHeading: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(176, 50%, 47%)",
    marginLeft: theme.spacing(2),
    fontWeight: 500,
  },
  cardSubHeadingDisabled: {
    color: "hsl(176, 50%, 47%, 0.5)",
  },
  stock: {
    fontSize: "18px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
  },
  stockDisabled: {
    color: "hsl(0, 0%, 0%, 0.5)",
  },
  stockLeftText: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    marginLeft: theme.spacing(1.5),
    color: "hsla(0, 0%, 48%, 0.6)",
    fontWeight: 500,
  },
  stockLeftTextDisabled: {
    color: "hsla(0, 0%, 48%, 0.3)",
  },
  cardDescription: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    lineHeight: "24px",
    color: "hsla(0, 0%, 0%, 0.6)",
    margin: theme.spacing(1.5, 0),
    fontWeight: 500,
  },
  cardDescriptionDisabled: {
    color: "hsla(0, 0%, 0%, 0.3)",
  },
  inputWrapper: {
    padding: theme.spacing(3, 4),
    borderTop: "1px solid hsla(0, 0%, 48%, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputNoRewardWrapper: {
    padding: theme.spacing(3, 4),
    borderTop: "1px solid hsla(0, 0%, 48%, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inputTextLabel: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsla(0, 0%, 0%, 0.5)",
    fontWeight: 500,
  },
  inputBoxWrapper: {
    display: "flex",
    alignItems: "center",
  },
  inputBoxInnerWrapper: {
    position: "relative",
  },
  inputBox: {
    border: "1px solid hsla(0, 0%, 48%, 0.3)",
    backgroundColor: "transparent",
    borderRadius: "25px",
    transition: "0.5s all ease",
    fontFamily: "Commissioner, sans-serif",
    width: "90px",
    fontSize: "16px",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
    padding: theme.spacing(1.5, 3),
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      cursor: "pointer",
      border: "1px solid hsl(176, 50%, 47%)",
    },
  },
  dollarIcon: {
    fontSize: "16px",
    color: "hsla(0, 0%, 48%, 0.6)",
    position: "absolute",
    top: "50%",
    left: 15,
    transform: "translate(-50%, -50%)",
  },
  continueButton: {
    border: "none",
    backgroundColor: "hsl(176, 50%, 47%)",
    borderRadius: "25px",
    transition: "0.5s all ease",
    fontSize: "13px",
    fontFamily: "Commissioner, sans-serif",
    color: "#FFFFFF",
    padding: theme.spacing(1.5, 4),
    marginLeft: theme.spacing(2),
    fontWeight: 500,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(176, 72%, 28%)",
    },
  },
});

export const modalActionMobileCardsStyles = (theme: any) => ({
  actionCardWrapper: {
    border: "2px solid hsla(0, 0%, 48%, 0.5)",
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  actionCardActiveWrapper: {
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
    border: "2px solid hsl(176, 50%, 47%)",
  },
  actionCardDisabledWrapper: {
    border: "2px solid hsla(0, 0%, 48%, 0.1)",
  },
  spacingLeft: {
    marginLeft: theme.spacing(1),
  },
  actionCardInnerWrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  radioButton: {
    width: "35px",
    height: "35px",
    "&.MuiRadio-root": {
      color: "hsla(0, 0%, 48%, 0.5)",
      border: "",
    },
    "&.Mui-checked": {
      color: "hsl(176, 50%, 47%)",
    },
  },
  cardHeaderWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeaderInnerWrapper: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  stockWrapper: {
    display: "flex",
    alignItems: "flex-start",
    padding: theme.spacing(2),
  },
  cardHeading: {
    fontSize: "18px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      color: "hsl(176, 50%, 47%)",
    },
  },
  cardHeadingDisabled: {
    color: "hsl(0, 0%, 0%, 0.6)",
  },
  cardSubHeading: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(176, 50%, 47%)",
    fontWeight: 500,
  },
  cardSubHeadingDisabled: {
    color: "hsl(176, 50%, 47%, 0.5)",
  },
  stock: {
    fontSize: "18px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
  },
  stockDisabled: {
    color: "hsl(0, 0%, 0%, 0.5)",
  },
  stockLeftText: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    marginLeft: theme.spacing(1.5),
    color: "hsla(0, 0%, 48%, 0.6)",
    fontWeight: 500,
  },
  stockLeftTextDisabled: {
    color: "hsla(0, 0%, 48%, 0.3)",
  },
  cardDescription: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    lineHeight: "24px",
    color: "hsla(0, 0%, 0%, 0.6)",
    margin: theme.spacing(1.5, 0),
    padding: theme.spacing(0, 2),
    fontWeight: 500,
  },
  cardDescriptionDisabled: {
    color: "hsla(0, 0%, 0%, 0.3)",
  },
  inputWrapper: {
    padding: theme.spacing(2),
    borderTop: "1px solid hsla(0, 0%, 48%, 0.3)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  inputNoRewardWrapper: {
    padding: theme.spacing(3),
    borderTop: "1px solid hsla(0, 0%, 48%, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputTextLabel: {
    fontSize: "16px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsla(0, 0%, 0%, 0.5)",
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
  inputBoxWrapper: {
    display: "flex",
    alignItems: "center",
  },
  inputBoxInnerWrapper: {
    position: "relative",
  },
  inputBox: {
    border: "1px solid hsla(0, 0%, 48%, 0.3)",
    backgroundColor: "transparent",
    borderRadius: "25px",
    transition: "0.5s all ease",
    fontFamily: "Commissioner, sans-serif",
    width: "90px",
    fontSize: "16px",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
    padding: theme.spacing(1.5, 3),
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      cursor: "pointer",
      border: "1px solid hsl(176, 50%, 47%)",
    },
  },
  dollarIcon: {
    fontSize: "16px",
    color: "hsla(0, 0%, 48%, 0.6)",
    position: "absolute",
    top: "50%",
    left: 15,
    transform: "translate(-50%, -50%)",
  },
  continueButton: {
    border: "none",
    backgroundColor: "hsl(176, 50%, 47%)",
    borderRadius: "25px",
    transition: "0.5s all ease",
    fontSize: "13px",
    fontFamily: "Commissioner, sans-serif",
    color: "#FFFFFF",
    padding: theme.spacing(1.5, 4),
    marginLeft: theme.spacing(2),
    fontWeight: 500,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(176, 72%, 28%)",
    },
  },
});

export const modalSuccessContentStyles = (theme: any) => ({
  modalWrapper: {
    textAlign: "center",
    padding: theme.spacing(3, 4),
  },
  checkIcon: {
    width: "75px",
    height: "75px",
    color: "hsl(176, 50%, 47%)",
    marginBottom: theme.spacing(2.5),
  },
  heading: {
    fontSize: "24px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsl(0, 0%, 0%)",
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Commissioner, sans-serif",
    color: "hsla(0, 0%, 48%, 0.8)",
    fontWeight: 500,
    marginBottom: theme.spacing(3),
  },
  gotItButton: {
    border: "none",
    backgroundColor: "hsl(176, 50%, 47%)",
    borderRadius: "25px",
    transition: "0.5s all ease",
    fontSize: "13px",
    fontFamily: "Commissioner, sans-serif",
    color: "#FFFFFF",
    padding: theme.spacing(1.5, 3),
    fontWeight: 500,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(176, 72%, 28%)",
    },
  },
});
