import styled from 'styled-components';

import { HubTokenProps } from './types';

export const TokenInputStyle = styled.input`
  text-align: center;
  background-color: transparent;
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.spaces[2]};

  &:focus {
    outline: none;
  }
`;

export const TokenStyle = styled.div<HubTokenProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]};

  ${TokenInputStyle} {
    ${({ theme, typo = 'h1' }) => `
      font-family: ${theme.typography[typo].family};
      font-size: ${theme.typography[typo].size};
      line-height: ${theme.typography[typo].lineHeight};
      letter-spacing: ${theme.typography[typo].letterSpacing};
      width: calc(${theme.spaces[3]} + ${theme.typography[typo].size});
      height: calc(${theme.spaces[6]} + ${theme.typography[typo].size});
    `}

    color: ${({ theme, color, colorLevel }) =>
      color && colorLevel
        ? theme.colors[color][colorLevel]
        : color
        ? theme.colors[color][500]
        : theme.colors.neutral[800]};

    border: 1px solid
      ${({ theme, color, colorLevel, borderColor, borderColorLevel }) => {
        if (borderColor) {
          return borderColor && borderColorLevel
            ? theme.colors[borderColor][borderColorLevel]
            : theme.colors[borderColor][500];
        }
        return color && colorLevel
          ? theme.colors[color][colorLevel]
          : color
          ? theme.colors[color][500]
          : theme.colors.neutral[400];
      }};

    background-color: ${({ theme, bgColor, bgColorLevel }) =>
      bgColor && bgColorLevel
        ? theme.colors[bgColor][bgColorLevel]
        : bgColor
        ? theme.colors[bgColor][500]
        : undefined};
  }
`;
