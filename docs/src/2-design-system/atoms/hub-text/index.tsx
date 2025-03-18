import { HubGrid, HubText, HubTextProps } from '@hubert/atoms';
import React from 'react';
import { HubTextConfig } from './storyConfig';

export const Default = (args: HubTextProps) => {
  return (
    <HubGrid width="120px" filled>
      <HubText {...args} />
    </HubGrid>
  );
};

export const TextDecotation = (args: HubTextProps) => {
  return (
    <HubGrid row gap="10">
      <HubGrid gap="2" align="center">
        <HubText {...args} decoration="none" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3">
          none
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} decoration="line-through" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3" nowrap>
          line-through
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} decoration="overline" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3">
          overline
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} decoration="underline" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3">
          underline
        </HubText>
      </HubGrid>
    </HubGrid>
  );
};

export const TextFontStyle = (args: HubTextProps) => {
  return (
    <HubGrid row gap="10">
      <HubGrid gap="2" align="center">
        <HubText {...args} fontStyle="italic" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3">
          italic
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} fontStyle="normal" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3">
          normal
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} fontStyle="oblique" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3">
          oblique
        </HubText>
      </HubGrid>
    </HubGrid>
  );
};

export const TextTransform = (args: HubTextProps) => {
  return (
    <HubGrid row gap="10">
      <HubGrid gap="2" align="center">
        <HubText {...args} transform="none" typo="subtitle">
          hubText
        </HubText>
        <HubText {...args} typo="body3">
          none
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} transform="capitalize" typo="subtitle">
          hubText
        </HubText>
        <HubText {...args} typo="body3">
          capitalize
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} transform="lowercase" typo="subtitle">
          hubText
        </HubText>
        <HubText {...args} typo="body3">
          lowercase
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} transform="uppercase" typo="subtitle">
          hubText
        </HubText>
        <HubText {...args} typo="body3">
          uppercase
        </HubText>
      </HubGrid>
    </HubGrid>
  );
};

export const TextWeight = (args: HubTextProps) => {
  return (
    <HubGrid row gap="10">
      <HubGrid gap="2" align="center">
        <HubText {...args} weight="400" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3">
          400
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} weight="500" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3">
          500
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} weight="600" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3">
          600
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} weight="700" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3">
          700
        </HubText>
      </HubGrid>

      <HubGrid gap="2" align="center">
        <HubText {...args} weight="800" typo="subtitle">
          HubText
        </HubText>
        <HubText {...args} typo="body3">
          800
        </HubText>
      </HubGrid>
    </HubGrid>
  );
};

export default HubTextConfig;
