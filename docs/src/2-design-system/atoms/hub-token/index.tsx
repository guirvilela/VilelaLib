import { HubToken, HubTokenProps } from '@hubert/atoms';
import React from 'react';

import { HubTokenConfig } from './storyConfig';

export const Default = (args: HubTokenProps) => {
  const [value, setValue] = React.useState(args.value);
  return <HubToken {...args} value={value} onChange={setValue} />;
};

export default HubTokenConfig;
