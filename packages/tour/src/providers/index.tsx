import introJs from 'intro.js';
import { IntroJs } from 'intro.js/src/intro';
import React from 'react';
import { ITourContext, TourConfig, TourOptions } from './types';

export type { TourConfig, TourOptions };

const TourContext = React.createContext<ITourContext>(null as never);

export const useTour = () => React.useContext(TourContext);

interface TourProviderProps {
  configs?: TourConfig;
  children?: React.ReactNode;
}

const feedback = {
  nextLabel: 'Próximo',
  prevLabel: 'Anterior',
  doneLabel: 'Fechar',
  hintButtonLabel: 'Ok',
  stepNumbersOfLabel: 'de',
  dontShowAgainLabel: 'Não mostre novamente'
};

export function TourProvider({ configs, children }: TourProviderProps) {
  const runTour = React.useCallback(
    (options?: TourOptions, steps?: TourOptions[]) => {
      const opts = {
        ...configs,
        ...options,
        steps,
        ...feedback
      };

      if (options?.callback) {
        introJs()
          .onbeforechange(function (
            this: IntroJs,
            element: HTMLElement,
            step: number
          ) {
            return (options.callback as CallableFunction)(element, step);
          })
          .setOptions(opts)
          .start();
      } else {
        introJs().setOptions(opts).start();
      }
    },
    [feedback]
  );

  const showTourHints = React.useCallback(
    (options?: TourOptions, hints?: TourOptions[]) => {
      const opts = {
        ...configs,
        ...options,
        hints,
        ...feedback
      };
      introJs().setOptions(opts).addHints();
    },
    [feedback]
  );

  const value = React.useMemo(
    () => ({ runTour, showTourHints }),
    [runTour, showTourHints]
  );

  return <TourContext.Provider value={value}>{children}</TourContext.Provider>;
}
