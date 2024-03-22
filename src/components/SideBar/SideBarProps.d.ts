import { Translator } from "../../i18n";
import { HTMLAttributes } from "react";

export default interface SideBarProps extends HTMLAttributes<HTMLDivElement> {
	t: Translator,
};