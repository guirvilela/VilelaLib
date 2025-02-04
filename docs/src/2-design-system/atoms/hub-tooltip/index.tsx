import {
  HubButton,
  HubGrid,
  HubIcon,
  HubText,
  HubTooltip,
  HubTooltipProps
} from '@hubert/atoms';
import IconOutlineClose from '@hubert/styles/lib/icons/icon-outline-close.svg';
import React from 'react';
import { TEXT } from '~/utils';
import { HubTooltipConfig } from './storyConfig';

export const Default = (args: HubTooltipProps) => {
  return (
    <HubGrid row align="center" height="100px">
      <HubTooltip {...args}>
        <HubText typo="body1" decoration="underline">
          Hover over me!
        </HubText>
      </HubTooltip>
    </HubGrid>
  );
};

export const Complex = (args: HubTooltipProps) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <HubGrid row align="center" height="100px">
      <HubTooltip
        {...args}
        opened={opened}
        width="300px"
        position="right"
        content={
          <HubGrid gap="1">
            <HubGrid row align="center" justify="space-between" gap="1">
              <HubText typo="body2" weight="600">
                {TEXT.Title}
              </HubText>
              <HubButton
                variant="icon"
                color="white"
                onClick={() => setOpened(false)}
              >
                <HubIcon icon={IconOutlineClose} size="sm" />
              </HubButton>
            </HubGrid>
            <HubText typo="body3" align="start">
              {TEXT.Line}
            </HubText>
          </HubGrid>
        }
      >
        <HubButton variant="action" onHover={() => setOpened(true)}>
          <HubText typo="body1" decoration="underline">
            Hover over me!
          </HubText>
        </HubButton>
      </HubTooltip>
    </HubGrid>
  );
};

export default HubTooltipConfig;
