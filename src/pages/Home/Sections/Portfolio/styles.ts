import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

export const Grid = styled.div<HTMLAttributes<HTMLElement>>`
  grid-area: portfolio-area;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: .28fr 3fr .28fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". portfolio-container .";
  box-sizing: border-box;
`;

export const PortfolioContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: portfolio-container;
  width: 100%;
  height: 100%;
  row-gap: 5rem;
  column-gap: 3rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1.5rem));
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "title-area ."
    "subtitle-area ."
    "description-area otoh-mockup-area";
  
  @media(max-width: 1024px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      "title-area"
      "subtitle-area"
      "description-area"
      "otoh-mockup-area";
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
  height: fit-content;

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

export const OtohMockup = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: otoh-mockup-area;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borders.borderRadius};

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    min-width: 25rem !important;
    border-radius: ${({ theme }) => theme.borders.borderRadius};
  };

  @media(max-width: 1024px) {
    display: none;
  };
`;
export const novaMockup = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: otoh-mockup-area;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borders.borderRadius};

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    min-width: 25rem !important;
    border-radius: ${({ theme }) => theme.borders.borderRadius};
  };

  @media(max-width: 1024px) {
    display: none;
  };
`;

export const OtohMockup2 = OtohMockup;

export const DescriptionContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: description-area;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  row-gap: 4rem;

  #otoh-mockup {
    display: none;
  };

  a {
    width: fit-content;

    button {
      width: fit-content;
      height: 6rem;
      padding: 0 2rem;
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.yellow};
    };
  };

  @media(max-width: 1024px) {
    #otoh-mockup {
      display: flex;
    };
  };
`;

export const AwardContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 2rem;

  h6 {
    color: ${({ theme }) => theme.colors.yellow};
  };
`;

export const AwardItem = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 3.2rem !important;
    height: auto !important;
  };

  span {
    font-family: "Syne", sans-serif;
    font-size: 1.9rem;
    font-weight: 600;
    line-height: 100%;
    color: ${({ theme }) => theme.colors.txt};
  };

  a {
    color: ${({ theme }) => theme.colors.yellow};
    font-weight: normal;
  };

  a:hover {
    text-decoration: underline;
  }
`; 
