import {
  Align,
  Autocomplete,
  Color,
  ColorLevel,
  InputType,
  Resize,
  Space,
  Typo
} from '@hubert/styles';
import { HubSource } from '../types';

export interface HubTextFieldProps<T = string> {
  id: string;
  type?: InputType;
  className?: string;
  /**
   * - 9 - [0-9]
   * - a - [A-Za-z]
   * - A - [A-Z]
   * - \* - [A-Za-z0-9]
   */
  mask?: string;
  maskChar?: string;
  title?: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  noShowMask?: boolean;
  noGap?: boolean;
  clearable?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  wrap?: boolean;
  rows?: number;
  minLength?: number;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  autocomplete?: Autocomplete;
  align?: Align;
  typo?: Typo;
  color?: Color;
  colorLevel?: ColorLevel;
  borderColor?: Color;
  borderColorLevel?: ColorLevel;
  bgColor?: Color;
  bgColorLevel?: ColorLevel;
  placeholderColor?: Color;
  placeholderColorLevel?: ColorLevel;
  pad?: Space | Space[];
  value?: T;
  defaultValue?: T;
  error?: string;
  /** @default both */
  resize?: Resize;
  onChange?: (v: T) => void;
  onLazyChange?: (v: T) => void;
  onShowPicker?: (el: HTMLInputElement) => void;
  onClick?: (e: HubSource) => void;
  onFocus?: (el: HTMLInputElement) => void;
  onClear?: () => void;
  containerRef?: (el: HTMLDivElement) => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
  hint?: React.ReactNode;
  element?: React.ReactNode;
  after?: React.ReactNode;
  children?: React.ReactNode;
}

export interface HubTextFieldRef {
  inputRef: React.MutableRefObject<HTMLInputElement | undefined>;
  showPicker: () => void;
  clear: () => void;
}
