import { HubTime, HubTimeProps } from '@hubert/molecules';
import { EXTENDS, ID, ON_CHANGE, VALUE, factoryMeta } from '~/utils';

export const HubTimeConfig = factoryMeta<HubTimeProps>({
  title: 'Design System/Molecules/HubTime',
  component: HubTime,
  description: 'import { HubTime } from "@hubert/molecules";',
  args: {},
  props: {
    extends: EXTENDS('Atoms/HubTextField'),
    id: ID(),
    value: VALUE(),
    onChange: ON_CHANGE()
  } as never
});
