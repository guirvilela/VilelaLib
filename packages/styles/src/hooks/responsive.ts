import React from 'react';
import { parsePixel } from '../utils';
import { Breakpoint, breakpoints } from '../variables';

/**
 * Hook com utils para trabalhar com responsividade
 * Exporta o breakpoint atual e funções utils
 *
 * @example
 * const { isMobile } = useResponsive();
 */
export function useResponsive() {
  const [breakpoint, setBreakPoint] = React.useState<Breakpoint>();
  const [windowSize, setWindowSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  const [isIframe, setIsIframe] = React.useState(false);

  const isMobile = React.useMemo(
    () =>
      breakpoint
        ? [Breakpoint.xs, Breakpoint.md, Breakpoint.sm, Breakpoint.md].includes(
            breakpoint
          )
        : false,
    [breakpoint]
  );
  const isDesktop = React.useMemo(
    () =>
      breakpoint
        ? [Breakpoint.lg, Breakpoint.xl, Breakpoint.xxl].includes(breakpoint)
        : false,
    [breakpoint]
  );
  const isLargeDesktop = React.useMemo(
    () => breakpoint === Breakpoint.xxl,
    [breakpoint]
  );
  const isBreakpoint = React.useCallback(
    (v: Breakpoint) => breakpoint === v,
    [breakpoint]
  );

  const updateBreakpoint = React.useCallback(() => {
    if (windowSize.width <= parsePixel(breakpoints.sm)) {
      setBreakPoint(Breakpoint.xs);
    } else if (windowSize.width <= parsePixel(breakpoints.md)) {
      setBreakPoint(Breakpoint.sm);
    } else if (windowSize.width <= parsePixel(breakpoints.lg)) {
      setBreakPoint(Breakpoint.md);
    } else if (windowSize.width <= parsePixel(breakpoints.xl)) {
      setBreakPoint(Breakpoint.lg);
    } else if (windowSize.width <= parsePixel(breakpoints.xxl)) {
      setBreakPoint(Breakpoint.xl);
    } else {
      setBreakPoint(Breakpoint.xxl);
    }
  }, [windowSize]);

  React.useEffect(() => {
    updateBreakpoint();
  }, [windowSize]);

  React.useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    try {
      setIsIframe(window.self !== window.top);
    } catch {
      setIsIframe(true);
    }
  }, []);

  return {
    breakpoint,
    isMobile,
    isDesktop,
    isIframe,
    isLargeDesktop,
    isBreakpoint
  };
}
