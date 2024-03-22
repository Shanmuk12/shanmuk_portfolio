import { FC } from "react";
import Image from "next/image";
import Button from "../../../../components/Button";
import { differenceInYears, differenceInMonths } from "date-fns";
/**Props */
import QualificationsProps from "./QualificationsProps";
/**Helpers */
import { downloadCV } from "./helpers";
/**Styles */
import {
  Grid, QualificationsContainer, LeftSide, RightSide, Title, Subtitle,
  EducationTitle, Experience, HarmoniaLogo, HarmoniaTitle,
  CurrentAssignment, Education, Courses, CoursesTitle, Meta,
  MetaContent, MetaLogo, Rocketseat, RocketseatContent,
  RocketseatLogo, UFSM, UFSMLogo, UFSMContent, Descomplica,
  DescomplicaContent, DescomplicaLogo, Udemy,UdemyContent, UdemyLogo,
  DownloadCV

} from "./styles";
/**Files */
import harmoniaImg from "../../../../../public/assets/icons/harmonia.webp";
import rocketseatImg from "../../../../../public/assets/icons/salesforce.svg";
import metaImg from "../../../../../public/assets/icons/meta.svg";
import ufsmImg from "../../../../../public/assets/icons/ufsm.svg";
import descomplicaImg from "../../../../../public/assets/icons/descomplica.svg";
import udemyImg from "../../../../../public/assets/icons/udemy.svg";

const Qualifications: FC<QualificationsProps> = ({ t }): JSX.Element => {
  const startDateOfWorkAtHarmonia = new Date("2020-01-01T00:00:00.000-03:00");
  const today: Date = new Date();
  const timeOfWorkHarmoniaInYears: number = differenceInYears(today, startDateOfWorkAtHarmonia);
  const timeOfWorkHarmoniaInMonths: number = differenceInMonths(today, startDateOfWorkAtHarmonia) % 12 + 1;

  return (
    <Grid id="qualifications">
      <QualificationsContainer>
        <LeftSide>
          <Title className="st1">{t("home.qualifications.title")}</Title>
          <EducationTitle className="no-js-hiddenY delay100">{t("home.qualifications.education.title")}</EducationTitle>
          <Education className="no-js-hiddenX delay100">
            <Descomplica>
              <DescomplicaLogo>
                <Image
                  width={32}
                  height={32}
                  quality={100}
                  loading="lazy"
                  alt={t("home.qualifications.education.descomplica.title")}
                  title={t("home.qualifications.education.descomplica.title")}
                  src={descomplicaImg.src}
                />
              </DescomplicaLogo>
              <DescomplicaContent>
                <h5>{t("home.qualifications.education.descomplica.title")}</h5>
                <h6>{t("home.qualifications.education.descomplica.course")}</h6>
                <p className="overline">{t("home.qualifications.education.descomplica.time")}</p>
              </DescomplicaContent>
            </Descomplica>
            <UFSM>
              <UFSMLogo>
                <Image
                  width={32}
                  height={32}
                  quality={100}
                  loading="lazy"
                  alt={t("home.qualifications.education.ufsm.title")}
                  title={t("home.qualifications.education.ufsm.title")}
                  src={ufsmImg.src}
                />
              </UFSMLogo>
              <UFSMContent>
                <h5>{t("home.qualifications.education.ufsm.title")}</h5>
                <h6>{t("home.qualifications.education.ufsm.course")}</h6>
                <p className="overline">{t("home.qualifications.education.ufsm.time")}</p>
              </UFSMContent>
            </UFSM>
          </Education>
          <DownloadCV className="no-js-hiddenX download-cv-left">
            <Button onClick={downloadCV}>
              Download CV
            </Button>
          </DownloadCV>
        </LeftSide>

        <RightSide>

          <CoursesTitle className="no-js-hiddenY delay100">{t("home.qualifications.courses.title")}</CoursesTitle>
          <Courses className="no-js-hiddenX delay100">
            <Meta>
              <MetaLogo>
                <Image
                  width={32}
                  height={32}
                  quality={100}
                  loading="lazy"
                  alt={t("home.qualifications.courses.meta_frontend.title")}
                  title={t("home.qualifications.courses.meta_frontend.title")}
                  src={metaImg.src}
                />
              </MetaLogo>
              <MetaContent>
                <h5>{t("home.qualifications.courses.meta_frontend.title")}</h5>
                <span>{t("home.qualifications.courses.meta_frontend.type")}</span>
                <h6>{t("home.qualifications.courses.meta_frontend.course")}</h6>
                
              </MetaContent>
            </Meta>
            <Rocketseat>
              <RocketseatLogo>
                <Image
                  width={32}
                  height={32}
                  quality={100}
                  loading="lazy"
                  alt={t("home.qualifications.courses.rocketseat.title")}
                  title={t("home.qualifications.courses.rocketseat.title")}
                  src={rocketseatImg.src}
                />
              </RocketseatLogo>
              <RocketseatContent>
                <h5>{t("home.qualifications.courses.rocketseat.title")}</h5>
                <span>{t("home.qualifications.courses.rocketseat.type")}</span>
                <h6>{t("home.qualifications.courses.rocketseat.course")}</h6>
              
              </RocketseatContent>
            </Rocketseat>
            <Udemy>
                <UdemyLogo title={t("home.qualifications.courses.udemy.title")}>
                  <Image
                  width={32}
                  height={32}
                  quality={100}
                  loading="lazy"
                  alt={t("home.qualifications.courses.udemy.title")}
                  title={t("home.qualifications.courses.udemy.title")}
                  src={udemyImg.src}
                />
              </UdemyLogo>
              <UdemyContent>
                <h5>{t("home.qualifications.courses.udemy.title")}</h5>
                <span>{t("home.qualifications.courses.udemy.type")}</span>
                <h6>{t("home.qualifications.courses.udemy.course")}</h6>
              </UdemyContent>
            </Udemy>
          </Courses>
          <DownloadCV className="no-js-hiddenX download-cv-right">
            <Button onClick={downloadCV}>
              Download CV
            </Button>
          </DownloadCV>
        </RightSide>
      </QualificationsContainer>
    </Grid>
  );
};

export default Qualifications;