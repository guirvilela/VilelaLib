import styled, { css } from 'styled-components';

import { animations } from '@hubert/styles';
import { HubListItemProps, HubListProps } from './types';

export const ListItemStyle = styled.li<HubListItemProps>`
  display: flex;
  align-items: center;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.neutral[200] : undefined};
  ${({ theme, radius }) =>
    radius ? `border-radius: ${theme.spaces[radius]};` : ''}
  width: 100%;
  gap: ${({ theme }) => theme.spaces[2]};
  font-weight: 400;
  transition: background-color 1s;
  ${({ nowrap }) => nowrap && 'white-space: nowrap;'}

  ${({ theme, border, borderColor, borderColorLevel, fullBorder }) => {
    if (!border && !fullBorder) return '';

    if (fullBorder) {
      return `
          border: 1px solid ${
            borderColor && borderColorLevel
              ? theme.colors[borderColor][borderColorLevel]
              : borderColor
              ? theme.colors[borderColor][500]
              : theme.colors.neutral[300]
          } !important;
        `;
    }
    return `
        &:not(:last-of-type) {
          border-bottom: 1px solid ${
            borderColor && borderColorLevel
              ? theme.colors[borderColor][borderColorLevel]
              : borderColor
              ? theme.colors[borderColor][500]
              : theme.colors.neutral[300]
          } !important;
        }
      `;
  }}

  ${({ theme, accentBorderColor, accentBorderColorLevel }) =>
    accentBorderColor &&
    `
    border-left: 8px solid ${
      accentBorderColor && accentBorderColorLevel
        ? theme.colors[accentBorderColor][accentBorderColorLevel]
        : theme.colors[accentBorderColor][500]
    } !important;
  `}
`;

const ListItemHoverStyle = css`
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
  }
`;

export const ListStyle = styled.ul<HubListProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme, gap }) => (gap ? `gap: ${theme.spaces[gap]};` : '')}

  ${({ height }) =>
    height &&
    `
    max-height: ${height};
    overflow: auto;
  `};

  ${ListItemStyle} {
    ${({ hover }) => (hover ? ListItemHoverStyle : '')}

    ${({ theme, pad }) => {
      if (typeof pad === 'string') {
        return `padding: ${theme.spaces[pad]} ${theme.spaces[pad]};`;
      }
      if (Array.isArray(pad)) {
        return `padding: ${pad.reduce(
          (acc, x) => acc + `${theme.spaces[x]} `,
          ''
        )};`;
      }
      return `padding: ${theme.spaces[1]} ${theme.spaces[3]};`;
    }}
  }
`;

export const ListLoadMoreStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;

  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white[500]};
  color: ${({ theme }) => theme.colors.neutralGrey[600]};
  padding: ${({ theme }) => theme.spaces[2]} 0;
  box-shadow: 0px -10px 24px -10px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  border-bottom-left-radius: ${({ theme }) => theme.spaces[3]};
  border-bottom-right-radius: ${({ theme }) => theme.spaces[3]};
  animation: 0.5s ease ${() => animations.fadein};
`;
