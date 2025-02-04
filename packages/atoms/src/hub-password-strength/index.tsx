/* eslint-disable no-plusplus */
import React from 'react';

import { useI18nMessage } from '@hubert/i18n';
import { useTheme } from '@hubert/styles';
import {
  PasswordContainerStyle,
  PasswordHintStyle,
  PasswordRectStyle
} from './styles';

enum PasswordStrength {
  Empty = 0,
  VeryWeak = 1,
  Weak = 2,
  Average = 3,
  Strong = 4,
  VeryStrong = 5
}

export function getPasswordStrength(password: string): PasswordStrength {
  let score = 0;

  if (!password || password.length < 1) return PasswordStrength.Empty;

  if (password.length < 8) return PasswordStrength.VeryWeak;

  if (password.length >= 8) score++;

  if (password.length >= 12) score++;

  if (/[0-9]/g.test(password)) score++;

  if (/[a-z]/g.test(password) && /[A-Z]/g.test(password)) score++;

  if (/[^A-Za-z0-9]/g.test(password)) score++;

  return score as PasswordStrength;
}

export interface HubPasswordStrengthProps {
  password: string;
}

export function HubPasswordStrength(props: HubPasswordStrengthProps) {
  const theme = useTheme();
  const t = useI18nMessage();

  const strength = React.useMemo(
    () => getPasswordStrength(props.password),
    [props.password]
  );

  const color1 = React.useMemo(() => {
    switch (strength) {
      case PasswordStrength.VeryWeak:
      case PasswordStrength.Weak:
        return theme.colors.error[500];
      case PasswordStrength.Average:
        return theme.colors.warning[500];
      case PasswordStrength.Strong:
      case PasswordStrength.VeryStrong:
        return theme.colors.success[500];
      default:
        return theme.colors.neutral[200];
    }
  }, [strength, theme]);

  const color2 = React.useMemo(() => {
    switch (strength) {
      case PasswordStrength.Weak:
        return theme.colors.error[500];
      case PasswordStrength.Average:
        return theme.colors.warning[500];
      case PasswordStrength.Strong:
      case PasswordStrength.VeryStrong:
        return theme.colors.success[500];
      default:
        return theme.colors.neutral[200];
    }
  }, [strength, theme]);

  const color3 = React.useMemo(() => {
    switch (strength) {
      case PasswordStrength.Average:
        return theme.colors.warning[500];
      case PasswordStrength.Strong:
      case PasswordStrength.VeryStrong:
        return theme.colors.success[500];
      default:
        return theme.colors.neutral[200];
    }
  }, [strength, theme]);

  const color4 = React.useMemo(() => {
    switch (strength) {
      case PasswordStrength.Strong:
      case PasswordStrength.VeryStrong:
        return theme.colors.success[500];
      default:
        return theme.colors.neutral[200];
    }
  }, [strength, theme]);

  const color5 = React.useMemo(() => {
    switch (strength) {
      case PasswordStrength.VeryStrong:
        return theme.colors.success[500];
      default:
        return theme.colors.neutral[200];
    }
  }, [strength, theme]);

  const hint = React.useMemo(() => {
    switch (strength) {
      case PasswordStrength.VeryWeak:
        return t('hub-password-strength_very-weak');
      case PasswordStrength.Weak:
        return t('hub-password-strength_weak');
      case PasswordStrength.Average:
        return t('hub-password-strength_average');
      case PasswordStrength.Strong:
        return t('hub-password-strength_strong');
      case PasswordStrength.VeryStrong:
        return t('hub-password-strength_very-strong');
      default:
        return <></>;
    }
  }, [strength, t]);

  return (
    <PasswordContainerStyle>
      <PasswordRectStyle color={color1} />
      <PasswordRectStyle color={color2} />
      <PasswordRectStyle color={color3} />
      <PasswordRectStyle color={color4} />
      <PasswordRectStyle color={color5} />
      <PasswordHintStyle>{hint}</PasswordHintStyle>
    </PasswordContainerStyle>
  );
}
