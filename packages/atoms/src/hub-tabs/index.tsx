import React from 'react';

import { TabsStyle, TabStyle } from './styles';
import { HubTabProps, HubTabsProps } from './types';

export type { HubTabProps, HubTabsProps };

export function HubTabs({ onChange, children, ...props }: HubTabsProps) {
  const [selected, setSelected] = React.useState<number>(0);

  React.useEffect(() => {
    if (props.current) {
      setSelected(props.current);
    }
  }, [props.current]);

  return (
    <TabsStyle {...props}>
      {React.Children.map(
        children,
        (child, i) =>
          React.isValidElement(child) &&
          React.cloneElement<HubTabProps>(child, {
            disabled: props.disabled || child.props.disabled,
            width: props.width || child.props.width,
            active: child.props.active
              ? child.props.active
              : child.props.value
              ? selected === child.props.value
              : selected === i,
            onClick: () => {
              if (!props.disabled && !child.props.disabled) {
                setSelected(child.props.value || i);
                onChange?.(child.props.value || i);
                child.props.onClick?.();
              }
            }
          })
      )}
    </TabsStyle>
  );
}

export function HubTab({ children, ...props }: HubTabProps) {
  return <TabStyle {...props}>{children}</TabStyle>;
}
