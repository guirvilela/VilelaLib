import { Color, ColorLevel, Space } from '@hubert/styles';
import { HubSource } from '../types';

export interface HubPopoverProps {
  opened?: boolean;
  source?: HubSource;
  trigger?: 'click' | 'hover';
  triggerWidth?: string;
  autoClose?: boolean;
  disabled?: boolean;
  height?: string;
  width?: string;
  offset?: [number, number];
  radius?: Space;
  color?: Color;
  colorLevel?: ColorLevel;
  pad?: Space | Space[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose?: (v?: any) => void;
  content?: React.ReactNode;
  children?: React.ReactNode;
}
