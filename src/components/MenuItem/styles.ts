import { Theme } from "@emotion/react";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles<{ emotionTheme: Theme }>()((theme, { emotionTheme }) => {
  return {
    root: {
      fontSize: "1.5rem",
      fontWeight: 500,
      "&:hover": {
        color: emotionTheme.colors.purple,
        backgroundColor: emotionTheme.theme === "dark" ? emotionTheme.colors.techBg : emotionTheme.colors.bg,
        borderRadius: emotionTheme.borders.borderRadius,
      },
    },
    selected: {
      backgroundColor: emotionTheme.colors.techBg,
      borderRadius: emotionTheme.borders.borderRadius,
      fontWeight: "bold",
      color: emotionTheme.colors.purple,
    },
  };
});