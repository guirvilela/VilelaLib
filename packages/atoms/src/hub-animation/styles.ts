import styled from 'styled-components';

import { HubAnimationProps } from './types';

export const AnimationStyle = styled.div<HubAnimationProps & { ref }>`
  ${({ theme, size, width, height }) => {
    switch (size) {
      case 'xs':
        return `
          width: ${theme.spaces[2]};
          height: ${theme.spaces[2]};
          min-width: ${theme.spaces[2]};
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
`;
