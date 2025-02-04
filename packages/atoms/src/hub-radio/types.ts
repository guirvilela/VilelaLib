import { Align, Color, Size, Space } from '@hubert/styles';

export interface HubRadioGroupProps<T = unknown> {
  disabled?: boolean;
  vertical?: boolean;
  color?: Color;
  size?: Size;
  gap?: Space;
  align?: Align;
  value?: T;
  onChange?: (v?: T) => void;
  children?: React.ReactElement<HubRadioProps>[];
}

export interface HubRadioProps<T = unknown> {
  id: string;
  checked?: boolean;
  disabled?: boolean;
  color?: Color;
  size?: Size;
  value?: T;
  onChange?: (v?: T) => void;
  onClick?: () => void;
  children?: React.ReactNode;
}
