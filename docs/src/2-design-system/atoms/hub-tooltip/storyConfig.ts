import { HubTooltip, HubTooltipProps } from '@hubert/atoms';
import { PositionExtra, positionExtra } from '@hubert/styles';
import {
  BOOL,
  CHILDREN,
  COLOR,
  COLOR_LEVEL,
  DISABLED,
  ELEMENT,
  factoryMeta,
  LIST_OF,
  NOWRAP,
  TEXT,
  TEXT_COLOR,
  TEXT_COLOR_LEVEL,
  WIDTH
} from '~/utils';

export const HubTooltipConfig = factoryMeta<HubTooltipProps>({
  title: 'Design System/Atoms/HubTooltip',
  component: HubTooltip,
  description: 'import { HubTooltip } from "@hubert/atoms";',
  args: {
    content: TEXT.Label,
    width: '140px'
  },
  props: {
    opened: BOOL(
      'Controle do acionamento do tooltip via programação (padrão do acionamento é por hover)'
    ),
    disabled: DISABLED(),
    nowrap: NOWRAP(),
    triggerWidth: WIDTH(
      'Ajuste do width do elemento utilizado como âncora (utilize se necessario apenas)'
    ),
    width: WIDTH(),
    position: LIST_OF<PositionExtra>(
      'PositionExtra',
      Array.from(positionExtra)
    ),
    content: ELEMENT('Elemento ou texto apresentado dentro do tooltip'),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    colorText: TEXT_COLOR(),
    colorTextLevel: TEXT_COLOR_LEVEL(),
    children: CHILDREN('Elemento que o tooltip ira utilizar como âncora')
  }
});
