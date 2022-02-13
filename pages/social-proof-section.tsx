import * as React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import useClasses from "../src/useClasses";
import useStyles from "../styles/social-proof-section";
import RatingBox from "../components/social-proof-section/RatingBox";
import CommentBox from "../components/social-proof-section/CommentBox";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SocialProof = () => {
  const classes = useClasses(useStyles);
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.main}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.topSection}>
          <Box className={classes.leftSide}>
            <Typography
              className={classes.mainHeading}
              variant="h1"
              component="h1"
            >
              10000+ of our users love our products.
            </Typography>
            <Typography
              className={classes.description}
              variant="subtitle1"
              component="p"
            >
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </Typography>
          </Box>
          <Box className={classes.rightSide}>
            <RatingBox
              description="Rated 5 Stars in Reviews"
              rating={5}
              marginLeft={0}
            />
            <RatingBox
              description="Rated 5 Stars in Report Guru"
              rating={5}
              marginLeft={smallDevice ? 0 : "35px"}
            />
            <RatingBox
              description="Rated 5 Stars in BestTech"
              rating={5}
              marginLeft={smallDevice ? 0 : "70px"}
            />
          </Box>
        </Box>
        <Box className={classes.commentSection}>
          <CommentBox
            avatarSrc={"/images/social-proof-section/image-colton.jpg"}
            name={"Colton Smith"}
            verifyType={"Verified Buyer"}
            comment={
              "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also recieved it in time. Excellent!"
            }
            marginTop={0}
          />
          <CommentBox
            avatarSrc={"/images/social-proof-section/image-irene.jpg"}
            name={"Irene Roberts"}
            verifyType={"Verified Buyer"}
            comment={
              "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
            }
            marginTop={smallDevice ? 0 : "30px"}
          />
          <CommentBox
            avatarSrc={"/images/social-proof-section/image-anne.jpg"}
            name={"Anne Wallace"}
            verifyType={"Verified Buyer"}
            comment={
              "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
            }
            marginTop={smallDevice ? 0 : "60px"}
          />
        </Box>
      </Box>
    </div>
  );
};

export default SocialProof;
