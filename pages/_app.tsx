import "../styles/globals.css";
import Head from "next/head";
import * as React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <StyledEngineProvider injectFirst>
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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
