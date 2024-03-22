import { FC, ReactElement } from "react";
import { Global, css } from "@emotion/react";

const GlobalStyles: FC = (): ReactElement => {
	return (
		<Global
			styles={(theme) => css`
  			@import url("https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&display=swap");
				@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Syne:wght@500;600;700;800&display=swap");

				:root {
					font-size: 62.5%; /*10px*/
					color-scheme: dark light;
					margin: 0px;
					padding: 0px;
					box-sizing: border-box;
				};

				* {
					padding: 0;
					margin: 0;
					box-sizing: border-box;
					font-family: "Poppins", "Syne", sans-serif;
				};

				html {
					overflow-y: scroll;
					scroll-behavior: smooth;
				};

				html, body {
					background-color: ${theme.colors.bg};
					box-sizing: border-box;
					padding: 0;
					margin: 0;
					width: 100%;
					height: auto;
				};

				h1 {
					font-family: "Syne", sans-serif;
					font-size: 9rem;
					font-weight: 700;
					line-height: 100%;
					letter-spacing: -1.5%;
					color: ${theme.colors.txt};
				};

				h2 {
					font-family: "Syne", sans-serif;
					font-size: 5.8rem;
					font-weight: 700;
					line-height: 100%;
					letter-spacing: -0.5%;
					color: ${theme.colors.txt};
				};

				h3 {
					font-family: "Syne", sans-serif;
					font-size: 4.6rem;
					font-weight: 700;
					line-height: 100%;
					color: ${theme.colors.txt};
				};

				h4 {
					font-family: "Syne", sans-serif;
					font-size: 3.3rem;
					font-weight: 600;
					line-height: 100%;
					letter-spacing: 0.25%;
					color: ${theme.colors.txt};
				};

				h5 {
					font-family: "Syne", sans-serif;
					font-size: 2.3rem;
					font-weight: 600;
					line-height: 100%;
					letter-spacing: 0.15%;
					color: ${theme.colors.txt};
				};

				h6 {
					font-family: "Syne", sans-serif;
					font-size: 1.9rem;
					font-weight: 600;
					line-height: 100%;
					color: ${theme.colors.txt};
				};

				.st1 {
					font-family: "Syne", sans-serif;
					font-size: 1.5rem;
					font-weight: 500;
					line-height: 100%;
					letter-spacing: 0.15%;
					color: ${theme.colors.txt};
				};

				.st2 {
					font-family: "Syne", sans-serif;
					font-size: 1.5rem;
					font-weight: 500;
					line-height: 100%;
					letter-spacing: 0.15%;
					color: ${theme.colors.txt};
				};

				a, .a {
					font-family: "Poppins", sans-serif;
					font-size: 1.5rem;
					font-weight: 700;
					line-height: 100%;
					letter-spacing: 0.5%;
					color: ${theme.colors.txt};
					text-decoration: none;
					
					:hover {
						cursor: pointer;
					};
				};

				.p1 {
					font-family: "Poppins", sans-serif;
					font-size: 1.6rem;
					font-weight: 300;
					line-height: 100%;
					letter-spacing: 0.5%;
					color: ${theme.colors.txt};
				};

				.p2 {
					font-family: "Poppins", sans-serif;
					font-size: 1.4rem;
					font-weight: 300;
					line-height: 100%;
					letter-spacing: 0.25%;
					color: ${theme.colors.txt};
				};

				button {
					font-family: "Poppins", sans-serif;
					font-size: 1.4rem;
					font-weight: 500;
					line-height: 100%;
					letter-spacing: 1.25%;
					color: ${theme.colors.txt};
				};

				caption {
					font-family: "Poppins", sans-serif;
					font-size: 1.3rem;
					font-weight: 500;
					line-height: 100%;
					letter-spacing: 0.4%;
					color: ${theme.colors.txt};
				};

				.overline {
					font-family: "Poppins", sans-serif;
					font-size: 1.1rem;
					font-weight: 500;
					line-height: 100%;
					letter-spacing: 1.5%;
					color: ${theme.colors.txt};
				};

				.sr-only {
					position: absolute;
					width: 1px;
					height: 1px;
					padding: 0;
					margin: -1px;
					overflow: hidden;
					clip: rect(0,0,0,0);
					white-space: nowrap;
					border: 0;
				};

				.hiddenX {
					opacity: 0;
					filter: blur(.5rem);
					transform: translateX(-100%);
					transition: all 1s;
				};

				.showX {
					opacity: 1;
					filter: blur(0);
					transform: translateX(0);
				};

				.hiddenY {
					opacity: 0;
					filter: blur(.5rem);
					transform: translateY(100%);
					transition: all 1s;
				};

				.showY {
					opacity: 1;
					filter: blur(0);
					transform: translateY(0);
				};

				.delay100 {
					transition-delay: 100ms;
				};

				.delay200 {
					transition-delay: 200ms;
				};

				.delay300 {
					transition-delay: 300ms;
				};

				.delay400 {
					transition-delay: 400ms;
				};

				.delay500 {
					transition-delay: 500ms;
				};

				.delay600 {
					transition-delay: 600ms;
				};

				.delay700 {
					transition-delay: 700ms;
				};

				.delay800 {
					transition-delay: 800ms;
				};

				.delay900 {
					transition-delay: 900ms;
				};

				@media(prefers-reduced-motion) {
					.hiddenX {
						transition: none;
					};

					.showX {
						opacity: 1;
					};

					.hiddenY {
						transition: none;
					};

					.showY {
						opacity: 1;
					};
				};

				*::-webkit-scrollbar {
						width: 15px;
						background-color: ${theme.colors.darkLight};
						border: ${theme.colors.darkLight} .5px solid !important;
				};

				*::-webkit-scrollbar-thumb {
						background-color: ${theme.colors.paleBlue};
						border-radius: ${theme.borders.borderRadius} !important;
				};
		`}
		/>
	);
};

export default GlobalStyles;