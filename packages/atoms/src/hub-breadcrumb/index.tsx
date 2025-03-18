import React from 'react';

import ChevronRight from './chevron-right';
import {
  BreadcrumbsIconStyle,
  BreadcrumbsPathStyle,
  BreadcrumbsStyle,
  BreadcrumbStyle
} from './styles';
import { HubBreadcrumbProps, HubBreadcrumbsProps } from './types';

export type { HubBreadcrumbProps, HubBreadcrumbsProps };

export function HubBreadcrumbs({ children, ...props }: HubBreadcrumbsProps) {
  return (
    <BreadcrumbsStyle {...props}>
      {React.Children.map(
        children,
        (child, i) =>
          React.isValidElement(child) && (
            <BreadcrumbsPathStyle key={`hub-breadcrumb-${i}`}>
              {i !== 0 ? (
                <BreadcrumbsIconStyle>
                  <ChevronRight />
                </BreadcrumbsIconStyle>
              ) : (
                <></>
              )}
              {child}
            </BreadcrumbsPathStyle>
          )
      )}
    </BreadcrumbsStyle>
  );
}

export function HubBreadcrumb({ children, ...props }: HubBreadcrumbProps) {
  return (
    <BreadcrumbStyle
      {...props}
      title={props.width && typeof children === 'string' ? children : undefined}
    >
      {children}
    </BreadcrumbStyle>
  );
}
