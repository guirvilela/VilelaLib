import styled from 'styled-components';

import { HubBreadcrumbProps, HubBreadcrumbsProps } from './types';

export const BreadcrumbsStyle = styled.div<HubBreadcrumbsProps>`
  display: flex;
  align-items: center;
  overflow: auto;
`;

export const BreadcrumbsPathStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const BreadcrumbsIconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutral[400]};
  margin: ${({ theme }) => `0 ${theme.spaces[2]}`};
`;

export const BreadcrumbStyle = styled.span<HubBreadcrumbProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[2]};
  font-family: ${({ theme }) => theme.typography.body2.family};
  font-size: ${({ theme }) => theme.typography.body2.size};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary[500] : theme.colors.neutral[400]};
  transition: color 0.5s;
  font-weight: 600;
  white-space: ${({ nowrap }) => (nowrap ? 'nowrap' : 'pre-wrap')};

  ${({ width }) =>
    width
      ? `
    display: block;
    max-width: ${width};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `
      : ''}

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;
