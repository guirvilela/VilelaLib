import { HubIconSvg } from '@hubert/atoms';
import { Color, ColorLevel } from '@hubert/styles';

export interface HubAvatarMenuProps {
  name?: string;
  photo?: string;
  width?: string;
  menuWidth?: string;
  bgColor?: Color;
  bgColorLevel?: ColorLevel;
  color?: Color;
  colorLevel?: ColorLevel;
  options?: Array<{
    icon?: HubIconSvg;
    label: string;
    href?: string;
    customElement?: (item: React.ReactNode, index?: number) => React.ReactNode;
    onClick?: () => void;
  }>;
}
