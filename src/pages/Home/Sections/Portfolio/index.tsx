import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, NextRouter } from "next/router";
import Button from "../../../../components/Button";
import PortfolioProps from "./PortfolioProps";
import {
  Grid,
  PortfolioContainer,
  Title,
  Subtitle,
  OtohMockup,
  OtohMockup2,
  DescriptionContainer,
  AwardContainer,
  AwardItem
} from "./styles";
import otohMockup1 from "../../../../../public/assets/others/otohmockup1.webp";
import otohMockup2 from "../../../../../public/assets/others/otohmockup2.webp";
import otohMockup3 from "../../../../../public/assets/others/otohmockup3.webp";
import otohMockup4 from "../../../../../public/assets/others/otohmockup4.webp";

const Portfolio: FC<PortfolioProps> = ({ t }): JSX.Element => {
  const router: NextRouter = useRouter();
  return (
    <Grid id="portfolio">
      <PortfolioContainer>
        <Title className="st1">{t("home.portfolio.title")}</Title>
        <Subtitle className="no-js-hiddenY">{t("home.portfolio.subtitle")}</Subtitle>
        <DescriptionContainer>
          <h4 className="no-js-hiddenX delay100">
            {t("home.portfolio.otoh.title")}
          </h4>
          <p className="p1 no-js-hiddenX delay100">
            {t("home.portfolio.otoh.description1")}
          </p>
          <p className="p1 no-js-hiddenX delay100">
            {t("home.portfolio.otoh.description2")}
          </p>
          <OtohMockup2 className="no-js-hiddenX delay100" id="otoh-mockup">
            <Image
              loading="lazy"
              quality={50}
              width={521}
              height={347}
              sizes="100%"
              alt={t("home.portfolio.otoh.title")}
              title={t("home.portfolio.otoh.title")}
              src={otohMockup1.src}
            />
          </OtohMockup2>
          <AwardContainer>
            <h6 className="no-js-hiddenX delay100">{t("home.portfolio.otoh.award.title")}</h6>
            <AwardItem className="no-js-hiddenX delay100">
              🥇
              <p className="p1">
                {t("home.portfolio.otoh.award.award1")}
                <br />
                <br />
                <Link rel="external" className="no-js-hiddenX delay100" href="https://github.com/Shanmuk12/Movie-Recomandation-based-on-users-Genre" target="_blank">
              {t("home.portfolio.otoh.award.callToAction")}
            </Link>
              </p>
            </AwardItem>
           
            <AwardItem className="no-js-hiddenX delay100">
              🥈
              <p className="p1">
                {t("home.portfolio.otoh.award.award2")}
                <br />
              </p>
            </AwardItem>
          </AwardContainer>
          <Link rel="external" className="no-js-hiddenX delay100" href="https://github.com/Shanmuk12/Movie-Recomandation-based-on-users-Genre" target="_blank">
            <Button>
              {t("home.portfolio.otoh.learnMore")}
            </Button>
          </Link>
        </DescriptionContainer>
        <OtohMockup className="no-js-hiddenX delay100">
          <Image
            loading="lazy"
            quality={50}
            width={521}
            height={347}
            sizes="100%"
            alt={t("home.portfolio.otoh.title")}
            title={t("home.portfolio.otoh.title")}
            src={otohMockup1.src}
          />
        </OtohMockup>
      </PortfolioContainer>
    </Grid>
  );
};

