import { Translator } from "../../i18n";

export default interface FooterProps {
  t: Translator,
};

export interface SocialMediaProps {
  email: boolean,
  github: boolean,
  linkedin: boolean,
  researchgate: boolean
}