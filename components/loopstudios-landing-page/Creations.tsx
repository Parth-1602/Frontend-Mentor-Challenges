import * as React from "react";
import { Box, Grid, Hidden, Typography, useMediaQuery } from "@mui/material";
import useClasses from "../../src/useClasses";
import { creationsSectionStyles } from "./styles";
import { useTheme } from "@mui/material/styles";
import creations from "../../src/loopstudios-landing-page/creations.json";

const Creations = () => {
  const classes = useClasses(creationsSectionStyles);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.sectionWrapper}>
      <Box className={classes.mainHeadingWrapper}>
        <Typography variant="h3" component="h3" className={classes.mainHeading}>
          OUR CREATIONS
        </Typography>
        <Hidden mdDown>
          <button className={classes.seeAllButton}>SEE ALL</button>
        </Hidden>
      </Box>
      <Grid container spacing={isSmall ? 5 : 3}>
        {creations.map((ele, i) => {
          return (
            <Grid key={i} item xs={12} md={3}>
              <Box className={classes.card}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={isSmall ? ele.mobileImageSrc : ele.imageSrc}
                  alt="creation-image"
                  className={classes.cardImage}
                />
                <Box className={classes.overlay}>
                  <Box className={classes.titleWrapper}>
                    <Typography
                      variant="h4"
                      component="h4"
                      className={classes.title}
                    >
                      {ele.titleTop}
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h4"
                      className={classes.title}
                    >
                      {ele.titleBottom}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Hidden mdUp>
        <Box className={classes.mobileButtonWrapper}>
          <button className={classes.seeAllMobileButton}>SEE ALL</button>
        </Box>
      </Hidden>
    </Box>
  );
};

export default Creations;
