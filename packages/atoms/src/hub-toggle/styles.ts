import styled from 'styled-components';

import { HubToggleProps } from './types';

export const ToggleIconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 120px;
  transition: background-color 0.5s;
`;

export const ToggleSwitchStyle = styled.div`
  border-radius: 50%;
  position: absolute;
  transition: right 0.5s;
`;

export const ToggleInputStyle = styled.input`
  display: none;
`;

export const ToggleLabelStyle = styled.label`
  font-family: ${({ theme }) => theme.typography.body2.family};
  font-size: ${({ theme }) => theme.typography.body2.size};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
  font-weight: 400;
  margin-left: ${({ theme }) => theme.spaces[2]};
`;

export const ToggleStyle = styled.div<HubToggleProps & { clickable: boolean }>`
  display: flex;
  align-items: center;
  ${({ clickable, disabled }) =>
    disabled
      ? 'cursor: not-allowed;'
      : clickable
      ? 'cursor: pointer;'
      : undefined}

  ${ToggleIconStyle} {
    background-color: ${({ theme, checked, color }) => {
      if (checked) {
        return theme.colors[color || 'primary'][500];
      }
      return theme.colors.neutral[400];
    }};
    ${({ theme, size }) => `
      min-width: ${size === 'lg' ? theme.spaces[7] : theme.spaces[6]};
      width: ${size === 'lg' ? theme.spaces[7] : theme.spaces[6]};
      height: ${size === 'lg' ? theme.spaces[5] : theme.spaces[3]};
    `}
    cursor: ${({ disabled }) => (disabled ? undefined : 'pointer')};
  }

  ${ToggleSwitchStyle} {
    background-color: ${({ theme, disabled }) => {
      if (disabled) {
        return theme.colors.neutral[300];
      }
      return theme.colors.white[500];
    }};
    ${({ theme, size }) => `
      min-width: ${size === 'lg' ? theme.spaces[3] : theme.spaces[2]};
      width: ${size === 'lg' ? theme.spaces[3] : theme.spaces[2]};
      height: ${size === 'lg' ? theme.spaces[3] : theme.spaces[2]};
    `}
    ${({ theme, checked }) =>
      `right: ${checked ? theme.spaces[1] : theme.spaces[4]};`}
  }
`;
