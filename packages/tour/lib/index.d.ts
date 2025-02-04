import React from 'react';
import { Position } from '@hubert/styles';

interface TourOptionsExtra {
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
interface TourOptions extends TourOptionsExtra {
    /** title of tooltip tour */
    title?: string;
    /** content of tooltip (can be HTML string) */
    content?: string;
    /** content of hint tour */
    hint?: string;
    /** anchor of tooltip (if null, show on top) */
    element?: string | HTMLElement | null;
    position?: Position;
    hintPosition?: 'top-left' | 'top-middle' | 'top-right' | 'bottom-left' | 'bottom-middle' | 'bottom-right';
    callback?: (element?: HTMLElement, index?: number) => Promise<boolean> | boolean;
}
interface ITourContext {
    runTour: (options?: TourOptions, steps?: TourOptions[]) => void;
    showTourHints: (options?: TourOptions, hints?: TourOptions[]) => void;
}
interface TourConfig extends TourOptionsExtra {
}

declare const useTour: () => ITourContext;
interface TourProviderProps {
    configs?: TourConfig;
    children?: React.ReactNode;
}
declare function TourProvider({ configs, children }: TourProviderProps): React.JSX.Element;

interface HubTourProps extends TourOptions {
    step?: string;
    width?: string;
    children?: React.ReactNode;
}
declare function HubTour({ title, content, hint, hintPosition, step, width, children, ...props }: HubTourProps): React.JSX.Element;

export { HubTour, HubTourProps, TourConfig, TourOptions, TourProvider, useTour };
