import { HubGrid, HubTextField } from '@hubert/atoms';
import { Action } from '@hubert/http';
import { useI18nMessage } from '@hubert/i18n';
import { HubModalAlert, HubModalAlertProps } from '@hubert/molecules';
import { factoryTestId } from '@hubert/shared';
import React from 'react';
import { HubStatus } from '../types';

interface HubYesNoProps extends HubModalAlertProps {
  opened: boolean;
  title: React.ReactNode;
  status?: HubStatus;
  content?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action?: Action<any>;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  onClose: () => void;
  onDone: () => void;
}

export type { HubYesNoProps };

export function HubYesNo({
  title,
  content,
  placeholder,
  action,
  value,
  onChange,
  onClose,
  onDone,
  ...props
}: HubYesNoProps) {
  const t = useI18nMessage();

  return (
    <HubModalAlert
      {...props}
      status={action?.error ? 'error' : props.status}
      title={title}
      loading={action?.loading}
      message={action?.error}
      content={
        <HubGrid gap="3">
          {content}
          {onChange && (
            <HubGrid row>
              <HubTextField
                id="hub-yes-no-input"
                data-testid={factoryTestId(props, 'input')}
                type="area"
                rows={3}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoFocus
                required
              />
            </HubGrid>
          )}
        </HubGrid>
      }
      labelCancel={t('hub-yes-no_cancel')}
      labelDone={t('hub-yes-no_done')}
      onClose={onClose}
      onDone={onDone}
    />
  );
}
