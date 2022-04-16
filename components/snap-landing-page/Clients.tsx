import { Box } from "@mui/material";
import useClasses from "../../src/useClasses";
import { clientsStyles } from "./styles";

const Clients = () => {
  const classes = useClasses(clientsStyles);

  return (
    <Box className={classes.clientsBox}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/snap-landing-page/client-databiz.svg"
        alt="client"
        className={classes.mobileClientImage}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/snap-landing-page/client-audiophile.svg"
        alt="client"
        className={classes.mobileClientImage}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/snap-landing-page/client-meet.svg"
        alt="client"
        className={classes.mobileClientImage}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/snap-landing-page/client-maker.svg"
        alt="client"
        className={classes.mobileClientImage}
      />
    </Box>
  );
};

export default Clients;
