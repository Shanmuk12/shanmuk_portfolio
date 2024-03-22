import { HTMLAttributes } from "react";
import { Translator } from "../../i18n";

export default interface LanguageDropdownProps extends HTMLAttributes<HTMLDivElement> {
  t: Translator,
};