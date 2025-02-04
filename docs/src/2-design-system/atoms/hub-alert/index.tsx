/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  HubAlert,
  HubAlertProps,
  HubButton,
  HubGrid,
  HubIcon,
  HubText
} from '@hubert/atoms';
import IconOutlineAddNew from '@hubert/styles/lib/icons/icon-outline-add-new.svg';
import IconApprove from '@hubert/styles/lib/icons/icon-outline-approve.svg';
import IconError from '@hubert/styles/lib/icons/icon-outline-error.svg';
import IconExclamation from '@hubert/styles/lib/icons/icon-outline-exclamation-mark.svg';
import React from 'react';
import { EMPTY_FUNCTION, TEXT } from '~/utils';
import { HubAlertConfig } from './storyConfig';

export const Default = (args: HubAlertProps) => {
  return (
    <HubAlert
      {...args}
      icon={<HubIcon icon={IconOutlineAddNew} size="sm" />}
      onClose={EMPTY_FUNCTION}
    />
  );
};

export const BigContent = (args: HubAlertProps) => {
  return (
    <HubAlert
      title={TEXT.Title}
      content={TEXT.Paragraph}
      icon={<HubIcon icon={IconOutlineAddNew} size="sm" />}
      onClose={EMPTY_FUNCTION}
    />
  );
};

export const InlineMode = (args: HubAlertProps) => {
  return (
    <HubAlert
      title={TEXT.Paragraph}
      icon={<HubIcon icon={IconOutlineAddNew} size="sm" />}
      onClose={EMPTY_FUNCTION}
      inline
    />
  );
};

export const SuccessAlert = (args: HubAlertProps) => {
  return (
    <HubAlert
      title={TEXT.Paragraph}
      icon={<HubIcon icon={IconApprove} size="sm" />}
      color="success"
      onClose={EMPTY_FUNCTION}
      inline
    />
  );
};

export const WarningAlert = (args: HubAlertProps) => {
  return (
    <HubAlert
      title={TEXT.Paragraph}
      icon={<HubIcon icon={IconExclamation} size="sm" />}
      color="warning"
      onClose={EMPTY_FUNCTION}
      inline
    />
  );
};

export const ErrorAlert = (args: HubAlertProps) => {
  return (
    <HubAlert
      title={TEXT.Paragraph}
      icon={<HubIcon icon={IconError} size="sm" />}
      color="error"
      onClose={EMPTY_FUNCTION}
      inline
    />
  );
};

export const WithActions = (args: HubAlertProps) => {
  return (
    <HubAlert
      title={TEXT.Title}
      content={TEXT.Paragraph}
      icon={<HubIcon icon={IconOutlineAddNew} size="sm" />}
      color="info"
      actions={
        <HubGrid row gap="5">
          <HubButton variant="action" color="info">
            <HubText typo="body2">{TEXT.Button}</HubText>
          </HubButton>
          <HubButton variant="action" color="info">
            <HubText typo="body2">{TEXT.Button}</HubText>
          </HubButton>
        </HubGrid>
      }
      onClose={EMPTY_FUNCTION}
    />
  );
};

export const WithWidthOrGrid = (args: HubAlertProps) => {
  return (
    <HubGrid gap="3">
      <HubGrid cols={['8', '4']}>
        <HubAlert
          title={TEXT.Title}
          content={TEXT.Paragraph}
          icon={<HubIcon icon={IconOutlineAddNew} size="sm" />}
          color="success"
          onClose={EMPTY_FUNCTION}
        />
      </HubGrid>
      <HubGrid cols={['4', '8']}>
        <div />
        <HubAlert
          title={TEXT.Paragraph}
          icon={<HubIcon icon={IconExclamation} size="sm" />}
          color="warning"
          onClose={EMPTY_FUNCTION}
          inline
        />
      </HubGrid>
    </HubGrid>
  );
};

export default HubAlertConfig;
