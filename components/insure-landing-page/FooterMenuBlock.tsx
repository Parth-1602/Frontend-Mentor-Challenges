import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { footerStyles } from "./styles";

const FooterMenuBlock = ({ footerMenuHeading, footerMenuList }) => {
  const classes = useClasses(footerStyles);

  return (
    <Box className={classes.footerMenuBlock}>
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.footerMenuHeading}
      >
        {footerMenuHeading}
      </Typography>
      {footerMenuList.map((item: string) => {
        return (
          <Typography
            variant="subtitle1"
            component="p"
            key={item}
            className={classes.footerMenuItem}
          >
            {item}
          </Typography>
        );
      })}
    </Box>
  );
};

export default FooterMenuBlock;
