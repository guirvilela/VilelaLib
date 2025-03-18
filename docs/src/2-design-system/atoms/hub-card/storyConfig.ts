import { HubCard, HubCardProps } from '@hubert/atoms';
import { BorderStyle, borderStyle, Shadow, shadowsList } from '@hubert/styles';
import {
  BOOL,
  BORDER_COLOR,
  BORDER_COLOR_LEVEL,
  CHILDREN,
  COLOR,
  COLOR_LEVEL,
  factoryMeta,
  HEIGHT,
  ID,
  LIST_OF,
  ON_CHANGE,
  PADDING,
  RADIUS,
  STRING
} from '~/utils';

export const HubCardConfig = factoryMeta<HubCardProps>({
  title: 'Design System/Atoms/HubCard',
  component: HubCard,
  description: 'import { HubCard } from "@hubert/atoms";',
  args: {},
  props: {
    id: ID(),
    height: HEIGHT(),
    minHeight: HEIGHT(),
    loading: BOOL(),
    centered: BOOL(),
    radius: RADIUS(),
    pad: PADDING(),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    accent: COLOR(),
    accentLevel: COLOR_LEVEL(),
    borderless: BOOL('Remove a borda'),
    borderSize: STRING('Tamanho da borda em px'),
    borderStyle: LIST_OF<BorderStyle>('BorderStyle', Array.from(borderStyle)),
    borderColor: BORDER_COLOR(),
    borderColorLevel: BORDER_COLOR_LEVEL(),
    hover: BOOL(),
    draggable: BOOL('Ativa o modo de arrastar e soltar'),
    shadow: LIST_OF<Shadow>('Shadow', Array.from(shadowsList)),
    noRelative: BOOL(
      'Remove a limitacao do position absolute de elementos internos'
    ),
    customColor: STRING('Cor de fundo personalizada'),
    onDrag: ON_CHANGE(
      'Disparado ao arrastar o card',
      'React.DragEventHandler<HTMLDivElement>'
    ),
    onDrop: ON_CHANGE(
      'Disparado ao soltar o card',
      'React.DragEventHandler<HTMLDivElement>'
    ),
    children: CHILDREN()
  }
});
