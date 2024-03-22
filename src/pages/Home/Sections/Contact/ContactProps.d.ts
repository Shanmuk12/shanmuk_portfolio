import { Translator } from "../../../../i18n";
import {SetStateAction  } from "react";

export default interface ContactProps {
  t: Translator,
  setOpenLoadingContent: (value: SetStateAction<boolean>) => void,
};

export interface SocialMediaProps {
  email: boolean,
  github: boolean,
  linkedin: boolean,
  researchgate: boolean
}