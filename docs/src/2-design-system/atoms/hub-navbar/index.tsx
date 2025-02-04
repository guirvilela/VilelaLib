import { HubAvatar, HubButton, HubNavbar, HubNavbarProps } from '@hubert/atoms';
import { useResponsive } from '@hubert/styles';
import React from 'react';
import { TEXT } from '~/utils';
import { HubNavbarConfig } from './storyConfig';

export const Default = ({ children, ...args }: HubNavbarProps) => {
  const { isMobile } = useResponsive();

  return (
    <HubNavbar
      {...args}
      left={
        <>
          {children}
          <HubButton link variant="action" color="white">
            <img src="/assets/img/logo-white-mobile.png" />
          </HubButton>
        </>
      }
      right={<HubAvatar src="/assets/img/avatar.png" borderless />}
    >
      {!isMobile && (
        <>
          <HubButton link variant="ghost" color="white">
            {TEXT.Title}
          </HubButton>
          <HubButton link variant="ghost" color="white">
            {TEXT.Title}
          </HubButton>
        </>
      )}
    </HubNavbar>
  );
};

export default HubNavbarConfig;
