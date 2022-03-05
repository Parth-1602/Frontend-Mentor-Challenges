import * as React from "react";
import { Box } from "@mui/material";
import useClasses from "../../src/useClasses";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { imageGalleryStyles } from "./styles";

const ImageGallery = () => {
  const classes = useClasses(imageGalleryStyles);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.galleryWrapper}>
      <Box className={classes.topImagesWrapper}>
        <Box>
          {isSmall ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sunnyside-agency-landing-page/mobile/image-gallery-milkbottles.jpg"
                alt="section-image"
                className={classes.galleryImage}
              />
            </>
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sunnyside-agency-landing-page/desktop/image-gallery-milkbottles.jpg"
                alt="section-image"
                className={classes.galleryImage}
              />
            </>
          )}
        </Box>
        <Box>
          {isSmall ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sunnyside-agency-landing-page/mobile/image-gallery-orange.jpg"
                alt="section-image"
                className={classes.galleryImage}
              />
            </>
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sunnyside-agency-landing-page/desktop/image-gallery-orange.jpg"
                alt="section-image"
                className={classes.galleryImage}
              />
            </>
          )}
        </Box>
      </Box>
      <Box className={classes.topImagesWrapper}>
        <Box>
          {isSmall ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sunnyside-agency-landing-page/mobile/image-gallery-cone.jpg"
                alt="section-image"
                className={classes.galleryImage}
              />
            </>
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sunnyside-agency-landing-page/desktop/image-gallery-cone.jpg"
                alt="section-image"
                className={classes.galleryImage}
              />
            </>
          )}
        </Box>
        <Box>
          {isSmall ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sunnyside-agency-landing-page/mobile/image-gallery-sugar-cubes.jpg"
                alt="section-image"
                className={classes.galleryImage}
              />
            </>
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sunnyside-agency-landing-page/desktop/image-gallery-sugarcubes.jpg"
                alt="section-image"
                className={classes.galleryImage}
              />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageGallery;
