import {
  HubBadge,
  HubBadgeProps,
  HubButton,
  HubGrid,
  HubIcon
} from '@hubert/atoms';
import IconOutlineApprove from '@hubert/styles/lib/icons/icon-outline-approve.svg';
import IconOutlineError from '@hubert/styles/lib/icons/icon-outline-error.svg';
import IconOutlineExclamationMark from '@hubert/styles/lib/icons/icon-outline-exclamation-mark.svg';
import React from 'react';
import { TEXT } from '~/utils';
import { HubAlertConfig } from './storyConfig';

export const Default = (args: HubBadgeProps) => {
  return <HubBadge {...args} />;
};

export const Float = (args: HubBadgeProps) => {
  return (
    <HubBadge
      {...args}
      color="error"
      colorLevel="500"
      textColor="white"
      float
      rounded
      content="4"
    >
      <HubButton>{TEXT.Title}</HubButton>
    </HubBadge>
  );
};

export const Complex = (args: HubBadgeProps) => {
  return (
    <HubGrid gap="5">
      <HubBadge {...args} color="warning">
        <HubIcon icon={IconOutlineExclamationMark} size="sm" />
        {TEXT.Title}
      </HubBadge>
      <HubBadge {...args} color="error">
        <HubIcon icon={IconOutlineError} size="sm" />
        {TEXT.Title}
      </HubBadge>
      <HubBadge {...args} color="success">
        <HubIcon icon={IconOutlineApprove} size="sm" />
        {TEXT.Title}
      </HubBadge>
    </HubGrid>
  );
};

export default HubAlertConfig;
