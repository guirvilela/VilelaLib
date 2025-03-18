import { factoryTestId, getAbsPosition, scrollPosition } from '@hubert/shared';
import React from 'react';
import ReactDOM from 'react-dom';
import { HubSource } from '../types';
import {
  PopoverOverlayStyle,
  PopoverStyle,
  PopoverTriggerStyle
} from './styles';
import { HubPopoverProps } from './types';

export type { HubPopoverProps };

export function HubPopover({
  opened: open,
  source: src,
  disabled,
  trigger,
  triggerWidth,
  content,
  offset,
  children,
  onClose,
  ...props
}: HubPopoverProps) {
  const [opened, setOpened] = React.useState(open);
  const [source, setSource] = React.useState(src);
  const timer = React.useRef<NodeJS.Timeout>();
  const [contentDimensions, setContentDimensions] = React.useState<{
    w: number;
    h: number;
  }>();

  const usingTrigger = React.useMemo(() => !!children, [children]);

  const hasOverlay = React.useMemo(() => !disabled, [disabled]);

  const coordinates = React.useMemo(() => {
    if (source?.target && contentDimensions) {
      const scroll = scrollPosition();
      const rect =
        (source?.target as HTMLDivElement).getBoundingClientRect?.() || {};
      const abs = getAbsPosition(source?.target);

      const top = abs.top || rect.top || source.pageY;
      const left = abs.left || rect.left || source.pageX;

      const result = { x: left, y: top + rect.height + 4 };

      if (result.y + contentDimensions.h > scroll.bottom) {
        result.y = scroll.bottom - 16 - contentDimensions.h;
      }
      if (result.x + contentDimensions.w > scroll.right) {
        result.x = scroll.right - 16 - contentDimensions.w;
      }

      return {
        top: result.y + (offset?.[0] || 0),
        left: result.x + (offset?.[1] || 0)
      };
    }

    return undefined;
  }, [source, contentDimensions, offset]);

  const getTrigger = React.useCallback(
    (el?: HTMLDivElement | null) => {
      if (el && !source) {
        setSource({
          target: el
        } as never);
      }
    },
    [source]
  );

  const getContentDimensions = React.useCallback(
    (el?: HTMLDivElement | null) => {
      if (el && !contentDimensions) {
        setContentDimensions({
          w: el.clientWidth,
          h: el.clientHeight
        });
      }
    },
    [contentDimensions]
  );

  const handleOpened = React.useCallback(
    (open: boolean) => {
      if (disabled) return;

      if (process.env.NODE_ENV === 'test') {
        setOpened(open);
        return;
      }

      clearTimeout(timer.current);
      timer.current = setTimeout(
        () => setOpened(open),
        open && (!usingTrigger || trigger === 'click') ? 50 : 200
      );
    },
    [usingTrigger, disabled, trigger]
  );

  const handleEvent = React.useCallback(
    (e: HubSource) => {
      if (usingTrigger) {
        if (trigger === 'click' && e.type === 'mouseenter') {
          return;
        }
        if (trigger === 'hover' && e.type === 'click') {
          return;
        }
      }

      setSource(e);
      handleOpened(true);
    },
    [usingTrigger, trigger, handleOpened]
  );

  const handleCancelTrigger = React.useCallback(() => {
    if (trigger === 'hover') {
      clearTimeout(timer.current);
    }
  }, [trigger]);

  const handleClose = React.useCallback(() => {
    handleOpened(false);
    onClose?.();
  }, [onClose, handleOpened]);

  React.useEffect(() => {
    setOpened(open);
  }, [open]);

  //? logica do controle manual (sem utilizar o trigger)
  React.useEffect(() => {
    if (usingTrigger) return;

    if (src) {
      handleEvent(src);
    } else {
      handleOpened(false);
    }
  }, [usingTrigger, src]);

  return (
    <>
      {usingTrigger && (
        <PopoverTriggerStyle
          ref={getTrigger}
          width={triggerWidth}
          onClick={handleEvent}
          onMouseEnter={handleEvent}
          onMouseLeave={handleCancelTrigger}
        >
          {children}
        </PopoverTriggerStyle>
      )}
      {opened &&
        ReactDOM.createPortal(
          <>
            {hasOverlay && (
              <PopoverOverlayStyle
                data-testid={factoryTestId(props, 'close')}
                onClick={handleClose}
              />
            )}
            <PopoverStyle
              {...props}
              ref={getContentDimensions}
              onMouseLeave={handleClose}
              onClick={props.autoClose ? handleClose : undefined}
              style={coordinates}
            >
              {content}
            </PopoverStyle>
          </>,
          window.document.body
        )}
    </>
  );
}
