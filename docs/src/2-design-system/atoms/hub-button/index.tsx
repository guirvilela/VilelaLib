import { HubButton, HubButtonProps, HubGrid, HubIcon } from '@hubert/atoms';
import IconOutlineAddNew from '@hubert/styles/lib/icons/icon-outline-add-new.svg';
import React from 'react';
import { TEXT } from '~/utils';

import { HubButtonConfig } from './storyConfig';

export const Default = (args: HubButtonProps) => {
  return <HubButton {...args}>{TEXT.Button}</HubButton>;
};

export const Variants = (args: HubButtonProps) => {
  return (
    <HubGrid row gap="5" align="center">
      <HubButton {...args}>
        <HubIcon icon={IconOutlineAddNew} />
        Default
      </HubButton>
      <div>|</div>
      <HubButton {...args} variant="outline">
        Outline
      </HubButton>
      <div>|</div>
      <HubButton {...args} variant="ghost">
        Ghost
      </HubButton>
      <div>|</div>
      <HubButton {...args} variant="icon">
        <HubIcon icon={IconOutlineAddNew} />
      </HubButton>
      <div>|</div>
      <HubButton {...args} variant="action">
        Action
      </HubButton>
    </HubGrid>
  );
};

export default HubButtonConfig;
