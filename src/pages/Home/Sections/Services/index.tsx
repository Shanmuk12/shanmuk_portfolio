import { FC } from "react";
/**Props */
import ServicesProps from "./ServicesProps";
/**Styles */
import {
  Grid, ServicesContainer, Title, Subtitle, FrontEnd, BackEnd,
  UIDesign, IoTSsolutions, AcousticEngineering, Others
} from "./styles";

const Services: FC<ServicesProps> = ({ t }): JSX.Element => {
  return (
    <Grid id="services">
      <ServicesContainer>
        <Title className="st1">{t("home.services.title")}</Title>
        <Subtitle className="no-js-hiddenY">{t("home.services.subtitle")}</Subtitle>
        <FrontEnd className="no-js-hiddenX delay100">
          <div className="service-item">
            <h3 className="service-number-area">01/</h3>
            <h4 className="service-title-area">{t("home.services.frontEnd")}</h4>
            <p className="p2">
              {t("home.services.frontEndDescription")}
            </p>
          </div>
        </FrontEnd >
        <BackEnd className="no-js-hiddenX delay100">
          <div className="service-item">
            <h3 className="service-number-area">02/</h3>
            <h4 className="service-title-area">{t("home.services.backEnd")}</h4>
            <p className="p2">
              {t("home.services.backEndDescription")}
            </p>
          </div>
        </BackEnd>
        <UIDesign className="no-js-hiddenX delay100">
          <div className="service-item">
            <h3 className="service-number-area">03/</h3>
            <h4 className="service-title-area">{t("home.services.UIDesign")}</h4>
            <p className="p2">
              {t("home.services.UIDesignDescription")}
            </p>
          </div>
        </UIDesign>
        <IoTSsolutions className="no-js-hiddenX delay100">
          <div className="service-item">
            <h3 className="service-number-area">04/</h3>
            <h4 className="service-title-area">{t("home.services.IoTSolutions")}</h4>
            <p className="p2">
              {t("home.services.IoTSolutionsDescription")}
            </p>
          </div>
        </IoTSsolutions>
        <AcousticEngineering className="no-js-hiddenX delay100">
          <div className="service-item">
            <h3 className="service-number-area">05/</h3>
            <h4 className="service-title-area">{t("home.services.acousticalEng")}</h4>
            <p className="p2">
              {t("home.services.acousticalEngDescription")}
            </p>
          </div>
        </AcousticEngineering>
        <Others className="no-js-hiddenX delay100">
          <div className="service-item">
            <h3 className="service-number-area">06/</h3>
            <h4 className="service-title-area">{t("home.services.others")}</h4>
            <p className="p2">
              {t("home.services.othersDescription")}
            </p>
          </div>
        </Others>
      </ServicesContainer>
    </Grid>
  );
};

export default Services;