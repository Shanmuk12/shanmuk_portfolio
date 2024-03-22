import { FC } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import { useTheme, Theme } from "@emotion/react";
import { Container } from "./styles";
import Logo from "../../../public/favicon.ico";

export const CircularProgressWithContent: FC<{ content: string, title?: string }> = (props): JSX.Element => {
	return (
		<Box position="relative" display="inline-flex">
			<Container>
				<div className="box bounce">
					<Image src={props.content} alt={props.title} width={100} height={100} />
				</div>
			</Container>
		</Box>
	);
};

CircularProgressWithContent.defaultProps = {
	content: Logo.src,
	title: "Otoh"
}

const LoadingContent: FC<{ open: boolean }> = ({ open }): JSX.Element => {
	const theme: Theme = useTheme();
	return (
		<Backdrop
			sx={{ backgroundColor: theme.theme === "dark" ? theme.colors.darkLight : theme.colors.white, zIndex: (theme) => theme.zIndex.tooltip + 10 }}
			open={open}
		>
			{/* <CircularProgress color="inherit"/> */}
			<CircularProgressWithContent content={Logo.src} title="Shanmuka rao V" />
		</Backdrop>
	);
};

export default LoadingContent;
