import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import useStyles from "./styles";

const FeatureCard = (props) => {
  const classes = useClasses(useStyles);
  const { borderColor, title, description, icon, marginBottom } = props;

  return (
    <Box
      style={{
        borderTop: `4px solid ${borderColor}`,
        marginBottom: `${marginBottom}px`,
      }}
      className={classes.card}
    >
      <Typography className={classes.cardTitle} variant="h3" component="h3">
        {title}
      </Typography>
      <Typography
        className={classes.cardDescription}
        variant="subtitle1"
        component="p"
      >
        {description}
      </Typography>
      <Box className={classes.cardIcon}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="card-image" className={classes.cardImage} />
      </Box>
    </Box>
  );
};

export default FeatureCard;
