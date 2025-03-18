import { HubTable, HubTableColumns, HubTableProps } from '@hubert/atoms';
import { sorter } from '@hubert/shared';
import {
  CHILDREN,
  factoryMeta,
  FUNCTION,
  HEIGHT,
  OBJECT,
  TEXT,
  WIDTH
} from '~/utils';

export const hubTableData = [
  {
    propA: 'value A 2',
    propB: 'value B 1',
    propC: 'value C 1'
  },
  {
    propA: 'value A 3',
    propB: 'value B 2',
    propC: 'value C 2'
  },
  {
    propA: 'value A 1',
    propB: 'value B 3',
    propC: 'value C 3'
  },
  {
    propA: 'value A 2',
    propB: 'value B 1',
    propC: 'value C 1'
  },
  {
    propA: 'value A 3',
    propB: 'value B 2',
    propC: 'value C 2'
  }
];

type Data = typeof hubTableData;

export const hubTableColumns: HubTableColumns<Data> = [
  [
    {
      label: TEXT.Title,
      key: 'propA'
    },
    {
      label: TEXT.Title,
      key: 'propB'
    },
    {
      label: TEXT.Title,
      key: 'propC'
    }
  ]
];

export const hubTableCompleteColumns: HubTableColumns<Data> = [
  [
    {
      label: TEXT.Title,
      key: 'propA',
      width: '200px',
      align: 'start',
      headAlign: 'start',
      sticky: true,
      nowrap: true,
      sort: 'normal',
      sorter: sorter(),
      formatter: (v) => v,
      render: ({ value }) => value
    },
    {
      label: TEXT.Title,
      key: 'propB',
      width: '300px'
    },
    {
      label: TEXT.Title,
      key: 'propC',
      width: '300px',
      renderFoot: ({ value }) => new Intl.NumberFormat('pt-BR').format(value)
    }
  ]
];

export const HubTableConfig = factoryMeta<HubTableProps>({
  title: 'Design System/Atoms/HubTable',
  component: HubTable,
  description: 'import { HubTable } from "@hubert/atoms";',
  args: {
    columns: hubTableColumns as never,
    data: hubTableData as never
  },
  props: {
    configs: OBJECT('Objeto com a configuração da tabela', 'HubTableConfig'),
    rowConfigs: OBJECT(
      'Objeto com a configuração aplicada em todas as linhas',
      'HubTableRowConfig'
    ),
    columns: OBJECT(
      'Lista com o objeto da configuração de cada coluna',
      'HubTableColumns<T>'
    ),
    data: OBJECT(
      'Lista com os dados de cada linha da tabela',
      'HubTableRow<T>[]'
    ),
    foots: OBJECT(
      'Lista com os dados cada linha e coluna do footer da tabela',
      'HubTableRow<T>[]'
    ),
    minHeight: HEIGHT('Tamanho minimo da tabela'),
    height: HEIGHT('Tamanho da tabela'),
    width: WIDTH(),
    onSort: {
      description:
        'Função para capturar o momento que o usuario efetua a ordenação da coluna',
      typeLabel:
        '(sorter: (data: HubTableRow<T>[]) => HubTableRow<T>[], col: HubTableColumn<T>) => void',
      typeDetail: 'import { HubTableRow, HubTableColumn } from "@hubert/atoms";'
    },
    onLoadMore: FUNCTION(
      'Dispara ao chegar no final da lista (pode ser utilizado para paginação)'
    ),
    onClickRow: {
      description: 'Dispara ao clicar em uma linha na tabela',
      typeLabel: '(item: HubTableRow<T>) => void',
      typeDetail: 'import { HubTableRow } from "@hubert/atoms";'
    },
    dataChildrenKey: {
      description:
        'Chave utilizada para transformar a tabela flat em aninhada (`data` precisa ser uma lista aninhada)',
      typeLabel: 'keyof HubTableRow<T>',
      typeDetail: 'import { HubTableRow } from "@hubert/atoms";'
    },
    children: CHILDREN()
  }
});
