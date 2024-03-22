import { FC, useEffect, useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import { ptBR, enUS } from "date-fns/locale";
import { CacheProvider } from "@emotion/react";
import { EmotionCache } from "@emotion/cache";
import ThemeProvider from "../styles/ThemeProvider";
import { useRouter, NextRouter } from "next/router";
import LoadingContent from "../components/LoadingContent";
import { LocalizationProvider } from "@mui/x-date-pickers";
import createEmotionCache from "../utils/createEmotionCache";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CustomThemeProvider } from "../contexts/CustomThemeContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache
};

const App: FC<MyAppProps> = ({
  Component, pageProps, emotionCache = clientSideEmotionCache
}): JSX.Element => {
  const router: NextRouter = useRouter();
  const [openLoadingContent, setOpenLoadingContent] = useState<boolean>(false);

  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG });
  }, []);

  useEffect(() => {
    const handleStart = () => {
      setOpenLoadingContent(true);
    };
    const handleStop = () => {
      setOpenLoadingContent(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <CacheProvider value={emotionCache}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={router.locale === "pt" ? ptBR : enUS}>
        <Head>
          <title>Shanmuka rao Vangapandu</title>
          <meta charSet="utf-8" lang={router.locale} />
          <meta name="color-scheme" content="dark light" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CustomThemeProvider>
          <ThemeProvider>
            <Component {...pageProps} />
            <LoadingContent open={openLoadingContent} />
          </ThemeProvider>
        </CustomThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;