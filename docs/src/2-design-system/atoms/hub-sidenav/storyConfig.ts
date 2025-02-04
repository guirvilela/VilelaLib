import { HubSidenav, HubSidenavProps } from '@hubert/atoms';
import {
  BOOL,
  COLOR,
  COLOR_LEVEL,
  ELEMENT,
  factoryMeta,
  FUNCTION,
  GAP,
  PADDING,
  TEXT_COLOR,
  TEXT_COLOR_LEVEL,
  WIDTH
} from '~/utils';

export const HubSidenavConfig = factoryMeta<HubSidenavProps>({
  title: 'Design System/Atoms/HubSidenav',
  component: HubSidenav,
  description: 'import { HubSidenav } from "@hubert/atoms";',
  args: {},
  props: {
    opened: BOOL(),
    width: WIDTH(),
    offset: {
      description: 'Ajuste da posição do sidenav na tela',
      type: 'text',
      typeLabel: '(Space | string) | (Space | string)[]'
    },
    fixed: BOOL('Adiciona position fixed'),
    noAnimation: BOOL('Remove as animações de abrir e fechar'),
    noContentHeight: BOOL(
      'Remove height 100% do conteudo (não preenche a tela)'
    ),
    gap: GAP(),
    pad: PADDING(),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    colorText: TEXT_COLOR(),
    colorTextLevel: TEXT_COLOR_LEVEL(),
    onClose: FUNCTION('Dispara ao fechar o sidenav'),
    top: ELEMENT('Componente posicionado no topo do sidenav'),
    bottom: ELEMENT('Componente posicionado no rodapé do sidenav'),
    children: ELEMENT('Componente posicionado no centro/conteudo do sidenav')
  }
});
