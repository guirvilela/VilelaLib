import { HubAvatar, HubAvatarProps } from '@hubert/atoms';
import React from 'react';

import { HubAvatarConfig } from './storyConfig';

export const Default = (args: HubAvatarProps) => {
  return <HubAvatar {...args} />;
};

export const InitialName = (args: HubAvatarProps) => {
  return <HubAvatar {...args} typo="h1" size="lg" />;
};

export const InitialNameBordeless = (args: HubAvatarProps) => {
  return <HubAvatar {...args} typo="h1" size="lg" borderless />;
};

export const Image = (args: HubAvatarProps) => {
  return <HubAvatar {...args} src="/assets/img/avatar.png" size="lg" />;
};

export const ImageAndBorderless = (args: HubAvatarProps) => {
  return (
    <HubAvatar {...args} size="lg" src="/assets/img/avatar.png" borderless />
  );
};

export default HubAvatarConfig;
