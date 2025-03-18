import { HubRadioGroupProps, HubRadioProps } from '@hubert/atoms';
import { Align, align } from '@hubert/styles';
import {
  BOOL,
  CHILDREN,
  CHILDRENS,
  COLOR,
  DISABLED,
  factoryMeta,
  GAP,
  ID,
  LIST_OF,
  ON_CHANGE,
  ON_CLICK,
  SIZE,
  VALUE
} from '~/utils';

export const HubRadioConfig = factoryMeta<HubRadioProps>({
  args: {
    id: '#',
    checked: true
  },
  props: {
    id: ID(),
    checked: BOOL(
      'Adiciona o efeito de ativo ao radio button (se utilizado sem `HubRadioGroup`)'
    ),
    disabled: DISABLED(),
    color: COLOR(),
    size: SIZE(),
    value: VALUE(
      'Valor do radio utilizado e enviado no `onChange` do `HubRadioGroup`'
    ),
    onChange: ON_CHANGE(),
    onClick: ON_CLICK(),
    children: CHILDREN('Label do radio button')
  }
});

export const HubRadioGroupConfig = factoryMeta<HubRadioGroupProps>({
  args: {
    value: 0
  },
  props: {
    disabled: DISABLED(),
    vertical: BOOL('Lista os radios na vertical em formato de lista'),
    color: COLOR(),
    size: SIZE(),
    gap: GAP(),
    align: LIST_OF<Align>('Align', Array.from(align)),
    value: VALUE('Valor do radio a ser ativado'),
    onChange: ON_CHANGE('Dispara ao selecionar um radio', 'number'),
    children: CHILDRENS('Lista de radio buttons')
  }
});
