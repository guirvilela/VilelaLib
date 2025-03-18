import { Align, Sort, animations } from '@hubert/styles';
import styled, { css } from 'styled-components';

import { HubTableColumn, HubTableRowConfig } from './types';

export const TableStyle = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  ${({ width }) => (width ? `min-width: ${width};` : '')}
`;

export const TableHeadColStyle = styled.th<
  Pick<
    HubTableColumn<unknown>,
    'width' | 'minWidth' | 'sticky' | 'printable'
  > & { index }
>`
  width: ${({ width }) => width || '100%'};
  ${({ minWidth }) => (minWidth ? `min-width: ${minWidth};` : '')};
  padding: ${({ theme }) => `0 ${theme.spaces[2]}`};

  position: sticky;
  top: 0;
  z-index: 2;

  ${({ index, sticky }) =>
    sticky &&
    `
      &:nth-child(${index + 1}) {
        position: sticky;
        left: 0;
        z-index: 3;
      }
  `}
  ${({ printable }) =>
    printable === false &&
    `
    @media print {
      display: none;
    }
  `}
`;

export const TableBodyColStyle = styled.td<
  Pick<
    HubTableColumn<unknown>,
    'width' | 'minWidth' | 'sticky' | 'printable'
  > & {
    index: number;
    foot?: boolean;
  }
>`
  width: ${({ width }) => width || '100%'};
  ${({ minWidth }) => (minWidth ? `min-width: ${minWidth};` : '')};
  ${({ theme, index, sticky }) =>
    sticky &&
    `
    &:nth-child(${index + 1}) {
      position: sticky;
      left: 0;
      z-index: 1;
      background-color: ${theme.colors.white[500]};
    }
  `}
  ${({ printable }) =>
    printable === false &&
    `
    @media print {
      display: none;
    }
  `}
  ${({ theme, foot }) =>
    foot &&
    `
    position: sticky;
    bottom: 0;
    z-index: 2;
    background-color: ${theme.colors.neutralGrey['A100']};
    font-weight: 600;
  `}
`;

export const TableHeadRowStyle = styled.tr<HubTableRowConfig>`
  ${({ theme, height }) => `
    ${TableHeadColStyle} {
      background-color: ${theme.colors.neutral[200]};
      color: ${theme.colors.neutral[800]};
      font-family: ${theme.typography.body2.family};
      font-size: ${theme.typography.body2.size};
      line-height: ${theme.typography.body2.lineHeight};
      letter-spacing: ${theme.typography.body2.letterSpacing};
      font-weight: 600;
      height: ${height || theme.spaces[7]};
    }
  `}
`;

export const TableBodyColInnerStyle = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  width: 100%;
  height: 100%;
`;

export const TableBodyColCellStyle = styled.div<
  Pick<HubTableColumn<unknown>, 'nowrap' | 'align' | 'noOverflow'>
>`
  width: 100%;
  text-align: ${({ align }) => align || 'center'};

  ${({ noOverflow, nowrap }) => {
    if (!noOverflow) {
      return `
        overflow: hidden;
        text-overflow: ellipsis;

        ${
          nowrap
            ? `white-space: nowrap;`
            : `
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      `
        }
      `;
    }
    return '';
  }}

  ${({ theme }) => `
    font-family: ${theme.typography.body2.family};
    font-size: ${theme.typography.body2.size};
    line-height: ${theme.typography.body2.lineHeight};
    letter-spacing: ${theme.typography.body2.letterSpacing};
  `}
`;

const RowBlink = css`
  animation: 3s linear ${() => animations.blink};
`;

export const TableBodyRowStyle = styled.tr<
  HubTableRowConfig & { borderless?: boolean; clickable?: boolean }
>`
  ${({ blink }) => (blink ? RowBlink : '')}

  ${({ theme, borderless, border, borderColor, accentColor }) =>
    borderless || border || borderColor || accentColor
      ? ''
      : `border-bottom: 1px solid ${theme.colors.neutral[300]};`}

  ${TableBodyColInnerStyle} {
    padding: ${({ theme }) => `0 ${theme.spaces[2]}`};

    ${({ theme, height, color, colorLevel }) => `
      background-color: ${
        color && colorLevel
          ? theme.colors[color][colorLevel]
          : color
          ? theme.colors[color][500]
          : undefined
      };
      height: ${height || theme.spaces[7]};
    `}
  }

  ${TableBodyColStyle} {
    ${({
      theme,
      border,
      borderStyle,
      borderColor,
      borderColorLevel,
      accentColor,
      accentColorLevel,
      borderRadius
    }) => {
      const borderHash =
        borderColor && borderColorLevel
          ? theme.colors[borderColor][borderColorLevel]
          : borderColor
          ? theme.colors[borderColor][500]
          : theme.colors.neutral[300];

      const accentHash =
        accentColor && accentColorLevel
          ? theme.colors[accentColor][accentColorLevel]
          : accentColor
          ? theme.colors[accentColor][500]
          : undefined;

      const borderConfig = `${border || '1px'} ${
        borderStyle || 'solid'
      } ${borderHash}`;

      const radius = theme.spaces[borderRadius || '1'];

      return border || borderColor || accentColor
        ? `
        ${TableBodyColInnerStyle} {
          border-top: ${borderConfig};
          border-bottom: ${borderConfig};
        }

        &:first-of-type ${TableBodyColInnerStyle} {
          border: ${borderConfig};
          border-right: none;
          border-top-left-radius: ${radius};
          border-bottom-left-radius: ${radius};
          ${accentHash ? `border-left: 8px solid ${accentHash};` : ''}
        }

        &:last-of-type ${TableBodyColInnerStyle} {
          border: ${borderConfig};
          border-left: none;
          border-top-right-radius: ${radius};
          border-bottom-right-radius: ${radius};
        }
      `
        : '';
    }}

    padding-top: ${({ theme, gap }) => (gap ? theme.spaces[gap] : 0)};

    ${({ clickable }) =>
      clickable
        ? `
      cursor: pointer;
    `
        : ''}
  }
`;

export const TableHeadOptionsStyle = styled.div<{ align: Align }>`
  display: flex;
  align-items: center;
  text-align: ${({ align }) => align || 'center'};
  justify-content: ${({ align }) => align || 'center'};
  gap: ${({ theme }) => theme.spaces[2]};
`;

export const TableHeadSortStyle = styled.button<{ state: Sort }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  transform: ${({ state }) => `rotate(${state === 'asc' ? '180deg' : '0deg'})`};
  cursor: pointer;

  path:first-of-type {
    fill: ${({ theme }) => theme.colors.neutralGrey[600]} !important;
  }
`;

export const TableContainerStyle = styled.div<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
  minHeight?: string;
  height?: string;
}>`
  width: 100%;
  overflow: auto;
  max-height: ${({ height }) => height || '100%'};
  ${({ minHeight }) => (minHeight ? `min-height: ${minHeight};` : '')}

  @media print {
    max-height: unset;
    height: auto;
    overflow: unset;

    ${TableHeadRowStyle},
    ${TableBodyColInnerStyle} {
      height: auto;
    }
  }

  ${TableHeadColStyle},
  ${TableBodyColStyle} {
    @media print {
      width: unset;
    }
  }

  ${TableBodyColCellStyle} {
    @media print {
      display: block;
      overflow: unset;
      text-overflow: unset;
    }
  }

  ${TableHeadSortStyle} {
    @media print {
      display: none;
    }
  }
`;

export const TableLoadMoreStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;

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
