import {
  Color,
  ColorLevel,
  Cursor,
  Size,
  Space,
  Target,
  Type,
  Variant
} from '@hubert/styles';
import { HubSource } from '../types';

export interface HubButtonProps {
  id?: string;
  link?: boolean;
  full?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: Size | '100%';
  href?: string;
  rounded?: boolean;
  noPadding?: boolean;
  clickable?: boolean;
  noHover?: boolean;
  bgHover?: boolean;
  active?: boolean;
  noHideLabel?: boolean;
  radius?: Space;
  type?: Type;
  target?: Target;
  variant?: Variant;
  color?: Color;
  colorLevel?: ColorLevel;
  bgColor?: Color;
  bgColorLevel?: ColorLevel;
  borderColor?: Color;
  borderColorLevel?: ColorLevel;
  cursor?: Cursor;
  dragTrigger?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: HubSource) => Promise<any> | void;
  onHover?: (e?: HubSource) => void;
  children?: React.ReactNode | React.ReactNode[];
}
