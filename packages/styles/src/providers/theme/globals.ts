import { createGlobalStyle } from 'styled-components';
import { ThemeConfig } from './types';

/** @ignore */
export default createGlobalStyle<ThemeConfig>`
  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.typography.body1.family};
    font-size: ${({ theme }) => theme.typography.body1.size};
    line-height: ${({ theme }) => theme.typography.body1.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.body1.letterSpacing};
    font-weight: 400;
    position: relative;
    min-height: ${({ height }) => height || '100vh'};

    background-color: ${({ bgColor, bgColorLevel }) =>
      bgColor && bgColorLevel
        ? ({ theme }) => theme.colors[bgColor][bgColorLevel]
        : bgColor
        ? ({ theme }) => theme.colors[bgColor][500]
        : ({ theme }) => theme.colors.white[500]};
    color: ${({ textColor, textColorLevel }) =>
      textColor && textColorLevel
        ? ({ theme }) => theme.colors[textColor][textColorLevel]
        : textColor
        ? ({ theme }) => theme.colors[textColor][500]
        : ({ theme }) => theme.colors.neutral[800]};

    @media (${({ theme }) => theme.mediaQuery.md}) {
      font-family: ${({ theme }) => theme.typography.body2.family};
      font-size: ${({ theme }) => theme.typography.body2.size};
      line-height: ${({ theme }) => theme.typography.body2.lineHeight};
      letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
    }
  }
`;
