import React from 'react';

/**
 * Type object config of usePagination
 */
export interface PaginationConfig<T> {
  /** Data source */
  source: T[];
  /** Initial page */
  initialPage?: number;
  /** Items by page */
  initialPageSize?: number;
  /** On change source, set first page */
  resetOnChange?: boolean;
}

/**
 * Type return of usePagination Hook
 */
export interface Pagination<T> {
  /** Paged data */
  data: T[];
  /** Length rows of data */
  totalItems: number;
  /** Items by page */
  pageSize: number;
  /** Page selected */
  currentPage: number;
  /** Function call change page */
  onChange: (page: number) => void;
  /** Function call change page size */
  onChangePageSize: (size: number) => void;
  /** Function call accumulate page data */
  onAccumulate: () => void;
  /** Function call accumulate page data */
  onSort: (sorter: (data: T[]) => T[]) => void;
}

const INITIALPAGE = 1;
const PAGESIZE = 30;
/**
 * Create state to use in pagination
 * @param config Object
 * @return Pagination
 */
export function usePagination<T>(config: PaginationConfig<T>): Pagination<T> {
  const [source, setSource] = React.useState(config.source);

  const [currentPage, setCurrentPage] = React.useState<number>(
    config.initialPage || INITIALPAGE
  );
  const [currentData, setCurrentData] = React.useState<T[]>([]);
  const [pageSize, setPageSize] = React.useState<number>(
    config.initialPageSize || PAGESIZE
  );

  const totalItems = React.useMemo(() => source?.length, [source]);

  const totalPage = React.useMemo(
    () => (totalItems ? Math.ceil(totalItems / pageSize) : 1),
    [totalItems, pageSize]
  );

  function updateData(page: number, accumulate?: boolean) {
    const newPageData =
      source?.slice(
        page * pageSize - pageSize,
        page === totalPage ? totalItems : page * pageSize
      ) || [];

    if (accumulate) {
      setCurrentData([...currentData, ...newPageData]);
    } else {
      setCurrentData(newPageData);
    }
  }

  function onAccumulate() {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPage) {
      setCurrentPage(nextPage);
      updateData(nextPage, true);
    }
  }

  function onChange(page: number) {
    setCurrentPage(page);
    updateData(page);
  }

  function onChangePageSize(size: number) {
    setPageSize(size);
  }

  function onSort(sorter: (data: T[]) => T[]) {
    setSource(sorter(source));
  }

  // React.useEffect(() => {
  //   if (config.resetOnChange || totalPage < currentPage) {
  //     onChange(config.initialPage || INITIALPAGE);
  //   } else {
  //     onChange(currentPage);
  //   }
  // }, [source, pageSize]);

  React.useEffect(() => {
    setSource(config.source);
  }, [config.source]);

  React.useEffect(() => {
    onChange(config.initialPage || INITIALPAGE);
  }, [source]);

  React.useEffect(() => {
    setPageSize(config.initialPageSize || PAGESIZE);
  }, [config.initialPageSize]);

  return {
    data: currentData,
    totalItems,
    currentPage,
    pageSize,
    onChange,
    onAccumulate,
    onChangePageSize,
    onSort
  };
}
