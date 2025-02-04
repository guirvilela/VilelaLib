import { HubPasswordStrength, HubPasswordStrengthProps } from '@hubert/atoms';
import { factoryMeta, STRING } from '~/utils';

export const HubPasswordStrengthConfig = factoryMeta<HubPasswordStrengthProps>({
  title: 'Design System/Atoms/HubPasswordStrength',
  component: HubPasswordStrength,
  description: 'import { HubPasswordStrength } from "@hubert/atoms";',
  args: {
    password: 'Hubert@8768471'
  },
  props: {
    password: STRING()
  }
});
