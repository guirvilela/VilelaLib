import { HubDataTableEmpty, HubDataTableEmptyProps } from '@hubert/molecules';
import React from 'react';

import { HubDataTableEmptyConfig } from './storyConfig';

export const Default = (args: HubDataTableEmptyProps) => {
  return <HubDataTableEmpty {...args} />;
};

export default HubDataTableEmptyConfig;
