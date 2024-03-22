import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

export const Grid = styled.div<HTMLAttributes<HTMLElement>>`
  grid-area: contact-area;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: .28fr 3fr .28fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". contact-container .";
  box-sizing: border-box;
`;

export const ContactContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: contact-container;
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
    "social-media form-area";
  
  @media(max-width: 900px) {
    column-gap: 0px;
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      "title-area"
      "subtitle-area"
      "social-media"
      "form-area";
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

export const Form = styled.form<HTMLAttributes<HTMLFormElement>>`
  grid-area: form-area;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  row-gap: 2rem;

  h4 {
    margin-bottom: 2rem;
  }

  label {
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.5%;
    color: ${({ theme }) => theme.theme === "dark" ? theme.colors.paleBlue : theme.colors.black};

    :nth-of-type(2), :nth-of-type(3) {
      margin-top: 3rem;
    };
  };

  label::before {
    content: "*";
    color: red;
    margin-right: 0.5rem;
  }
  
  button {
    margin-top: 3rem;
    width: 50%;
    height: 6rem;

    @media(max-width: 900px) {
      margin: 3rem 0;
    };
  };

  input, textarea {
    width: 100%;
    border: none;
    background-color: transparent;
    font-size: 1.6rem;
    font-weight: 300;
    color: ${({ theme }) => theme.theme === "dark" ? theme.colors.paleBlue : theme.colors.black};
    border-bottom: ${({ theme }) => theme.theme === "dark" ? `1px solid ${theme.colors.paleBlue}` : `1px solid ${theme.colors.black}`};

    :focus, :active {
      outline: none;
    };

    ::placeholder{
      color: ${({ theme }) => theme.colors.darkLight};
      font-size: inherit;
      font-family: inherit;
      font-size: inherit;
    };

    :-webkit-autofill,
    :-webkit-autofill:hover, 
    :-webkit-autofill:focus {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: ${({ theme }) => theme.theme === "dark" ? theme.colors.paleBlue : theme.colors.black};
    };
  };

  @media(max-width: 900px) {
    margin-top: 3rem;
  };
`;

export const FormErrorMessage = styled.span<HTMLAttributes<HTMLSpanElement>>`
  width: 100%;
  height: auto;
  color: red;
  font-size: 1.4rem;
`;

export const SocialMedia = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: social-media;
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  row-gap: 5rem;

  :hover {
    .isNotHovered {
      opacity: .5;
    };
  };
`;

export const SocialMediaItem = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    "icon-area title-area"
    "icon-area link-area";
  column-gap: 1.3rem;
  row-gap: .5rem;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.txt};
  transition: opacity .3s ease-in-out;

  div {
    grid-area: icon-area;
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.borders.borderRadius};
    background-color: ${({ theme }) => theme.colors.techBg};
    filter: ${({ theme }) => theme.effects.filter};

    img {
      width: 3.2rem;
      height: 3.2rem;
    };
  };

  p {
    grid-area: title-area;
    width: 100%;
    height: auto;
  };

  a {
    grid-area: link-area;
    width: 100%;
    height: auto;
    text-decoration: none;
  };

  &.isHovered {
    color: ${({ theme }) => theme.colors.txt};
    a {
      text-decoration: underline;
    };
  };
`;