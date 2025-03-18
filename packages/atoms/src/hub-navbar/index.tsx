import React from 'react';

import { NavbarContentStyle, NavbarSpacerStyle, NavbarStyle } from './styles';
import { HubNavbarProps } from './types';

export type { HubNavbarProps };

export function HubNavbar({
  left,
  right,
  center,
  children,
  ...props
}: HubNavbarProps) {
  return (
    <NavbarStyle {...props}>
      {left && (
        <>
          <NavbarContentStyle>{left}</NavbarContentStyle>
          {!center && <div />}
        </>
      )}
      {children}
      {center && (
        <>
          <NavbarSpacerStyle />
          <NavbarContentStyle>{center}</NavbarContentStyle>
          {!right && <NavbarSpacerStyle />}
        </>
      )}
      {right && (
        <>
          <NavbarSpacerStyle />
          <NavbarContentStyle>{right}</NavbarContentStyle>
        </>
      )}
    </NavbarStyle>
  );
}
