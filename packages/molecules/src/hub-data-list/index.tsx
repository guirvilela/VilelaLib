import { HubGrid, HubListItem, HubTableRow, HubText } from '@hubert/atoms';
import React from 'react';
import { ListStyle } from './styles';
import { HubDataListColumns, HubDataListProps } from './types';

export type { HubDataListColumns, HubDataListProps };

export function HubDataList<T>({
  typo,
  columns,
  data,
  height,
  gap,
  rowConfigs,
  onLoadMore,
  children
}: HubDataListProps<T>) {
  function columnToDataListItem(
    item: HubTableRow<T>,
    index: number,
    indexCol: number
  ) {
    return columns[columns.length - 1]
      .filter((col) => !col.hidden)
      .map((col, ci) => {
        const value = col.formatter
          ? col.formatter(item[col.key])
          : item[col.key];
        const element =
          (col.renderMobile || col.render)?.({
            key: col.key,
            item,
            index,
            value,
            indexCol
          }) || value;

        if (col.noMobileTitle) {
          return (
            <React.Fragment key={`hub-data-list-item-col-${ci}`}>
              {element}
            </React.Fragment>
          );
        }

        return (
          <HubText key={`hub-data-list-item-col-${ci}`} typo={typo || 'body3'}>
            {col.gridCols ? (
              <HubGrid row cols={col.gridCols} gap="1" align="center">
                <b>{col.label}:</b>
                {element}
              </HubGrid>
            ) : (
              <>
                <b>{col.label}: </b>
                {element}
              </>
            )}
          </HubText>
        );
      });
  }

  return (
    <ListStyle gap={gap || '3'} height={height} onLoadMore={onLoadMore}>
      {children}
      {data?.map((item, index) => (
        <HubListItem
          key={`hub-data-list-item-${index}`}
          fullBorder
          borderColor={rowConfigs?.borderColor || item.configs?.borderColor}
          borderColorLevel={
            rowConfigs?.borderColorLevel || item.configs?.borderColorLevel
          }
          accentBorderColor={
            rowConfigs?.accentColor || item.configs?.accentColor
          }
          accentBorderColorLevel={
            rowConfigs?.accentColorLevel || item.configs?.accentColorLevel
          }
          radius={rowConfigs?.borderRadius || item.configs?.borderRadius}
        >
          <HubGrid gap={rowConfigs?.gap || item.configs?.gap || '1'} filled>
            {columnToDataListItem(item, index, 0)}
          </HubGrid>
        </HubListItem>
      ))}
    </ListStyle>
  );
}
