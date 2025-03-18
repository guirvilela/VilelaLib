import { HubAlert, HubAlertProps } from '@hubert/atoms';
import {
  BOOL,
  COLOR,
  ELEMENT,
  factoryMeta,
  FUNCTION,
  GAP,
  HUB_ICON_SVG,
  NOWRAP,
  PADDING,
  RADIUS,
  TEXT
} from '~/utils';

export const HubAlertConfig = factoryMeta<HubAlertProps>({
  title: 'Design System/Atoms/HubAlert',
  component: HubAlert,
  description: 'import { HubAlert } from "@hubert/atoms";',
  args: {
    title: TEXT.Title,
    content: TEXT.Line
  },
  props: {
    title: ELEMENT('Texto ou elemento inserido como titulo do alerta'),
    icon: HUB_ICON_SVG(),
    actions: ELEMENT('Elemento inserido no rodapé do alerta'),
    color: COLOR(),
    content: ELEMENT('Texto ou elemento inserido no body do alerta'),
    gap: GAP(),
    inline: BOOL('Titulo e conteudo na mesma linha'),
    nowrap: NOWRAP(),
    pad: PADDING(),
    radius: RADIUS(),
    onClose: FUNCTION('Evento ao clicar no botão X')
  }
});
