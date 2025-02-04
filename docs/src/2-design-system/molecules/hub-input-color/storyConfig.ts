import { HubInputColor, HubInputColorProps } from '@hubert/molecules';
import { EXTENDS, factoryMeta, STRING } from '~/utils';

export const HubInputColorConfig = factoryMeta<HubInputColorProps>({
  title: 'Design System/Molecules/HubInputColor',
  component: HubInputColor,
  description: 'import { HubInputColor } from "@hubert/molecules";',
  args: {
    value: '#aeaeae'
  },
  props: {
    extends: EXTENDS('Atoms/HubTextField'),
    value: STRING('Valor em hexadecimal da cor selecionada')
  } as never
});
