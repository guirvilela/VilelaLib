import { HubAlert, HubIcon } from '@hubert/atoms';
import { factoryTestId } from '@hubert/shared';
import IconOutlineApprove from '@hubert/styles/lib/icons/icon-outline-approve.svg';
import IconOutlineError from '@hubert/styles/lib/icons/icon-outline-error.svg';
import IconOutlineExclamationMark from '@hubert/styles/lib/icons/icon-outline-exclamation-mark.svg';
import IconOutlineHelp from '@hubert/styles/lib/icons/icon-outline-help.svg';
import React from 'react';
import { HubStatus } from '../types';

interface HubStatusAlertProps {
  status?: HubStatus;
  message?: React.ReactNode;
  timeout?: number;
  onCloseMsg?: () => void;
}

export type { HubStatusAlertProps };

export function HubStatusAlert({
  status,
  message,
  timeout,
  onCloseMsg,
  ...props
}: HubStatusAlertProps) {
  const [source, setSource] = React.useState(message);

  const icon = React.useMemo(() => {
    switch (status) {
      case 'success':
        return IconOutlineApprove;
      case 'warning':
        return IconOutlineExclamationMark;
      case 'error':
        return IconOutlineError;
      case 'info':
        return IconOutlineHelp;
    }
  }, [status]);

  React.useEffect(() => {
    setSource(message);

    if (message && timeout && timeout > 0) {
      setTimeout(() => setSource(undefined), timeout);
    }
  }, [message]);

  return source ? (
    <HubAlert
      {...props}
      data-testid={factoryTestId(props, 'alert')}
      color={status}
      icon={icon && <HubIcon icon={icon} color={status} size="sm" />}
      title={source}
      inline
      onClose={onCloseMsg}
    />
  ) : (
    <></>
  );
}
