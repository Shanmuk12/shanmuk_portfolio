import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

interface HeaderContainerProps extends HTMLAttributes<HTMLDivElement> {
  isOnTop: boolean;
};

export const Grid = styled.div<HeaderContainerProps>`
  width: 100%;
  height: 8rem;
  background-color: ${(props) => props.isOnTop ? props.theme.colors.bg : "transparent" };
  transition: background-color .5s ease;
  display: grid;
  grid-template-columns: .28fr 3fr .28fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". header-container .";
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  filter: ${(props) => props.isOnTop ? props.theme.effects.filter : "none" };
`;

export const HeaderContainer = styled.header<HTMLAttributes<HTMLElement>>`
  grid-area: header-container;
  
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, auto);
  grid-template-areas: "left-area middle-area right-area";
  
  @media(max-width: 900px) {
    grid-template-columns: repeat(2, auto);
    grid-template-areas: "left-area right-area";
    justify-content: space-between;
  };

  .header-animate {
    animation: topdown 1s 450ms backwards;
  };

  @keyframes topdown {
    0% {
      opacity: 0;
      filter: blur(.5rem);
      transform: translateY(-100%);
    };

    100% {
      opacity: 1;
      filter: blur(0);
      transform: translateY(0);
    };
  };
`;

export const Logo = styled.h6<HTMLAttributes<HTMLHeadingElement>>`
  grid-area: left-area;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  margin: auto;
  background: ${(props) => props.theme.colors.logoGradient};
  background-size: 200% auto;
  background-clip: text;
  line-height: 90%;
  cursor: pointer;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 2s linear infinite;

  a {
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
  };

  @keyframes shine {
    to {
      background-position: 110% center;
    };
  };
`;

export const Middle = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: middle-area;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 900px) {
    display: none;
  };
`;

export const Right = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: right-area;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: auto;

  @media(max-width: 900px) {
    > a {
      display: none;
    };
  };
`;