import { HubModalRight, HubModalRightProps } from '@hubert/molecules';
import { BOOL, ELEMENT, EXTENDS, factoryMeta, FUNCTION } from '~/utils';

export const HubModalRightConfig = factoryMeta<HubModalRightProps>({
  title: 'Design System/Molecules/HubModalRight',
  component: HubModalRight,
  description: 'import { HubModalRight } from "@hubert/molecules";',
  args: {},
  props: {
    extends: EXTENDS('Atoms/HubModal'),
    opened: BOOL(),
    labelCancel: ELEMENT(
      'Elemento/texto utilizado no botão de cancelar/negação'
    ),
    onClose: FUNCTION(
      'Função utilizada no onclick do botão de cancelar/negação'
    ),
    labelDone: ELEMENT('Elemento/texto utilizado no botão de confirmação'),
    onDone: FUNCTION('Função utilizada no onclick do botão de confirmação')
  }
});
