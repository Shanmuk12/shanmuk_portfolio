import { Theme } from "@emotion/react";

const darkTheme: Theme = {
  theme: "dark",
  backgrounds: {
    mainImgBg: "/assets/backgrounds/mainImgBg.png",
    experienceBg: "/assets/backgrounds/experienceBg.png",
    contactImgBg: "/assets/backgrounds/contactDarkImgBg.png",
  },
  colors: {
    /**All colors */
    black: "#000000",
    white: "#F2F2F2",
    dark: "#141216",
    darkLight: "#141518",
    darkGradient: "linear-gradient(101.41deg, #19191E 0%, #3A4550 100%)",
    logoGradient: "linear-gradient(90deg, #8A7DE3 0%, #C266B8 100%)",
    purple: "#8A7DE3",
    blue: "#858FBE",
    paleBlue: "#CFCEF2",
    yellow: "#F2D16D",
    brown: "#716462",
    beige: "#DBD5D2",
    /**Generic names */
    txt: "#F2F2F2",
    bg: "#141216",
    techBg: "#141518",
    iconFill: "#F2F2F2",
  },
  bkPoints: {
    desktop: "1199px",
    tablet: "750px",
    mobile: "320px",
  },
  borders: {
    borderRadius: "1.5rem",
  },
  effects: {
    filter: "drop-shadow(3px 5px 10px rgba(0, 0, 0, 0.8))",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px rgba(51,51,51,0.76) inset",
  },
};

export default darkTheme;