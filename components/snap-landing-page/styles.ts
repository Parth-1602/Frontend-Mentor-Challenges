const useStyles = (theme: any) => ({
  dropButtonWrapper: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(3),
    position: "relative",
    transition: "0.3s all ease",
    "&:hover": {
      cursor: "pointer",
      "& > p": {
        color: "hsl(0, 0%, 8%)",
        fontWeight: 700,
      },
    },
  },
  dropButtonText: {
    fontFamily: "Epilogue, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    marginRight: theme.spacing(0.5),
    color: "hsl(0, 0%, 41%)",
  },
  dropButtonActiveText: {
    fontFamily: "Epilogue, sans-serif",
    fontSize: "16px",
    marginRight: theme.spacing(0.5),
    color: "hsl(0, 0%, 8%)",
    fontWeight: 700,
  },
  dropBox: {
    position: "absolute",
    top: 35,
    left: 0,
    borderRadius: theme.spacing(1),
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(2),
    boxShadow: "3px 3px 10px hsl(0, 0%, 80%)",
    width: "150px",
  },
  dropDownMenuItemWrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0),
  },
  menuIcon: {
    marginRight: theme.spacing(1.5),
  },
  dropDownMenuItemText: {
    fontFamily: "Epilogue, sans-serif",
    fontSize: "16px",
    color: "hsl(0, 0%, 41%)",
    fontWeight: 500,
    transition: "0.3s all ease",
    "&:hover": {
      color: "hsl(0, 0%, 8%)",
      fontWeight: 700,
    },
  },
  backdrop: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "hsl(0, 0%, 8%,0.2)",
    zIndex: 999,
    left: 0,
    top: 0,
  },
  modal: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    zIndex: 9999,
    borderRadius: 2,
    [theme.breakpoints.down("md")]: {
      width: "65% !important",
      height: "100%",
    },
  },
});

export const appBarStyles = (theme: any) => ({
  appBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3, 2),
    },
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginRight: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
    },
  },
  menuItem: {
    fontFamily: "Epilogue, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    color: "hsl(0, 0%, 41%)",
    marginRight: theme.spacing(3),
    transition: "0.3s all ease",
    "&:hover": {
      cursor: "pointer",
      color: "hsl(0, 0%, 8%)",
      fontWeight: 700,
    },
  },
  actionButtonsWrapper: {
    display: "flex",
    alignItems: "center",
  },
  loginButton: {
    fontFamily: "Epilogue, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    color: "hsl(0, 0%, 41%)",
    marginRight: theme.spacing(4),
    border: "none",
    backgroundColor: "transparent",
    transition: "0.3s all ease",
    "&:hover": {
      cursor: "pointer",
      color: "hsl(0, 0%, 8%)",
      fontWeight: 700,
    },
  },
  registerButton: {
    fontFamily: "Epilogue, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    color: "hsl(0, 0%, 41%)",
    marginRight: theme.spacing(5),
    border: "2px solid hsl(0, 0%, 41%)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1.5, 2),
    backgroundColor: "transparent",
    transition: "0.3s all ease",
    "&:hover": {
      cursor: "pointer",
      color: "hsl(0, 0%, 8%)",
      border: "2px solid hsl(0, 0%, 8%)",
      fontWeight: 700,
    },
  },
});

export const clientsStyles = (theme: any) => ({
  clientsBox: {
    display: "flex",
    alignItems: "center",
    width: "75%",
    justifyContent: "space-between",
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(6),
      width: "100%",
    },
  },
  mobileClientImage: {
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      width: "20%",
    },
  },
});

export const mobileMenuStyles = (theme: any) => ({
  menuContentWrapper: {
    padding: theme.spacing(3, 2),
  },
  closeIconWrapper: {
    textAlign: "right",
    marginBottom: theme.spacing(3),
  },
  menuItemWrapper: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1.5, 0),
  },
  menuItemText: {
    fontFamily: "Epilogue, sans-serif",
    fontSize: "16px",
    color: "hsl(0, 0%, 41%)",
    marginRight: theme.spacing(1.5),
    fontWeight: 500,
  },
  menuItemTextWithout: {
    fontFamily: "Epilogue, sans-serif",
    fontSize: "16px",
    margin: theme.spacing(1.5, 0),
    color: "hsl(0, 0%, 41%)",
    fontWeight: 500,
  },
  dropDownWrapper: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  dropDownItem: {
    fontFamily: "Epilogue, sans-serif",
    fontSize: "16px",
    marginLeft: theme.spacing(1.5),
    color: "hsl(0, 0%, 41%)",
    fontWeight: 500,
  },
  dropDownItemWithoutIcon: {
    fontFamily: "Epilogue, sans-serif",
    fontSize: "16px",
    marginLeft: theme.spacing(2),
    color: "hsl(0, 0%, 41%)",
    fontWeight: 500,
  },
});

export default useStyles;
