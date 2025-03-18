import React from 'react';

import Complete from './complete';
import {
  ProgressStepActiveStyle,
  ProgressStepIndicatorStyle,
  ProgressStepInnerStyle,
  ProgressStepLabelStyle,
  ProgressStepLineBarStyle,
  ProgressStepLineStyle,
  ProgressStepperStyle,
  ProgressStepStyle
} from './styles';
import { HubProgressStepperProps, HubProgressStepProps } from './types';

export type { HubProgressStepperProps, HubProgressStepProps };

export function HubProgressStep({
  onClick,
  children,
  ...props
}: HubProgressStepProps) {
  const ProgressStepIndicator = () => {
    if (props.complete) {
      return <Complete />;
    }
    if (props.active) {
      return <ProgressStepActiveStyle />;
    }
    if (props.label) {
      return <ProgressStepLabelStyle>{props.label}</ProgressStepLabelStyle>;
    }
    return <></>;
  };

  return (
    <ProgressStepStyle
      {...props}
      clickable={!props.disabled && !!onClick}
      onClick={
        ((e) => {
          e.stopPropagation();
          if (!props.disabled) {
            onClick?.();
          }
        }) as never
      }
    >
      <ProgressStepInnerStyle>
        <ProgressStepLineStyle>
          <ProgressStepLineBarStyle />
          <ProgressStepLineBarStyle />
        </ProgressStepLineStyle>
        <ProgressStepIndicatorStyle>
          <ProgressStepIndicator />
        </ProgressStepIndicatorStyle>
      </ProgressStepInnerStyle>
      {children}
    </ProgressStepStyle>
  );
}

export function HubProgressStepper({
  children,
  ...props
}: HubProgressStepperProps) {
  return <ProgressStepperStyle {...props}>{children}</ProgressStepperStyle>;
}
