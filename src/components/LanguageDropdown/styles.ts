import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import { Theme } from "@emotion/react";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles<{ emotionTheme: Theme }>()((theme, { emotionTheme }) => {
	return {
    icon: {
      fill: emotionTheme.colors.txt,
      width: "3rem",
      height: "3rem"
    }
	};
});

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: auto;
  height: auto;
`;