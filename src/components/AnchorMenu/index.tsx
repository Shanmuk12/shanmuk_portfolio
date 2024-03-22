import { FC } from "react";
import Menu from "@mui/material/Menu";
import { useTheme, Theme } from "@emotion/react";
/**Styles */
import { useStyles } from "./styles";
/**Props */
import AnchorMenuProps from "./AnchorMenuProps";

const AnchorMenu: FC<AnchorMenuProps> = ({ children, ...props }) => {
	const theme: Theme = useTheme();
	const { classes } = useStyles({ emotionTheme: theme });

	return (
		<Menu
			{...props}
			PaperProps={{ elevation: 0 }}
			classes={{ paper: classes.paper }}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			{children}
		</Menu>
	);
};

export default AnchorMenu;