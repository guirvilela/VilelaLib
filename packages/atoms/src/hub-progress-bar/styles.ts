import styled, { css } from 'styled-components';

import { animations } from '@hubert/styles';
import { HubProgressBarProps } from './types';

export const ProgressBarBgStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ProgressBarNormalStyle = css<HubProgressBarProps>`
  width: ${({ percent }) => `${percent || 0}%`};
  transition: width 1s;
`;

const ProgressBarIndeterminateStyle = css<HubProgressBarProps>`
  animation: ${() => animations.indeterminate} 1s infinite linear;
  transform-origin: 0% 50%;
  width: 100%;
`;

const ProgressBarPlayAnimStyle = css<HubProgressBarProps>`
  animation: ${({ percent }) => animations.growup(percent)}
    ${({ playSeconds }) => `${playSeconds || 1}s`} forwards linear;
`;

const ProgressBarColorStyle = css<HubProgressBarProps>`
  background-color: ${({ theme, color, colorLevel }) =>
    color && colorLevel
      ? theme.colors[color][colorLevel]
      : color
      ? theme.colors[color][500]
      : theme.colors.primary[500]};
`;

export const ProgressBarInnerStyle = styled.div`
  height: 100%;
`;

export const ProgressBarDisplayStyle = styled.span`
  line-height: ${({ theme }) => theme.typography.body1.size};
`;

export const ProgressBarStyle = styled.div<HubProgressBarProps>`
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.spaces[2]};
  width: 100%;
  height: ${({ height }) => height || '4px'};

  ${ProgressBarBgStyle} {
    background-color: ${({ theme, color, colorLevel, bgColorless }) =>
      bgColorless
        ? theme.colors.neutralGrey[300]
        : color && colorLevel
        ? theme.colors[color][colorLevel]
        : color
        ? theme.colors[color][200]
        : theme.colors.primary[200]};
    ${({ mini, shaped }) => {
      if (mini) {
        return `
        width: 98%;
        margin: auto;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
      `;
      }
      if (shaped) return '';
      return `
      border-radius: 8px;
    `;
    }}
  }

  ${ProgressBarDisplayStyle} {
    color: ${({ theme, color, colorLevel }) =>
      color && colorLevel
        ? theme.colors[color][colorLevel]
        : color
        ? theme.colors[color][500]
        : theme.colors.primary[500]};
  }

  ${ProgressBarInnerStyle} {
    ${ProgressBarColorStyle}
    ${({ indeterminate, play }) => {
      if (indeterminate) {
        return ProgressBarIndeterminateStyle;
      }

      if (play) {
        return ProgressBarPlayAnimStyle;
      }

      return ProgressBarNormalStyle;
    }}
    ${({ shaped }) => (shaped ? '' : 'border-radius: 8px;')}
  }
`;
