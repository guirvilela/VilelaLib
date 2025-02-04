import {
  HubButton,
  HubList,
  HubListItem,
  HubPopover,
  HubPopoverProps,
  HubSource
} from '@hubert/atoms';
import React from 'react';
import { TEXT } from '~/utils';

import { HubPopoverConfig } from './storyConfig';

export const Default = (args: HubPopoverProps) => {
  return (
    <HubPopover
      {...args}
      content={
        <HubList hover>
          <HubListItem>{TEXT.Title}</HubListItem>
          <HubListItem>{TEXT.Label}</HubListItem>
        </HubList>
      }
    >
      <HubButton variant="default">Trigger</HubButton>
    </HubPopover>
  );
};

export const UsingTriggerSource = (args: HubPopoverProps) => {
  const [menuRef, setMenuRef] = React.useState<HubSource>();

  return (
    <>
      <HubButton variant="default" onClick={setMenuRef}>
        Trigger
      </HubButton>

      <HubPopover
        {...args}
        source={menuRef}
        onClose={() => setMenuRef(undefined)}
        content={
          <HubList hover>
            <HubListItem>{TEXT.Title}</HubListItem>
            <HubListItem>{TEXT.Label}</HubListItem>
          </HubList>
        }
      />
    </>
  );
};

export default HubPopoverConfig;
