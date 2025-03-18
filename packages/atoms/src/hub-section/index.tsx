import React from 'react';
import { SectionContentStyle, SectionStyle, SectionTitleStyle } from './styles';
import { HubSectionProps } from './types';

export type { HubSectionProps };

export function HubSection({ title, children, ...props }: HubSectionProps) {
  return (
    <SectionStyle {...props}>
      <SectionTitleStyle>{title}</SectionTitleStyle>
      <SectionContentStyle>{children}</SectionContentStyle>
    </SectionStyle>
  );
}
