import { animations } from '@hubert/styles';
import styled from 'styled-components';

import { HubCollapseProps } from './types';

export const CollapseHeader = styled.div<{ disabled?: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spaces[1]};
`;

export const CollapseHeaderTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.body1.size};
  font-weight: 600;
`;

export const CollapseHeaderTrigger = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutral[200] : theme.colors.neutral[300]};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const CollapseContent = styled.div`
  animation: 0.3s ease-in-out ${() => animations.fadein};
  width: 100%;
`;

export const CollapseStyle = styled.div<HubCollapseProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, gap }) => theme.spaces[gap || 3]};
  width: ${({ width }) => width || '100%'};

  ${({ align }) => (align ? `align-items: ${align};` : '')}

  ${CollapseHeader} {
    ${({ titleClickable, disabled }) =>
      titleClickable
        ? disabled
          ? 'cursor: not-allowed;'
          : 'cursor: pointer;'
        : ''}
    ${({ titleAlign }) => (titleAlign ? `align-items: ${titleAlign};` : '')}
    width: ${({ titleWidth }) => titleWidth || '100%'};

    ${({ theme, titlePad }) => {
      if (!titlePad) return '';
      if (typeof titlePad === 'string')
        return `padding: ${theme.spaces[titlePad]};`;
      if (titlePad.length === 4) {
        return `padding: ${theme.spaces[titlePad[0]]} ${
          theme.spaces[titlePad[1]]
        } ${theme.spaces[titlePad[2]]} ${theme.spaces[titlePad[3]]};`;
      }
      if (titlePad.length === 3) {
        return `padding: ${theme.spaces[titlePad[0]]} ${
          theme.spaces[titlePad[1]]
        } ${theme.spaces[titlePad[2]]};`;
      }
      if (titlePad.length === 2) {
        return `padding: ${theme.spaces[titlePad[0]]} ${
          theme.spaces[titlePad[1]]
        };`;
      }
      return `padding: ${theme.spaces[titlePad[0]]};`;
    }}

    ${({ theme, titleColor, titleColorLevel }) =>
      titleColor
        ? `background-color: ${
            titleColorLevel
              ? theme.colors[titleColor][titleColorLevel]
              : theme.colors[titleColor]
              ? theme.colors[titleColor][300]
              : titleColor
          };`
        : ''}

    ${({ theme, titleRadius }) =>
      titleRadius ? `border-radius: ${theme.spaces[titleRadius]};` : ''}
  }

  ${CollapseHeaderTitle} {
    ${({ nowrap }) => (nowrap ? 'white-space: nowrap;' : '')}
    width: ${({ titleWidth }) => (titleWidth === 'auto' ? 'auto' : '100%')};
  }

  ${CollapseHeaderTrigger} > svg {
    transition: 0.3s ease-in-out transform;
  }

  ${CollapseContent} {
    ${({ height }) =>
      height
        ? `
      max-height: ${height};
      overflow-y: auto;
    `
        : ''}
  }
`;
