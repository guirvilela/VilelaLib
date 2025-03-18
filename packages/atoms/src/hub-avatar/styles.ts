import styled from 'styled-components';

import { HubAvatarProps } from './types';

export const AvatarImgStyle = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 50%;
`;

export const AvatarInitialsStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const AvatarStyle = styled.div<HubAvatarProps>`
  ${({ theme, size }) => {
    if (!size) {
      return `
        width: ${theme.spaces[7]};
        height: ${theme.spaces[7]};
        min-width: ${theme.spaces[7]};
      `;
    }

    switch (size) {
      case 'xs':
        return `
          width: ${theme.spaces[3]};
          height: ${theme.spaces[3]};
          min-width: ${theme.spaces[3]};
        `;
      case 'sm':
        return `
          width: ${theme.spaces[5]};
          height: ${theme.spaces[5]};
          min-width: ${theme.spaces[5]};
        `;
      case 'md':
        return `
          width: ${theme.spaces[7]};
          height: ${theme.spaces[7]};
          min-width: ${theme.spaces[7]};
        `;
      case 'lg':
        return `
          width: ${theme.spaces[10]};
          height: ${theme.spaces[10]};
          min-width: ${theme.spaces[10]};
        `;
      default:
        return `
          width: ${size};
          height: ${size};
          min-width: ${size};
        `;
    }
  }}
  ${({ borderless, theme }) =>
    borderless
      ? ''
      : `
    padding: ${theme.spaces[1]};
    border: 1px solid ${theme.colors.neutral[400]};
  `};

  border-radius: 50%;

  ${AvatarInitialsStyle} {
    ${({ theme, typo }) => `
      font-family: ${theme.typography[typo || 'h4'].family};
      font-size: ${theme.typography[typo || 'h4'].size};
      line-height: ${theme.typography[typo || 'h4'].lineHeight};
      letter-spacing: ${theme.typography[typo || 'h4'].letterSpacing};
    `}

    background-color: ${({ theme, color, colorLevel }) =>
      color && colorLevel
        ? theme.colors[color][colorLevel]
        : color && theme.colors[color]
        ? theme.colors[color][500]
        : color
        ? color
        : undefined};

    color: ${({ theme, colorText, colorTextLevel }) =>
      colorText && colorTextLevel
        ? theme.colors[colorText][colorTextLevel]
        : colorText && theme.colors[colorText]
        ? theme.colors[colorText][500]
        : colorText
        ? colorText
        : theme.colors.neutral[800]};
  }
`;
