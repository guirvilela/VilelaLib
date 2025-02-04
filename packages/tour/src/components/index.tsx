import { isTestingBrowser, randomNumber } from '@hubert/shared';
import { useResponsive } from '@hubert/styles';
import React from 'react';
import { TourOptions } from '../providers';
import { TourStyle } from './styles';

export interface HubTourProps extends TourOptions {
  step?: string;
  width?: string;
  children?: React.ReactNode;
}

export function HubTour({
  title,
  content,
  hint,
  hintPosition,
  step,
  width,
  children,
  ...props
}: HubTourProps) {
  const { isMobile } = useResponsive();

  const className = React.useMemo(() => {
    if (isTestingBrowser()) {
      return `hub-tour-0`;
    }
    return `hub-tour-${randomNumber()}`;
  }, []);

  const createGlobalStyle = React.useCallback(() => {
    const exist = document.getElementById(className);

    if (exist) {
      document.body.removeChild(exist);
    }

    if (width && !isMobile) {
      const sheet = document.createElement('style');
      sheet.id = className;
      sheet.innerHTML = `.${className} { width: ${width} };`;
      document.body.appendChild(sheet);
    }
  }, [className, width, isMobile]);

  React.useEffect(() => {
    createGlobalStyle();
  }, [createGlobalStyle]);

  return (
    <TourStyle
      {...props}
      data-title={title}
      data-intro={content}
      data-hint={hint}
      data-hint-position={hintPosition}
      data-step={step}
      data-tooltip-class={className}
    >
      {children}
    </TourStyle>
  );
}
