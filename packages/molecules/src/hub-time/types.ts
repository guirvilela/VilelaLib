import { HubTextFieldProps } from '@hubert/atoms';
import { ISOTime } from '@hubert/shared';

export interface HubTimeProps
  extends Omit<HubTextFieldProps, 'defaultValue' | 'onLazyChange'> {
  value?: ISOTime;
  onChange?: (v: ISOTime) => void;
}
