import { factoryTestId } from '@hubert/shared';
import React from 'react';
import Arrow from './arrow';
import {
  CollapseContent,
  CollapseHeader,
  CollapseHeaderTitle,
  CollapseHeaderTrigger,
  CollapseStyle
} from './styles';
import { HubCollapseProps } from './types';

export type { HubCollapseProps };

export function HubCollapse({
  opened,
  title,
  hidden,
  triggerPosition = 'right',
  triggerRotateStep = 90,
  customTrigger,
  onChange,
  children,
  ...props
}: HubCollapseProps) {
  const [source, setSource] = React.useState(opened);

  const handleClick = React.useCallback(() => {
    setSource(!source);
    onChange?.(!source);
  }, [source, onChange]);

  const Trigger = () => {
    if (hidden) {
      return <></>;
    }

    if (customTrigger) {
      return <>{customTrigger(source, handleClick)}</>;
    }

    return (
      <CollapseHeaderTrigger
        data-testid={factoryTestId(props, 'change')}
        type="button"
        disabled={props.disabled}
        onClick={handleClick}
      >
        <Arrow
          style={{
            transform: `rotate(${
              source ? 90 - triggerRotateStep : 270 - triggerRotateStep
            }deg)`
          }}
        />
      </CollapseHeaderTrigger>
    );
  };

  React.useEffect(() => {
    setSource(opened);
  }, [opened]);

  return (
    <CollapseStyle {...props} opened={source}>
      <CollapseHeader
        onClick={() => {
          if (props.titleClickable && !props.disabled) {
            handleClick();
          }
        }}
      >
        {triggerPosition === 'left' && <Trigger />}
        <CollapseHeaderTitle>{title}</CollapseHeaderTitle>
        {triggerPosition === 'right' && <Trigger />}
      </CollapseHeader>
      {source && <CollapseContent>{children}</CollapseContent>}
    </CollapseStyle>
  );
}
