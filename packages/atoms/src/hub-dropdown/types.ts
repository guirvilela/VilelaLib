export interface HubDropdownProps<T = unknown, V = unknown> {
  opened?: boolean;
  disabled?: boolean;
  position?: 'top' | 'bottom' | 'above';
  width?: string;
  height?: string;
  items?: T[];
  keyLabel?: string | ((item: T) => string | React.ReactNode);
  keyValue?: string | ((item: T) => V);
  keySearch?: string | ((item: T) => string);
  compareKey?: string | ((item: T) => V);
  value?: V;
  onOpen?: () => void;
  onClose?: () => void;
  onChange?: (value: V, index?: number, item?: T) => void;
  children?: (
    label?: string,
    search?: (v: string) => void
  ) => React.ReactNode | React.ReactNode[];
}

export interface HubDropdownRef {
  open(): void;
  close(): void;
}
