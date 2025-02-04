import {
  HubCollapse as Collapse,
  HubButton,
  HubCollapseProps,
  HubIcon
} from '@hubert/atoms';
import IconOutlineHeart from '@hubert/styles/lib/icons/icon-outline-heart.svg';
import React from 'react';
import styled from 'styled-components';
import { TEXT } from '~/utils';
import { HubCollapseConfig } from './storyConfig';

const HubCollapse = styled(Collapse)`
  width: 400px;
`;

export const Default = (args: HubCollapseProps) => {
  const [opened, setOpened] = React.useState(args.opened);
  return (
    <HubCollapse {...args} opened={opened} onChange={setOpened}>
      {TEXT.Paragraph}
    </HubCollapse>
  );
};

export const CustomTrigger = (args: HubCollapseProps) => {
  const [opened, setOpened] = React.useState(args.opened);
  return (
    <HubCollapse
      {...args}
      opened={opened}
      onChange={setOpened}
      customTrigger={(open, onClick) => (
        <HubButton variant="icon" onClick={onClick}>
          <HubIcon icon={IconOutlineHeart} rotate={open ? 180 : 0} />
        </HubButton>
      )}
    >
      {TEXT.Paragraph}
    </HubCollapse>
  );
};

export default HubCollapseConfig;
