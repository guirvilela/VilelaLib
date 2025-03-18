import { Space } from '@hubert/styles';

export interface HubFormProps {
  gap?: Space;
  onSubmit?: (v: HTMLFormElement) => void;
  children?: React.ReactNode;
}
