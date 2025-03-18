import React from 'react';

import {
  ProgressBarBgStyle,
  ProgressBarDisplayStyle,
  ProgressBarInnerStyle,
  ProgressBarStyle
} from './styles';
import { HubProgressBarProps } from './types';

export type { HubProgressBarProps };

export function HubProgressBar({ display, ...props }: HubProgressBarProps) {
  return (
    <ProgressBarStyle {...props}>
      <ProgressBarBgStyle>
        <ProgressBarInnerStyle />
      </ProgressBarBgStyle>
      {display && (
        <ProgressBarDisplayStyle>{props.percent}%</ProgressBarDisplayStyle>
      )}
    </ProgressBarStyle>
  );
}
