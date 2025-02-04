import { factoryTestId } from '@hubert/shared';
import React from 'react';
import IconClose from './icon-close';
import IconMenu from './icon-menu';
import {
  SidenavContentStyle,
  SidenavIconStyle,
  SidenavOverlayStyle,
  SidenavSpacerStyle,
  SidenavSpaceStyle,
  SidenavStyle
} from './styles';
import { HubSidenavIconProps, HubSidenavProps } from './types';

export type { HubSidenavProps };

export function HubSidenav({
  top,
  bottom,
  onClose,
  children,
  ...props
}: HubSidenavProps) {
  return (
    <>
      {props.fixed && (
        <SidenavOverlayStyle
          data-testid={factoryTestId(props, 'close')}
          onClick={onClose}
        />
      )}
      <SidenavStyle {...props}>
        {top && (
          <>
            <SidenavContentStyle>{top}</SidenavContentStyle>
            <SidenavSpaceStyle />
          </>
        )}
        <SidenavContentStyle hasOverflow>{children}</SidenavContentStyle>
        {bottom && (
          <>
            <SidenavSpacerStyle />
            <SidenavContentStyle>{bottom}</SidenavContentStyle>
          </>
        )}
      </SidenavStyle>
    </>
  );
}

export function HubSidenavIcon({
  opened,
  onChange,
  ...props
}: HubSidenavIconProps) {
  return (
    <SidenavIconStyle {...props} onClick={() => onChange?.(!opened)}>
      {opened ? <IconClose /> : <IconMenu />}
    </SidenavIconStyle>
  );
}
