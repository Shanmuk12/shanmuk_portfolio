import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme, Theme } from "@emotion/react";
// Props
import FooterProps, { SocialMediaProps } from "./FooterProps";
// Styles
import { Grid, FooterContainer } from "./styles"
/**Files */
import emailLight from "../../../public/assets/icons/emailLight.svg";
import emailDark from "../../../public/assets/icons/emailDark.svg";
import githubLight from "../../../public/assets/icons/githubLight.svg";
import githubDark from "../../../public/assets/icons/githubDark.svg";
import researchgateDark from "../../../public/assets/icons/researchgateDark.svg";
import researchgateLight from "../../../public/assets/icons/researchgateLight.svg";
import linkedinDark from "../../../public/assets/icons/linkedinDark.svg";
import linkedinLight from "../../../public/assets/icons/linkedinLight.svg";

const Footer: FC<FooterProps> = ({ t }) => {
  const [hover, setHover] = useState<SocialMediaProps>({ email: false, github: false, linkedin: false, researchgate: false });
  const theme: Theme = useTheme();

  return (
    <Grid id="footer">
      <FooterContainer>
        <p className="p1">{t("footer.copy").replace("$YEAR", String((new Date()).getFullYear()))}</p>
        <div>
          <Link
            rel="external"
            href="mailto:shanmuk.in@gmail.com"
            target="_blank"
            onMouseEnter={() => setHover(prveHover => ({ ...prveHover, email: true }))}
            onMouseLeave={() => setHover(prveHover => ({ ...prveHover, email: false }))}
            className={hover.email ? "isHovered" : hover.researchgate || hover.github || hover.linkedin ? "isNotHovered" : ""}
          >
            <Image
              width={32}
              height={32}
              loading="lazy"
              alt="Email"
              title="Email"
              src={theme.theme === "dark" ? emailLight.src : emailDark.src}
            />
          </Link>
          <Link
            rel="external" href="https://www.linkedin.com/in/shanmuka-rao-vangapandu-038a02238/"
            target="_blank"
            onMouseEnter={() => setHover(prveHover => ({ ...prveHover, linkedin: true }))}
            onMouseLeave={() => setHover(prveHover => ({ ...prveHover, linkedin: false }))}
            className={hover.linkedin ? "isHovered" : hover.researchgate || hover.github || hover.email ? "isNotHovered" : ""}
          >
            <Image
              width={32}
              height={32}
              loading="lazy"
              alt={t("home.about.linkedin")}
              title={t("home.about.linkedin")}
              src={theme.theme === "dark" ? linkedinLight.src : linkedinDark.src}
            />
          </Link>
          <Link
            rel="external" href="https://github.com/Shanmuk12"
            target="_blank"
            onMouseEnter={() => setHover(prveHover => ({ ...prveHover, github: true }))}
            onMouseLeave={() => setHover(prveHover => ({ ...prveHover, github: false }))}
            className={hover.github ? "isHovered" : hover.researchgate || hover.linkedin || hover.email ? "isNotHovered" : ""}
          >
            <Image
              width={32}
              height={32}
              loading="lazy"
              alt={t("home.about.github")}
              title={t("home.about.github")}
              src={theme.theme === "dark" ? githubLight.src : githubDark.src}
            />
          </Link>
          <Link
            rel="external"
            href="https://www.researchgate.net/profile/Shanmuka-Rao-Vangapandu"
            target="_blank"
            onMouseEnter={() => setHover(prveHover => ({ ...prveHover, researchgate: true }))}
            onMouseLeave={() => setHover(prveHover => ({ ...prveHover, researchgate: false }))}
            className={hover.researchgate ? "isHovered" : hover.github || hover.linkedin || hover.email ? "isNotHovered" : ""}
          >
            <Image
              width={32}
              height={32}
              loading="lazy"
              alt={t("home.about.researchgate")}
              title={t("home.about.researchgate")}
              src={theme.theme === "dark" ? researchgateLight.src : researchgateDark.src}
            />
          </Link>
        </div>
        <Link rel="external" className="a" href="https://www.buymeacoffee.com/shanmuk" target="_blank">{t("footer.coffee")}</Link>
      </FooterContainer>
    </Grid>
  );
};

export default Footer;