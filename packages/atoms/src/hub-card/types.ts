import { BorderStyle, Color, ColorLevel, Shadow, Space } from '@hubert/styles';

export interface HubCardProps {
  id?: string;
  height?: string;
  minHeight?: string;
  loading?: boolean;
  centered?: boolean;
  radius?: Space;
  pad?: Space | Space[];
  color?: Color;
  colorLevel?: ColorLevel;
  accent?: Color;
  accentLevel?: ColorLevel;
  borderless?: boolean;
  borderSize?: string;
  borderStyle?: BorderStyle;
  borderColor?: Color;
  borderColorLevel?: ColorLevel;
  hover?: boolean;
  draggable?: boolean;
  shadow?: Shadow;
  noRelative?: boolean;
  onDrag?: React.DragEventHandler<HTMLDivElement>;
  onDrop?: React.DragEventHandler<HTMLDivElement>;
  children?: React.ReactNode | React.ReactNode[];
}
