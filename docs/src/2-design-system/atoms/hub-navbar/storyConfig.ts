import { HubNavbar, HubNavbarProps } from '@hubert/atoms';
import {
  BOOL,
  CHILDREN,
  COLOR,
  COLOR_LEVEL,
  ELEMENT,
  factoryMeta,
  GAP,
  HEIGHT,
  PADDING,
  TEXT_COLOR,
  TEXT_COLOR_LEVEL
} from '~/utils';

export const HubNavbarConfig = factoryMeta<HubNavbarProps>({
  title: 'Design System/Atoms/HubNavbar',
  component: HubNavbar,
  description: 'import { HubNavbar } from "@hubert/atoms";',
  args: {},
  props: {
    height: HEIGHT(),
    fixed: BOOL('Adiciona position fixed'),
    gap: GAP(),
    pad: PADDING(),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    colorText: TEXT_COLOR(),
    colorTextLevel: TEXT_COLOR_LEVEL(),
    left: ELEMENT('Componente posicionado a esquerda do navbar'),
    center: ELEMENT('Componente posicionado ao centro do navbar'),
    right: ELEMENT('Componente posicionado a direita do navbar'),
    children: CHILDREN()
  }
});
