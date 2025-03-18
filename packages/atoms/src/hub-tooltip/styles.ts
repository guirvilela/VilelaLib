import { animations } from '@hubert/styles';
import styled from 'styled-components';

import { HubTooltipProps } from './types';

export const TooltipContentStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[1]}`};
  border-radius: ${({ theme }) => theme.spaces[1]};
  font-family: ${({ theme }) => theme.typography.body3.family};
  font-size: ${({ theme }) => theme.typography.body3.size};
  line-height: ${({ theme }) => theme.typography.body3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body3.letterSpacing};
  animation: 0.3s ease-in-out ${() => animations.fadein};
`;

export const TooltipArrowStyle = styled.div`
  position: absolute;
  border: ${({ theme }) =>
    `${theme.spaces[2]} solid ${theme.colors.neutralGrey[700]}`};
  animation: 0.3s ease-in-out ${() => animations.fadein};
`;

export const TooltipTriggerStyle = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ width }) => (width ? `width: ${width};` : '')}
`;

export const TooltipStyle = styled.div``;

export const TooltipContainerStyle = styled.div<HubTooltipProps>`
  position: absolute;
  z-index: 70;

  ${TooltipContentStyle} {
    width: ${({ width }) => width};
    ${({ nowrap }) => (nowrap ? 'white-space: nowrap;' : '')}
    background-color: ${({ theme, color, colorLevel }) =>
      color && colorLevel
        ? theme.colors[color][colorLevel]
        : color
        ? theme.colors[color][500]
        : theme.colors.neutralGrey[700]};
    color: ${({ theme, colorText, colorTextLevel }) =>
      colorText && colorTextLevel
        ? theme.colors[colorText][colorTextLevel]
        : colorText
        ? theme.colors[colorText][500]
        : theme.colors.white[500]};

    ${({ theme, position }) => {
      const margin = `calc(${theme.spaces[2]} + 2px)`;

      switch (position) {
        case 'top':
          return `
            bottom: 100%;
            margin-bottom: ${margin};
            left: 50%;
            transform: translateX(-50%);
          `;
        case 'left':
          return `
            right: 100%;
            margin-right: ${margin};
            top: 50%;
            transform: translateY(-50%);
          `;
        case 'right':
          return `
            left: 100%;
            margin-left: ${margin};
            top: 50%;
            transform: translateY(-50%);
          `;
        case 'topLeft':
          return `
            bottom: 100%;
            margin-bottom: ${margin};
            left: 50%;
            transform: translateX(-100%);
          `;
        case 'topRight':
          return `
            bottom: 100%;
            margin-bottom: ${margin};
            left: 50%;
            transform: translateX(-0%);
          `;
        case 'bottomLeft':
          return `
            top: 100%;
            margin-top: ${margin};
            left: 50%;
            transform: translateX(-100%);
          `;
        case 'bottomRight':
          return `
            top: 100%;
            margin-top: ${margin};
            left: 50%;
            transform: translateX(-0%);
          `;
        default:
          return `
            top: 100%;
            margin-top: ${margin};
            left: 50%;
            transform: translateX(-50%);
          `;
      }
    }}
  }

  ${TooltipArrowStyle} {
    ${({ theme, position, color, colorLevel }) => {
      const hash =
        color && colorLevel
          ? theme.colors[color][colorLevel]
          : color
          ? theme.colors[color][500]
          : theme.colors.neutralGrey[700];

      switch (position) {
        case 'top':
          return `
            bottom: 100%;
            margin-bottom: -${theme.spaces[1]};
            border-color: ${hash} transparent transparent transparent;
            left: 50%;
            transform: translateX(-50%);
          `;
        case 'left':
          return `
            right: 100%;
            margin-right: -${theme.spaces[1]};
            border-color: transparent transparent transparent ${hash};
            top: 50%;
            transform: translateY(-50%);
          `;
        case 'right':
          return `
            left: 100%;
            margin-left: -${theme.spaces[1]};
            border-color: transparent ${hash} transparent transparent;
            top: 50%;
            transform: translateY(-50%);
          `;
        case 'topLeft':
          return `
            bottom: 100%;
            margin-bottom: -${theme.spaces[1]};
            border-color: ${hash} transparent transparent transparent;
            left: 50%;
            transform: translateX(-150%);
          `;
        case 'topRight':
          return `
            bottom: 100%;
            margin-bottom: -${theme.spaces[1]};
            border-color: ${hash} transparent transparent transparent;
            left: 50%;
            transform: translateX(50%);
          `;
        case 'bottomLeft':
          return `
            top: 100%;
            margin-top: -${theme.spaces[1]};
            border-color: transparent transparent ${hash} transparent;
            left: 50%;
            transform: translateX(-150%);
          `;
        case 'bottomRight':
          return `
            top: 100%;
            margin-top: -${theme.spaces[1]};
            border-color: transparent transparent ${hash} transparent;
            left: 50%;
            transform: translateX(50%);
          `;
        default:
          return `
            top: 100%;
            margin-top: -${theme.spaces[1]};
            border-color: transparent transparent ${hash} transparent;
            left: 50%;
            transform: translateX(-50%);
          `;
      }
    }}
  }
`;
