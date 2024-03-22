import { HTMLAttributes } from "react";
import { Translator } from "../../i18n";

export default interface SwitchThemeProps extends HTMLAttributes<HTMLDivElement> {
  t: Translator,
};