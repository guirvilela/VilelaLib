import { HubDate, HubDateProps } from '@hubert/molecules';
import React from 'react';
import { TEXT } from '~/utils';

import { HubDateConfig } from './storyConfig';

export const Default = (args: HubDateProps) => {
  const [value, setValue] = React.useState(['', '']);

  return (
    <HubDate
      {...args}
      id="docs-date-range"
      value={value}
      onChange={setValue}
      placeholder={TEXT.Paragraph}
    >
      {TEXT.Title}
    </HubDate>
  );
};

export default HubDateConfig;
