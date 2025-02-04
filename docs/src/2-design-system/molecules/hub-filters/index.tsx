import {
  HubDropdown,
  HubDropdownIcon,
  HubGrid,
  HubIcon,
  HubTextField
} from '@hubert/atoms';
import { HubFilters, HubFiltersProps } from '@hubert/molecules';
import { colorsList, useResponsive } from '@hubert/styles';
import IconOutlineMagnifier from '@hubert/styles/lib/icons/icon-outline-magnifier.svg';
import React from 'react';
import { TEXT } from '~/utils';
import { HubFiltersConfig } from './storyConfig';

export const Default = (args: HubFiltersProps) => {
  const [dropdown, setDropdown] = React.useState<unknown>('primary');
  const { isMobile } = useResponsive();

  return (
    <HubGrid width={isMobile ? '300px' : '600px'} height="300px" align="center">
      <HubFilters {...args}>
        <HubDropdown items={colorsList} value={dropdown} onChange={setDropdown}>
          {(label) => (
            <HubTextField
              id="field-a"
              placeholder={TEXT.Title}
              value={label}
              right={<HubDropdownIcon />}
              readOnly
            >
              {TEXT.Label}
            </HubTextField>
          )}
        </HubDropdown>
        <HubTextField
          id="field-b"
          placeholder={TEXT.Title}
          right={<HubIcon icon={IconOutlineMagnifier} />}
          readOnly
        >
          {TEXT.Label}
        </HubTextField>
      </HubFilters>
    </HubGrid>
  );
};

export default HubFiltersConfig;
