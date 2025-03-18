import React from 'react';

import { BadgeStyle } from './styles';
import { HubBadgeProps } from './types';

export type { HubBadgeProps };

export function HubBadge({ content, children, ...props }: HubBadgeProps) {
  return (
    <BadgeStyle content={content ? String(content) : undefined} {...props}>
      {children}
    </BadgeStyle>
  );
}
