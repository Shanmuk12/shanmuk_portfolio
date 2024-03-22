export type ThemeOpts = "dark" | "light";
import { AlertColor } from "@mui/material/Alert";

export interface SnackbarProps {
	open: boolean,
	severity: AlertColor,
	message: string
};

export interface CustomThemeContextProps  {
  currentTheme: ThemeOpts,
  changeCurrentTheme: (newTheme: ThemeOpts) => void,
};