import {
  HubButton,
  HubGrid as HubGridComponent,
  HubGridProps,
  HubTextField
} from '@hubert/atoms';
import React from 'react';
import styled from 'styled-components';
import { TEXT } from '~/utils';

import { HubGridConfig } from './storyConfig';

const HubGrid = styled(HubGridComponent)`
  width: 640px;
`;

export const Default = (args: HubGridProps) => {
  return (
    <HubGrid {...args}>
      <HubTextField id="hub-grid-field-1" placeholder={TEXT.Title} />
      <HubTextField id="hub-grid-field-2" placeholder={TEXT.Title} />
      <HubButton>{TEXT.Button}</HubButton>
    </HubGrid>
  );
};

export const Multiline = (args: HubGridProps) => {
  return (
    <HubGrid gap="3">
      <HubGridComponent {...args} gap="5">
        <HubTextField id="hub-grid-field-1" placeholder={TEXT.Title} />
        <HubTextField id="hub-grid-field-2" placeholder={TEXT.Title} />
        <HubButton>{TEXT.Button}</HubButton>
      </HubGridComponent>
      <HubGridComponent {...args} cols={['2', '4', '6']} gap="5">
        <div />
        <HubTextField id="hub-grid-field-3" placeholder={TEXT.Title} />
        <HubTextField id="hub-grid-field-4" placeholder={TEXT.Title} />
      </HubGridComponent>
      <HubGridComponent {...args} cols={['5', '5', '2']} gap="5">
        <HubTextField id="hub-grid-field-5" placeholder={TEXT.Title} />
        <HubTextField id="hub-grid-field-6" placeholder={TEXT.Title} />
      </HubGridComponent>
    </HubGrid>
  );
};

export const MultilineColumn = (args: HubGridProps) => {
  return (
    <HubGrid {...args} cols={['3', '6', '3']} gap="5">
      <HubGridComponent gap="3">
        <HubTextField id="hub-grid-field-11" placeholder={TEXT.Title} />
        <HubTextField id="hub-grid-field-21" placeholder={TEXT.Title} />
      </HubGridComponent>
      <HubGridComponent gap="3">
        <HubTextField id="hub-grid-field-31" placeholder={TEXT.Title} />
        <HubTextField id="hub-grid-field-41" placeholder={TEXT.Title} />
      </HubGridComponent>
      <HubGridComponent gap="3">
        <HubTextField id="hub-grid-field-51" placeholder={TEXT.Title} />
        <HubTextField id="hub-grid-field-61" placeholder={TEXT.Title} />
      </HubGridComponent>
    </HubGrid>
  );
};

export default HubGridConfig;
