import { HubProgressTabProps, HubProgressTabsProps } from '@hubert/atoms';
import {
  BOOL,
  CHILDREN,
  CHILDRENS,
  COLOR,
  COLOR_LEVEL,
  DISABLED,
  factoryMeta,
  GAP,
  HEIGHT,
  NUMBER,
  ON_CHANGE,
  ON_CLICK,
  TEXT,
  VALUE,
  WIDTH
} from '~/utils';

export const HubProgressTabConfig = factoryMeta<HubProgressTabProps>({
  args: {
    children: TEXT.Title
  },
  props: {
    active: BOOL('Adiciona efeito de ativo se true'),
    value: VALUE(
      'Valor da tab utilizado e enviado no `onChange` do `HubProgressTabs`'
    ),
    disabled: DISABLED(),
    width: WIDTH(),
    height: HEIGHT(),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    onClick: ON_CLICK(),
    children: CHILDREN('Texto posicionado abaixo do indicador')
  }
});

export const HubProgressTabsConfig = factoryMeta<HubProgressTabsProps>({
  args: {
    current: 0
  },
  props: {
    current: NUMBER('Indice ou valor da tab ativa'),
    width: WIDTH(),
    height: HEIGHT(),
    disabled: DISABLED(),
    gap: GAP(),
    onChange: ON_CHANGE('Dispara ao selecionar uma tab', 'number'),
    children: CHILDRENS<never>('HubProgressTab elements')
  }
});
