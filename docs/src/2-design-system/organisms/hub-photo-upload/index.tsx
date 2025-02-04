import { HubPhotoUpload, HubPhotoUploadProps } from '@hubert/organisms';
import { fileReader } from '@hubert/shared';
import React from 'react';
import { HubPhotoUploadConfig } from './storyConfig';

export const Default = (args: HubPhotoUploadProps) => {
  const [photo, setPhoto] = React.useState<string>();

  const handleChangePhoto = React.useCallback(async (v?: File) => {
    if (!v) return;

    const baseUrl = await fileReader(v);
    setPhoto(baseUrl?.toString());
  }, []);

  return <HubPhotoUpload {...args} src={photo} onChange={handleChangePhoto} />;
};

export default HubPhotoUploadConfig;
