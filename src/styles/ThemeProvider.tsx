import { FC, Fragment, ReactNode } from "react";
import Head from "next/head";
import muiTheme from "./muiTheme";
import GlobalStyles from "./global";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import { Theme } from "@emotion/react";
import { SnackbarProvider } from "notistack";
import { CustomThemeContextProps } from "../interfaces";
import useCustomThemeContext from "../hooks/useCustomThemeContext";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

const ThemeProvider: FC<{
  children: ReactNode,
  [key: string]: any
}> = ({ children }): JSX.Element => {
  let { currentTheme }: CustomThemeContextProps = useCustomThemeContext();
  const emotionTheme: Theme = currentTheme === "light" ? lightTheme : darkTheme;

  return (
    <Fragment>
      <Head>
        {/* <!-- Chrome, Firefox OS and Opera --> */}
        <meta name="theme-color" content={currentTheme ? emotionTheme.colors.bg : darkTheme.colors.bg} />
        {/* <!-- Windows Phone --> */}
        <meta name="msapplication-navbutton-color" content={currentTheme ? emotionTheme.colors.bg : darkTheme.colors.bg} />
        {/* <!-- iOS Safari --> */}
        <meta name="apple-mobile-web-app-status-bar-style" content={currentTheme ? emotionTheme.colors.bg : darkTheme.colors.bg} />
      </Head>
      <MuiThemeProvider theme={muiTheme}>
        <EmotionThemeProvider theme={emotionTheme}>
          <SnackbarProvider maxSnack={5} style={{ fontSize: "1.6rem" }}>
            {children}
            <GlobalStyles />
          </SnackbarProvider>
        </EmotionThemeProvider>
      </MuiThemeProvider>
    </Fragment>
  );
};

export default ThemeProvider;