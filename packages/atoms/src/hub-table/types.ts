import {
  Align,
  BorderStyle,
  Color,
  ColorLevel,
  Sort,
  Space
} from '@hubert/styles';

export interface HubTableConfig {
  borderless?: boolean;
  headless?: boolean;
  childrenKey?: string;
}

export interface HubTableRenderProps<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  item: HubTableRow<T>;
  key: string;
  index: number;
  indexCol: number;
}

export interface HubTableColumn<T> {
  label?: React.ReactNode;
  key: string;
  width?: string;
  minWidth?: string;
  align?: Align;
  headAlign?: Align;
  sticky?: boolean;
  nowrap?: boolean;
  printable?: boolean;
  headColspan?: number;
  colspan?: number;
  footColspan?: number;
  noOverflow?: boolean;
  hidden?: boolean;
  sort?: Sort;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sorter?: (valueA: any, valueB: any) => number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formatter?: (value: any) => any;
  render?: (props: HubTableRenderProps<T>) => React.ReactNode;
  renderFoot?: (props: HubTableRenderProps<T>) => React.ReactNode;
}

export type HubTableColumns<T = never> = HubTableColumn<T>[][];

export type HubTableRow<T> = T & {
  configs?: HubTableRowConfig;
  ignoreColspan?: boolean;
  level?: number;
  children?: HubTableRow<T>[];
};

export interface HubTableRowConfig {
  height?: string;
  color?: Color;
  colorLevel?: ColorLevel;
  border?: string;
  borderStyle?: BorderStyle;
  borderColor?: Color;
  borderColorLevel?: ColorLevel;
  borderRadius?: Space;
  accentColor?: Color;
  accentColorLevel?: ColorLevel;
  gap?: Space;
  blink?: boolean;
}

export interface HubTableProps<T = unknown> {
  configs?: HubTableConfig;
  rowConfigs?: HubTableRowConfig;
  columns: HubTableColumns<T>;
  data: HubTableRow<T>[];
  foots?: Partial<HubTableRow<T>>[];
  minHeight?: string;
  height?: string;
  width?: string;
  onSort?: (
    sorter?: (data?: HubTableRow<T>[]) => HubTableRow<T>[],
    col?: HubTableColumn<T>
  ) => void;
  onLoadMore?: () => void;
  onClickRow?: (item: HubTableRow<T>) => void;
  dataChildrenKey?: keyof HubTableRow<T>;
  children?: React.ReactNode | React.ReactNode[];
}

export interface HubTableRef {
  scrollTo: (v: number | ((el: HTMLDivElement) => number)) => void;
}
