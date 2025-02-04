import styled from 'styled-components';

import { animations } from '@hubert/styles';
import { HubPopoverProps } from './types';

export const PopoverOverlayStyle = styled.div<{ opened?: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 50;
`;

export const PopoverTriggerStyle = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ width }) => (width ? `width: ${width};` : '')}
`;

export const PopoverStyle = styled.div<HubPopoverProps>`
  position: absolute;
  z-index: 51;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: ${({ theme, radius }) => theme.spaces[radius || 1]};
  animation: 0.2s ease-in-out ${() => animations.fadein};
  min-width: 200px;
  ${({ width }) => (width ? `width: ${width}` : '')};
  max-height: ${({ height }) => height || '200px'};
  overflow-y: auto;

  background-color: ${({ theme, color, colorLevel }) =>
    color && colorLevel
      ? theme.colors[color][colorLevel]
      : color
      ? theme.colors[color][500]
      : theme.colors.white[500]};

  ${({ theme, pad }) => {
    if (!pad) return `padding: ${theme.spaces[2]} 0`;
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
`;
