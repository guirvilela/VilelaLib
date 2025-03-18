import { HubGrid, HubSeparator, HubSeparatorProps } from '@hubert/atoms';
import React from 'react';

import { HubSeparatorConfig } from './storyConfig';

export const Default = (args: HubSeparatorProps) => {
  return (
    <HubGrid row width="600px" height="200px" align="center" justify="center">
      <HubSeparator {...args} />
    </HubGrid>
  );
};

export default HubSeparatorConfig;
