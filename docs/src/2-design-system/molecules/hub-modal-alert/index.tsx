import { HubButton } from '@hubert/atoms';
import { HubModalAlert, HubModalAlertProps } from '@hubert/molecules';
import React from 'react';

import { HubModalAlertConfig } from './storyConfig';

export const Default = (args: HubModalAlertProps) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <HubButton onClick={() => setOpened(true)}>Open Modal</HubButton>
      <HubModalAlert
        {...args}
        opened={opened}
        onClose={() => setOpened(false)}
      />
    </>
  );
};

export default HubModalAlertConfig;
