import { keyframes } from 'styled-components';

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeout = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const indeterminate = keyframes`
  0% {
    transform: translateX(0) scaleX(0);
  }
  40% {
    transform: translateX(0) scaleX(0.4);
  }
  100% {
    transform: translateX(100%) scaleX(0.5);
  }
`;

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const growup = (percent?: string | number) => keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${percent || 100}%;
  }
`;

const blink = keyframes`
  0% {
    background-color: inherit;
  }
  20% {
    background-color: #FFE9C8;
  }
  100% {
    background-color: inherit;
  }
`;

/** Objeto que contem animações prontas */
export const animations = {
  fadein,
  fadeout,
  spin,
  indeterminate,
  shimmer,
  growup,
  blink
};

/** Objeto que contem animações prontas */
export type Animations = typeof animations;
