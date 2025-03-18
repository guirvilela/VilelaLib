import { Color, Space } from '@hubert/styles';

export interface HubAlertProps {
  title: React.ReactNode;
  icon?: React.ReactNode;
  content?: React.ReactNode;
  inline?: boolean;
  nowrap?: boolean;
  radius?: Space;
  pad?: Space | Space[];
  color?: Color;
  gap?: Space;
  actions?: React.ReactNode | React.ReactNode[];
  onClose?: () => void;
}
