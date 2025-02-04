import styled from 'styled-components';

import { HubCheckboxProps } from './types';

export const CheckboxIconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;
`;

export const CheckboxInputStyle = styled.input`
  display: none;
`;

export const CheckboxLabelStyle = styled.label`
  font-family: ${(props) => props.theme.typography.body2.family};
  font-size: ${(props) => props.theme.typography.body2.size};
  line-height: ${(props) => props.theme.typography.body2.lineHeight};
  letter-spacing: ${(props) => props.theme.typography.body2.letterSpacing};
  font-weight: 400;
  margin-left: ${(props) => props.theme.spaces[2]};
`;

export const CheckboxStyle = styled.div<
  HubCheckboxProps & { clickable: boolean }
>`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align || 'start'};
  ${({ clickable, disabled }) =>
    disabled
      ? 'cursor: not-allowed;'
      : clickable
      ? 'cursor: pointer;'
      : undefined}

  ${CheckboxIconStyle} {
    background-color: ${(props) => {
      if (!props.checked && props.disabled) {
        return props.color
          ? props.theme.colors[props.color][100]
          : props.theme.colors.neutral[200];
      }
      if (props.checked && props.disabled) {
        return props.theme.colors[props.color || 'neutral'][400];
      }
      if (props.checked) {
        return props.theme.colors[props.color || 'primary'][500];
      }
      return props.theme.colors.white[500];
    }};
    color: ${(props) => props.theme.colors[props.colorText || 'white'][500]};
    border: 1px solid
      ${(props) => {
        if (!props.checked || props.disabled) {
          return props.theme.colors[
            props.borderColor || props.color || 'neutral'
          ][400];
        }
        return props.theme.colors[props.borderColor || 'transparent'][500];
      }};
    border-radius: 4px;
    ${(props) => `
      min-width: ${
        props.size === 'lg' ? props.theme.spaces[5] : props.theme.spaces[3]
      };
      width: ${
        props.size === 'lg' ? props.theme.spaces[5] : props.theme.spaces[3]
      };
      height: ${
        props.size === 'lg' ? props.theme.spaces[5] : props.theme.spaces[3]
      };
    `}
  }
`;
