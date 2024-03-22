import { FC, useState } from "react";
import Image from "next/image";
import Link from "../../../../components/Link";
import { useTheme, Theme } from "@emotion/react";
import { useRouter, NextRouter } from "next/router";
import Button from "../../../../components/Button";
/**Styles */
import {
  Grid, MainContainer, Hello, Subtitle, Me,
  Description, CallToAction, NetworkContainer, NetworkItem
} from "./styles";
/**Props */
import MainProps, { NetworkHoverProps } from "./MainProps";
/**Files */
import meImg from "../../../../../public/assets/others/Me-min.webp";
import githubLight from "../../../../../public/assets/icons/githubLight.svg";
import githubDark from "../../../../../public/assets/icons/githubDark.svg";
import researchgateDark from "../../../../../public/assets/icons/researchgateDark.svg";
import researchgateLight from "../../../../../public/assets/icons/researchgateLight.svg";
import linkedinDark from "../../../../../public/assets/icons/linkedinDark.svg";
import linkedinLight from "../../../../../public/assets/icons/linkedinLight.svg";

const Main: FC<MainProps> = ({ t, ...props }): JSX.Element => {
  const [hover, setHover] = useState<NetworkHoverProps>({ github: false, linkedin: false, researchgate: false });

  const router: NextRouter = useRouter();
  const theme: Theme = useTheme();

  return (
    <Grid>
      <MainContainer id="top" {...props}>
        <Hello className={router.locale}>
          {t("home.main.hello").slice(0, t("home.main.hello").indexOf("Leonardo"))}
          <br />
          {t("home.main.hello").slice(t("home.main.hello").indexOf("Leonardo"), t("home.main.hello").length)}
        </Hello>
        <Subtitle className={router.locale}>
          {t("home.main.subtitle")}
        </Subtitle>
        <Me>
          <Image src={meImg.src} alt="Leonardo Jacomussi" quality={75} width={460} height={670} sizes="100%" priority />
        </Me>
        <Description className="p1">
          {t("home.main.description")}
        </Description>
        <CallToAction>
          <Link scroll rel="contact" href="#contact" to="contact">
            <Button style={{ width: "11.5rem", height: "6rem" }}>
              {t("header.contact")}
            </Button>
          </Link>
          <Link scroll rel="portfolio" href="#portfolio" to="portfolio">
            <>{t("header.portfolio")} {">"} </>
          </Link>
        </CallToAction>

        <NetworkContainer className="no-js-hiddenX delay100">
          <Link rel="external" href="https://github.com/Shanmuk12" target="_blank">
            <NetworkItem title="GitHub"
              onMouseEnter={() => setHover(prveHover => ({ ...prveHover, github: true }))}
              onMouseLeave={() => setHover(prveHover => ({ ...prveHover, github: false }))}
              className={hover.github ? "isHovered" : "isNotHovered"}
            >
              <Image
                width={32}
                height={32}
                loading="lazy"
                alt="GitHub"
                title="GitHub"
                src={theme.theme === "dark" ? githubLight.src : githubDark.src}
              />
              <span>GitHub</span>
            </NetworkItem>
          </Link>
          <Link rel="external" href="https://www.linkedin.com/in/shanmuka-rao-vangapandu-038a02238/" target="_blank">
            <NetworkItem title="LinkedIn"
              onMouseEnter={() => setHover(prveHover => ({ ...prveHover, linkedin: true }))}
              onMouseLeave={() => setHover(prveHover => ({ ...prveHover, linkedin: false }))}
              className={hover.linkedin ? "isHovered" : "isNotHovered"}
            >
              <Image
                width={32}
                height={32}
                loading="lazy"
                alt="LinkedIn"
                title="LinkedIn"
                src={theme.theme === "dark" ? linkedinLight.src : linkedinDark.src}
              />
              <span>LinkedIn</span>
            </NetworkItem>
          </Link>
          <Link rel="external" href="https://www.researchgate.net/profile/Shanmuka-Rao-Vangapandu" target="_blank">
            <NetworkItem title="ResearchGate"
              onMouseEnter={() => setHover(prveHover => ({ ...prveHover, researchgate: true }))}
              onMouseLeave={() => setHover(prveHover => ({ ...prveHover, researchgate: false }))}
              className={hover.researchgate ? "isHovered" : "isNotHovered"}
            >
              <Image
                width={32}
                height={32}
                loading="lazy"
                alt="ResearchGate"
                title="ResearchGate"
                src={theme.theme === "dark" ? researchgateLight.src : researchgateDark.src}
              />
              <span>ResearchGate</span>
            </NetworkItem>
          </Link>
        </NetworkContainer>
      </MainContainer>
    </Grid>
  );
};

export default Main