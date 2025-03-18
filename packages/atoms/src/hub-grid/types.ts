import {
  Align,
  Col,
  DisplayPosition,
  MediaQuery,
  Overflow,
  Space
} from '@hubert/styles';

type Column = Array<Col | string>;

export interface HubGridProps {
  row?: boolean;
  filled?: boolean;
  fluid?: boolean | 'horizontal' | 'vertical';
  flex?: boolean;
  spacer?: boolean;
  block?: boolean;
  align?: Align;
  justify?: Align | 'space-between' | 'space-around';
  gap?: Space;
  gutter?: Space | Space[];
  pad?: (Space | string) | (Space | string)[];
  cols?: Column;
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  overflow?: Overflow;
  layer?: number;
  inset?: (Space | string) | (Space | string)[];
  position?: DisplayPosition;
  responsive?: MediaQuery;
  order?: number;
  rowStart?: number;
  rowEnd?: number;
  columnStart?: number;
  columnEnd?: number;
  rowSize?: string;
  children?: React.ReactNode | React.ReactNode[];
}
