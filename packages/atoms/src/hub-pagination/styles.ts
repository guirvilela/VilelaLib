import styled, { css } from 'styled-components';

import { HubPaginationProps } from './types';

const PaginationButtonStyle = css<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[2]};
  font-weight: 600;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary[500] : theme.colors.neutralGrey[600]};
  border: none;
  outline: none;
  background-color: transparent;
`;

export const PaginationPrevStyle = styled.button`
  ${PaginationButtonStyle}
  svg {
    transform: rotate(180deg);
  }
`;

export const PaginationNextStyle = styled.button`
  ${PaginationButtonStyle}
`;

export const PaginationIndicatorStyle = styled.button<{ active?: boolean }>`
  ${PaginationButtonStyle}
  justify-content: center;
  width: ${({ theme }) => theme.spaces[6]};
  height: ${({ theme }) => theme.spaces[6]};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.neutral[200] : undefined};
  border-radius: 4px;
`;

export const PaginationSizeContainerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]};
  color: ${({ theme }) => theme.colors.primary[500]};
  svg {
    transform: rotate(90deg);
  }
`;

export const PaginationSizeChangerStyle = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.spaces[6]};
  height: ${({ theme }) => theme.spaces[6]};
  color: ${({ theme }) => theme.colors.primary[500]};
  text-align: center;
  font-weight: 600;
  border: none;
  outline: none;
`;

export const PaginationStyle = styled.div<
  Omit<HubPaginationProps, 'pageSize' | 'current'>
>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[3]};
  color: ${({ theme }) => theme.colors.neutralGrey[600]};

  ${PaginationPrevStyle},
  ${PaginationNextStyle},
  ${PaginationSizeChangerStyle},
  ${PaginationSizeContainerStyle},
  ${PaginationIndicatorStyle} {
    ${({ theme, disabled }) => {
      if (disabled) {
        return `
          color: ${theme.colors.neutralGrey[500]};
          cursor: not-allowed;
        `;
      }
      return `cursor: pointer;`;
    }}
  }
`;
