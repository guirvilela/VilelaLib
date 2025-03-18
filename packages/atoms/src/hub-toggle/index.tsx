import React from 'react';

import {
  ToggleIconStyle,
  ToggleInputStyle,
  ToggleLabelStyle,
  ToggleStyle,
  ToggleSwitchStyle
} from './styles';
import { HubToggleProps } from './types';

export type { HubToggleProps };

export function HubToggle({
  onClick,
  onChange,
  children,
  ...props
}: HubToggleProps) {
  return (
    <ToggleStyle
      {...props}
      clickable={!!onChange}
      onClick={
        ((e) => {
          e.stopPropagation();
          if (!props.disabled) {
            onChange?.(!props.checked);
            onClick?.();
          }
        }) as never
      }
    >
      <ToggleIconStyle id={`hub-toggle-icon-${props.id}`}>
        <ToggleSwitchStyle id={`hub-toggle-switch-${props.id}`} />
      </ToggleIconStyle>
      <ToggleInputStyle
        id={`hub-toggle-${props.id}`}
        type="checkbox"
        disabled={props.disabled}
        checked={props.checked}
        onChange={() => 0}
      />
      {children && (
        <ToggleLabelStyle htmlFor={`hub-toggle-${props.id}`}>
          {children}
        </ToggleLabelStyle>
      )}
    </ToggleStyle>
  );
}
