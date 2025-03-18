import { HubFilters, HubFiltersProps } from '@hubert/molecules';
import {
  CHILDREN,
  ELEMENT,
  EXTENDS,
  factoryMeta,
  FUNCTION,
  HEIGHT,
  NUMBER
} from '~/utils';

export const HubFiltersConfig = factoryMeta<HubFiltersProps>({
  title: 'Design System/Molecules/HubFilters',
  component: HubFilters,
  description: 'import { HubFilters } from "@hubert/molecules";',
  args: {
    cols: ['6', '6']
  },
  props: {
    extends: EXTENDS('Atoms/HubGrid'),
    header: ELEMENT('Elemento inserido no header do modal (modo mobile)'),
    count: NUMBER(
      'Utilizado para mostrar o indicador de campos modificados (modo mobile)'
    ),
    contentHeight: HEIGHT(
      'Customize o height do conteudo do modal (modo mobile)'
    ),
    actions: ELEMENT(
      'Elemento inserido no rodapé do modal, caso seja necessario ter outros botões (modo mobile)'
    ),
    onSearch: FUNCTION(
      'Disparado quando fechar o modal de filtros (modo mobile)'
    ),
    children: CHILDREN(
      'Lista de `HubTextFields` (não precisa de fragmento ou grid em volta deles)'
    )
  }
});
