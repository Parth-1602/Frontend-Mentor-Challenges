import * as React from "react";
import { Box, Typography } from "@mui/material";
import useClasses from "../../src/useClasses";
import { pledgeCardStyles } from "./styles";
import ActionCard from "./ActionCard";

const PledgeCard = ({ openPledgeModal }) => {
  const classes = useClasses(pledgeCardStyles);
  const [isPledgeModal, setIsPledgeModal] = React.useState(false);
  const [isSuccessModal, setIsSuccesModal] = React.useState(false);

  return (
    <Box className={classes.pledgeWrapper}>
      <Typography variant="subtitle1" component="p" className={classes.about}>
        About this project
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.description}
      >
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platfor
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </Typography>

      <Typography
        variant="subtitle1"
        component="p"
        className={classes.description}
      >
        Featuring artisan craftmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </Typography>
      <ActionCard
        heading="Bamboo Stand"
        price="25"
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
        stock="101"
        openModal={openPledgeModal}
      />
      <ActionCard
        heading="Black Edition Stand"
        price="75"
        description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
        member list. Shipping is included."
        stock="64"
        openModal={openPledgeModal}
      />
      <ActionCard
        heading="Mahogany Special Edition"
        price="200"
        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included."
        stock="0"
        isDisabled
        openModal={openPledgeModal}
      />
    </Box>
  );
};

export default PledgeCard;
