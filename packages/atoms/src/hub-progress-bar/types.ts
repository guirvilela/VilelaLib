import { Color, ColorLevel } from '@hubert/styles';

export interface HubProgressBarProps {
  percent?: number | string;
  height?: string;
  indeterminate?: boolean;
  shaped?: boolean;
  mini?: boolean;
  play?: boolean;
  playSeconds?: number;
  display?: boolean;
  bgColorless?: boolean;
  color?: Color;
  colorLevel?: ColorLevel;
}
