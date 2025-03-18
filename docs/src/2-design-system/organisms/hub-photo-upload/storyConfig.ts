import { HubPhotoUpload, HubPhotoUploadProps } from '@hubert/organisms';
import { DISABLED, EXTENDS, factoryMeta, SIZE } from '~/utils';

export const HubPhotoUploadConfig = factoryMeta<HubPhotoUploadProps>({
  title: 'Design System/Organisms/HubPhotoUpload',
  component: HubPhotoUpload,
  description: 'import { HubPhotoUpload } from "@hubert/organisms";',
  args: {
    name: 'John Doe'
  },
  props: {
    extends: EXTENDS('Atoms/HubAvatar'),
    src: {
      description: 'Link/url da foto',
      type: 'text'
    },
    name: {
      description: 'Nome da pessoa/usuario',
      type: 'text'
    },
    disabled: DISABLED(),
    size: SIZE(),
    videoSize: {
      description: 'Video and preview webcam size',
      type: 'text',
      typeLabel: 'Number'
    },
    hideUpload: {
      description: 'Hide upload option',
      type: 'boolean'
    },
    hideWebCam: {
      description: 'Hide webcam option',
      type: 'boolean'
    }
  }
});
