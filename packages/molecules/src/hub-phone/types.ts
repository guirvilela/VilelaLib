import { HubTextFieldProps } from '@hubert/atoms';

export interface HubPhoneValue {
  ddi?: string;
  ddd?: string;
  phone?: string;
}

type TextFieldPhone = HubPhoneValue &
  Omit<
    HubTextFieldProps,
    'defaultValue' | 'onLazyChange' | 'value' | 'onChange'
  >;

export interface HubPhoneProps extends TextFieldPhone {
  onChange?: (v: HubPhoneValue) => void;
}
