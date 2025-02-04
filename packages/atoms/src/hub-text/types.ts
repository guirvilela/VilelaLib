import {
  Align,
  Color,
  ColorLevel,
  FontStyle,
  FontWeight,
  Space,
  TextDecoration,
  TextTransform,
  Typo
} from '@hubert/styles';

export interface HubTextProps {
  typo: Typo;
  weight?: FontWeight;
  align?: Align;
  color?: Color;
  colorLevel?: ColorLevel;
  nowrap?: boolean;
  prewrap?: boolean;
  title?: string;
  decoration?: TextDecoration;
  spacing?: string;
  size?: Space;
  height?: Space | string;
  max?: number;
  fontStyle?: FontStyle;
  transform?: TextTransform;
  children?: React.ReactNode | React.ReactNode[];
}
