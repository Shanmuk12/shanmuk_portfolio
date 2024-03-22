import styled from "@emotion/styled";
import { Theme } from "@emotion/react"
import { HTMLAttributes } from "react";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles<{ emotionTheme: Theme }>()((theme, { emotionTheme }) => {
	return {
		menuIcon: {
			fill: emotionTheme.colors.txt,
			width: "3rem",
			height: "3rem",
		},
		listItem: {
			display: "flex !important",
			justifyContent: "center !important",
			alignItems: "center !important",
			TextAlign: "center !important",
			margin: "auto !important",
		},
		drawer: {
			width: 200,
			flexShrink: 0,
			"& .MuiDrawer-paper": {
				background: `${emotionTheme.colors.bg} !important`,
				color: emotionTheme.colors.txt,
				width: 200,
			},
		},
		iconArrowBack: {
			display: "flex",
			alignItems: "center",
			padding: "1rem",
			justifyContent: "flex-start",
			color: `${emotionTheme.colors.txt} !important`,
		},
		list: {
			display: "flex",
			flexDirection: "column",
			width: "100%",
			height: "auto",
			rowGap: "2rem",
		},
		divider: {
			// color: emotionTheme.colors.techBg,
			width: "80%",
			margin: "auto",
			marginTop: "1rem",
			borderTop: `0.5px solid ${emotionTheme.colors.txt}`,
			boxShadow: emotionTheme.effects.boxShadow,
		},
	};
});

export const TopBar = styled.div<HTMLAttributes<HTMLDivElement>>`
	width: 100%;
	height: 4rem;
	background-color: transparent;
	padding-right: 1rem;
	box-sizing: border-box;
	display: none;
	
	@media (max-width: 900px){
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	};
`;