import styled from 'styled-components';

import { HubSeparatorProps } from './types';

export const SeparatorStyle = styled.div<HubSeparatorProps>`
  border-radius: ${({ theme, radius }) =>
    radius ? theme.spaces[radius] : '2px'};

  ${({ theme, color, colorLevel, borderStyle, vertical, size, length }) => {
    const hash =
      color && colorLevel
        ? theme.colors[color][colorLevel]
        : color
        ? theme.colors[color][500]
        : theme.colors.neutral[300];
    const height = size ? theme.spaces[size] || size : '1px';
    const width = length ? theme.spaces[length] || length : '100%';

    if (borderStyle) {
      if (vertical) {
        return `
          border-left: ${height} ${borderStyle} ${hash};
          height: ${width};
        `;
      } else {
        return `
          border-top: ${height} ${borderStyle} ${hash};
          width: ${width};
        `;
      }
    }

    if (vertical) {
      return `
        background-color: ${hash};
        width: ${height};
        height: ${width};
        min-height: ${width};
      `;
    } else {
      return `
        background-color: ${hash};
        width: ${width};
        height: ${height};
        min-height: ${height};
      `;
    }
  }}
`;
