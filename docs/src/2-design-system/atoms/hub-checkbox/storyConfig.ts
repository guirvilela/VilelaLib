import { HubCheckbox, HubCheckboxProps } from '@hubert/atoms';
import { Align, align } from '@hubert/styles';
import {
  BOOL,
  BORDER_COLOR,
  CHILDREN,
  COLOR,
  DISABLED,
  factoryMeta,
  ID,
  LIST_OF,
  ON_CHANGE,
  ON_CLICK,
  SIZE,
  TEXT_COLOR
} from '~/utils';

export const HubCheckboxConfig = factoryMeta<HubCheckboxProps>({
  title: 'Design System/Atoms/HubCheckbox',
  component: HubCheckbox,
  description: 'import { HubCheckbox } from "@hubert/atoms";',
  args: {},
  props: {
    id: ID(),
    checked: BOOL(),
    indeterminate: BOOL(),
    color: COLOR(),
    colorText: TEXT_COLOR(),
    borderColor: BORDER_COLOR(),
    align: LIST_OF<Align>('Align', Array.from(align)),
    disabled: DISABLED(),
    size: SIZE(),
    onChange: ON_CHANGE(undefined, 'boolean'),
    onClick: ON_CLICK(),
    children: CHILDREN()
  }
});
