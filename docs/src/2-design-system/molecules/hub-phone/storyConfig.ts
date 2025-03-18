import { HubPhone, HubPhoneProps } from '@hubert/molecules';
import { EXTENDS, ID, ON_CHANGE, VALUE, factoryMeta } from '~/utils';

export const HubPhoneConfig = factoryMeta<HubPhoneProps>({
  title: 'Design System/Molecules/HubPhone',
  component: HubPhone,
  description: 'import { HubPhone } from "@hubert/molecules";',
  args: {},
  props: {
    extends: EXTENDS('Atoms/HubTextField'),
    id: ID(),
    ddi: VALUE(),
    ddd: VALUE(),
    phone: VALUE(),
    onChange: ON_CHANGE()
  }
});
