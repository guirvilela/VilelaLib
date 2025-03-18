export interface HubPaginationProps {
  current: number;
  pageSize: number;
  totalItems?: number;
  pageSizeOptions?: number[];
  disabled?: boolean;
  showSizeChanger?: boolean;
  showLabel?: boolean;
  showTotalLabel?: boolean;
  noShowIndicators?: boolean;
  onChange?: (page: number) => void;
  onChangePageSize?: (size: number) => void;
}
