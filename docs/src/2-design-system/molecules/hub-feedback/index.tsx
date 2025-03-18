import { HubButton } from '@hubert/atoms';
import { HubFeedback, HubFeedbackProps } from '@hubert/molecules';
import React from 'react';
import { HubFeedbackConfig } from './storyConfig';

export const Default = (args: HubFeedbackProps) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <HubButton onClick={() => setOpened(true)}>Open Modal</HubButton>
      <HubFeedback {...args} opened={opened} onClose={() => setOpened(false)} />
    </>
  );
};

export default HubFeedbackConfig;
