import { Color, ColorLevel, Space } from '@hubert/styles';

export interface HubNavbarProps {
  height?: string;
  fixed?: boolean;
  gap?: Space;
  pad?: Space | Space[];
  color?: Color;
  colorLevel?: ColorLevel;
  colorText?: Color;
  colorTextLevel?: ColorLevel;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  children?: React.ReactNode;
}
