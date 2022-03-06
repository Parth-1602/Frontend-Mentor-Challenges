import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { footerStyles } from "./styles";

const FooterList = ({ title, listItems }) => {
  const classes = useClasses(footerStyles);

  return (
    <Box>
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.footerHeading}
      >
        {title}
      </Typography>
      <ul className={classes.footerList}>
        {listItems.map((item, i) => {
          return (
            <li className={classes.footerListItem} key={i}>
              {item}
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default FooterList;
