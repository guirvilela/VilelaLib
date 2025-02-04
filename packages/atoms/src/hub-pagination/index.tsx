import { useI18nMessage } from '@hubert/i18n';
import { factoryTestId } from '@hubert/shared';
import React from 'react';
import IconArrow from './icon-arrow';
import {
  PaginationIndicatorStyle,
  PaginationNextStyle,
  PaginationPrevStyle,
  PaginationSizeChangerStyle,
  PaginationSizeContainerStyle,
  PaginationStyle
} from './styles';
import { HubPaginationProps } from './types';

export type { HubPaginationProps };

export function HubPagination({
  current,
  pageSize,
  totalItems,
  pageSizeOptions,
  onChange,
  onChangePageSize,
  ...props
}: HubPaginationProps) {
  const t = useI18nMessage();

  const sizeOptions = React.useMemo(
    () => pageSizeOptions || [5, 10, 15, 25, 50],
    [pageSizeOptions]
  );

  const totalPage = React.useMemo(
    () => (totalItems ? Math.ceil(totalItems / pageSize) : 1),
    [totalItems, pageSize]
  );

  const indicators = React.useMemo(() => {
    if (totalPage <= 5) {
      return new Array(totalPage).fill(1).map((_, i) => i + 1);
    }
    if (current >= totalPage - 2) {
      return [1, '...', totalPage - 2, totalPage - 1, totalPage];
    }
    if (current > 3) {
      return [1, '...', current - 1, current, current + 1, '...', totalPage];
    }
    return [1, 2, 3, '...', totalPage];
  }, [totalPage, current]);

  function handlePageSize(e: React.ChangeEvent<HTMLSelectElement>) {
    onChangePageSize?.(Number(e.target.value));
  }

  function handlePageChange(next: string | number) {
    if (!props.disabled && typeof next !== 'string') {
      onChange?.(next);
    }
  }

  React.useEffect(() => {
    if (current > totalPage) {
      onChange?.(totalPage);
    }
  }, [totalPage]);

  return (
    <PaginationStyle {...props}>
      <PaginationPrevStyle
        data-testid={factoryTestId(props, 'previous')}
        type="button"
        active={current > 1}
        onClick={() => {
          if (!props.disabled && current > 1) {
            const numPage = current - 1;
            onChange?.(numPage);
          }
        }}
      >
        <IconArrow />
        {props.showLabel && t('hub-pagination_prev-label')}
      </PaginationPrevStyle>
      {!props.noShowIndicators &&
        indicators.map((indicator, i) => (
          <PaginationIndicatorStyle
            key={`hub-pagination_indicator-${i}`}
            data-testid={factoryTestId(props, `indicator-${indicator}`)}
            type="button"
            active={current === indicator}
            onClick={() => handlePageChange(indicator)}
          >
            {indicator}
          </PaginationIndicatorStyle>
        ))}
      <PaginationNextStyle
        data-testid={factoryTestId(props, 'next')}
        type="button"
        active={current < totalPage}
        onClick={() => {
          if (!props.disabled && current < totalPage) {
            const numPage = current + 1;
            onChange?.(numPage);
          }
        }}
      >
        {props.showLabel && t('hub-pagination_next-label')}
        <IconArrow />
      </PaginationNextStyle>
      {props.showSizeChanger && (
        <PaginationSizeContainerStyle>
          <PaginationSizeChangerStyle
            data-testid={factoryTestId(props, 'changer')}
            value={pageSize}
            onChange={handlePageSize}
          >
            {sizeOptions.map((x, i) => (
              <option key={`hub-pagination_option-${i}`} value={x}>
                {x}
              </option>
            ))}
          </PaginationSizeChangerStyle>
          <IconArrow />
        </PaginationSizeContainerStyle>
      )}
      {props.showTotalLabel && (
        <>
          {t('hub-pagination_results-label')}
          {current * pageSize - pageSize + 1} -{' '}
          {current === totalPage ? totalItems || 1 : current * pageSize}
          {t('hub-pagination_results-of-label')}
          {totalItems || 1}
        </>
      )}
    </PaginationStyle>
  );
}
