import { HubPagination, HubPaginationProps } from '@hubert/atoms';
import { BOOL, DISABLED, factoryMeta, LIST_OF, NUMBER } from '~/utils';

export const HubPaginationConfig = factoryMeta<HubPaginationProps>({
  title: 'Design System/Atoms/HubPagination',
  component: HubPagination,
  description: 'import { HubPagination } from "@hubert/atoms";',
  transformSource: (snippet, ctx) => {
    if (ctx.name === 'With Table') {
      return `
    const { data, totalItems, onChange } = usePagination({
source: hubTableData,
pageSize: 3
});

<HubCard color="white" pad="3">
<HubGrid align="end" gap="3">
<HubTable columns={columnsConfig} data={data} />
<HubPagination
  showLabel
  showTotalLabel
  pageSize={3}
  totalItems={totalItems}
  onChange={onChange}
/>
</HubGrid>
</HubCard>
    `;
    }
    if (ctx.name === 'X Accumulate') {
      return `
      const { data, onAccumulate } = usePagination({
source: hubTableData,
pageSize: 5
});

return (
<HubCard color="white">
<HubTable
  columns={columnsConfig}
  data={data}
  height="120px"
  onLoadMore={onAccumulate}
/>
</HubCard>
);
    `;
    }
    return snippet;
  },
  args: {
    current: 1,
    totalItems: 50,
    pageSize: 10,
    showLabel: true,
    showSizeChanger: true,
    showTotalLabel: true
  },
  props: {
    current: NUMBER('Pagina atual'),
    pageSize: NUMBER('Quantidade de itens por pagina'),
    totalItems: NUMBER('Total de itens a ser paginada'),
    pageSizeOptions: LIST_OF<number>('Number', [10, 20, 50, 100]),
    disabled: DISABLED(),
    showSizeChanger: BOOL('Habilita o seletor de tamanho da paginação'),
    showLabel: BOOL('Mostra os texto de alguns botões'),
    showTotalLabel: BOOL('Mostra o texto da label do total de itens'),
    noShowIndicators: BOOL('Esconde os botões de paginação'),
    onChange: {
      description:
        'Dispara ao clicar em um numero de pagina ou botão avançar e voltar',
      typeLabel: '(page: number) => void'
    },
    onChangePageSize: {
      description:
        'Dispara ao clicar em uma opção no menu de quantidade de itens por pagina',
      typeLabel: '(size: number) => void'
    }
  }
});
