import { Color, ColorLevel, Size, Typo } from '@hubert/styles';

export interface HubAvatarProps {
  src?: string;
  alt?: string;
  size?: Size | string;
  typo?: Typo;
  initials?: string;
  borderless?: boolean;
  color?: Color;
  colorLevel?: ColorLevel;
  colorText?: Color;
  colorTextLevel?: ColorLevel;
  onClick?: () => void;
}
