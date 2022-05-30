import "../styles/globals.css";
import Head from "next/head";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../src/Theme";
import createEmotionCache from "../src/createEmotionCache";
import { CssBaseline } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

function getActiveTheme(themeMode: "light" | "dark") {
  return themeMode === "light" ? lightTheme : darkTheme;
}

function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [activeTheme, setActiveTheme] = React.useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = React.useState<"light" | "dark">(
    "light"
  );

  const toggleSMDTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";

    setSelectedTheme(desiredTheme);
  };

  React.useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Frontend Mentor Challenges</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Frontend Mentor Challenges submitted by Parth Sharma"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        <Component
          {...pageProps}
          toggleSocialMediaDashboardTheme={toggleSMDTheme}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