const Portfolio2: FC<PortfolioProps> = ({ t }): JSX.Element => {
  const router: NextRouter = useRouter();
  return (
    <Grid id="portfolio2">
      <PortfolioContainer>
        <Title className="st1">{t("home.portfolio2.title")}</Title>
        <Subtitle className="no-js-hiddenY">{t("home.portfolio2.subtitle")}</Subtitle>
        <DescriptionContainer>
          <h4 className="no-js-hiddenX delay100">
            {t("home.portfolio2.otoh.title")}
          </h4>
          <p className="p1 no-js-hiddenX delay100">
            {t("home.portfolio2.otoh.description1")}
          </p>
          <p className="p1 no-js-hiddenX delay100">
            {t("home.portfolio2.otoh.description2")}
          </p>
          <OtohMockup2 className="no-js-hiddenX delay100" id="otoh-mockup">
            <Image
              loading="lazy"
              quality={50}
              width={521}
              height={347}
              sizes="100%"
              alt={t("home.portfolio2.otoh.title")}
              title={t("home.portfolio2.otoh.title")}
              src={otohMockup2.src}
            />
          </OtohMockup2>
          <AwardContainer>
            <h6 className="no-js-hiddenX delay100">{t("home.portfolio2.otoh.award.title")}</h6>
            <AwardItem className="no-js-hiddenX delay100">
              🥇
              <p className="p1">
                {t("home.portfolio2.otoh.award.award1")}
                <br />
                <br />
                <Link rel="external" href="https://github.com/Shanmuk12/MVS_ai" target="_blank">
                  {t("home.portfolio2.otoh.award.callToAction")}
                </Link>
              </p>
            </AwardItem>
            <AwardItem className="no-js-hiddenX delay100">
              🥈
              <p className="p1">
                {t("home.portfolio2.otoh.award.award2")}
                <br />
              </p>
            </AwardItem>
          </AwardContainer>
          <Link rel="external" className="no-js-hiddenX delay100" href="https://github.com/Shanmuk12/MVS_ai" target="_blank">
            <Button>
              {t("home.portfolio2.otoh.learnMore")}
            </Button>
          </Link>
        </DescriptionContainer>
        <OtohMockup className="no-js-hiddenX delay100">
          <Image
            loading="lazy"
            quality={50}
            width={521}
            height={347}
            sizes="100%"
            alt={t("home.portfolio2.otoh.title")}
            title={t("home.portfolio2.otoh.title")}
            src={otohMockup2.src}
          />
        </OtohMockup>
      </PortfolioContainer>
    </Grid>
  );
  };
  
  const Portfolio3: FC<PortfolioProps> = ({ t }): JSX.Element => {
    const router: NextRouter = useRouter();
    return (
      <Grid id="portfolio3">
        <PortfolioContainer>
          <Title className="st1">{t("home.portfolio3.title")}</Title>
          <Subtitle className="no-js-hiddenY">{t("home.portfolio3.subtitle")}</Subtitle>
          <DescriptionContainer>
            <h4 className="no-js-hiddenX delay100">
              {t("home.portfolio3.otoh.title")}
            </h4>
            <p className="p1 no-js-hiddenX delay100">
              {t("home.portfolio3.otoh.description1")}
            </p>
            <p className="p1 no-js-hiddenX delay100">
              {t("home.portfolio3.otoh.description2")}
            </p>
            <OtohMockup2 className="no-js-hiddenX delay100" id="otoh-mockup">
              <Image
                loading="lazy"
                quality={50}
                width={521}
                height={347}
                sizes="100%"
                alt={t("home.portfolio3.otoh.title")}
                title={t("home.portfolio3.otoh.title")}
                src={otohMockup3.src}
              />
            </OtohMockup2>
            <AwardContainer>
              <h6 className="no-js-hiddenX delay100">{t("home.portfolio3.otoh.award.title")}</h6>
              <AwardItem className="no-js-hiddenX delay100">
                🥇
                <p className="p1">
                  {t("home.portfolio3.otoh.award.award1")}
                  <br />
                  <br />
                  <Link rel="external" className="no-js-hiddenX delay100" href="https://www.cbic.org.br/premioinovacaoesustentabilidade/edicao-anterior-2022/" target="_blank">
                    {t("home.portfolio3.otoh.award.callToAction")}
                  </Link>
              
                </p>
              </AwardItem>
              <AwardItem className="no-js-hiddenX delay100">
                🥈
                <p className="p1">
                  {t("home.portfolio3.otoh.award.award2")}
                  <br />
                
                </p>
              </AwardItem>
            </AwardContainer>
            <Link rel="external" className="no-js-hiddenX delay100" href= "https://github.com/Mindslayer001/MELA" target="_blank">
              <Button>
                {t("home.portfolio3.otoh.learnMore")}
              </Button>
            </Link>
          </DescriptionContainer>
          <OtohMockup className="no-js-hiddenX delay100">
            <Image
              loading="lazy"
              quality={50}
              width={521}
              height={347}
              sizes="100%"
              alt={t("home.portfolio3.otoh.title")}
              title={t("home.portfolio3.otoh.title")}
              src={otohMockup3.src}
            />
          </OtohMockup>
        </PortfolioContainer>
      </Grid>
    );
  };
  
  const Portfolio4: FC<PortfolioProps> = ({ t }): JSX.Element => {
    const router: NextRouter = useRouter();
    return (
      <Grid id="portfolio4">
        <PortfolioContainer>
          <Title className="st1">{t("home.portfolio4.title")}</Title>
          <Subtitle className="no-js-hiddenY">{t("home.portfolio4.subtitle")}</Subtitle>
          <DescriptionContainer>
            <h4 className="no-js-hiddenX delay100">
              {t("home.portfolio4.otoh.title")}
            </h4>
            <p className="p1 no-js-hiddenX delay100">
              {t("home.portfolio4.otoh.description1")}
            </p>
            <p className="p1 no-js-hiddenX delay100">
              {t("home.portfolio4.otoh.description2")}
            </p>
            <OtohMockup2 className="no-js-hiddenX delay100" id="otoh-mockup">
              <Image
                loading="lazy"
                quality={50}
                width={521}
                height={347}
                sizes="100%"
                alt={t("home.portfolio4.otoh.title")}
                title={t("home.portfolio4.otoh.title")}
                src={otohMockup4.src}
                />
              </OtohMockup2>
              <AwardContainer>
                <h6 className="no-js-hiddenX delay100">{t("home.portfolio4.otoh.award.title")}</h6>
                <AwardItem className="no-js-hiddenX delay100">
                  🥇
                  <p className="p1">
                    {t("home.portfolio4.otoh.award.award1")}
                    <br />
                    <br />
                    <Link rel="external" href="https://github.com/Shanmuk12/hyper-personalized-product-recommendation-using-Gen-ai-" target="_blank">
                      {t("home.portfolio4.otoh.award.callToAction")}
                    </Link>
                  </p>
                </AwardItem>
                <AwardItem className="no-js-hiddenX delay100">
                  🥈
                  <p className="p1">
                    {t("home.portfolio4.otoh.award.award2")}
                    <br />
                  </p>
                </AwardItem>
              </AwardContainer>
              <Link rel="external" className="no-js-hiddenX delay100" href="https://github.com/Shanmuk12/hyper-personalized-product-recommendation-using-Gen-ai-" target="_blank">
                <Button>
                  {t("home.portfolio4.otoh.learnMore")}
                </Button>
              </Link>
            </DescriptionContainer>
            <OtohMockup className="no-js-hiddenX delay100">
              <Image
                loading="lazy"
                quality={50}
                width={521}
                height={347}
                sizes="100%"
                alt={t("home.portfolio4.otoh.title")}
                title={t("home.portfolio4.otoh.title")}
                src={otohMockup4.src}
              />
            </OtohMockup>
          </PortfolioContainer>
        </Grid>
      );
    };
    
    export { Portfolio, Portfolio2, Portfolio3, Portfolio4 };
    
  
