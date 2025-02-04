import { HubProgressStepperProps, HubProgressStepProps } from '@hubert/atoms';
import {
  BOOL,
  CHILDREN,
  CHILDRENS,
  COLOR,
  COLOR_LEVEL,
  DISABLED,
  factoryMeta,
  ON_CLICK,
  SIZE,
  STRING
} from '~/utils';

export const HubProgressStepConfig = factoryMeta<HubProgressStepProps>({
  args: {
    label: '1'
  },
  props: {
    label: STRING('Texto posicionado no indicador'),
    size: SIZE(),
    active: BOOL('Adiciona efeito de ativo se true'),
    complete: BOOL('Adiciona efeito de completo se true'),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    disabled: DISABLED(),
    onClick: ON_CLICK(),
    children: CHILDREN('Texto posicionado abaixo do indicador')
  }
});

export const HubProgressStepperConfig = factoryMeta<HubProgressStepperProps>({
  args: {},
  props: {
    children: CHILDRENS<React.ReactElement>('HubProgressStep elements')
  }
});
