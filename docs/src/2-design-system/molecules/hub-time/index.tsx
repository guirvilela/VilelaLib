import { HubGrid } from '@hubert/atoms';
import { HubTime, HubTimeProps } from '@hubert/molecules';
import { timeISO } from '@hubert/shared';
import React from 'react';
import { TEXT } from '~/utils';
import { HubTimeConfig } from './storyConfig';

export const Default = (args: HubTimeProps) => {
  const [value, setValue] = React.useState(timeISO(new Date()));

  React.useEffect(() => {
    console.log('ONCHANGE', value);
  }, [value]);

  return (
    <HubGrid width="200px">
      <HubTime {...args} id="docs-time" value={value} onChange={setValue}>
        {TEXT.Title}
      </HubTime>
    </HubGrid>
  );
};

export default HubTimeConfig;
