import styled from 'styled-components';

import { HubTabProps, HubTabsProps } from './types';

export const TabsStyle = styled.div<HubTabsProps>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutralGrey[300]};
  gap: ${({ theme, gap }) => gap && theme.spaces[gap]};
  width: 100%;
  overflow: auto hidden;
`;

export const TabStyle = styled.div<HubTabProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spaces[3]};
  width: ${({ width }) => width || '100%'};
  font-weight: 600;
  ${({ active, disabled }) => (!active && !disabled ? 'cursor: pointer;' : '')}
  ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : '')}
  gap: ${({ theme }) => theme.spaces[2]};
  transition: 0.5s ease-in-out color, 0.3s ease-in-out border-color;
  white-space: nowrap;

  ${({ theme, color, colorLevel, active, disabled }) => {
    const colorHash = disabled
      ? theme.colors.neutralGrey[300]
      : !active && color
      ? theme.colors[color][300]
      : !active
      ? theme.colors.neutralGrey[600]
      : color && colorLevel
      ? theme.colors[color][colorLevel]
      : color
      ? theme.colors[color][500]
      : theme.colors.primary[500];
    const borderHash =
      !active || disabled
        ? theme.colors[color || 'neutralGrey'][300]
        : colorHash;

    return `
      color: ${colorHash};
      border-bottom: 2px solid ${borderHash};
    `;
  }}

  ${({ theme }) => `
    @media (${theme.mediaQuery.md}) {
      padding: ${({ theme }) =>
        `${theme.spaces[1]} ${theme.spaces[1]} ${theme.spaces[3]} ${theme.spaces[1]}`};
    }
  `}
`;
