import { HubButton, HubModal, HubModalProps } from '@hubert/atoms';
import { useI18nMessage } from '@hubert/i18n';
import React from 'react';

interface HubModalRightProps extends HubModalProps {
  labelCancel?: React.ReactNode;
  labelDone?: React.ReactNode;
  onDone?: () => void;
  onClose: () => void;
}

export type { HubModalRightProps };

export function HubModalRight({
  labelCancel,
  labelDone,
  onDone,
  onClose,
  children,
  ...props
}: HubModalRightProps) {
  const t = useI18nMessage();

  return (
    <HubModal
      header={t('hub-modal-right_title')}
      position="right"
      radius="0"
      width="300px"
      minContentHeight="100vh"
      onClose={onClose}
      actions={
        <>
          {onDone && (
            <HubButton variant="outline" full onClick={onClose}>
              {labelCancel || t('hub-modal-right_close')}
            </HubButton>
          )}
          <HubButton full onClick={onDone || onClose}>
            {labelDone || t('hub-modal-right_done')}
          </HubButton>
        </>
      }
      {...props}
    >
      {children}
    </HubModal>
  );
}
