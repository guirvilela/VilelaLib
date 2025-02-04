import { HubForm, HubFormProps, HubGrid, HubTextField } from '@hubert/atoms';
import React from 'react';
import { TEXT } from '~/utils';

import { HubFormConfig } from './storyConfig';

export const Default = (args: HubFormProps) => {
  return (
    <HubGrid width="400px">
      <HubForm {...args}>
        <HubTextField id="field-a" placeholder={TEXT.Title} />
        <HubTextField id="field-b" placeholder={TEXT.Title} />
      </HubForm>
    </HubGrid>
  );
};

export default HubFormConfig;
