import {
  HubGrid,
  HubIcon,
  HubTextField,
  HubTextFieldProps
} from '@hubert/atoms';
import IconOutlineBuilding from '@hubert/styles/lib/icons/icon-outline-building.svg';
import React from 'react';
import { TEXT } from '~/utils';
import { HubTextFieldConfig } from './storyConfig';

export const Default = (args: HubTextFieldProps) => {
  return (
    <HubGrid width="340px">
      <HubTextField {...args} />
    </HubGrid>
  );
};

export const Left = (args: HubTextFieldProps) => {
  return (
    <HubGrid width="340px">
      <HubTextField {...args} left={<HubIcon icon={IconOutlineBuilding} />}>
        {TEXT.Title}
      </HubTextField>
    </HubGrid>
  );
};

export const Right = (args: HubTextFieldProps) => {
  return (
    <HubGrid width="340px">
      <HubTextField {...args} right={<HubIcon icon={IconOutlineBuilding} />}>
        {TEXT.Title}
      </HubTextField>
    </HubGrid>
  );
};

export const Clearable = (args: HubTextFieldProps) => {
  const [value, setValue] = React.useState('asdasd');
  return (
    <HubGrid width="340px">
      <HubTextField {...args} clearable value={value} onChange={setValue}>
        {TEXT.Title}
      </HubTextField>
    </HubGrid>
  );
};

export const Hint = (args: HubTextFieldProps) => {
  return (
    <HubGrid width="340px">
      <HubTextField {...args} hint={TEXT.Subtitle}>
        {TEXT.Title}
      </HubTextField>
    </HubGrid>
  );
};

export const HintError = (args: HubTextFieldProps) => {
  return (
    <HubGrid width="340px">
      <HubTextField {...args} color="error" hint={TEXT.Subtitle}>
        {TEXT.Title}
      </HubTextField>
    </HubGrid>
  );
};

export const Loading = (args: HubTextFieldProps) => {
  return (
    <HubGrid width="340px">
      <HubTextField {...args} loading />
    </HubGrid>
  );
};

export const Mask = (args: HubTextFieldProps) => {
  return (
    <HubGrid width="340px">
      <HubTextField {...args} mask="999.999.999-99" />
    </HubGrid>
  );
};

export const MaskChar = (args: HubTextFieldProps) => {
  return (
    <HubGrid width="340px">
      <HubTextField {...args} maskChar="0" mask="999.999.999-99" />
    </HubGrid>
  );
};

export const NoShowMask = (args: HubTextFieldProps) => {
  return (
    <HubGrid width="340px">
      <HubTextField {...args} noShowMask mask="999.999.999-99" />
    </HubGrid>
  );
};

export const Calendar = (args: HubTextFieldProps) => {
  return (
    <HubGrid width="340px">
      <HubTextField {...args} type="date" />
    </HubGrid>
  );
};

export const Area = (args: HubTextFieldProps) => {
  return (
    <HubGrid width="340px">
      <HubTextField {...args} type="area" rows={4} maxLength={100} />
    </HubGrid>
  );
};

export default HubTextFieldConfig;
