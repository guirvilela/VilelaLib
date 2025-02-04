import {
  HubCard,
  HubGrid,
  HubSection,
  HubSectionProps,
  HubTextField
} from '@hubert/atoms';
import React from 'react';
import { TEXT } from '~/utils';
import { HubSectionConfig } from './storyConfig';

export const Default = (args: HubSectionProps) => {
  return <HubSection {...args} />;
};

export const HubSectionChildren = (args: HubSectionProps) => {
  return (
    <HubGrid width="600px">
      <HubCard pad="5" color="white">
        <HubSection {...args}>
          <HubGrid row gap="5">
            <HubTextField
              id={TEXT.Placeholder}
              type="text"
              placeholder={TEXT.Placeholder}
              readOnly
            >
              {TEXT.Label}
            </HubTextField>
            <HubTextField
              id={TEXT.Placeholder}
              type="text"
              placeholder={TEXT.Placeholder}
              disabled
            >
              {TEXT.Label}
            </HubTextField>
          </HubGrid>
        </HubSection>
      </HubCard>
    </HubGrid>
  );
};

export default HubSectionConfig;
