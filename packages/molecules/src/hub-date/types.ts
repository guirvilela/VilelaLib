import { HubCalendarProps } from '@hubert/atoms';
import { Color, ColorLevel, Typo } from '@hubert/styles';

export interface HubDateProps extends HubCalendarProps {
  id: string;
  editable?: boolean;
  // popover props
  height?: string;
  width?: string;
  onClose?: () => void;
  // textfield props
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  loading?: boolean;
  clearable?: boolean;
  wrap?: boolean;
  inputTypo?: Typo;
  color?: Color;
  colorLevel?: ColorLevel;
  borderColor?: Color;
  borderColorLevel?: ColorLevel;
  bgColor?: Color;
  bgColorLevel?: ColorLevel;
  error?: string;
  onClick?: () => void;
  onFocus?: (el: HTMLInputElement) => void;
  onClear?: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
  hint?: React.ReactNode;
  children?: React.ReactNode;
}
