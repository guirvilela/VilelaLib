import {
  HubDropdown,
  HubDropdownIcon,
  HubDropdownProps,
  HubGrid,
  HubTextField
} from '@hubert/atoms';
import { colorsList } from '@hubert/styles';
import React from 'react';
import { TEXT } from '~/utils';

import { HubDropdownConfig } from './storyConfig';

export const Default = (args: HubDropdownProps) => {
  const [dropdown, setDropdown] = React.useState<unknown>('primary');
  return (
    <HubGrid width="400px">
      <HubDropdown
        {...args}
        items={colorsList}
        value={dropdown}
        onChange={setDropdown}
      >
        {(label) => (
          <HubTextField
            id="field-a"
            placeholder={TEXT.Title}
            value={label}
            right={<HubDropdownIcon />}
            disabled={args.disabled}
            readOnly
            required
          >
            {TEXT.Label}
          </HubTextField>
        )}
      </HubDropdown>
    </HubGrid>
  );
};

export const Multiple = (args: HubDropdownProps) => {
  const [dropdown, setDropdown] = React.useState<unknown>(['primary']);
  return (
    <HubGrid width="400px" height="250px">
      <HubDropdown
        {...args}
        items={colorsList}
        value={dropdown}
        onChange={setDropdown}
      >
        {(label) => (
          <HubTextField
            id="field-a"
            placeholder={TEXT.Title}
            value={label}
            right={<HubDropdownIcon />}
            disabled={args.disabled}
            readOnly
            required
          >
            {TEXT.Label}
          </HubTextField>
        )}
      </HubDropdown>
    </HubGrid>
  );
};

export const Autocomplete = (args: HubDropdownProps) => {
  const [dropdown, setDropdown] = React.useState<unknown>('');
  return (
    <HubGrid width="400px" height="250px">
      <HubDropdown
        {...args}
        items={colorsList}
        value={dropdown}
        onChange={setDropdown}
      >
        {(label, onSearch) => (
          <HubTextField
            id="field-a"
            placeholder={TEXT.Title}
            right={<HubDropdownIcon />}
            disabled={args.disabled}
            defaultValue={label}
            onChange={onSearch}
            required
          >
            {TEXT.Label}
          </HubTextField>
        )}
      </HubDropdown>
    </HubGrid>
  );
};

export default HubDropdownConfig;
