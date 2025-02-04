import { Color, ColorLevel, Typo } from '@hubert/styles';

export interface HubTokenProps {
  length?: number;
  onlyNumber?: boolean;
  typo?: Typo;
  color?: Color;
  colorLevel?: ColorLevel;
  borderColor?: Color;
  borderColorLevel?: ColorLevel;
  bgColor?: Color;
  bgColorLevel?: ColorLevel;
  value?: string;
  onChange?: (v: string) => void;
}
