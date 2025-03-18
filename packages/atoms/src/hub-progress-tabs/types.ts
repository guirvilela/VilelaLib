import { Color, ColorLevel, Space } from '@hubert/styles';

export interface HubProgressTabsProps {
  current?: number;
  width?: string;
  height?: string;
  disabled?: boolean;
  gap?: Space;
  onChange?: (index: number) => void;
  children?: React.ReactElement<HubProgressTabProps>[];
}

export interface HubProgressTabProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  disabled?: boolean;
  width?: string;
  height?: string;
  color?: Color;
  colorLevel?: ColorLevel;
  onClick?: () => void;
  children?: React.ReactNode;
}
