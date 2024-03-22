import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

export const Grid = styled.div<HTMLAttributes<HTMLElement>>`
  grid-area: services-area;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: .28fr 3fr .28fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". services-container .";
  box-sizing: border-box;
`;

export const ServicesContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: services-container;
  width: 100%;
  height: 100%;
  row-gap: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(8, auto);
  grid-template-areas:
    "title-area title-area"
    "subtitle-area subtitle-area"
    "frontend-area ."
    ". backend-area"
    "uidesign-area ."
    ". iotsolutions-area"
    "acousticengineering-area ."
    ". others-area";
  
  @media(max-width: 750px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(8, auto);
    grid-template-areas:
      "title-area"
      "subtitle-area"
      "frontend-area"
      "backend-area"
      "uidesign-area"
      "iotsolutions-area"
      "acousticengineering-area"
      "others-area";
  };

  .service-item {
    display: grid;
    width: 100%;
    height: auto;
    grid-template-columns: 10rem auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "service-number-area service-title-area"
      "service-content-area service-content-area";
    align-items: center;
    justify-content: start;
    row-gap: 1.5rem;
    
    h3 {
      grid-area: service-number-area;
      color: ${({ theme }) => theme.colors.purple};
    };

    h4 {
      grid-area: service-title-area;
    };

    p.p2 {
      grid-area: service-content-area;
    };

    @media(max-width: 530px) {
      h4 {
        font-size: 2.3rem;
        font-weight: 600;
        line-height: 100%;
        letter-spacing: 0.15%;
      };
    };
  };
`;

export const Title = styled.h1<HTMLAttributes<HTMLHeadingElement>>`
  grid-area: title-area;
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.purple};
`;

export const Subtitle = styled.h2<HTMLAttributes<HTMLHeadingElement>>`
  grid-area: subtitle-area;
  width: 100%;
  height: auto;

  @media(max-width: 750px) {
    font-size: 5.8rem;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.5%;
  };

  @media(max-width: 530px) {
    font-size: 4.6rem;
    font-weight: 700;
    line-height: 100%;
  };
`;

export const FrontEnd = styled.div`
  grid-area: frontend-area;
  width: 100%;
  height: auto;
`;

export const BackEnd = styled.div`
  grid-area: backend-area;
  width: 100%;
  height: auto;
`;

export const UIDesign = styled.div`
  grid-area: uidesign-area;
  width: 100%;
  height: auto;
`;

export const IoTSsolutions = styled.div`
  grid-area: iotsolutions-area;
  width: 100%;
  height: auto;
`;

export const AcousticEngineering = styled.div`
  grid-area: acousticengineering-area;
  width: 100%;
  height: auto;
`;

export const Others = styled.div`
  grid-area: others-area;
  width: 100%;
  height: auto;
`;