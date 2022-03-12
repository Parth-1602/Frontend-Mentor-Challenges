import * as React from "react";
import { Box, Typography, Radio } from "@mui/material";
import useClasses from "../../src/useClasses";
import { BiDollar } from "react-icons/bi";
import { modalActionCardsStyles } from "./styles";

const ModalActionCards = ({ handlePledgeModal, handleSuccessModal }) => {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [pledgeAmount, setPledgeAmount] = React.useState("");
  const handleSubmit = (price) => {
    if (parseFloat(pledgeAmount) >= parseFloat(price)) {
      handlePledgeModal(false);
      handleSuccessModal(true);
    }
  };

  return (
    <>
      <ActionCardNoReward
        heading="Pledge with no reward"
        description="Choose to support without a reward if you simply believe in our
        project. As a backer, you will be signed up to receive product
        updates via email."
        selectedCard={selectedCard}
        setCard={(x) => {
          setPledgeAmount("");
          setSelectedCard(x);
        }}
        handleNoRewardSubmit={() => {
          handlePledgeModal(false);
          handleSuccessModal(true);
        }}
        value={1}
      />
      <ActionCard
        heading="Bamboo Stand"
        price="25"
        stock="101"
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
        selectedCard={selectedCard}
        setCard={(x) => {
          setSelectedCard(x);
          setPledgeAmount("");
        }}
        pledgeAmount={pledgeAmount}
        setAmount={setPledgeAmount}
        value={2}
        handlePledgeSubmit={handleSubmit}
      />
      <ActionCard
        heading="Black Edition Stand"
        price="75"
        stock="64"
        description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer memeber list. Shipping is included."
        selectedCard={selectedCard}
        setCard={(x) => {
          setSelectedCard(x);
          setPledgeAmount("");
        }}
        pledgeAmount={pledgeAmount}
        setAmount={setPledgeAmount}
        handlePledgeSubmit={handleSubmit}
        value={3}
      />
      <ActionCard
        heading="Mahogany Special Edition"
        price="200"
        stock="0"
        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
        selectedCard={selectedCard}
        setCard={(x) => {
          setSelectedCard(x);
          setPledgeAmount("");
        }}
        pledgeAmount={pledgeAmount}
        setAmount={setPledgeAmount}
        handlePledgeSubmit={handleSubmit}
        value={4}
        isDisabled
      />
    </>
  );
};

export default ModalActionCards;

const ActionCard = ({
  heading,
  price,
  stock,
  description,
  value,
  setCard,
  selectedCard,
  pledgeAmount,
  setAmount,
  handlePledgeSubmit,
  isDisabled = false,
}) => {
  const classes = useClasses(modalActionCardsStyles);

  return (
    <Box
      className={`${
        selectedCard === value
          ? classes.actionCardActiveWrapper
          : classes.actionCardWrapper
      } ${isDisabled && classes.actionCardDisabledWrapper}`}
    >
      <Box className={classes.actionCardInnerWrapper}>
        <Radio
          onChange={() => setCard(value)}
          checked={selectedCard === value}
          className={classes.radioButton}
          disabled={isDisabled}
        />
        <Box className={classes.spacingLeft}>
          <Box className={classes.cardHeaderWrapper}>
            <Box className={classes.cardHeaderInnerWrapper}>
              <Typography
                variant="h6"
                component="h6"
                className={`${classes.cardHeading} ${
                  isDisabled && classes.cardHeadingDisabled
                }`}
              >
                {heading}
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className={`${classes.cardSubHeading} ${
                  isDisabled && classes.cardSubHeadingDisabled
                }`}
              >
                Pledge ${price} or more
              </Typography>
            </Box>
            <Box className={classes.cardHeaderInnerWrapper}>
              <Typography
                variant="h6"
                component="h6"
                className={`${classes.stock} ${
                  isDisabled && classes.stockDisabled
                }`}
              >
                {stock}
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className={`${classes.stockLeftText} ${
                  isDisabled && classes.stockLeftTextDisabled
                }`}
              >
                left
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle1"
            component="p"
            className={`${classes.cardDescription} ${
              isDisabled && classes.cardDescriptionDisabled
            }`}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      {selectedCard === value ? (
        <Box className={classes.inputWrapper}>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.inputTextLabel}
          >
            Enter your pledge
          </Typography>
          <Box className={classes.inputBoxWrapper}>
            <Box className={classes.inputBoxInnerWrapper}>
              <input
                value={pledgeAmount}
                className={classes.inputBox}
                onChange={(e) => {
                  if (
                    e.target.value.match(/^[1-9]\d*$/) ||
                    e.target.value === ""
                  ) {
                    setAmount(e.target.value);
                  }
                }}
              />
              <BiDollar className={classes.dollarIcon} />
            </Box>
            <button
              onClick={() => handlePledgeSubmit(price)}
              className={classes.continueButton}
            >
              Continue
            </button>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

const ActionCardNoReward = ({
  heading,
  description,
  setCard,
  value,
  selectedCard,
  handleNoRewardSubmit,
}) => {
  const classes = useClasses(modalActionCardsStyles);

  return (
    <Box
      className={`${
        selectedCard === value
          ? classes.actionCardActiveWrapper
          : classes.actionCardWrapper
      }`}
    >
      <Box className={classes.actionCardInnerWrapper}>
        <Radio
          onChange={() => setCard(value)}
          checked={selectedCard === value}
          className={classes.radioButton}
        />
        <Box className={classes.spacingLeft}>
          <Box className={classes.cardHeaderWrapper}>
            <Box className={classes.cardHeaderInnerWrapper}>
              <Typography
                variant="h6"
                component="h6"
                className={classes.cardHeading}
              >
                {heading}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.cardDescription}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      {selectedCard === value ? (
        <Box className={classes.inputNoRewardWrapper}>
          <Box className={classes.inputBoxWrapper}>
            <button
              onClick={handleNoRewardSubmit}
              className={classes.continueButton}
            >
              Continue
            </button>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
