import { HubCheckbox, HubCheckboxProps } from '@hubert/atoms';
import React from 'react';

import { HubCheckboxConfig } from './storyConfig';

export const Default = (args: HubCheckboxProps) => {
  const [check, setCheck] = React.useState(args.checked);
  return (
    <HubCheckbox {...args} checked={check} onClick={() => setCheck(!check)}>
      {args.children}
    </HubCheckbox>
  );
};

export default HubCheckboxConfig;
