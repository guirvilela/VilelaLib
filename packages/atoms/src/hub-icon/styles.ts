import styled from 'styled-components';

import { HubIconProps } from './types';

export const IconStyle = styled.div<Omit<HubIconProps, 'icon'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${({ theme, size, width, height }) => {
    switch (size) {
      case 'xs':
        return `
          width: calc(${theme.spaces[2]} + 4px);
          height: calc(${theme.spaces[2]} + 4px);
          min-width: calc(${theme.spaces[2]} + 4px);
        `;
      case 'sm':
        return `
          width: ${theme.spaces[3]};
          height: ${theme.spaces[3]};
          min-width: ${theme.spaces[3]};
        `;
      case 'md':
        return `
          width: ${theme.spaces[5]};
          height: ${theme.spaces[5]};
          min-width: ${theme.spaces[5]};
        `;
      case 'lg':
        return `
          width: ${theme.spaces[6]};
          height: ${theme.spaces[6]};
          min-width: ${theme.spaces[6]};
        `;
      default:
        return `
          width: ${width || theme.spaces[5]};
          height: ${height || theme.spaces[5]};
          min-width: ${width || theme.spaces[5]};
        `;
    }
  }}

  color: ${({ theme, color, colorLevel }) =>
    color && colorLevel
      ? theme.colors[color][colorLevel]
      : color && theme.colors[color]
      ? theme.colors[color][500]
      : color
      ? color
      : undefined};

  background-color: ${({ theme, bgColor, bgColorLevel }) =>
    bgColor && bgColorLevel
      ? theme.colors[bgColor][bgColorLevel]
      : bgColor && theme.colors[bgColor]
      ? theme.colors[bgColor][100]
      : bgColor
      ? bgColor
      : undefined};

  ${({ theme, pad }) => {
    if (typeof pad === 'string') {
      return `padding: ${theme.spaces[pad]};`;
    }
    if (Array.isArray(pad)) {
      return `padding: ${pad.reduce(
        (acc, x) => acc + `${theme.spaces[x]} `,
        ''
      )};`;
    }
    return '';
  }}

  svg {
    height: inherit;
    width: inherit;
    min-width: inherit;
    transition: 0.3s ease-in-out transform;
  }
`;
