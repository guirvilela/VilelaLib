import { HubAvatarMenu, HubAvatarMenuProps } from '@hubert/molecules';
import IconOutlineDownload from '@hubert/styles/lib/icons/icon-outline-download.svg';
import IconOutlineHouse from '@hubert/styles/lib/icons/icon-outline-house.svg';
import IconOutlineImage from '@hubert/styles/lib/icons/icon-outline-image.svg';
import IconOutlineLogout from '@hubert/styles/lib/icons/icon-outline-logout.svg';
import React from 'react';

import { HubAvatarMenuConfig } from './storyConfig';

export const Default = (args: HubAvatarMenuProps) => {
  return (
    <HubAvatarMenu
      {...args}
      options={[
        {
          icon: IconOutlineHouse,
          label: 'Home',
          href: '#'
        },
        {
          icon: IconOutlineImage,
          label: 'Images',
          href: '#'
        },
        {
          icon: IconOutlineDownload,
          label: 'Downloads',
          href: '#'
        },
        {
          icon: IconOutlineLogout,
          label: 'Logout',
          href: '#'
        }
      ]}
    />
  );
};

export default HubAvatarMenuConfig;
