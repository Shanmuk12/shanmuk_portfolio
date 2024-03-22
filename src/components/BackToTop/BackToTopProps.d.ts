import { HTMLAttributes } from "react";
import { Translator } from "../../i18n";

export default interface BackToTopProps {
  t: Translator,
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
};