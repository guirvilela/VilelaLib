import React from 'react';

import {
  ProgressTabIndicatorStyle,
  ProgressTabLabelStyle,
  ProgressTabsStyle,
  ProgressTabStyle
} from './styles';
import { HubProgressTabProps, HubProgressTabsProps } from './types';

export type { HubProgressTabProps, HubProgressTabsProps };

export function HubProgressTabs({
  onChange,
  children,
  ...props
}: HubProgressTabsProps) {
  const [selected, setSelected] = React.useState<number>(0);

  React.useEffect(() => {
    if (props.current) {
      setSelected(props.current);
    }
  }, [props.current]);

  return (
    <ProgressTabsStyle {...props}>
      {React.Children.map(
        children,
        (child, i) =>
          React.isValidElement(child) &&
          React.cloneElement<HubProgressTabProps>(child, {
            disabled: props.disabled || child.props.disabled,
            width: props.width || child.props.width,
            height: props.height || child.props.height,
            active: child.props.active
              ? child.props.active
              : child.props.value
              ? selected === child.props.value
              : selected === i,
            onClick: () => {
              if (!props.disabled && !child.props.disabled) {
                setSelected(i);
                onChange?.(child.props.value || i);
                child.props.onClick?.();
              }
            }
          })
      )}
    </ProgressTabsStyle>
  );
}

export function HubProgressTab({ children, ...props }: HubProgressTabProps) {
  return (
    <ProgressTabStyle {...props}>
      <ProgressTabLabelStyle>{children}</ProgressTabLabelStyle>
      <ProgressTabIndicatorStyle />
    </ProgressTabStyle>
  );
}
