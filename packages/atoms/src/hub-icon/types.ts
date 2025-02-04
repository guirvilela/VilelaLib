import { Color, ColorLevel, Size, Space } from '@hubert/styles';
import { HubIconSvg } from '../types';

export interface HubIconProps {
  size?: Size;
  width?: string;
  height?: string;
  color?: Color;
  colorLevel?: ColorLevel;
  bgColor?: Color;
  bgColorLevel?: ColorLevel;
  pad?: Space | Space[];
  icon: HubIconSvg;
  rotate?: number;
}
