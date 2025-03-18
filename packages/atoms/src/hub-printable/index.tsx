import { $ } from '@hubert/shared';
import React from 'react';
import ReactDOM from 'react-dom';

export interface HubPrintableProps {
  onPrint?(printMode?: boolean): void;
  children?: React.ReactNode;
}

export interface HubPrintableRef {
  print(): void;
}

function HubPrintableInner({ onPrint, children }: HubPrintableProps, ref) {
  const [printMode, setPrintMode] = React.useState<boolean>(false);

  const changeAppVisible = React.useCallback((visible: boolean) => {
    const app = $('#__next');
    if (app) {
      if (visible) {
        app['style'].display = 'block';
      } else {
        app['style'].display = 'none';
      }
    }
  }, []);

  const print = React.useCallback(() => {
    setPrintMode(true);
    changeAppVisible(false);
    onPrint?.(true);

    setTimeout(() => {
      window.print();
      changeAppVisible(true);
      setPrintMode(false);
      onPrint?.(false);
    }, 200);
  }, [changeAppVisible]);

  React.useImperativeHandle<HubPrintableRef, HubPrintableRef>(
    ref,
    () => ({ print }),
    [print]
  );

  return printMode ? (
    ReactDOM.createPortal(children, window.document.body)
  ) : (
    <>{children}</>
  );
}

export const HubPrintable = React.forwardRef(HubPrintableInner) as (
  props: HubPrintableProps & { ref?: React.ForwardedRef<HubPrintableRef> }
) => ReturnType<typeof HubPrintableInner>;
