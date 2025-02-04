import React from 'react';

import { CardLoadingStyle, CardOverlayStyle, CardStyle } from './styles';
import { HubCardProps } from './types';

export type { HubCardProps };

export function HubCard({
  loading,
  children,
  onDrag,
  onDrop,
  ...props
}: HubCardProps) {
  return (
    <CardStyle
      {...props}
      onDragStart={onDrag}
      onDrop={onDrop}
      onDragOver={onDrop && ((e) => e.preventDefault())}
    >
      {children}
      {loading && (
        <CardOverlayStyle>
          <CardLoadingStyle />
        </CardOverlayStyle>
      )}
    </CardStyle>
  );
}
