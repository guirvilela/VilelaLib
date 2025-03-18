import {
  HubPasswordStrength,
  HubPasswordStrengthProps,
  HubTextField
} from '@hubert/atoms';
import React from 'react';
import { TEXT } from '~/utils';
import { HubPasswordStrengthConfig } from './storyConfig';

export const Default = (args: HubPasswordStrengthProps) => {
  const [password, setPassword] = React.useState(args.password);
  return (
    <>
      <HubTextField
        id="password"
        type="password"
        value={password}
        onChange={setPassword}
      >
        {TEXT.Title}
      </HubTextField>
      <HubPasswordStrength {...args} password={password} />
    </>
  );
};

export const A_VeryWeak = (args: HubPasswordStrengthProps) => {
  return (
    <>
      <HubTextField id="password" type="password" value="123" required>
        {TEXT.Title}
      </HubTextField>
      <HubPasswordStrength {...args} password="123" />
    </>
  );
};

export const B_Weak = (args: HubPasswordStrengthProps) => {
  return (
    <>
      <HubTextField id="password" type="password" value="123@#" required>
        {TEXT.Title}
      </HubTextField>
      <HubPasswordStrength {...args} password="123@#" />
    </>
  );
};

export const C_StrengthAverage = (args: HubPasswordStrengthProps) => {
  return (
    <>
      <HubTextField id="password" type="password" value="123r@$test" required>
        {TEXT.Title}
      </HubTextField>
      <HubPasswordStrength {...args} password="123r@$test" />
    </>
  );
};

export const D_Strength = (args: HubPasswordStrengthProps) => {
  return (
    <>
      <HubTextField id="password" type="password" value="Hubert123@" required>
        {TEXT.Title}
      </HubTextField>
      <HubPasswordStrength {...args} password="Hubert123@" />
    </>
  );
};

export const E_VeryStrength = (args: HubPasswordStrengthProps) => {
  return (
    <>
      <HubTextField
        id="password"
        type="password"
        value="Hubert123@asd123"
        required
      >
        {TEXT.Title}
      </HubTextField>
      <HubPasswordStrength {...args} password="Hubert123@asd123" />
    </>
  );
};

export default HubPasswordStrengthConfig;
