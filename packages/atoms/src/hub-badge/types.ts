import { Color, ColorLevel, Size, Space } from '@hubert/styles';

export interface HubBadgeProps {
  color?: Color;
  colorLevel?: ColorLevel;
  textColor?: Color;
  textColorLevel?: ColorLevel;
  radius?: Space;
  pad?: Space | Space[];
  rounded?: boolean;
  float?: boolean;
  content?: string | number;
  size?: Size;
  width?: string;
  height?: string;
  position?: Space | [Space, Space];
  children?: React.ReactNode;
}
