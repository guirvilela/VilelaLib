import { Align, Color, Size } from '@hubert/styles';

export interface HubCheckboxProps {
  id: string;
  checked?: boolean;
  indeterminate?: boolean;
  color?: Color;
  colorText?: Color;
  borderColor?: Color;
  align?: Align;
  disabled?: boolean;
  size?: Size;
  onChange?: (v: boolean) => void;
  onClick?: () => void;
  children?: React.ReactNode;
}
