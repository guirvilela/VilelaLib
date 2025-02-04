import { Color, ColorLevel, Space } from '@hubert/styles';

export interface HubSidenavProps {
  opened?: boolean;
  width?: string;
  offset?: string;
  fixed?: boolean;
  noAnimation?: boolean;
  noContentHeight?: boolean;
  gap?: Space;
  pad?: Space | Space[];
  color?: Color;
  colorLevel?: ColorLevel;
  colorText?: Color;
  colorTextLevel?: ColorLevel;
  onClose?: () => void;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  children?: React.ReactNode;
}

export interface HubSidenavIconProps {
  opened?: boolean;
  onChange?: (opened: boolean) => void;
}
