import { Align, Color, ColorLevel, Space } from '@hubert/styles';
import React from 'react';

export interface HubCollapseProps {
  opened?: boolean;
  disabled?: boolean;
  nowrap?: boolean;
  hidden?: boolean;
  width?: string;
  align?: Align;
  titleClickable?: boolean;
  titleAlign?: Align;
  titleWidth?: string;
  triggerPosition?: 'left' | 'right';
  height?: string;
  triggerRotateStep?: 0 | 90 | 180;
  gap?: Space;
  title?: React.ReactNode;
  titlePad?: Space | Space[];
  titleColor?: Color;
  titleColorLevel?: ColorLevel;
  titleRadius?: Space;
  children?: React.ReactNode;
  onChange?: (opened: boolean) => void;
  customTrigger?: (opened?: boolean, onClick?: () => void) => React.ReactNode;
}
