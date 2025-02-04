import { useI18nMessage } from '@hubert/i18n';
import {
  factoryTestId,
  getAbsPosition,
  getParentBy,
  isSomething,
  scrollPosition
} from '@hubert/shared';
import React from 'react';
import ReactDOM from 'react-dom';
import { HubSource } from '../types';
import Check from './check';
import Dropdown from './dropdown';
import {
  DropdownCheckStyle,
  DropdownEmptyStyle,
  DropdownIconStyle,
  DropdownItemStyle,
  DropdownOverlayStyle,
  DropdownStyle,
  DropdownTriggerStyle
} from './styles';
import { HubDropdownProps, HubDropdownRef } from './types';

export type { HubDropdownProps, HubDropdownRef };

function HubDropdownInner<T = unknown, V = unknown>(
  {
    position,
    width,
    onChange,
    onOpen,
    onClose,
    children,
    ...props
  }: HubDropdownProps<T, V>,
  ref
) {
  const t = useI18nMessage();

  const [show, setShow] = React.useState(props.opened);
  const [source, setSource] = React.useState(props.items || []);
  const [triggerSource, setTriggerSource] = React.useState<HubSource>();
  const [contentDimensions, setContentDimensions] = React.useState<{
    w: number;
    h: number;
  }>();

  const coordinates = React.useMemo(() => {
    if (triggerSource?.target && contentDimensions) {
      const target = getParentBy(triggerSource?.target, '.DropdownTrigger');
      const scroll = scrollPosition();
      const rect = target.getBoundingClientRect?.() || {};
      const abs = getAbsPosition(target);

      const top = abs.top || rect.top;
      const left = abs.left || rect.left;

      let pos = position || 'bottom';

      if (top - contentDimensions.h < scroll.top) {
        pos = pos.replace('top', 'bottom') as never;
      }
      if (top + rect.height + contentDimensions.h > scroll.bottom) {
        pos = pos.replace('bottom', 'top') as never;
      }

      let offset = { x: 0, y: 0 };

      switch (pos) {
        case 'top':
          offset = { x: left, y: top - 4 - contentDimensions.h };
          break;
        case 'bottom':
          offset = { x: left, y: top + rect.height + 4 };
          break;
        case 'above':
          offset = {
            x: left,
            y: top + rect.height / 2 - contentDimensions.h / 2
          };
          break;
      }

      return {
        top: offset.y,
        left: offset.x,
        width: width || rect.width + 'px'
      };
    }

    return undefined;
  }, [triggerSource, contentDimensions, position, width]);

  const getTrigger = React.useCallback(
    (el?: HTMLDivElement | null) => {
      if (el && !triggerSource) {
        setTriggerSource({
          target: el
        } as never);
      }
    },
    [triggerSource]
  );

  const getContentDimensions = React.useCallback(
    (el?: HTMLUListElement | null) => {
      if (el && !contentDimensions) {
        setContentDimensions({
          w: el.clientWidth,
          h: el.clientHeight
        });
      }
    },
    [contentDimensions]
  );

  const compare = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (a: any, b: any) => {
      if (props.keyValue) {
        if (!isSomething(b)) return false;
        if (typeof props.keyValue === 'string') {
          return a === b[props.keyValue];
        }
        return a === props.keyValue(b);
      }
      if (props.compareKey) {
        if (!isSomething(a) || !isSomething(b)) return false;
        if (typeof props.compareKey === 'string') {
          return a[props.compareKey] === b[props.compareKey];
        }
        return props.compareKey(a) === props.compareKey(b);
      }
      return a === b;
    },
    [props.keyValue, props.compareKey]
  );

  const resolveLabel = React.useCallback(
    (item: T) => {
      if (props.keyLabel) {
        if (typeof props.keyLabel === 'string') {
          return item[props.keyLabel];
        }
        return props.keyLabel(item);
      }
      return item;
    },
    [props.keyLabel]
  );

  const resolveValue = React.useCallback(
    (item: T) => {
      if (props.keyValue) {
        if (typeof props.keyValue === 'string') {
          return item[props.keyValue];
        }
        return props.keyValue(item);
      }
      return item;
    },
    [props.keyValue]
  );

  const resolveSearch = React.useCallback(
    (item: T) => {
      if (props.keySearch) {
        if (typeof props.keySearch === 'string') {
          return item[props.keySearch];
        }
        return props.keySearch(item);
      }
      return item;
    },
    [props.keySearch]
  );

  const isSelected = React.useCallback(
    (item: T) => {
      // ? removed because zero === false
      // if (!value) return false;
      if (Array.isArray(props.value)) {
        return props.value.some((x) => compare(x, item));
      }
      return compare(props.value, item);
    },
    [props.value, compare]
  );

  const label = React.useMemo(() => {
    const selected = props.items?.filter((item) => isSelected(item));
    return selected?.map((item) => resolveLabel(item)).join(', ');
  }, [props.items, props.value, isSelected]);

  function handleResetSource() {
    setSource(props.items || []);
  }

  function handleSelectItem(item: T, index: number) {
    if (!onChange) return;
    const itemValue = resolveValue(item);

    if (Array.isArray(props.value)) {
      if (isSelected(item)) {
        onChange(
          props.value.filter((x) => !compare(x, item)) as unknown as V,
          index,
          item
        );
      } else {
        onChange([...props.value, itemValue] as unknown as V, index, item);
      }
    } else {
      onChange(itemValue, index, item);
      handleClose();
    }

    handleResetSource();
  }

  function handleTrigger(e: HubSource) {
    if (props.disabled) return;

    if (!show) {
      setTriggerSource(e);
      handleOpen();
    } else {
      handleClose();
    }
  }

  function handleOpen() {
    setShow(true);
    onOpen?.();
  }

  function handleClose() {
    setShow(false);
    onClose?.();
  }

  function handleSearch(v?: string) {
    if (v) {
      if (!show) {
        handleOpen();
      }

      const results = props.items?.filter((x) =>
        (props.keySearch
          ? resolveSearch(x)
          : `${resolveLabel(x)};${resolveValue(x)}`
        )
          .toLowerCase()
          .includes(v.toLowerCase())
      );
      setSource(results || []);
    } else {
      handleResetSource();
    }
  }

  const isMultiple = React.useMemo(
    () => Array.isArray(props.value),
    [props.value]
  );

  React.useEffect(() => {
    handleResetSource();
  }, [props.items]);

  React.useImperativeHandle<HubDropdownRef, HubDropdownRef>(
    ref,
    () => ({
      open: handleOpen,
      close: handleClose
    }),
    []
  );

  return (
    <>
      <DropdownTriggerStyle
        ref={getTrigger}
        opened={show}
        onClick={handleTrigger}
      >
        {children?.(label, handleSearch)}
      </DropdownTriggerStyle>
      {show &&
        ReactDOM.createPortal(
          <>
            <DropdownOverlayStyle onClick={handleClose} />
            <DropdownStyle
              {...props}
              ref={getContentDimensions}
              width={coordinates?.width || width}
              style={coordinates}
            >
              {!source.length && (
                <DropdownEmptyStyle>
                  {t('hub-dropdown_empty')}
                </DropdownEmptyStyle>
              )}
              {source.map((item, i) => (
                <DropdownItemStyle
                  key={`hub-dropdown-item-${i}`}
                  data-testid={factoryTestId(props, 'change')}
                  selected={isSelected(item)}
                  onClick={() => handleSelectItem(item, i)}
                >
                  {isMultiple &&
                    (isSelected(item) ? (
                      <DropdownCheckStyle selected>
                        <Check />
                      </DropdownCheckStyle>
                    ) : (
                      <DropdownCheckStyle />
                    ))}
                  {resolveLabel(item)}
                </DropdownItemStyle>
              ))}
            </DropdownStyle>
          </>,
          window.document.body
        )}
    </>
  );
}

export const HubDropdown = React.forwardRef(HubDropdownInner) as <
  T = unknown,
  V = unknown
>(
  props: HubDropdownProps<T, V> & { ref?: React.ForwardedRef<HubDropdownRef> }
) => ReturnType<typeof HubDropdownInner>;

export function HubDropdownIcon() {
  return (
    <DropdownIconStyle>
      <Dropdown />
    </DropdownIconStyle>
  );
}
