import { useI18nMessage } from '@hubert/i18n';
import { debounce, factoryTestId, sorter } from '@hubert/shared';
import { Sort } from '@hubert/styles';
import React from 'react';
import SortIcon from './sort';
import NormalIcon from './sort-normal';
import {
  TableBodyColCellStyle,
  TableBodyColInnerStyle,
  TableBodyColStyle,
  TableBodyRowStyle,
  TableContainerStyle,
  TableHeadColStyle,
  TableHeadOptionsStyle,
  TableHeadRowStyle,
  TableHeadSortStyle,
  TableLoadMoreStyle,
  TableStyle
} from './styles';
import {
  HubTableColumn,
  HubTableColumns,
  HubTableProps,
  HubTableRef,
  HubTableRenderProps,
  HubTableRow
} from './types';

export type {
  HubTableColumns,
  HubTableProps,
  HubTableRef,
  HubTableRenderProps,
  HubTableRow
};

function arrayColumnsToObject<T>(cols: HubTableColumn<T>[]) {
  return (
    cols?.reduce((acc, col) => {
      acc[col.key] = col.sort;
      return acc;
    }, {}) || {}
  );
}

function recursiveData<T, R = HubTableRow<T>>(
  data: R[],
  key: keyof R,
  level: number
) {
  const results: R[] = [];

  for (const item of data) {
    results.push(
      { ...item, level },
      ...recursiveData(item[key] as never, key, level + 1)
    );
  }

  return results;
}

const lazy = debounce(300);

