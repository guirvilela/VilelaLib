import styled from 'styled-components';

import { HubAlertProps } from './types';

export const AlertInnerStyle = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces[2]};
  margin-top: -2px;
  width: 100%;
`;

export const AlertTitleStyle = styled.span`
  font-family: ${({ theme }) => theme.typography.body2.family};
  font-size: ${({ theme }) => theme.typography.body2.size};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

export const AlertContentStyle = styled.span`
  font-family: ${({ theme }) => theme.typography.body2.family};
  font-size: ${({ theme }) => theme.typography.body2.size};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
  color: ${({ theme }) => theme.colors.neutralGrey[700]};
  font-weight: 400;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const AlertCloseStyle = styled.button`
  background-color: transparent;
  width: ${({ theme }) => theme.spaces[3]};
  height: ${({ theme }) => theme.spaces[3]};
  border: none;
  color: inherit;
  cursor: pointer;
`;

export const AlertStyle = styled.div<Omit<HubAlertProps, 'title'>>`
  display: flex;
  width: 100%;
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color][100] : theme.colors.neutral[100]};
  color: ${({ theme, color }) =>
    color ? theme.colors[color][500] : theme.colors.neutral[500]};
  border: 1px solid
    ${({ theme, color }) =>
      color ? theme.colors[color][500] : theme.colors.neutral[500]};
  border-radius: ${({ theme, radius }) =>
    radius ? theme.spaces[radius] : '4px'};
  align-items: ${({ inline }) => (inline ? 'center' : 'start')};

  ${({ theme, pad }) => {
    if (typeof pad === 'string') {
      return `padding: ${theme.spaces[pad]};`;
    }
    if (Array.isArray(pad)) {
      return `padding: ${pad.reduce(
        (acc, x) => acc + `${theme.spaces[x]} `,
        ''
      )};`;
    }
    return `padding: ${theme.spaces[2]};`;
  }}

  gap: ${({ theme, gap }) => (gap ? theme.spaces[gap] : theme.spaces[2])};

  ${AlertInnerStyle} {
    flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
    align-items: ${({ inline }) => (inline ? 'center' : 'start')};
  }

  ${AlertTitleStyle} {
    font-weight: ${({ inline }) => (inline ? 400 : 600)};
    white-space: ${({ nowrap }) => (nowrap ? 'nowrap' : undefined)};
  }
`;
