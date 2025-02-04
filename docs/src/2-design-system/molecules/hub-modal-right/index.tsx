import { HubButton } from '@hubert/atoms';
import { HubDate, HubModalRight, HubModalRightProps } from '@hubert/molecules';
import React from 'react';

import { HubModalRightConfig } from './storyConfig';

export const Default = (args: HubModalRightProps) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <>
      <HubButton onClick={() => setOpened(true)}>Open Modal</HubButton>
      <HubModalRight {...args} opened={opened} onClose={() => setOpened(false)}>
        <HubDate
          id="modal-right-dates"
          range
          placeholder="Selecione duas datas"
        >
          Filtro por data
        </HubDate>
      </HubModalRight>
    </>
  );
};

export default HubModalRightConfig;
