import React from 'react';
import { SeparatorStyle } from './styles';
import { HubSeparatorProps } from './types';

export type { HubSeparatorProps };

export function HubSeparator(props: HubSeparatorProps) {
  return <SeparatorStyle {...props} />;
}
