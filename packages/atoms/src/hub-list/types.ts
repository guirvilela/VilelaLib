import { Color, ColorLevel, Space } from '@hubert/styles';

export interface HubListProps {
  hover?: boolean;
  pad?: Space | Space[];
  gap?: Space;
  height?: string;
  onLoadMore?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

export interface HubListItemProps {
  active?: boolean;
  nowrap?: boolean;
  border?: boolean;
  fullBorder?: boolean;
  borderColor?: Color;
  borderColorLevel?: ColorLevel;
  accentBorderColor?: Color;
  accentBorderColorLevel?: ColorLevel;
  radius?: Space;
  children?: React.ReactNode | React.ReactNode[];
}
