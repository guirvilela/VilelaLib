import { HubToggle, HubToggleProps } from '@hubert/atoms';
import React from 'react';

import { HubToggleConfig } from './storyConfig';

export const Default = (args: HubToggleProps) => {
  const [check, setCheck] = React.useState(args.checked);
  return (
    <HubToggle {...args} checked={check} onClick={() => setCheck(!check)} />
  );
};

export const Checked = (args: HubToggleProps) => {
  return <HubToggle {...args} checked />;
};

export const Disabled = (args: HubToggleProps) => {
  return <HubToggle {...args} disabled />;
};

export const LargeSwitch = (args: HubToggleProps) => {
  return <HubToggle {...args} size="lg" />;
};

export default HubToggleConfig;