function HubTableInner<T>(
  {
    minHeight,
    height,
    columns,
    data,
    configs,
    rowConfigs,
    onLoadMore,
    onSort,
    onClickRow,
    foots,
    dataChildrenKey,
    children,
    ...props
  }: HubTableProps<T>,
  ref
) {
  const t = useI18nMessage();

  const refContainer = React.useRef<HTMLDivElement>();

  const cols = columns?.map((x) => x.filter((y) => !y.hidden));
  const lastIndex = cols ? cols.length - 1 : 0;

  const [source, setSource] = React.useState<HubTableRow<T>[]>(data || []);
  const [sourceSort, setSourceSort] = React.useState<Record<string, Sort>>(
    arrayColumnsToObject(cols?.[lastIndex])
  );
  const [loadMore, setLoadMore] = React.useState(false);

  function dataSorter(items: HubTableRow<T>[], col: HubTableColumn<T>) {
    return items
      ?.sort((a, b) => {
        const itemA = col.sort === 'asc' ? a : b;
        const itemB = col.sort === 'asc' ? b : a;
        const valueA = itemA[col.key] || itemA;
        const valueB = itemB[col.key] || itemB;
        return col.sorter
          ? col.sorter(valueA, valueB)
          : sorter()(valueA, valueB);
      })
      .slice();
  }

  function handleSort(col: HubTableColumn<T>) {
    const sort = sourceSort[col.key] !== 'asc' ? 'asc' : 'desc';
    const column: HubTableColumn<T> = { ...col, sort };

    setSourceSort({ ...sourceSort, [col.key]: sort });

    if (onSort) {
      refContainer.current?.scroll({
        top: 0,
        behavior: 'smooth'
      });
      setTimeout(
        () => onSort((data) => dataSorter(data || source, column), column),
        500
      );
    } else {
      setSource(dataSorter(source, column));
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleScroll(e: any) {
    if (e && e.target && onLoadMore) {
      if (
        e.target.scrollTop + e.target.clientHeight >=
        e.target.scrollHeight - 24
      ) {
        lazy(() => {
          onLoadMore();
          setLoadMore(true);
          setTimeout(() => setLoadMore(false), 1000);
        });
      }
    }
  }

  const TableCell = ({ item, col, index, indexCol, foot = false }) => {
    let value = col.formatter ? col.formatter(item[col.key]) : item[col.key];
    if (foot && col.renderFoot) {
      value = col.renderFoot({ value, item, key: col.key, index, indexCol });
    } else if (col.render) {
      value = col.render({ value, item, key: col.key, index, indexCol });
    }

    return (
      <div
        data-testid={factoryTestId(
          props,
          `${foot ? 'foot' : 'body'}-${index}-col-${indexCol}`
        )}
        title={typeof value === 'string' ? value : undefined}
      >
        {value}
      </div>
    );
  };

  React.useEffect(() => {
    let results: HubTableRow<T>[] = [];

    if (data) {
      if (dataChildrenKey) {
        results = recursiveData(data, dataChildrenKey, 0);
      } else {
        results = data;
      }
    }

    setSource(results);
  }, [data]);

  React.useImperativeHandle<HubTableRef, HubTableRef>(
    ref,
    () => ({
      scrollTo: (top: number | ((el: HTMLDivElement) => number)) =>
        refContainer?.current?.scroll({
          top: typeof top === 'function' ? top(refContainer?.current) : top,
          behavior: 'smooth'
        })
    }),
    [refContainer?.current]
  );

  return (
    <TableContainerStyle
      ref={refContainer}
      data-testid={factoryTestId(props, 'container')}
      minHeight={minHeight}
      height={height}
      onScroll={onLoadMore ? handleScroll : undefined}
    >
      <TableStyle {...props}>
        {!configs?.headless && (
          <thead>
            {cols?.map((cols, is) => (
              <TableHeadRowStyle
                key={`hub-table-head-row-${is}`}
                {...rowConfigs}
              >
                {cols.map((col, i) => (
                  <TableHeadColStyle
                    key={`hub-table-head-row-${is}-col-${i}`}
                    data-testid={factoryTestId(props, `head-${is}-col-${i}`)}
                    width={col.width}
                    minWidth={col.minWidth}
                    sticky={col.sticky}
                    printable={col.printable}
                    colSpan={col.headColspan}
                    index={i}
                  >
                    <TableHeadOptionsStyle align={col.headAlign as never}>
                      {col.label}
                      {col.sort || col.sorter ? (
                        <TableHeadSortStyle
                          data-testid={factoryTestId(
                            props,
                            `head-${is}-col-${i}-sorter`
                          )}
                          type="button"
                          state={sourceSort[col.key]}
                          onClick={() => handleSort(col)}
                        >
                          {sourceSort[col.key] === 'normal' ? (
                            <NormalIcon />
                          ) : (
                            <SortIcon />
                          )}
                        </TableHeadSortStyle>
                      ) : (
                        <></>
                      )}
                    </TableHeadOptionsStyle>
                  </TableHeadColStyle>
                ))}
              </TableHeadRowStyle>
            ))}
          </thead>
        )}

        <tbody>
          {source.map((item, i) => (
            <TableBodyRowStyle
              key={`hub-table-body-row-${i}`}
              borderless={configs?.borderless}
              clickable={!!onClickRow}
              {...rowConfigs}
              {...item.configs}
              onClick={() => onClickRow?.(item)}
            >
              {cols?.[lastIndex].map((col, ic) => (
                <TableBodyColStyle
                  key={`hub-table-body-row-${i}-col-${ic}`}
                  width={col.width}
                  minWidth={col.minWidth}
                  sticky={col.sticky}
                  printable={col.printable}
                  colSpan={item.ignoreColspan ? undefined : col.colspan}
                  index={ic}
                >
                  <TableBodyColInnerStyle>
                    <TableBodyColCellStyle
                      align={col.align as never}
                      nowrap={col.nowrap}
                      noOverflow={col.noOverflow}
                    >
                      <TableCell
                        item={item}
                        col={col}
                        index={i}
                        indexCol={ic}
                      />
                    </TableBodyColCellStyle>
                  </TableBodyColInnerStyle>
                </TableBodyColStyle>
              ))}
            </TableBodyRowStyle>
          ))}
        </tbody>

        {foots && (
          <tfoot>
            {foots?.map((item, i) => (
              <TableBodyRowStyle
                key={`hub-table-foot-row-${i}`}
                borderless={configs?.borderless}
                {...rowConfigs}
              >
                {cols?.[lastIndex].map((col, ic) => (
                  <TableBodyColStyle
                    key={`hub-table-foot-row-${i}-col-${ic}`}
                    width={col.width}
                    sticky={col.sticky}
                    printable={col.printable}
                    colSpan={col.footColspan}
                    index={ic}
                    foot
                  >
                    <TableBodyColInnerStyle>
                      <TableBodyColCellStyle
                        align={col.align as never}
                        nowrap={col.nowrap}
                        noOverflow={col.noOverflow}
                      >
                        <TableCell
                          item={item}
                          col={col}
                          index={i}
                          indexCol={ic}
                          foot
                        />
                      </TableBodyColCellStyle>
                    </TableBodyColInnerStyle>
                  </TableBodyColStyle>
                ))}
              </TableBodyRowStyle>
            ))}
          </tfoot>
        )}
      </TableStyle>
      {children}
      {loadMore && (
        <TableLoadMoreStyle>{t('hub-table_loadmore')}</TableLoadMoreStyle>
      )}
    </TableContainerStyle>
  );
}

export const HubTable = React.forwardRef(HubTableInner) as <T = unknown>(
  props: HubTableProps<T> & { ref?: React.ForwardedRef<HubTableRef> }
) => ReturnType<typeof HubTableInner>;
