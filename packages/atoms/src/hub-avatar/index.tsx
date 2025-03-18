import React from 'react';

import { AvatarImgStyle, AvatarInitialsStyle, AvatarStyle } from './styles';
import { HubAvatarProps } from './types';

export type { HubAvatarProps };

export function HubAvatar({
  src,
  alt,
  initials,
  onClick,
  ...props
}: HubAvatarProps) {
  return (
    <AvatarStyle onClick={onClick} {...props}>
      {src ? (
        <AvatarImgStyle src={src} alt={alt} />
      ) : (
        <AvatarInitialsStyle>{initials}</AvatarInitialsStyle>
      )}
    </AvatarStyle>
  );
}
