import { Size } from '@hubert/styles';
import { HubAnimationData } from '../types';

export interface HubAnimationProps {
  source?: HubAnimationData;
  loop?: boolean;
  autoplay?: boolean;
  width?: string;
  height?: string;
  size?: Size;
}

export interface HubAnimationRef {
  play(): void;
  pause(): void;
  stop(): void;
}
