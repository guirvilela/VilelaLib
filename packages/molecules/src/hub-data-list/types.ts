import { HubTableColumns, HubTableRow } from '@hubert/atoms';
import { Col, Space, Typo } from '@hubert/styles';

type HubTableColumn<T> = HubTableColumns<T>[0][0];
type HubTableRowConfig<T> = HubTableRow<T>['configs'];

export interface HubDataListColumn<T> extends HubTableColumn<T> {
  renderMobile?: HubTableColumn<T>['render'];
  noMobileTitle?: boolean;
  gridCols?: Col[];
}

export type HubDataListColumns<T = never> = HubDataListColumn<T>[][];

export interface HubDataListProps<T> {
  columns: HubDataListColumns<T>;
  data: HubTableRow<T>[];
  rowConfigs?: HubTableRowConfig<T>;
  height?: string;
  typo?: Typo;
  gap?: Space;
  onLoadMore?: () => void;
  children?: React.ReactNode;
}
