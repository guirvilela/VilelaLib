import styled, { css } from 'styled-components';

import { HubTextProps } from './types';

const TextCommonStyle = css<HubTextProps>`
  font-weight: ${(props) => props.weight || 400};
  text-align: ${(props) => props.align};
  color: ${({ theme, color, colorLevel }) =>
    color && colorLevel
      ? theme.colors[color][colorLevel]
      : color && theme.colors[color]
      ? theme.colors[color][500]
      : color
      ? color
      : undefined};
  white-space: ${({ nowrap, prewrap }) =>
    nowrap ? 'nowrap' : prewrap ? 'pre-wrap' : undefined};
  text-decoration: ${({ decoration }) => decoration};
  text-transform: ${({ transform }) => transform};
  font-style: ${({ fontStyle }) => fontStyle};
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ theme, size }) => size && `font-size: ${theme.spaces[size]};`}
  ${({ spacing }) => spacing && `letter-spacing: ${spacing};`}
  ${({ theme, height }) =>
    height && `line-height: ${theme.spaces[height] || height};`}
`;

export const TextHeading1Style = styled.h1<HubTextProps>`
  font-family: ${({ theme }) => theme.typography.h1.family};
  font-size: ${({ theme }) => theme.typography.h1.size};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};
  ${TextCommonStyle}
`;

export const TextHeading2Style = styled.h2<HubTextProps>`
  font-family: ${({ theme }) => theme.typography.h2.family};
  font-size: ${({ theme }) => theme.typography.h2.size};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h2.letterSpacing};
  ${TextCommonStyle}
`;

export const TextHeading3Style = styled.h3<HubTextProps>`
  font-family: ${({ theme }) => theme.typography.h3.family};
  font-size: ${({ theme }) => theme.typography.h3.size};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing};
  ${TextCommonStyle}
`;

export const TextHeading4Style = styled.h4<HubTextProps>`
  font-family: ${({ theme }) => theme.typography.h4.family};
  font-size: ${({ theme }) => theme.typography.h4.size};
  line-height: ${({ theme }) => theme.typography.h4.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h4.letterSpacing};
  ${TextCommonStyle}
`;

export const TextOthersStyle = styled.span<HubTextProps>`
  ${({ theme, typo }) => `
    font-family: ${theme.typography[typo || 'body1'].family};
    font-size: ${theme.typography[typo || 'body1'].size};
    line-height: ${theme.typography[typo || 'body1'].lineHeight};
    letter-spacing: ${theme.typography[typo || 'body1'].letterSpacing};
  `}
  ${TextCommonStyle}
`;
