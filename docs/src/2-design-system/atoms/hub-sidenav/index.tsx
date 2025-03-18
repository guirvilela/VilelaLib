import {
  HubButton,
  HubIcon,
  HubSidenav,
  HubSidenavIcon,
  HubSidenavProps
} from '@hubert/atoms';
import IconOutlineDownload from '@hubert/styles/lib/icons/icon-outline-download.svg';
import IconOutlineHouse from '@hubert/styles/lib/icons/icon-outline-house.svg';
import IconOutlineImage from '@hubert/styles/lib/icons/icon-outline-image.svg';
import IconOutlineLogout from '@hubert/styles/lib/icons/icon-outline-logout.svg';
import React from 'react';
import styled from 'styled-components';

import { Default as HubNavbar } from '../hub-navbar';
import { HubSidenavConfig } from './storyConfig';

const Content = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Default = (args: HubSidenavProps) => {
  return (
    <HubSidenav
      {...args}
      top={
        <HubButton link variant="ghost" color="white">
          <HubIcon icon={IconOutlineHouse} size="sm" />
          Home
        </HubButton>
      }
      bottom={
        <HubButton link variant="ghost" color="white">
          <HubIcon icon={IconOutlineLogout} size="sm" />
          Logout
        </HubButton>
      }
    >
      <HubButton link variant="ghost" color="white">
        <HubIcon icon={IconOutlineDownload} size="sm" />
        Downloads
      </HubButton>
      <HubButton link variant="ghost" color="white">
        <HubIcon icon={IconOutlineImage} size="sm" />
        Images
      </HubButton>
    </HubSidenav>
  );
};

export const WithNavbar = (args: HubSidenavProps) => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <Content>
      <HubNavbar height="56px">
        <HubSidenavIcon opened={showMenu} onChange={setShowMenu} />
      </HubNavbar>
      {showMenu && <Default {...args} offset="56px" />}
    </Content>
  );
};

export default HubSidenavConfig;
