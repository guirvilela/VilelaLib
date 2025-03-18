import { HubToggle, HubToggleProps } from '@hubert/atoms';
import {
  BOOL,
  CHILDREN,
  COLOR,
  DISABLED,
  factoryMeta,
  ID,
  ON_CHANGE,
  ON_CLICK,
  SIZE
} from '~/utils';

export const HubToggleConfig = factoryMeta<HubToggleProps>({
  title: 'Design System/Atoms/HubToggle',
  component: HubToggle,
  description: 'import { HubToggle } from "@hubert/atoms";',
  args: {
    id: '#',
    checked: true
  },
  props: {
    id: ID(),
    checked: BOOL('Status se esta ativo ou não'),
    color: COLOR(),
    disabled: DISABLED(),
    size: SIZE(),
    onChange: ON_CHANGE(undefined, 'boolean'),
    onClick: ON_CLICK(),
    children: CHILDREN('Label do toggle')
  }
});
