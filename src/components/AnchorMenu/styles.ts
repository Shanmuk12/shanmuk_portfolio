import { Theme } from "@emotion/react";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles<{emotionTheme: Theme}>()((theme, { emotionTheme }) => {
  return {
    paper: {
      backgroundColor: `${emotionTheme.colors.bg} !important`,
      color: `${emotionTheme.colors.txt}`,
      borderRadius: `${emotionTheme.borders.borderRadius}`,
      height: "auto",
      maxHeight: "33rem",
      padding: "0.5rem",
      boxShadow: `${emotionTheme.effects.boxShadow}`,
      filter: `${emotionTheme.effects.filter}`,
      ["& span"]: {
        color: `${emotionTheme.colors.bg}`,
      },
      "& .MuiSvgIcon-root": {
        fill: `${emotionTheme.colors.bg}`
      },
      "& .Mui-disabled": {
        color: `${emotionTheme.colors.darkLight} !important`,
      },
      overflow: "visible",
      mt: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      "&:before": {
        content: "''",
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
    },
  };
});