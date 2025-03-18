import { animations } from '@hubert/styles';
import InputMask from 'react-input-mask';
import styled, { css } from 'styled-components';

import { HubTextFieldProps } from './types';

const LabelStyles = css`
  display: flex;
  align-items: center;

  font-family: ${({ theme }) => theme.typography.body2.family};
  font-size: ${({ theme }) => theme.typography.body2.size};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
  font-weight: 600;
`;

export const TextFieldLabelStyle = styled.label`
  ${LabelStyles}
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  margin-bottom: ${({ theme }) => theme.spaces[1]};
`;

export const TextFieldRequiredStyle = styled.span`
  ${LabelStyles}
  color: ${({ theme }) => theme.colors.error[500]};
  margin-left: ${({ theme }) => theme.spaces[1]};
`;

export const TextFieldInputStyle = styled.input``;
export const TextFieldInputMaskStyle = styled(InputMask)``;
export const TextFieldTextAreaStyle = styled.textarea``;

export const TextFieldInnerStyle = styled.div<{ noGap?: boolean }>`
  display: flex;
  align-items: center;
  ${({ theme, noGap }) => (noGap ? '' : `gap: ${theme.spaces[2]};`)}
  width: 100%;
  min-height: ${({ theme }) => theme.spaces[7]};
  border-radius: 4px;
`;

export const TextFieldHintStyle = styled.div`
  font-family: ${({ theme }) => theme.typography.body3.family};
  font-size: ${({ theme }) => theme.typography.body3.size};
  line-height: ${({ theme }) => theme.typography.body3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body3.letterSpacing};
  font-weight: 400;
  margin-top: ${({ theme }) => theme.spaces[1]};
  color: ${({ theme }) => theme.colors.neutralGrey[600]};
  width: 100%;
`;

export const TextFieldIconBtn = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
`;

export const TextFieldLoadingStyle = styled.div`
  width: ${({ theme }) => theme.spaces[4]};
  min-width: ${({ theme }) => theme.spaces[4]};
  height: ${({ theme }) => theme.spaces[4]};
  border-radius: 50%;
  animation: 1s linear infinite ${() => animations.spin},
    ${() => animations.fadein} 1s ease;
`;

export const TextFieldSpacer = styled.div`
  flex: 1 1 auto;
`;

export const TextFieldStyle = styled.div<Omit<HubTextFieldProps, 'id'>>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${TextFieldInputStyle},
  ${TextFieldInputMaskStyle},
  ${TextFieldTextAreaStyle} {
    ${({ theme, typo = 'body2' }) => `
    font-family: ${theme.typography[typo].family};
    font-size: ${theme.typography[typo].size};
    line-height: ${theme.typography[typo].lineHeight};
    letter-spacing: ${theme.typography[typo].letterSpacing};
  `}

    text-align: ${({ align }) => align};
    background-color: transparent;
    width: 100%;
    border: none;

    color: ${({ theme, color, colorLevel, error }) =>
      error
        ? theme.colors.error[500]
        : color && colorLevel
        ? theme.colors[color][colorLevel]
        : color && theme.colors[color]
        ? theme.colors[color][500]
        : color
        ? color
        : theme.colors.neutral[800]};

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${({ theme, placeholderColor, placeholderColorLevel }) =>
        placeholderColor && placeholderColorLevel
          ? theme.colors[placeholderColor][placeholderColorLevel]
          : placeholderColor && theme.colors[placeholderColor]
          ? theme.colors[placeholderColor][500]
          : placeholderColor
          ? placeholderColor
          : theme.colors.neutral[400]};
    }
  }

  ${TextFieldInnerStyle} {
    border: 1px solid
      ${({
        theme,
        color,
        colorLevel,
        borderColor,
        borderColorLevel,
        error
      }) => {
        if (error) {
          return theme.colors.error[500];
        }
        if (borderColor) {
          return borderColor && borderColorLevel
            ? theme.colors[borderColor][borderColorLevel]
            : theme.colors[borderColor]
            ? theme.colors[borderColor][500]
            : borderColor;
        }
        return color && colorLevel
          ? theme.colors[color][colorLevel]
          : color && theme.colors[color]
          ? theme.colors[color][500]
          : color
          ? color
          : theme.colors.neutral[400];
      }};

    background-color: ${({ theme, bgColor, bgColorLevel }) =>
      bgColor && bgColorLevel
        ? theme.colors[bgColor][bgColorLevel]
        : bgColor && theme.colors[bgColor]
        ? theme.colors[bgColor][500]
        : bgColor
        ? bgColor
        : theme.colors.white[500]};

    ${({ disabled, theme }) =>
      disabled
        ? `
        background-color: ${theme.colors.neutral[200]};
        cursor: not-allowed;
      `
        : ''}
    ${({ wrap }) => (wrap ? `flex-wrap: wrap;` : '')}

    ${({ theme, pad }) => {
      if (!pad) return `padding: ${theme.spaces[2]}`;
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
  }

  ${TextFieldHintStyle} {
    color: ${({ theme, color, colorLevel, error }) =>
      error
        ? theme.colors.error[500]
        : color && colorLevel
        ? theme.colors[color][colorLevel]
        : color && theme.colors[color]
        ? theme.colors[color][500]
        : color
        ? color
        : undefined};
  }

  ${TextFieldLoadingStyle} {
    ${({ theme, color, colorLevel }) => `
      border: 3px solid ${theme.colors.primary[100]};
      border-top: 3px solid ${
        color && colorLevel
          ? theme.colors[color][colorLevel]
          : color && theme.colors[color]
          ? theme.colors[color][500]
          : color
          ? color
          : theme.colors.primary[500]
      };
    `}
  }

  ${TextFieldTextAreaStyle} {
    resize: ${({ resize }) => resize || 'both'};
  }
`;
