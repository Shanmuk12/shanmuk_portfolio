import styled from "@emotion/styled";
import { ContainerProps } from "./BackToTopProps";

export const Container = styled.div<ContainerProps>`
  display: ${(props) => props.isVisible ? "flex" : "none"};
  width: 4rem;
  height: 4rem;
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  background-color: ${({ theme }) => theme.colors.purple};
  flex-direction: row;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  };
`;