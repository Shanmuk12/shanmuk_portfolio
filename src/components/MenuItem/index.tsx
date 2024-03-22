import { FC } from "react";
import { useTheme, Theme } from "@emotion/react";
import { MenuItem as MuiMenuItem } from "@mui/material";
// Props
import { MenuItemProps } from "./MenuItemProps";
/**Styles */
import { useStyles } from "./styles";

const MenuItem: FC<MenuItemProps> = ({ children, ...props }): JSX.Element => {
	const theme: Theme = useTheme();
	const { classes } = useStyles({ emotionTheme: theme });
	return (
		<MuiMenuItem
			{...props}
			classes={{ selected: classes.selected, root: classes.root }}
		>
			{children}
		</MuiMenuItem>
	);
};

export default MenuItem;