import { HubPopover, HubPopoverProps } from '@hubert/atoms';
import { trigger } from '@hubert/styles';
import {
  BOOL,
  CHILDREN,
  COLOR,
  COLOR_LEVEL,
  DISABLED,
  ELEMENT,
  FUNCTION,
  HEIGHT,
  PADDING,
  RADIUS,
  WIDTH,
  factoryMeta
} from '~/utils';

export const HubPopoverConfig = factoryMeta<HubPopoverProps>({
  title: 'Design System/Atoms/HubPopover',
  component: HubPopover,
  description: 'import { HubPopover } from "@hubert/atoms";',
  args: {
    trigger: 'hover'
  },
  props: {
    opened: BOOL(
      'Controle do acionamento do popover via programação (pode utilizar o `trigger` em conjunto)'
    ),
    source: BOOL(
      'Controle manual do popover (sem utilizar o trigger do elemento `children`)'
    ),
    disabled: DISABLED(),
    trigger: {
      description:
        'Controle do acionamento do popover automatico (padrão do acionamento é por click)',
      type: 'inline-radio',
      typeLabel: 'click | hover',
      options: trigger.filter((x) => x !== 'focus')
    },
    triggerWidth: WIDTH(
      'Ajuste do width do elemento utilizado como âncora (utilize se necessario apenas)'
    ),
    autoClose: BOOL('Fecha automaticamente ao clicar em alguma opção'),
    offset: {
      description: 'Ajuste da posição final',
      typeLabel: '[number, number]',
      typeDetail:
        '[numero a ser somado ao `top`, numero a ser somado ao `left`]'
    },
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    pad: PADDING(),
    radius: RADIUS(),
    width: WIDTH(),
    height: HEIGHT(),
    onClose: FUNCTION(),
    content: ELEMENT('Elemento inserido no conteudo do popover'),
    children: CHILDREN('Elemento que será utilizado como trigger do popover')
  }
});
