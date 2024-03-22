import { FC, useEffect, useRef, MutableRefObject, useState } from "react";
import Button from "../Button";
import SideBar from "../SideBar";
import Link from "../Link";
import SwitchTheme from "../SwitchTheme";
import LanguageDropdown from "../LanguageDropdown";
import { useRouter, NextRouter } from "next/router";
/**Styles */
import {
  Grid, HeaderContainer, Logo, Middle, Right
} from "./styles";
/**Props */
import HeaderProps from "./HeaderProps";
/**Helpers */
import { listenToScroll } from "./helpers";

const Header: FC<HeaderProps> = ({ t }) => {
  const router: NextRouter = useRouter();
  const [isOnTop, setIsOnTop] = useState(false);
  const isHome: boolean = router.pathname === "/";
  const headerRef: MutableRefObject<HTMLDivElement> = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => listenToScroll(isOnTop, setIsOnTop, headerRef.current));
    const headerRefCurrent: HTMLElement | null = headerRef.current;
    return () => {
      if (!headerRefCurrent) return;
      window.removeEventListener("scroll", () => listenToScroll(isOnTop, setIsOnTop, headerRefCurrent));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid ref={headerRef} isOnTop={isOnTop}>
      <HeaderContainer>
        <Logo className="header-animate">
          <Link scroll={isHome} href={isHome ? "#top" : "/"} to="top" rel="top">
            Vangapandu<br /> Shanmuka rao
          </Link>
        </Logo>
        <Middle>
          <Link scroll={isHome} href={isHome ? "#services" : "/#services"} rel="services" className="header-animate" to="services">
            {t("header.services")}
          </Link>
          <Link scroll={isHome} href={isHome ? "#about-me" : "/#about-me"} rel="about-me" className="header-animate" to="about-me">
            {t("header.aboutMe")}
          </Link>
          <Link scroll={isHome} href={isHome ? "#qualifications" : "/#qualifications"} rel="qualifications" className="header-animate" to="qualifications">
            {t("header.qualifications")}
          </Link>
          <Link scroll={isHome} href={isHome ? "#portfolio" : "/#portfolio"} rel="portfolio" className="header-animate" to="portfolio">
            {t("header.portfolio")}
          </Link>
          <LanguageDropdown className="header-animate" t={t} />
          <SwitchTheme t={t} className="header-animate" />
        </Middle>
        <Right>
          <SideBar className="header-animate" t={t} />
          <Link scroll={isHome} href={isHome ? "#contact" : "/#contact"} rel="contact" className="header-animate" to="contact">
            <Button style={{ width: "11.5rem", height: "6rem" }}>
              {t("header.contact")}
            </Button>
          </Link>
        </Right>
      </HeaderContainer>
    </Grid>
  );
};

export default Header;