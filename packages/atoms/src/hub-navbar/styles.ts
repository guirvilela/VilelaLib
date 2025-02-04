import styled from 'styled-components';

import { HubNavbarProps } from './types';

export const NavbarStyle = styled.div<HubNavbarProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height || '75px'};
  gap: ${({ theme, gap }) => theme.spaces[gap || 5]};

  background-color: ${({ theme, color, colorLevel }) =>
    color && colorLevel
      ? theme.colors[color][colorLevel]
      : color && theme.colors[color]
      ? theme.colors[color][500]
      : color
      ? color
      : theme.colors.primary[500]};
  color: ${({ theme, colorText, colorTextLevel }) =>
    colorText && colorTextLevel
      ? theme.colors[colorText][colorTextLevel]
      : colorText && theme.colors[colorText]
      ? theme.colors[colorText][500]
      : colorText
      ? colorText
      : theme.colors.white[500]};

  ${({ fixed }) =>
    fixed
      ? `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 31;
  `
      : ''}

  ${({ theme, pad }) => {
    if (typeof pad === 'string') {
      return `padding: 0 ${theme.spaces[pad]};`;
    }
    if (Array.isArray(pad)) {
      return `padding: ${pad.reduce(
        (acc, x) => acc + `${theme.spaces[x]} `,
        ''
      )};`;
    }
    return `
      padding: 0 ${theme.spaces[6]};

      @media (${theme.mediaQuery.md}) {
        padding: 0 ${theme.spaces[3]};
      }
    `;
  }}
`;

export const NavbarSpacerStyle = styled.div`
  flex: 1 1 auto;
`;

export const NavbarContentStyle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[3]};
`;
