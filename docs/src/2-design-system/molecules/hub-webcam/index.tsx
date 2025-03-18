import { HubButton } from '@hubert/atoms';
import { HubWebCam, HubWebCamProps } from '@hubert/molecules';
import React from 'react';
import { HubWebCamConfig } from './storyConfig';

export const Default = (args: HubWebCamProps) => {
  const [opened, setOpened] = React.useState(false);

  function handleDone(v?: File) {
    console.log('WEBCAM-DONE', v);
    setOpened(false);
  }

  return (
    <>
      <HubButton onClick={() => setOpened(true)}>Open Modal</HubButton>
      <HubWebCam
        {...args}
        opened={opened}
        onClose={() => setOpened(false)}
        onDone={handleDone}
      />
    </>
  );
};

export default HubWebCamConfig;
