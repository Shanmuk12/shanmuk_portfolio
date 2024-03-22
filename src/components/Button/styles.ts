import { HTMLAttributes } from 'react';
import styled from "@emotion/styled";

export const Btn = styled.button<HTMLAttributes<HTMLButtonElement>>`
  min-width: 3.6rem;
  width: 100%;
  height: 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  transition: transform .3s ease-in-out;

  &:hover {
		cursor: pointer;
		box-shadow: ${({ theme }) => `0px 3px 3px ${theme.colors.darkLight}`};
    transform: scale(1.05);
	};

  &:active {
		box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.8);
	};
`;