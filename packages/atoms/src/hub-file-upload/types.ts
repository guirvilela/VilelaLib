import { Color, ColorLevel } from '@hubert/styles';

export interface HubFileUploadProps {
  title?: string;
  extensions?: string;
  accept?: string;
  size?: string;
  color?: Color;
  colorLevel?: ColorLevel;
  loading?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  value?: File[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (files: File[]) => Promise<any> | void;
  element?: React.ReactNode;
}
