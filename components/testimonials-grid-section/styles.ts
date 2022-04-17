export const cardStyles = (theme: any) => ({
  card: {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(4),
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "80% 0",
  },
  authorWrapper: {
    display: "flex",
    alignItem: "center",
    marginBottom: theme.spacing(3),
  },
  authorProfileImage: {
    marginRight: theme.spacing(2.5),
  },
  authorName: {
    fontFamily: "Barlow Semi Condensed, sans-serif",
    fontSize: "18px",
    lineHeight: "18px",
    fontWeight: 500,
  },
  designation: {
    fontFamily: "Barlow Semi Condensed, sans-serif",
    fontSize: "16px",
    lineHeight: "16px",
    fontWeight: 500,
  },
  cardTitle: {
    fontFamily: "Barlow Semi Condensed, sans-serif",
    fontSize: "22px",
    lineHeight: "22px",
    fontWeight: 600,
    marginBottom: theme.spacing(3),
  },
  cardReview: {
    fontFamily: "Barlow Semi Condensed, sans-serif",
    fontSize: "13px",
    lineHeight: "18px",
    fontWeight: 500,
  },
});
