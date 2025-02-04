import { HubCollapse, HubCollapseProps } from '@hubert/atoms';
import { Align, align } from '@hubert/styles';
import {
  BOOL,
  CHILDREN,
  COLOR,
  COLOR_LEVEL,
  DISABLED,
  ELEMENT,
  factoryMeta,
  GAP,
  HEIGHT,
  LIST_OF,
  NOWRAP,
  ON_CHANGE,
  PADDING,
  RADIUS,
  TEXT,
  WIDTH
} from '~/utils';

export const HubCollapseConfig = factoryMeta<HubCollapseProps>({
  title: 'Design System/Atoms/HubCollapse',
  component: HubCollapse,
  description: 'import { HubCollapse } from "@hubert/atoms";',
  args: {
    opened: true,
    title: TEXT.Title
  },
  props: {
    opened: BOOL(),
    disabled: DISABLED(),
    nowrap: NOWRAP(),
    hidden: BOOL('Esconde o gatilho do collapse'),
    width: WIDTH(),
    height: HEIGHT(),
    align: LIST_OF<Align>('Align', Array.from(align)),
    titleClickable: BOOL('Desativa ou não o evento do click no titulo'),
    titleAlign: LIST_OF<Align>('Align', Array.from(align)),
    titleWidth: WIDTH(),
    triggerPosition: LIST_OF<'left' | 'right'>('left|right', ['left', 'right']),
    triggerRotateStep: LIST_OF<0 | 90 | 180>('0|90|180', [0, 90, 180]),
    gap: GAP(),
    title: ELEMENT(),
    titlePad: PADDING(),
    titleColor: COLOR(),
    titleColorLevel: COLOR_LEVEL(),
    titleRadius: RADIUS(),
    children: CHILDREN(),
    onChange: ON_CHANGE(undefined, 'boolean'),
    customTrigger: {
      description:
        'Função para substituir o elemento trigger, deve retornar outro elemento.',
      type: 'none',
      typeLabel: '(opened: boolean, onClick: () => void) => React.ReactNode'
    }
  }
});
