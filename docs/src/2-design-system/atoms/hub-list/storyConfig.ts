import { HubListItemProps, HubListProps } from '@hubert/atoms';
import {
  BOOL,
  BORDER_COLOR,
  BORDER_COLOR_LEVEL,
  CHILDREN,
  CHILDRENS,
  factoryMeta,
  FUNCTION,
  GAP,
  HEIGHT,
  NOWRAP,
  PADDING,
  RADIUS,
  TEXT
} from '~/utils';

export const HubListConfig = factoryMeta<HubListProps>({
  args: {
    children: TEXT.Title
  },
  props: {
    hover: BOOL('Adiciona efeito de escurecer o item ao passar o mouse'),
    pad: PADDING(),
    gap: GAP(),
    height: HEIGHT(),
    onLoadMore: FUNCTION(
      'Dispara ao chegar no final da lista (pode ser utilizado para paginação)'
    ),
    children: CHILDRENS('Elementos que compõe a listagem (Seguir exemplo)')
  }
});

export const HubListItemConfig = factoryMeta<HubListItemProps>({
  args: {},
  props: {
    active: BOOL('Adiciona efeito de escurecer no item, se ativo'),
    nowrap: NOWRAP(),
    border: BOOL('Adiciona borda abaixo do item'),
    fullBorder: BOOL('Adiciona borda em volta do item'),
    borderColor: BORDER_COLOR(),
    borderColorLevel: BORDER_COLOR_LEVEL(),
    accentBorderColor: BORDER_COLOR(
      'Adiciona a borda esquerda destacada e customiza a cor'
    ),
    accentBorderColorLevel: BORDER_COLOR_LEVEL(
      'Customize o nivel da cor da borda esquerda destacada'
    ),
    radius: RADIUS(),
    children: CHILDREN()
  }
});
