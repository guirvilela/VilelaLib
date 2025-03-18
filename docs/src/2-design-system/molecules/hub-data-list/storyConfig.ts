import { HubDataList, HubDataListProps } from '@hubert/molecules';
import { Typo, typoList } from '@hubert/styles';
import {
  CHILDREN,
  factoryMeta,
  FUNCTION,
  GAP,
  HEIGHT,
  LIST_OF,
  OBJECT
} from '~/utils';
import {
  hubTableColumns,
  hubTableData
} from '../../atoms/hub-table/storyConfig';

export const HubDataListConfig = factoryMeta<HubDataListProps<unknown>>({
  title: 'Design System/Molecules/HubDataList',
  component: HubDataList,
  description: 'import { HubDataList } from "@hubert/molecules";',
  args: {
    columns: hubTableColumns as never,
    data: hubTableData as never
  },
  props: {
    columns: OBJECT(
      'Lista com o objeto da configuração de cada coluna',
      'HubDataListColumns<T>'
    ),
    data: OBJECT(
      'Lista com os dados de cada linha da tabela',
      'HubTableRow<T>[]'
    ),
    rowConfigs: OBJECT(
      'Objeto com a configuração aplicada em todas as linhas',
      'HubTableRowConfig<T>'
    ),
    height: HEIGHT('Tamanho da lista'),
    typo: LIST_OF<Typo>('Typo', Array.from(typoList)),
    gap: GAP(),
    onLoadMore: FUNCTION(
      'Dispara ao chegar no final da lista (pode ser utilizado para paginação)'
    ),
    children: CHILDREN()
  }
});
