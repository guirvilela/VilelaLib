import { HubModal, HubModalProps } from '@hubert/atoms';
import { Position, position } from '@hubert/styles';
import {
  BOOL,
  COLOR,
  COLOR_LEVEL,
  ELEMENT,
  factoryMeta,
  FUNCTION,
  HEIGHT,
  LIST_OF,
  PADDING,
  RADIUS,
  TEXT_COLOR,
  TEXT_COLOR_LEVEL,
  WIDTH
} from '~/utils';

export const HubModalConfig = factoryMeta<HubModalProps>({
  title: 'Design System/Atoms/HubModal',
  component: HubModal,
  description: 'import { HubModal } from "@hubert/atoms";',
  args: {
    opened: false,
    width: '500px'
  },
  props: {
    opened: BOOL(),
    width: WIDTH(),
    widthMd: WIDTH(),
    minWidth: WIDTH('Customize o min-width desse component'),
    maxWidth: WIDTH('Customize o max-width desse component'),
    height: HEIGHT(),
    contentHeight: HEIGHT(
      'Customize o height do conteudo do modal (não modifica o header e action)'
    ),
    minContentHeight: HEIGHT(
      'Customize o min-height do conteudo do modal (não modifica o header e action)'
    ),
    position: LIST_OF<Position>('Position', Array.from(position)),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    colorText: TEXT_COLOR(),
    colorTextLevel: TEXT_COLOR_LEVEL(),
    pad: PADDING(),
    offset: {
      description: 'Ajuste da posição do modal na tela',
      type: 'text',
      typeLabel: '(Space | string) | (Space | string)[]'
    },
    radius: RADIUS(),
    darkOverlay: BOOL('Ajusta o overlay para ficar mais escuro'),
    noCloseBtn: BOOL('Esconde o botão X de fechar o modal'),
    noPrintable: BOOL('Esconde o modal no momento da impressão'),
    overflow: {
      description: 'Ajuste do scroll do conteudo do modal',
      type: 'boolean',
      typeLabel: 'boolean | [boolean, boolean]'
    },
    onClose: FUNCTION(),
    header: ELEMENT('Componente a ser inserido no header do modal'),
    actions: ELEMENT('Componente a ser inserido no footer do modal'),
    children: ELEMENT('Componente a ser inserido no conteudo do modal')
  }
});
