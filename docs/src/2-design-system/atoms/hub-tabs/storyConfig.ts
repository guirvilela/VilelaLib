import { HubTabProps, HubTabsProps } from '@hubert/atoms';
import {
  BOOL,
  CHILDREN,
  CHILDRENS,
  COLOR,
  COLOR_LEVEL,
  DISABLED,
  factoryMeta,
  GAP,
  ON_CHANGE,
  ON_CLICK,
  TEXT,
  VALUE,
  WIDTH
} from '~/utils';

export const HubTabConfig = factoryMeta<HubTabProps>({
  args: {
    children: TEXT.Title
  },
  props: {
    active: BOOL('Adiciona efeito de ativo se true'),
    value: VALUE('Valor da tab utilizado e enviado no `onChange` do `HubTabs`'),
    width: WIDTH(),
    disabled: DISABLED(),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    onClick: ON_CLICK(),
    children: CHILDREN('Label da tab')
  }
});

export const HubTabsConfig = factoryMeta<HubTabsProps>({
  args: {
    current: 0
  },
  props: {
    gap: GAP(),
    current: VALUE('Valor ou indice da tab ativa'),
    width: WIDTH(),
    disabled: DISABLED(),
    onChange: ON_CHANGE('Dispara ao selecionar uma tab', 'number'),
    children: CHILDRENS<never>('Lista de tab')
  }
});
