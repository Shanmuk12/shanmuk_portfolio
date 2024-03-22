import { HTMLAttributes } from "react";
import styled from "@emotion/styled";

export const Grid = styled.div<HTMLAttributes<HTMLElement>>`
  grid-area: footer-area;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: .28fr 3fr .28fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". footer-container .";
  box-sizing: border-box;
  /* margin-bottom: -8rem; */
`;

export const FooterContainer = styled.footer<HTMLAttributes<HTMLElement>>`
  grid-area: footer-container;
  width: 100%;
  height: auto;
  min-height: 18rem;
  color: ${({ theme }) => theme.colors.txt};
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "coffee-area"
    "network-area"
    "copy-area";
  gap: 2rem 1rem;
  padding: 1.5rem 0;
  justify-content: center;
  align-items: center;
  text-align: center;

  .a {
    font-weight: 300;
  };

  p {
    grid-area: copy-area;
  };

  div {
    grid-area: network-area;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    height: auto;
    column-gap: 3rem;
    justify-self: center;

    a {
      transition: opacity .3s ease-in-out, transform .3s ease-in-out;
    };

    :hover {
      .isHovered {
        transform: scale(1.1);
      };

      .isNotHovered {
        opacity: .5;
      };
    };
  };

  .a {
    grid-area: coffee-area;
  };

  .a:hover {
    text-decoration: underline;
  }

  @media(min-width: 750px) {
    grid-template-rows: auto;
    grid-template-columns: repeat(3, auto);
    grid-template-areas:"copy-area network-area coffee-area";
    justify-content: space-between;

    p {
      text-align: left;
    };

    div {
      justify-self: center;
    };

    .a {
      text-align: right;
    };
  };

  @media(min-width: 900px) {
    grid-template-columns: calc(50% - 1rem) calc(25% - .5rem) calc(25% - .5rem);

    div {
      justify-self: flex-start;
    };
  };
`;