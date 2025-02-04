import { HubCard } from '@hubert/atoms';
import { HubDataList, HubDataListProps } from '@hubert/molecules';
import React from 'react';

import { HubDataListConfig } from './storyConfig';

export const Default = (args: HubDataListProps<unknown>) => {
  return (
    <HubCard color="white" pad="2" borderless>
      <HubDataList {...args} />
    </HubCard>
  );
};

export default HubDataListConfig;
