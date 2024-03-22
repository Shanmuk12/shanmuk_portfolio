import { Translator } from "../../../../i18n";

export default interface MainProps {
  t: Translator,
  [key: string]: any,
};

export interface NetworkHoverProps {
  github: boolean,
  linkedin: boolean,
  researchgate: boolean
}