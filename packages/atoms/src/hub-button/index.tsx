import React from 'react';

import { HubSource } from '../types';
import { ButtonLinkStyle, ButtonLoadingStyle, ButtonStyle } from './styles';
import { HubButtonProps } from './types';

export type { HubButtonProps };

export const HubButton = React.forwardRef(function HubButton(
  {
    children,
    disabled: globalDisabled,
    loading: globalLoading,
    noHideLabel,
    onHover,
    onClick,
    ...props
  }: HubButtonProps,
  ref
) {
  const [innerLoading, setInnerLoading] = React.useState(false);

  const loading = React.useMemo(
    () => globalLoading || innerLoading,
    [globalLoading, innerLoading]
  );

  const disabled = React.useMemo(
    () => globalDisabled || globalLoading || innerLoading,
    [globalDisabled, globalLoading, innerLoading]
  );

  const handleClick = React.useCallback(
    async (e: HubSource) => {
      if (disabled) return;

      const result = onClick?.(e);
      if (result instanceof Promise) {
        setInnerLoading(true);
        result.finally(() => setInnerLoading(false));
      }
    },
    [disabled, onClick]
  );

  return props.link ? (
    <ButtonLinkStyle
      ref={ref as never}
      disabled={disabled}
      onMouseOver={onHover && ((e) => onHover?.(e))}
      onMouseOut={onHover && (() => onHover?.(undefined))}
      onClick={handleClick}
      {...props}
    >
      {loading ? <ButtonLoadingStyle /> : <></>}
      {!loading || noHideLabel ? children : <></>}
    </ButtonLinkStyle>
  ) : (
    <ButtonStyle
      ref={ref as never}
      type={props.type || 'button'}
      disabled={disabled}
      onMouseOver={onHover && ((e) => onHover?.(e))}
      onMouseOut={onHover && (() => onHover?.(undefined))}
      onClick={handleClick}
      {...props}
    >
      {loading ? <ButtonLoadingStyle /> : <></>}
      {!loading || noHideLabel ? children : <></>}
    </ButtonStyle>
  );
});
