import { HubStatusAlert, HubStatusAlertProps } from '@hubert/molecules';
import React from 'react';

import { HubStatusAlertConfig } from './storyConfig';

export const Default = (args: HubStatusAlertProps) => {
  return <HubStatusAlert {...args} />;
};

export default HubStatusAlertConfig;
