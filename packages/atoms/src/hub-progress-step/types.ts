import { Color, ColorLevel } from '@hubert/styles';

export interface HubProgressStepProps {
  label?: string;
  size?: string;
  active?: boolean;
  complete?: boolean;
  color?: Color;
  colorLevel?: ColorLevel;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

export interface HubProgressStepperProps {
  children?: React.ReactNode | React.ReactNode[];
}
