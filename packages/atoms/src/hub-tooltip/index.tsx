import { getAbsPosition, scrollPosition } from '@hubert/shared';
import { Position } from '@hubert/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { HubSource } from '../types';
import {
  TooltipArrowStyle,
  TooltipContainerStyle,
  TooltipContentStyle,
  TooltipStyle,
  TooltipTriggerStyle
} from './styles';
import { HubTooltipProps } from './types';

export type { HubTooltipProps };

export function HubTooltip({
  opened: open,
  triggerWidth,
  content,
  disabled,
  position,
  children,
  ...props
}: HubTooltipProps) {
  const [opened, setOpened] = React.useState(open);
  const [source, setSource] = React.useState<HubSource>();
  const timer = React.useRef<NodeJS.Timeout>();
  const [contentDimensions, setContentDimensions] = React.useState<{
    w: number;
    h: number;
  }>();

  const coordinates = React.useMemo(() => {
    if (source?.target && contentDimensions) {
      const scroll = scrollPosition();
      const rect =
        (source.target as HTMLDivElement).getBoundingClientRect?.() || {};
      const abs = getAbsPosition(source.target);

      const top = abs.top || rect.top;
      const left = abs.left || rect.left;

      let pos = position || 'bottom';

      if (top - contentDimensions.h < scroll.top) {
        pos = pos.replace('top', 'bottom') as Position;
      }
      if (top + rect.height + contentDimensions.h > scroll.bottom) {
        pos = pos.replace('bottom', 'top') as Position;
      }
      if (pos === 'left' && left - contentDimensions.w < scroll.left) {
        pos = 'right';
      }
      if (
        pos === 'right' &&
        left + rect.width + contentDimensions.w > scroll.right
      ) {
        pos = 'left';
      }

      let offset = { x: 0, y: 0 };

      switch (pos) {
        case 'left':
          offset = { x: left, y: top + rect.height / 2 };
          break;
        case 'right':
          offset = { x: left + rect.width, y: top + rect.height / 2 };
          break;
        case 'top':
        case 'topLeft':
        case 'topRight':
          offset = { x: left + rect.width / 2, y: top };
          break;
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          offset = { x: left + rect.width / 2, y: top + rect.height };
          break;
      }

      return {
        top: offset.y,
        left: offset.x,
        pos
      };
    }

    return undefined;
  }, [source, contentDimensions, position]);

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
      timer.current = setTimeout(() => setOpened(open), 200);
    },
    [disabled]
  );

  const handleEvent = React.useCallback(
    (e: HubSource) => {
      setSource(e);
      handleOpened(!opened);
    },
    [opened]
  );

  React.useEffect(() => {
    setOpened(open);
  }, [open]);

  return (
    <TooltipStyle>
      <TooltipTriggerStyle
        ref={getTrigger}
        width={triggerWidth}
        onClick={handleEvent}
        onMouseEnter={handleEvent}
        onMouseLeave={() => handleOpened(false)}
      >
        {children}
      </TooltipTriggerStyle>
      {opened &&
        ReactDOM.createPortal(
          <TooltipContainerStyle
            {...props}
            position={coordinates?.pos || position}
            style={coordinates}
          >
            <TooltipArrowStyle />
            <TooltipContentStyle
              ref={getContentDimensions}
              onMouseEnter={() => handleOpened(true)}
              onMouseLeave={() => handleOpened(false)}
            >
              {content}
            </TooltipContentStyle>
          </TooltipContainerStyle>,
          window.document.body
        )}
    </TooltipStyle>
  );
}
