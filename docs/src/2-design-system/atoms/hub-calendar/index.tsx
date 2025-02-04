import { HubCalendar, HubCalendarEvent, HubCalendarProps } from '@hubert/atoms';
import { ISODate, addDateISO } from '@hubert/shared';
import React from 'react';

import { HubCalendarConfig } from './storyConfig';

export const Default = (args: HubCalendarProps) => {
  const [value, setValue] = React.useState<ISODate[]>([]);

  React.useEffect(() => {
    console.log('ON-CHANGE', value);
  }, [value]);

  return <HubCalendar {...args} value={value} onChange={setValue} />;
};

export const Events = (args: HubCalendarProps) => {
  const [value, setValue] = React.useState<ISODate[]>([]);

  const events: HubCalendarEvent[] = [
    {
      date: addDateISO(new Date(), { days: 2 }),
      reason: 'Feriado',
      color: 'error'
    },
    {
      date: addDateISO(new Date(), { days: 4 }),
      reason: 'Ócio'
    }
  ];

  React.useEffect(() => {
    console.log('ON-CHANGE', value);
  }, [value]);

  return (
    <HubCalendar
      {...args}
      events={events}
      value={value}
      range
      onChange={setValue}
    />
  );
};

export default HubCalendarConfig;
