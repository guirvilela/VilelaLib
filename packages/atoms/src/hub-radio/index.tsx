import React from 'react';

import {
  RadioGroupStyle,
  RadioIconStyle,
  RadioInputStyle,
  RadioLabelStyle,
  RadioStyle
} from './styles';
import { HubRadioGroupProps, HubRadioProps } from './types';

export type { HubRadioGroupProps, HubRadioProps };

export function HubRadioGroup<T = unknown>({
  onChange,
  children,
  ...props
}: HubRadioGroupProps<T>) {
  return (
    <RadioGroupStyle {...props}>
      {React.Children.map(
        children,
        (child) =>
          React.isValidElement(child) &&
          React.cloneElement(child, {
            disabled: props.disabled || child.props.disabled,
            color: props.color || child.props.color,
            size: props.size || child.props.size,
            checked: props.value === child.props.value,
            onChange: (v) => {
              if (!props.disabled && !child.props.disabled) {
                onChange?.(v);
                child.props.onChange?.(v);
              }
            },
            onClick: () => {
              if (!props.disabled && !child.props.disabled) {
                onChange?.(child.props.value as T);
                child.props.onClick?.();
              }
            }
          })
      )}
    </RadioGroupStyle>
  );
}

export function HubRadio<T = unknown>({
  onChange,
  onClick,
  children,
  ...props
}: HubRadioProps<T>) {
  return (
    <RadioStyle
      {...props}
      clickable={!!onChange || !!onClick}
      onClick={
        ((e) => {
          e.stopPropagation();
          if (!props.disabled) {
            onChange?.(props.value);
            onClick?.();
          }
        }) as never
      }
    >
      <RadioIconStyle id={`hub-radio-icon-${props.id}`} />
      <RadioInputStyle
        id={`hub-radio-${props.id}`}
        type="radio"
        disabled={props.disabled}
        checked={props.checked}
        onChange={() => 0}
      />
      {children && (
        <RadioLabelStyle htmlFor={`hub-radio-${props.id}`}>
          {children}
        </RadioLabelStyle>
      )}
    </RadioStyle>
  );
}
