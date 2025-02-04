import {
  HubSkeletonProps,
  HubSkeleton as SkeletonComponent
} from '@hubert/atoms';
import React from 'react';
import styled from 'styled-components';

import { HubSkeletonConfig } from './storyConfig';

const HubSkeleton = styled(SkeletonComponent)`
  width: 640px;
`;

export const Default = (args: HubSkeletonProps) => {
  return <HubSkeleton {...args} />;
};

export const Multiline = (args) => {
  return (
    <>
      <HubSkeleton {...args} />
      <HubSkeleton {...args} />
    </>
  );
};

export default HubSkeletonConfig;
