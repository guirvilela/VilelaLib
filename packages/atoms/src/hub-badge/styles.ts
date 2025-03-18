import styled, { css } from 'styled-components';

import { HubBadgeProps } from './types';

const allStyle = css<HubBadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${({ theme }) => theme.spaces[2]};

  ${({ theme, size, width, height }) => {
    if (width || height) {
      return `
        width: ${width};
        height: ${height};
      `;
    }

    switch (size) {
      case 'xs':
        return `
          width: ${theme.spaces[2]};
          height: ${theme.spaces[2]};
        `;
      case 'sm':
        return `
          width: ${theme.spaces[3]};
          height: ${theme.spaces[3]};
        `;
      case 'md':
        return `
          width: ${theme.spaces[4]};
          height: ${theme.spaces[4]};
        `;
      case 'lg':
        return `
          width: ${theme.spaces[5]};
          height: ${theme.spaces[5]};
        `;
      default:
        return '';
    }
  }}

  background-color: ${({ theme, color, colorLevel }) =>
    color && colorLevel
      ? theme.colors[color][colorLevel]
      : color
      ? theme.colors[color][100]
      : theme.colors.neutral[200]};

  color: ${({ theme, color, textColor, textColorLevel }) =>
    textColor && textColorLevel
      ? theme.colors[textColor][textColorLevel]
      : textColor
      ? theme.colors[textColor][500]
      : color
      ? theme.colors[color][500]
      : theme.colors.neutral[500]};

  border-radius: ${({ theme, rounded, radius }) =>
    rounded ? '50%' : theme.spaces[radius || '1']};

  ${({ theme, pad }) => {
    if (!pad) return `padding: 2px 6px`;
    if (typeof pad === 'string') return `padding: ${theme.spaces[pad]}`;
    if (pad.length === 4) {
      return `padding: ${theme.spaces[pad[0]]} ${theme.spaces[pad[1]]} ${
        theme.spaces[pad[2]]
      } ${theme.spaces[pad[3]]}`;
    }
    if (pad.length === 3) {
      return `padding: ${theme.spaces[pad[0]]} ${theme.spaces[pad[1]]} ${
        theme.spaces[pad[2]]
      }`;
    }
    if (pad.length === 2) {
      return `padding: ${theme.spaces[pad[0]]} ${theme.spaces[pad[1]]}`;
    }
    return `padding: ${theme.spaces[pad[0]]}`;
  }};

  font-family: ${({ theme }) => theme.typography.body2.family};
  font-size: ${({ theme }) => theme.typography.body2.size};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
  font-weight: 600;
`;

const floatStyle = css<HubBadgeProps>`
  position: relative;

  &::after {
    ${allStyle}

    position: absolute;
    content: '${({ content }) => content}';
    border: 1px solid ${({ theme }) => theme.colors.white[500]};
    ${({ theme, position }) => {
      if (position) {
        if (Array.isArray(position)) {
          return `
            top: -${theme.spaces[position[0]]};
            right: -${theme.spaces[position[1]]};
          `;
        }
        return `
          top: -${theme.spaces[position]};
          right: -${theme.spaces[position]};
        `;
      }
      return `
        top: -10px;
        right: -10px;
      `;
    }}
    ${({ theme }) => `
      min-width: ${theme.spaces[4]};
      width: ${theme.spaces[4]};
      height: ${theme.spaces[4]};
    `}
    padding: 0;

    font-family: ${({ theme }) => theme.typography.body3.family};
    font-size: ${({ theme }) => theme.typography.body3.size};
    line-height: ${({ theme }) => theme.typography.body3.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.body3.letterSpacing};
  }
`;

export const BadgeStyle = styled.div<HubBadgeProps>`
  ${({ float, content }) => {
    if (float) {
      if (content) {
        return floatStyle;
      }
    } else {
      return allStyle;
    }
    return '';
  }}
`;
