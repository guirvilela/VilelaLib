import { Position } from '@hubert/styles';

export interface TourOptionsExtra {
  dontShowAgain?: boolean;
  showProgress?: boolean;
  showButtons?: boolean;
  showBullets?: boolean;
  hidePrev?: boolean;
  hideNext?: boolean;
  nextToDone?: boolean;
  showStepNumbers?: boolean;
  dontShowAgainCookie?: string;
}

export interface TourOptions extends TourOptionsExtra {
  /** title of tooltip tour */
  title?: string;
  /** content of tooltip (can be HTML string) */
  content?: string;
  /** content of hint tour */
  hint?: string;
  /** anchor of tooltip (if null, show on top) */
  element?: string | HTMLElement | null;
  position?: Position;
  hintPosition?:
    | 'top-left'
    | 'top-middle'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-middle'
    | 'bottom-right';
  callback?: (
    element?: HTMLElement,
    index?: number
  ) => Promise<boolean> | boolean;
}

export interface ITourContext {
  runTour: (options?: TourOptions, steps?: TourOptions[]) => void;
  showTourHints: (options?: TourOptions, hints?: TourOptions[]) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TourConfig extends TourOptionsExtra {
  //
}
