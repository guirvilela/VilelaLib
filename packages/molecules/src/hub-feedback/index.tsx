import {
  HubAnimation,
  HubButton,
  HubGrid,
  HubModal,
  HubText
} from '@hubert/atoms';
import { useI18nMessage } from '@hubert/i18n';
import AnimationError from '@hubert/styles/lib/animations/error.json';
import AnimationInfo from '@hubert/styles/lib/animations/info.json';
import AnimationSuccess from '@hubert/styles/lib/animations/success.json';
import AnimationWarning from '@hubert/styles/lib/animations/warning.json';
import React from 'react';
import { HubStatus } from '../types';

interface HubFeedbackProps {
  opened?: boolean;
  status?: HubStatus;
  title?: React.ReactNode;
  content: React.ReactNode;
  width?: string;
  height?: string;
  okLabel?: string;
  actions?: React.ReactNode;
  onOk?: () => void;
  onClose?: () => void;
}

export type { HubFeedbackProps };

export function HubFeedback({
  opened,
  status,
  title,
  content,
  width,
  height,
  okLabel,
  actions,
  onOk,
  onClose,
  ...props
}: HubFeedbackProps) {
  const t = useI18nMessage();

  const animation = React.useMemo(() => {
    switch (status) {
      case 'success':
        return AnimationSuccess;
      case 'warning':
        return AnimationWarning;
      case 'error':
        return AnimationError;
      case 'info':
        return AnimationInfo;
      default:
        return undefined;
    }
  }, [status]);

  const defaultTitle = React.useMemo(() => {
    switch (status) {
      case 'success':
        return t('hub-feedback_title-success');
      case 'warning':
        return t('hub-feedback_title-warning');
      case 'error':
        return t('hub-feedback_title-error');
      default:
        return t('hub-feedback_title-info');
    }
  }, [status]);

  return (
    <HubModal
      {...props}
      opened={opened}
      width={width || '420px'}
      contentHeight={height || '80vh'}
      onClose={onClose}
      noCloseBtn
    >
      <HubGrid align="center" gap="3">
        {opened && !!animation && (
          <HubAnimation source={animation} width="64px" height="64px" />
        )}
        <HubGrid align="center" gap="5">
          <HubGrid align="center" gap="1">
            <HubText typo="h3">{title || defaultTitle}</HubText>
            <HubText
              typo="body1"
              align="center"
              color="neutralGrey"
              colorLevel="700"
            >
              {content}
            </HubText>
          </HubGrid>
          {actions || (
            <HubButton onClick={onOk || onClose}>
              {okLabel || t('hub-feedback_done')}
            </HubButton>
          )}
        </HubGrid>
      </HubGrid>
    </HubModal>
  );
}
