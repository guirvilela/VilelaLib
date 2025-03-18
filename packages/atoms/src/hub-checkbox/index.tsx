import React from 'react';

import Checked from './checked';
import Indeterminate from './indeterminate';
import {
  CheckboxIconStyle,
  CheckboxInputStyle,
  CheckboxLabelStyle,
  CheckboxStyle
} from './styles';
import { HubCheckboxProps } from './types';

export type { HubCheckboxProps };

export function HubCheckbox({
  onClick,
  onChange,
  children,
  ...props
}: HubCheckboxProps) {
  return (
    <CheckboxStyle
      {...props}
      checked={props.checked || props.indeterminate}
      clickable={!!onChange || !!onClick}
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
      <CheckboxIconStyle id={`hub-checkbox-icon-${props.id}`}>
        {props.checked ? (
          <Checked size={props.size} />
        ) : props.indeterminate ? (
          <Indeterminate size={props.size} />
        ) : (
          <></>
        )}
      </CheckboxIconStyle>
      <CheckboxInputStyle
        id={`hub-checkbox-${props.id}`}
        type="checkbox"
        disabled={props.disabled}
        checked={props.checked}
        onChange={() => 0}
      />
      {children && (
        <CheckboxLabelStyle htmlFor={`hub-checkbox-${props.id}`}>
          {children}
        </CheckboxLabelStyle>
      )}
    </CheckboxStyle>
  );
}
