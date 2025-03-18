import styled from 'styled-components';

import { HubSidenavProps } from './types';

export const SidenavContentStyle = styled.div<{ hasOverflow?: boolean }>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  color: inherit;
  ${({ hasOverflow }) => (hasOverflow ? 'overflow-y: auto;' : '')}
`;

export const SidenavIconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SidenavStyle = styled.div<HubSidenavProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: ${({ width }) => width || '245px'};
  max-width: ${({ width }) => width || '245px'};
  height: ${({ offset }) => (offset ? `calc(100vh - ${offset})` : '100vh')};
  ${({ theme, gap }) => (gap ? `gap: ${theme.spaces[gap]};` : '')}

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

  ${({ fixed, offset }) =>
    fixed
      ? `
    position: fixed;
    top: ${offset || 0};
    left: 0;
    z-index: 31;
  `
      : ''}

  ${({ theme, pad }) => {
    if (typeof pad === 'string') {
      return `padding: ${theme.spaces[pad]} 0;`;
    }
    if (Array.isArray(pad)) {
      return `padding: ${pad.reduce(
        (acc, x, i) => (i % 2 === 0 ? acc + `${theme.spaces[x]} ` : acc),
        ''
      )};`;
    }
    return `padding: ${theme.spaces[3]} 0;`;
  }}

  ${({ noAnimation }) =>
    !noAnimation ? `animation: ease-in-out both 0.4s effect;` : ''}


  @keyframes effect {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: ${({ width }) => width || '245px'};
      max-width: ${({ width }) => width || '245px'};
    }
  }

  ${SidenavContentStyle} {
    ${({ theme, gap }) => (gap ? `gap: ${theme.spaces[gap]};` : '')}

    ${({ theme, pad }) => {
      if (typeof pad === 'string') {
        return `padding: 0 ${theme.spaces[pad]};`;
      }
      if (Array.isArray(pad)) {
        return `padding: ${pad.reduce(
          (acc, x, i) => (i % 2 !== 0 ? acc + `${theme.spaces[x]} ` : acc),
          ''
        )};`;
      }
      return `padding: 0 ${theme.spaces[6]};`;
    }}

    ${({ theme }) => `
      font-family: ${theme.typography.body2.family};
      font-size: ${theme.typography.body2.size};
      line-height: ${theme.typography.body2.lineHeight};
      letter-spacing: ${theme.typography.body2.letterSpacing};
    `}

    ${({ noContentHeight }) => (noContentHeight ? '' : 'height: 100%;')}
  }

  ${SidenavIconStyle} {
    color: ${({ theme, colorText, colorTextLevel }) =>
      colorText && colorTextLevel
        ? theme.colors[colorText][colorTextLevel]
        : colorText && theme.colors[colorText]
        ? theme.colors[colorText][500]
        : colorText
        ? colorText
        : theme.colors.white[500]};
  }
`;

export const SidenavSpacerStyle = styled.div`
  flex: 1 1 auto;
`;

export const SidenavSpaceStyle = styled.div`
  margin-top: ${({ theme }) => theme.spaces[3]};
`;

export const SidenavOverlayStyle = styled.div`
  position: fixed;
  inset: 0;
  z-index: 30;
`;
