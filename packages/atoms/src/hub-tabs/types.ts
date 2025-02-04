import { Color, ColorLevel, Space } from '@hubert/styles';

export interface HubTabsProps {
  gap?: Space;
  current?: number;
  width?: string;
  disabled?: boolean;
  onChange?: (index: number) => void;
  children?: React.ReactElement<HubTabProps>[];
}

export interface HubTabProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  width?: string;
  disabled?: boolean;
  color?: Color;
  colorLevel?: ColorLevel;
  onClick?: () => void;
  children?: React.ReactNode;
}
