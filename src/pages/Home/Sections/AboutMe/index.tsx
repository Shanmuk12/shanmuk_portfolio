import { FC } from "react";
import Image from "next/image";
import { differenceInYears } from "date-fns";
import { useTheme, Theme } from "@emotion/react";
/**Props */
import AboutMeProps from "./AboutMeProps";
/**Styles */
import {
  Grid, AboutMeContainer, Title, Subtitle, TechTitle,
  TechContent, TechItem, DescriptionContainer, Infos
} from "./styles";
/**Files */
import nextjsLight from "../../../../../public/assets/icons/nextjsLight.svg";
import nextjsDark from "../../../../../public/assets/icons/nextjsDark.svg";
import reactjs from "../../../../../public/assets/icons/reactjs.svg";
import javascript from "../../../../../public/assets/icons/javascript.svg";
import typescript from "../../../../../public/assets/icons/typescript.svg";
import html from "../../../../../public/assets/icons/html.svg";
import css from "../../../../../public/assets/icons/css.svg";
import emotion from "../../../../../public/assets/icons/emotion.svg";
import figma from "../../../../../public/assets/icons/figma.svg";
import prismic from "../../../../../public/assets/icons/prismic.svg";
import mui from "../../../../../public/assets/icons/mui.svg";
import nodejs from "../../../../../public/assets/icons/nodejs.svg";
import python from "../../../../../public/assets/icons/python.svg";

const AboutMe: FC<AboutMeProps> = ({ t }): JSX.Element => {
  const theme: Theme = useTheme();
  const dateOfBirth: Date = new Date("1996-09-27T00:00:00.000-03:00");
  const startDateOfExperience = new Date("2020-01-01T00:00:00.000-03:00");
  const today: Date = new Date();
  const myAge: number = differenceInYears(today, dateOfBirth);
  const myTimeOfExperience: number = differenceInYears(today, startDateOfExperience);

  return (
    <Grid id="about-me">
      <AboutMeContainer>
        <Title className="st1">{t("home.about.title")}</Title>
        <Subtitle className="no-js-hiddenY">{t("home.about.subtitle")}</Subtitle>
        <DescriptionContainer>
          <p className="p1 no-js-hiddenX delay100">
            {t("home.about.description1").replace("$NUM", String(myTimeOfExperience))}
          </p>
          <p className="p1 no-js-hiddenX delay100">
            {t("home.about.description2")}
          </p>
          <p className="p1 no-js-hiddenX delay100">
            {t("home.about.description3")}
          </p>
          <Infos>
          <div className="info-container no-js-hiddenX delay300">
            <span className="info-title">{t("home.about.iLiveIn")}</span>
            <h5 className="info-content">{t("home.about.local")}</h5>
          </div>
          <div className="info-container no-js-hiddenX delay200">
            <span className="info-title">{t("home.about.experience")}</span>
            <h5 className="info-content">{t("home.about.timeExperience").replace("$NUM", String(myTimeOfExperience))}</h5>
          </div>
          <div className="info-container no-js-hiddenX delay100">
            <span className="info-title">{t("home.about.age")}</span>
            <h5 className="info-content">{t("home.about.myAge").replace("$NUM", String(myAge))}</h5>
          </div>
        </Infos>
        </DescriptionContainer>
        <TechTitle  className="no-js-hiddenY">{t("home.about.technology")}</TechTitle>
        <TechContent>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.nextjs")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.nextjs")}
              title={t("home.about.nextjs")}
              src={theme.theme === "dark" ? nextjsLight.src : nextjsDark.src} />
          </TechItem>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.reactjs")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.reactjs")}
              title={t("home.about.reactjs")}
              src={reactjs.src} />
          </TechItem>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.javascript")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.javascript")}
              title={t("home.about.javascript")}
              src={javascript.src} />
          </TechItem>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.typescript")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.typescript")}
              title={t("home.about.typescript")}
              src={typescript.src} />
          </TechItem>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.html")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.html")}
              title={t("home.about.html")}
              src={html.src} />
          </TechItem>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.css")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.css")}
              title={t("home.about.css")}
              src={css.src} />
          </TechItem>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.emotion")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.emotion")}
              title={t("home.about.emotion")}
              src={emotion.src} />
          </TechItem>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.figma")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.figma")}
              title={t("home.about.figma")}
              src={figma.src} />
          </TechItem>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.prismic")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.prismic")}
              title={t("home.about.prismic")}
              src={prismic.src} />
          </TechItem>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.mui")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.mui")}
              title={t("home.about.mui")}
              src={mui.src} />
          </TechItem>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.nodejs")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.nodejs")}
              title={t("home.about.nodejs")}
              src={nodejs.src} />
          </TechItem>
          <TechItem className="no-js-hiddenX delay100" title={t("home.about.python")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.python")}
              title={t("home.about.python")}
              src={python.src} />
          </TechItem>
        </TechContent>
      </AboutMeContainer>
    </Grid>
  );
};

export default AboutMe;