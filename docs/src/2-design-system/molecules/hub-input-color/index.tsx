import { HubGrid } from '@hubert/atoms';
import { HubInputColor, HubInputColorProps } from '@hubert/molecules';
import React from 'react';

import { HubInputColorConfig } from './storyConfig';

export const Default = (args: HubInputColorProps) => {
  const [value, setValue] = React.useState(args.value);

  React.useEffect(() => {
    console.log('ON-CHANGE', value);
  }, [value]);

  return (
    <HubGrid width="200px">
      <HubInputColor {...args} defaultValue={value} onLazyChange={setValue} />
    </HubGrid>
  );
};

export default HubInputColorConfig;
