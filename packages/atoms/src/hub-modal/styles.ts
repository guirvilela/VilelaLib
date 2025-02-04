import { animations } from '@hubert/styles';
import styled from 'styled-components';

import { HubModalProps } from './types';

export const ModalOverlayStyle = styled.div`
  inset: 0;
  z-index: 40;
  background-color: ${({ theme }) => `${theme.colors.neutral[500]}24`};
  animation: 0.5s ease ${() => animations.fadein};
`;

export const ModalHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces[5]};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: ${({ theme }) => theme.typography.h4.family};
  font-size: ${({ theme }) => theme.typography.h4.size};
  line-height: ${({ theme }) => theme.typography.h4.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h4.letterSpacing};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[300]};
`;

export const ModalHeaderBtnCloseStyle = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
`;

export const ModalHeaderCloseFloatStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[3]} 0 0`};
  margin-bottom: ${({ theme }) => `-${theme.spaces[2]}`};
`;

export const ModalBodyStyle = styled.div<{
  minHeight?: string;
  maxHeight?: string;
  offsetHeight?: number;
}>`
  ${({ minHeight, maxHeight, offsetHeight }) => {
    if (minHeight && maxHeight) {
      return `
        min-height: calc(${minHeight} - ${offsetHeight}px);
        max-height: calc(${maxHeight} - ${offsetHeight}px);
        overflow: auto;
      `;
    }
    if (minHeight) {
      return `
        min-height: calc(${minHeight} - ${offsetHeight}px);
        overflow: auto;
      `;
    }
    if (maxHeight) {
      return `
        max-height: calc(${maxHeight} - ${offsetHeight}px);
        overflow: auto;
      `;
    }
    return '';
  }}
`;

export const ModalWrapperStyle = styled.div`
  z-index: 42;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: 4px;
  animation: 0.5s ease ${() => animations.fadein};
`;

export const ModalActionsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces[2]};
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[5]}`};
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const ModalStyle = styled.div<HubModalProps>`
  position: fixed;
  display: flex;
  z-index: 41;
  ${({ position }) => {
    switch (position) {
      case 'top':
        return `
          align-items: start;
          justify-content: center;
        `;
      case 'right':
        return `
          align-items: center;
          justify-content: end;
        `;
      case 'bottom':
        return `
          align-items: end;
          justify-content: center;
        `;
      case 'left':
        return `
          align-items: center;
          justify-content: start;
        `;
      default:
        return `
          align-items: center;
          justify-content: center;
        `;
    }
  }}

  ${({ theme, offset }) => {
    if (!offset) return `inset: 0;`;
    if (typeof offset === 'string')
      return `inset: ${theme.spaces[offset] || offset};`;
    if (offset.length === 4) {
      return `inset: ${theme.spaces[offset[0]] || offset[0]} ${
        theme.spaces[offset[1]] || offset[1]
      } ${theme.spaces[offset[2]] || offset[2]} ${
        theme.spaces[offset[3]] || offset[3]
      };`;
    }
    if (offset.length === 3) {
      return `inset: ${theme.spaces[offset[0]] || offset[0]} ${
        theme.spaces[offset[1]] || offset[1]
      } ${theme.spaces[offset[2]] || offset[2]};`;
    }
    if (offset.length === 2) {
      return `inset: ${theme.spaces[offset[0]] || offset[0]} ${
        theme.spaces[offset[1]] || offset[1]
      };`;
    }
    return `inset: ${theme.spaces[offset[0]] || offset[0]};`;
  }}

  ${ModalOverlayStyle} {
    position: fixed;
    ${({ theme, darkOverlay }) =>
      darkOverlay ? `background-color: ${theme.colors.neutral[700]}80;` : ''}
  }

  ${ModalBodyStyle} {
    ${({ theme, pad }) => {
      if (!pad) return `padding: ${theme.spaces[3]}`;
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

    ${({ overflow }) =>
      overflow &&
      `
      overflow-y: ${
        (Array.isArray(overflow) ? overflow[0] : overflow) ? 'auto' : 'hidden'
      };
      overflow-x: ${
        (Array.isArray(overflow) ? overflow[1] : overflow) ? 'auto' : 'hidden'
      };
    `};
  }

  ${ModalWrapperStyle} {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    min-width: ${({ minWidth }) => minWidth};
    max-width: ${({ maxWidth }) => maxWidth};
    border-radius: ${({ theme, radius }) => theme.spaces[radius || 1]};
    background-color: ${({ theme, color, colorLevel }) =>
      color && colorLevel
        ? theme.colors[color][colorLevel]
        : color
        ? theme.colors[color][500]
        : theme.colors.white[500]};
    transition: 0.5s width;

    @media (${({ theme }) => theme.mediaQuery.md}) {
      width: ${({ widthMd }) => widthMd || '96vw'};
    }
  }

  ${ModalHeaderCloseFloatStyle} {
    color: ${({ theme, colorText, colorTextLevel }) =>
      colorText && colorTextLevel
        ? theme.colors[colorText][colorTextLevel]
        : colorText
        ? theme.colors[colorText][500]
        : theme.colors.neutralGrey[600]};
  }

  ${ModalHeaderStyle} {
    padding: ${({ theme }) => theme.spaces[3]};
    border-bottom: none;
  }

  ${({ noPrintable }) =>
    noPrintable &&
    `
    @media print {
      display: none;
    }
  `}
`;
