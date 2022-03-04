const useStyles = (theme: any) => ({
  inputLabel: {
    fontSize: "16px",
    fontWeight: 700,
    color: "hsl(186, 14%, 43%)",
    fontFamily: "Space Mono, monospace",
  },
  inputBoxWrapper: {
    position: "relative",
  },
  labelWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  errorText: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#FF7F3F",
    fontFamily: "Space Mono, monospace",
  },
  inputBox: {
    backgroundColor: "hsl(189, 41%, 97%)",
    border: "none",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5, 2),
    textAlign: "right",
    fontSize: "24px",
    width: "100%",
    fontWeight: 700,
    color: "hsl(183, 100%, 15%)",
    fontFamily: "Space Mono, monospace",
    transition: "0.2s all ease",
    "&::placeholder": {
      textAlign: "right",
      fontSize: "24px",
      fontWeight: 700,
      color: "hsl(184, 14%, 56%)",
      fontFamily: "Space Mono, monospace",
    },
    "&:focus": {
      outline: "none",
      border: "2px solid hsl(172, 67%, 45%)",
    },
    "&:hover": {
      border: "2px solid hsl(172, 67%, 45%)",
      cursor: "pointer",
    },
  },
  errorInputBox: {
    border: "2px solid #FF7F3F",
    "&:focus": {
      border: "2px solid #FF7F3F",
    },
    transition: "0.2s all ease",
    "&:hover": {
      border: "2px solid #FF7F3F",
      cursor: "pointer",
    },
  },
  inputBoxIcon: {
    width: "12px",
    height: "14px",
    position: "absolute",
    top: "50%",
    left: "5%",
    transform: "translate(0, -50%)",
  },
  tipButtonsWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: theme.spacing(1.5, 0),
  },
  label: {
    fontSize: "16px",
    fontWeight: 700,
    color: "hsl(186, 14%, 43%)",
    fontFamily: "Space Mono, monospace",
  },
  tipButton: {
    backgroundColor: "hsl(183, 100%, 15%)",
    border: "none",
    padding: theme.spacing(1),
    marginRight: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
    width: "100%",
    fontSize: "18px",
    fontWeight: 700,
    color: "hsl(0, 0%, 100%)",
    fontFamily: "Space Mono, monospace",
    transition: "0.5s all ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(185, 41%, 84%)",
      color: "hsl(183, 100%, 15%)",
    },
  },
  tipButtonActive: {
    backgroundColor: " hsl(172, 67%, 45%)",
    color: "hsl(183, 100%, 15%)",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsl(185, 41%, 84%)",
      color: "hsl(183, 100%, 15%)",
    },
  },
  customInput: {
    backgroundColor: "hsl(189, 41%, 97%)",
    border: "none",
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(1),
    fontSize: "18px",
    width: "100%",
    textAlign: "right",
    fontWeight: 700,
    color: "hsl(183, 100%, 15%)",
    fontFamily: "Space Mono, monospace",
    transition: "0.2s all ease",
    "&::placeholder": {
      fontSize: "18px",
      textAlign: "center",
      fontWeight: 700,
      color: "hsl(186, 14%, 43%)",
      fontFamily: "Space Mono, monospace",
    },
    "&:focus": {
      outline: "none",
      border: "1px solid hsl(172, 67%, 45%)",
    },
    "&:hover": {
      border: "1px solid hsl(172, 67%, 45%)",
      cursor: "pointer",
    },
  },
  errorCustomInput: {
    "&:focus": {
      border: "1px solid #FF7F3F",
    },
    transition: "0.2s all ease",
    "&:hover": {
      border: "1px solid #FF7F3F",
      cursor: "pointer",
    },
  },
  calculatedAmountWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },
  calculateMainLabel: {
    fontSize: "14px",
    fontWeight: 700,
    color: "hsl(0, 0%, 100%)",
    fontFamily: "Space Mono, monospace",
    lineHeight: "24px",
  },
  calculateSubLabel: {
    fontSize: "11px",
    fontWeight: 700,
    color: "hsl(186, 14%, 43%)",
    fontFamily: "Space Mono, monospace",
    lineHeight: "13px",
  },
  calculatedAmount: {
    fontSize: "36px",
    fontWeight: 700,
    color: "hsl(172, 67%, 45%)",
    fontFamily: "Space Mono, monospace",
  },
});

export default useStyles;
