import { Color, ColorLevel, Position, Space } from '@hubert/styles';

export interface HubModalProps {
  opened?: boolean;
  width?: string;
  widthMd?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  contentHeight?: string;
  minContentHeight?: string;
  position?: Position;
  color?: Color;
  colorLevel?: ColorLevel;
  colorText?: Color;
  colorTextLevel?: ColorLevel;
  pad?: Space | Space[];
  offset?: (Space | string) | (Space | string)[];
  radius?: Space;
  darkOverlay?: boolean;
  noCloseBtn?: boolean;
  noPrintable?: boolean;
  overflow?: boolean | [boolean, boolean];
  onClose?: () => void;
  header?: React.ReactNode | React.ReactNode[];
  actions?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
}
