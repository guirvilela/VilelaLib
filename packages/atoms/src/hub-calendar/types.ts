import { ISODate } from '@hubert/shared';
import { Color, Size, Typo } from '@hubert/styles';
import React from 'react';

export type HubCalendarMode = 'days' | 'months' | 'years';

export interface HubCalendarProps {
  headless?: boolean;
  initialMode?: HubCalendarMode;
  mandatoryMode?: boolean;
  range?: boolean;
  disabled?: boolean | ISODate[] | ((date: ISODate) => boolean);
  events?: HubCalendarEvent[] | ((date: ISODate) => HubCalendarEvent);
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  size?: Size | string;
  typo?: Typo;
  typoHeader?: Typo;
  min?: ISODate;
  max?: ISODate;
  withActions?: boolean;
  width?: string;
  value?: ISODate[];
  onChange?: (v: ISODate[]) => void;
  onCalendarChange?: (date: ISODate) => void;
  children?: React.ReactNode;
}

export interface HubCalendarEvent {
  date: ISODate;
  reason: string;
  color?: Color;
}

export interface HubCalendarItem {
  previous?: boolean;
  selected?: boolean;
  active?: boolean;
  disabled?: boolean;
  today?: boolean;
  next?: boolean;
  event?: HubCalendarEvent;
  label: string | number;
  date: Date;
}
