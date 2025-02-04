import styled from 'styled-components';

import { HubRadioGroupProps, HubRadioProps } from './types';

export const RadioGroupStyle = styled.div<HubRadioGroupProps>`
  display: flex;
  gap: ${({ theme, gap }) => theme.spaces[gap || 2]};
  ${({ vertical, align }) => {
    if (vertical) {
      return `
        flex-direction: column;
        justify-content: ${align};
      `;
    }
    return `
      flex-direction: row;
      align-items: ${align || 'center'};
    `;
  }};
`;

export const RadioLabelStyle = styled.label`
  font-family: ${({ theme }) => theme.typography.body2.family};
  font-size: ${({ theme }) => theme.typography.body2.size};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
  font-weight: 400;
  margin-left: ${({ theme }) => theme.spaces[2]};
`;

export const RadioIconStyle = styled.div`
  border-radius: 50%;
  transition: border-color 0.5s;
`;

export const RadioInputStyle = styled.input`
  display: none;
`;

export const RadioStyle = styled.div<HubRadioProps & { clickable: boolean }>`
  display: flex;
  align-items: center;
  ${({ clickable, disabled }) =>
    disabled
      ? 'cursor: not-allowed;'
      : clickable
      ? 'cursor: pointer;'
      : undefined}

  ${RadioIconStyle} {
    background-color: ${({ theme, checked, disabled, color }) => {
      if (!checked && disabled) {
        return color ? theme.colors[color][100] : theme.colors.neutral[200];
      }
      return theme.colors.white[500];
    }};
    border: ${({ theme, checked, disabled, color, size }) => {
      const border = size === 'lg' ? '7px solid' : '4px solid ';

      if (checked && disabled) {
        return border + theme.colors[color || 'neutral'][400];
      }
      if (!checked || disabled) {
        return `1px solid ${theme.colors[color || 'neutral'][400]}`;
      }
      if (checked) {
        return border + theme.colors[color || 'primary'][500];
      }
      return `${border} transparent`;
    }};
    ${({ theme, size }) => `
    min-width: ${size === 'lg' ? theme.spaces[5] : theme.spaces[3]};
    width: ${size === 'lg' ? theme.spaces[5] : theme.spaces[3]};
    height: ${size === 'lg' ? theme.spaces[5] : theme.spaces[3]};
  `}
  }
`;
