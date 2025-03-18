import { Color, ColorLevel, PositionExtra } from '@hubert/styles';

export interface HubTooltipProps {
  opened?: boolean;
  disabled?: boolean;
  nowrap?: boolean;
  triggerWidth?: string;
  width?: string;
  position?: PositionExtra;
  content?: React.ReactNode;
  color?: Color;
  colorLevel?: ColorLevel;
  colorText?: Color;
  colorTextLevel?: ColorLevel;
  children?: React.ReactNode;
}
