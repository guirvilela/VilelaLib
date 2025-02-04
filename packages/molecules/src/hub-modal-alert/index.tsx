import {
  HubAlert,
  HubButton,
  HubGrid,
  HubIcon,
  HubModal,
  HubModalProps,
  HubText
} from '@hubert/atoms';
import { factoryTestId } from '@hubert/shared';
import IconOutlineApprove from '@hubert/styles/lib/icons/icon-outline-approve.svg';
import IconOutlineError from '@hubert/styles/lib/icons/icon-outline-error.svg';
import IconOutlineExclamationMark from '@hubert/styles/lib/icons/icon-outline-exclamation-mark.svg';
import IconOutlineHelp from '@hubert/styles/lib/icons/icon-outline-help.svg';
import React from 'react';
import { HubStatus } from '../types';

interface HubModalAlertProps extends HubModalProps {
  opened: boolean;
  status?: HubStatus;
  title?: React.ReactNode;
  content?: React.ReactNode;
  message?: React.ReactNode;
  width?: string;
  disabled?: boolean;
  loading?: boolean;
  labelCancel?: React.ReactNode;
  labelDone?: React.ReactNode;
  onDone?: () => void;
  onClose: () => void;
  onCloseMsg?: () => void;
}

export type { HubModalAlertProps };

export function HubModalAlert({
  opened,
  title,
  content,
  status,
  message,
  width,
  disabled,
  loading,
  labelCancel,
  labelDone,
  onDone,
  onClose,
  onCloseMsg,
  ...props
}: HubModalAlertProps) {
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

  return (
    <HubModal
      {...props}
      opened={opened}
      width={width || '420px'}
      onClose={onClose}
      noCloseBtn
      actions={
        onClose || onDone ? (
          <>
            {onClose && (
              <HubButton
                data-testid={factoryTestId(props, 'close')}
                variant="ghost"
                full
                onClick={onClose}
              >
                {labelCancel}
              </HubButton>
            )}
            {onDone && (
              <HubButton
                data-testid={factoryTestId(props, 'done')}
                full
                color={status}
                disabled={loading || disabled}
                loading={loading}
                onClick={onDone}
              >
                {labelDone}
              </HubButton>
            )}
          </>
        ) : undefined
      }
    >
      <HubGrid gap="3" align="center" filled>
        {title && (
          <HubText typo="h4" weight="500" align="center">
            {title}
          </HubText>
        )}
        {content}
        {message && (
          <HubAlert
            data-testid={factoryTestId(props, 'alert')}
            color={status}
            icon={icon && <HubIcon icon={icon} color={status} size="sm" />}
            title={message}
            inline
            onClose={onCloseMsg}
          />
        )}
      </HubGrid>
    </HubModal>
  );
}
