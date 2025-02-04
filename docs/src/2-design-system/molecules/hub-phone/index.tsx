import { HubGrid } from '@hubert/atoms';
import { HubPhone, HubPhoneProps, HubPhoneValue } from '@hubert/molecules';
import React from 'react';
import { TEXT } from '~/utils';
import { HubPhoneConfig } from './storyConfig';

export const Default = (args: HubPhoneProps) => {
  const [value, setValue] = React.useState<HubPhoneValue>({
    ddi: '',
    ddd: '',
    phone: ''
  });

  React.useEffect(() => {
    console.log('ONCHANGE', value);
  }, [value]);

  return (
    <HubGrid width="256px">
      <HubPhone
        {...args}
        id="docs-phone"
        ddi={value.ddi}
        ddd={value.ddd}
        phone={value.phone}
        onChange={setValue}
        clearable
      >
        {TEXT.Title}
      </HubPhone>
    </HubGrid>
  );
};

export default HubPhoneConfig;
