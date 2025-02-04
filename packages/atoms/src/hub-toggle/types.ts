import { Color, Size } from '@hubert/styles';

export interface HubToggleProps {
  id: string;
  checked?: boolean;
  color?: Color;
  disabled?: boolean;
  size?: Size;
  onChange?: (v: boolean) => void;
  onClick?: () => void;
  children?: React.ReactNode;
}
