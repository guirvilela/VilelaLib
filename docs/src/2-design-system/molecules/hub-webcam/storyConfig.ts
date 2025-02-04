import { HubWebCam, HubWebCamProps } from '@hubert/molecules';
import { EXTENDS, factoryMeta, SIZE } from '~/utils';

export const HubWebCamConfig = factoryMeta<HubWebCamProps>({
  title: 'Design System/Molecules/HubWebCam',
  component: HubWebCam,
  description: 'import { HubWebCam } from "@hubert/molecules";',
  args: {},
  props: {
    extends: EXTENDS('Atoms/HubModal'),
    videoSize: SIZE(),
    onDone: {
      description: 'Dispara ao capturar uma foto',
      typeLabel: '(file?: File) => void'
    }
  }
});
