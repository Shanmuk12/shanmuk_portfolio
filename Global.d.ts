import "@emotion/react";
import { ThemeOpts } from "./src/interfaces";

declare module "@emotion/react" {
  export interface Theme {
    theme: ThemeOpts,
    backgrounds: {
      mainImgBg: string,
      experienceBg: string,
      contactImgBg: string,
    },
    colors: {
      /**All colors */
      black: string,
      white: string,
      dark: string,
      darkLight: string,
      darkGradient: string,
      logoGradient: string,
      purple: string,
      blue: string,
      paleBlue: string,
      yellow: string,
      brown: string,
      beige: string,
      /**Generic names */
      txt: string,
      bg: string,
      techBg: string,
      iconFill: string,
      [key: string]: string,
    },
    bkPoints: {
      desktop: string,
      tablet: string,
      mobile: string,
      [key: string]: string,
    },
    borders: {
      borderRadius: string,
      [key: string]: string,
    },
    effects: {
      filter: string,
      boxShadow: string,
      [key: string]: string,
    },
  };
};