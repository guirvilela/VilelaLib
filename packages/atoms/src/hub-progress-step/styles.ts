import styled from 'styled-components';

import { HubProgressStepperProps, HubProgressStepProps } from './types';

export const ProgressStepInnerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const ProgressStepLineStyle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const ProgressStepLineBarStyle = styled.div`
  width: 50%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutralGrey[500]};
`;

export const ProgressStepIndicatorStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  gap: ${({ theme }) => theme.spaces[1]};
`;

export const ProgressStepLabelStyle = styled.span``;

export const ProgressStepActiveStyle = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

export const ProgressStepStyle = styled.div<
  HubProgressStepProps & { clickable: boolean }
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  gap: ${({ theme }) => theme.spaces[2]};

  ${ProgressStepActiveStyle} {
    background-color: ${({ theme, disabled, color, colorLevel }) =>
      disabled
        ? theme.colors.neutralGrey[500]
        : color && colorLevel
        ? theme.colors[color][colorLevel]
        : color
        ? theme.colors[color][500]
        : theme.colors.primary[500]};
  }

  ${ProgressStepLabelStyle} {
    color: ${({ theme, disabled, color, colorLevel }) =>
      disabled
        ? theme.colors.neutralGrey[500]
        : color && colorLevel
        ? theme.colors[color][colorLevel]
        : color
        ? theme.colors[color][500]
        : theme.colors.primary[500]};
  }

  ${ProgressStepIndicatorStyle} {
    width: ${({ size }) => size || '28px'};
    height: ${({ size }) => size || '28px'};
    ${({ theme, color, colorLevel, complete, disabled }) => {
      if (complete) {
        return `
          color: ${theme.colors.white[500]};
          background-color: ${
            color && colorLevel
              ? theme.colors[color][colorLevel]
              : color
              ? theme.colors[color][500]
              : theme.colors.primary[500]
          };
        `;
      }

      if (disabled) {
        return `
          background-color: ${theme.colors.white[500]};
          color: ${theme.colors.neutralGrey[500]};
          border: 1px solid ${theme.colors.neutralGrey[500]};
        `;
      }

      return `
        background-color: ${theme.colors.white[500]};
        border: 1px solid ${
          color && colorLevel
            ? theme.colors[color][colorLevel]
            : color
            ? theme.colors[color][500]
            : theme.colors.primary[500]
        };
      `;
    }}
    cursor: ${({ clickable, disabled }) =>
      disabled ? 'not-allowed' : clickable ? 'pointer' : undefined};
  }

  ${ProgressStepInnerStyle} {
    height: ${({ size }) => size || '28px'};
  }
`;

export const ProgressStepperStyle = styled.div<HubProgressStepperProps>`
  display: flex;
  align-items: center;
  width: 100%;

  ${ProgressStepStyle}:first-of-type ${ProgressStepLineBarStyle}:first-of-type {
    opacity: 0;
  }

  ${ProgressStepStyle}:last-of-type ${ProgressStepLineBarStyle}:last-of-type {
    opacity: 0;
  }
`;
