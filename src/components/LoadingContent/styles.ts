import { HTMLAttributes } from "react";
import styled from "@emotion/styled";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .stage {
    border-bottom: 0.3rem solid #444;
    display: flex;
    height: 33rem;
    width: 100%;
  };

  .box {
    align-self: flex-end;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    height: auto;
    margin: 0 auto 0 auto;
    transform-origin: bottom;
    width: 20rem;
  };

  .bounce {
    animation-name: bounce;
    animation-timing-function: ease;
  };

  @keyframes bounce {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-10rem); }
    100% { transform: translateY(0); }
  };
`;