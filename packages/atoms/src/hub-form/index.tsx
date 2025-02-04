import React from 'react';

import { HubFormProps } from './types';

import { FormStyle } from './styles';

export type { HubFormProps };

export function HubForm({ onSubmit, children, ...props }: HubFormProps) {
  return (
    <FormStyle
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(e.target as HTMLFormElement);
      }}
      {...props}
    >
      {children}
    </FormStyle>
  );
}
