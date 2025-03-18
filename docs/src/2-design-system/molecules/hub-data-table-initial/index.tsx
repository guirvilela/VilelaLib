import {
  HubDataTableInitial,
  HubDataTableInitialProps
} from '@hubert/molecules';
import React from 'react';

import { HubDataTableInitialConfig } from './storyConfig';

export const Default = (args: HubDataTableInitialProps) => {
  return <HubDataTableInitial {...args} />;
};

export default HubDataTableInitialConfig;
