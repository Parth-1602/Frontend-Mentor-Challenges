import * as React from "react";
import useClasses from "../src/useClasses";
import {
  Box,
  Typography,
  Switch,
  Slider,
  SliderThumb,
  Hidden,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import useStyles from "../styles/interactive-pricing-component";
import prices from "../src/interactive-pricing-component/prices.json";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  padding: 4,
  margin: theme.spacing(0, 1),
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      "& + .MuiSwitch-track": {
        backgroundColor: "hsl(174, 86%, 45%)",
      },
    },
    "&:hover": {
      "& + .MuiSwitch-track": {
        backgroundColor: "hsl(174, 86%, 45%)",
      },
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 44 / 2,
    backgroundColor: "hsl(223, 50%, 87%)",
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    color: "#FFFFFF",
    width: 20,
    height: 20,
    margin: 0.5,
  },
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(0, 0.5),
  },
}));

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "hsl(174, 77%, 80%)",
  height: 6,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 40,
    width: 40,
    backgroundColor: "hsl(174, 86%, 45%)",
    "&:focus, &:hover": {
      backgroundColor: "hsl(174, 77%, 65%)",
      boxShadow: "0px 0px 25px 6px hsl(174, 77%, 80%)",
    },
    "&:active": {
      backgroundColor: "hsl(174, 86%, 45%)",
      boxShadow: "0px 0px 25px 6px hsl(174, 77%, 80%)",
    },
    "& .arrow-images": {
      height: "40%",
      width: "60%",
      backgroundColor: "transparent",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 1,
    backgroundColor: "hsl(224, 65%, 95%)",
  },
}));

function CustomThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="slider-icon"
        src="/images/interactive-pricing-component/icon-slider.svg"
        className="arrow-images"
      />
    </SliderThumb>
  );
}

const InteractivePricing = () => {
  const classes = useClasses(useStyles);
  const [isYearly, setIsYearly] = React.useState(false);
  const [planSelected, setPlanSelected] = React.useState(2);
  const [selectedPrice, setSelectedPrice] = React.useState(null);
  const [selectedPageViews, setSelectedPageViews] = React.useState(null);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    let { price, pageviews, yearly } = prices[planSelected];
    setSelectedPrice(price);
    setSelectedPageViews(pageviews);
  }, [planSelected]);

  React.useEffect(() => {
    let { price, pageviews, yearly } = prices[planSelected];
    if (isYearly) {
      setSelectedPrice(yearly);
    } else {
      setSelectedPrice(price);
    }
  }, [isYearly, planSelected]);

  return (
    <div role="main">
      <Head>
        <title>Interactive Pricing</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.headingWrapper}>
          <Typography
            variant="h1"
            component="h1"
            className={classes.mainHeading}
          >
            Simple, traffic-based pricing
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            className={classes.description}
          >
            Sign-up for our 30-day trial. No credit card required
          </Typography>
        </Box>
        <Box className={classes.pricingCard}>
          <Box className={classes.pricingCardInnerWrapper}>
            <Box className={classes.infoWrapper}>
              <Typography
                variant="h3"
                component="h3"
                className={classes.pageViewsText}
              >
                {selectedPageViews} PAGEVIEWS
              </Typography>
              <Hidden mdUp>
                <Box className={classes.sliderMobileWrapper}>
                  <CustomSlider
                    min={0}
                    max={4}
                    step={1}
                    value={planSelected}
                    onChange={(e: any) => {
                      setPlanSelected(e.target.value);
                    }}
                    components={{ Thumb: CustomThumbComponent }}
                  />
                </Box>
              </Hidden>
              <Box className={classes.priceWrapper}>
                <Typography
                  variant="h2"
                  component="h2"
                  className={classes.price}
                >
                  ${selectedPrice}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={classes.perMonthText}
                >
                  /month
                </Typography>
              </Box>
            </Box>
            <Hidden mdDown>
              <Box className={classes.sliderWrapper}>
                <CustomSlider
                  min={0}
                  max={4}
                  step={1}
                  value={planSelected}
                  onChange={(e: any) => {
                    setPlanSelected(e.target.value);
                  }}
                  components={{ Thumb: CustomThumbComponent }}
                />
              </Box>
            </Hidden>
            <Box className={classes.toggleWrapper}>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.switchLabel}
              >
                Monthly Billing
              </Typography>
              <CustomSwitch
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.switchLabel}
              >
                Yearly Billing
              </Typography>
              <Box className={classes.discountWrapper}>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={classes.discountText}
                >
                  {isSmall ? "-25%" : "25% discount"}
                </Typography>
              </Box>
            </Box>
          </Box>
          <hr className={classes.divider} />
          <Box className={classes.actionCardWrapper}>
            <Box>
              <Box className={classes.featureWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/interactive-pricing-component/icon-check.svg"
                  alt="tick-icon"
                />
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={classes.featureText}
                >
                  Unlimited websites
                </Typography>
              </Box>
              <Box className={classes.featureWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/interactive-pricing-component/icon-check.svg"
                  alt="tick-icon"
                />
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={classes.featureText}
                >
                  100% data ownership
                </Typography>
              </Box>
              <Box className={classes.featureWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/interactive-pricing-component/icon-check.svg"
                  alt="tick-icon"
                />
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={classes.featureText}
                >
                  Email reports
                </Typography>
              </Box>
            </Box>
            <button className={classes.startButton}>Start my trial</button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default InteractivePricing;
