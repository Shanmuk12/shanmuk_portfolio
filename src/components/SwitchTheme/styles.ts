import styled from "@emotion/styled";
import { Theme } from "@emotion/react";
import { HTMLAttributes } from "react";
import sunIcon from "../../../public/assets/icons/sun.svg";
import moonIcon from "../../../public/assets/icons/moon.svg";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  & .MuiSwitch-root {
    width: 6.2rem;
    height: 3.4rem;
    padding: 0.7rem;

    & .MuiSwitch-switchBase {
      margin: 1;
      padding: 0px;
      transform: translateX(0.6rem);
    };

    & .Mui-checked {
      color: ${({ theme }: { theme: Theme }) => theme.colors.txt};
      transform: translateX(2.2rem);

      & .MuiSwitch-thumb:before {
        background-image: url(${sunIcon.src});
        background-size: 60%;
      };

      & + .MuiSwitch-track {
        opacity: 1;
        background-color: ${({ theme }: { theme: Theme }) => theme.colors.purple};
      };
    };

    & .MuiSwitch-thumb {
      background-color: ${({ theme }: { theme: Theme }) => theme.colors.txt};
      width: 3.2rem;
      height: 3.2rem;

      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(${moonIcon.src});
        background-size: 60%;
      };
    };

    & .MuiSwitch-track {
      opacity: 1;
      background-color: ${({ theme }: { theme: Theme }) => theme.colors.purple};
      border-radius: 20 / 2;
    };
  };
`;