import { HubSeparator, HubSeparatorProps } from '@hubert/atoms';
import { BorderStyle, borderStyle } from '@hubert/styles';
import {
  BOOL,
  COLOR,
  COLOR_LEVEL,
  factoryMeta,
  LIST_OF,
  RADIUS,
  SIZE
} from '~/utils';

export const HubSeparatorConfig = factoryMeta<HubSeparatorProps>({
  title: 'Design System/Atoms/HubSeparator',
  component: HubSeparator,
  description: 'import { HubSeparator } from "@hubert/atoms";',
  args: {},
  props: {
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    radius: RADIUS(),
    size: SIZE('Largura da barra'),
    length: SIZE('Tamanho da barra'),
    vertical: BOOL('Muda para orientação na vertical'),
    borderStyle: LIST_OF<BorderStyle>('BorderStyle', Array.from(borderStyle))
  }
});
