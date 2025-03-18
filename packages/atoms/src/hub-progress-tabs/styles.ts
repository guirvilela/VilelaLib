import styled from 'styled-components';

import { HubProgressTabProps, HubProgressTabsProps } from './types';

export const ProgressTabsStyle = styled.div<HubProgressTabsProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme, gap }) => (gap ? theme.spaces[gap] : theme.spaces[1])};
  width: 100%;
  overflow: auto hidden;
`;

export const ProgressTabLabelStyle = styled.div``;
export const ProgressTabIndicatorStyle = styled.div``;

export const ProgressTabStyle = styled.div<HubProgressTabProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[2]};
  width: 100%;
  ${({ active, disabled }) => (!active && !disabled ? 'cursor: pointer;' : '')}
  ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : '')}

  ${ProgressTabLabelStyle} {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary[500]};
    opacity: ${({ active, disabled }) => (active && !disabled ? 1 : 0.3)};
  }

  ${ProgressTabIndicatorStyle} {
    height: ${({ height }) => height || '6px'};
    width: ${({ width }) => width || '100%'};
    border-radius: 12px;
    opacity: ${({ active, disabled }) => (active && !disabled ? 1 : 0.3)};
    background-color: ${({ theme, color, colorLevel }) =>
      color && colorLevel
        ? theme.colors[color][colorLevel]
        : color
        ? theme.colors[color][500]
        : theme.colors.neutral[300]};
  }
`;
