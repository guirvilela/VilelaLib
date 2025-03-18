import {
  HubProgressBarProps,
  HubProgressBar as ProgressBar
} from '@hubert/atoms';
import React from 'react';
import styled from 'styled-components';

import { HubProgressBarConfig } from './storyConfig';

const HubProgressBar = styled(ProgressBar)`
  width: 600px;
`;

export const Default = (args: HubProgressBarProps) => {
  return <HubProgressBar {...args} />;
};
export const Indeterminate = (args: HubProgressBarProps) => {
  return <HubProgressBar {...args} indeterminate height="6px" />;
};

export const Display = (args: HubProgressBarProps) => {
  return (
    <HubProgressBar
      {...args}
      display
      percent={75}
      height="6px"
      color="condominios"
    />
  );
};

export default HubProgressBarConfig;
