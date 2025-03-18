import { BorderStyle, Color, ColorLevel, Space } from '@hubert/styles';

export interface HubSeparatorProps {
  color?: Color;
  colorLevel?: ColorLevel;
  radius?: Space;
  size?: Space | string;
  length?: Space | string;
  borderStyle?: BorderStyle;
  vertical?: boolean;
}
