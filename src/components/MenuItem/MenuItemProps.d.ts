import { Theme } from  "@emotion/react";
import { ReactChild, ReactNode } from "react";
import { MenuItemProps as MuiMenuItemProps } from "@mui/material";

export interface MenuItemProps extends MuiMenuItemProps {
	children: JSX.Element | JSX.Element[] | string | ReactNode | ReactChild,
	[key: string]: any,
};