import { HubTextField, HubTextFieldProps } from '@hubert/atoms';
import { debounce, factoryTestId } from '@hubert/shared';
import React from 'react';
import { InputColor } from './styles';

const lazyInput = debounce(1000);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HubInputColorProps extends HubTextFieldProps {}

export type { HubInputColorProps };

export function HubInputColor({
  id,
  defaultValue,
  value,
  onChange,
  onLazyChange,
  children,
  ...props
}: HubInputColorProps) {
  function handleChange(v: string) {
    if (props.disabled) return;

    if (onChange) {
      onChange(v);
    }
    if (onLazyChange) {
      lazyInput(() => onLazyChange(v));
    }
  }

  return (
    <HubTextField
      id={`hub-input-color-${id}`}
      data-testid={factoryTestId(props, 'input')}
      {...props}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      onLazyChange={onLazyChange}
      right={
        <InputColor
          value={defaultValue || value}
          onChange={(e) => handleChange?.(e.target?.value)}
        />
      }
    >
      {children}
    </HubTextField>
  );
}
