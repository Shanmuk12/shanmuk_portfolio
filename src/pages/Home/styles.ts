import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  max-width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(7, auto);
  grid-template-areas:
    "main-area"
    "services-area"
    "about-area"
    "qualifications-area"
    "portfolio-area"
    "contact-area"
    "footer-area";
  row-gap: 8rem;

  footer {
    margin-bottom: -8rem;
  };
`;