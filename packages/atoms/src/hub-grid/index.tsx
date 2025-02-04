import React from 'react';

import { GridStyle } from './styles';
import { HubGridProps } from './types';

export type { HubGridProps };

export function HubGrid({ children, ...props }: HubGridProps) {
  return <GridStyle {...props}>{children}</GridStyle>;
}
