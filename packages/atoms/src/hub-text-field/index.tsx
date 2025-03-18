import { debounce, factoryTestId } from '@hubert/shared';
import React from 'react';
import IconCalendar from './calendar';
import IconClose from './icon-close';
import {
  TextFieldHintStyle,
  TextFieldIconBtn,
  TextFieldInnerStyle,
  TextFieldInputMaskStyle,
  TextFieldInputStyle,
  TextFieldLabelStyle,
  TextFieldLoadingStyle,
  TextFieldRequiredStyle,
  TextFieldSpacer,
  TextFieldStyle,
  TextFieldTextAreaStyle
} from './styles';
import { HubTextFieldProps, HubTextFieldRef } from './types';

export type { HubTextFieldProps, HubTextFieldRef };

const lazyInput = debounce(1000);

const formatChars = {
  '9': '[0-9]',
  a: '[A-Za-z]',
  A: '[A-Z]',
  '*': '[A-Za-z0-9]'
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function updateInputValue<T>(el: any, v: T) {
  if (!el || typeof v === 'undefined') return;
  if (el.value === String(v)) return;

  if (el.setInputValue) {
    el.setInputValue(v);
  } else {
    el.value = v;
  }
}

function HubTextFieldInner<T = string>(
  {
    id,
    className,
    clearable,
    noShowMask,
    value,
    defaultValue,
    loading,
    wrap,
    autocomplete,
    onChange,
    onLazyChange,
    onShowPicker,
    onClick,
    onFocus,
    onClear,
    containerRef,
    noGap,
    title,
    left,
    right,
    bottom,
    hint,
    after,
    element,
    children,
    ...props
  }: HubTextFieldProps<T>,
  ref
) {
  const inputId = React.useMemo(() => `hub-text-field-${id}`, [id]);
  const inputRef = React.useRef<HTMLInputElement>();

  const mask = React.useMemo(() => {
    switch (props.type) {
      case 'cpf':
        return '999.999.999-99';
      case 'cnpj':
        return '99.999.999/9999-99';
      case 'phone':
        return '(99) 99999-9999';
      case 'cep':
        return '99999-999';
      case 'uf':
        return 'AA';
      default:
        return props.mask;
    }
  }, [props.type, props.mask]);

  const type = React.useMemo(() => {
    switch (props.type) {
      case 'password':
      case 'email':
      case 'number':
      case 'color':
      case 'date':
      case 'time':
      case 'month':
      case 'week':
        return props.type;
      case 'datetime':
        return 'datetime-local';
      default:
        return 'text';
    }
  }, [props.type]);

  const showPicker = React.useMemo(() => {
    return (
      props.type &&
      ['date', 'time', 'datetime', 'month', 'week'].includes(props.type)
    );
  }, [props.type]);

  const showClearBtn = React.useMemo(() => {
    return clearable && (value || defaultValue) && !props.disabled;
  }, [clearable, value, defaultValue, props.disabled]);

  function mutation(v: string) {
    switch (props.type) {
      case 'number':
        return Number(v) as unknown as T;
      default:
        return v as unknown as T;
    }
  }

  function handleChange(v: string) {
    if (props.disabled) return;

    const value = mutation(v);
    if (onChange) {
      onChange(value);
    }
    if (onLazyChange) {
      lazyInput(() => onLazyChange(value));
    }
  }

  function handlePicker() {
    if (inputRef.current) {
      if (onShowPicker) {
        onShowPicker(inputRef.current);
      } else {
        inputRef.current['showPicker']?.();
      }
    }
  }

  function handleClear() {
    handleChange('');
    updateInputValue(inputRef.current, '');
    onClear?.();
  }

  function handleScroll(e: React.UIEvent<HTMLInputElement, UIEvent>) {
    if (props.type === 'number') {
      if (e.cancelable) {
        e.preventDefault();
      }
      if (e.target['blur']) {
        e.target['blur']();
      }
    }
  }

  React.useEffect(() => {
    updateInputValue(inputRef.current, defaultValue);
  }, [inputRef.current, defaultValue]);

  React.useEffect(() => {
    updateInputValue(inputRef.current, value);
  }, [inputRef.current, value]);

  React.useImperativeHandle<HubTextFieldRef, HubTextFieldRef>(
    ref,
    () => ({
      showPicker: handlePicker,
      clear: handleClear,
      inputRef
    }),
    []
  );

  return (
    <TextFieldStyle {...props} wrap={wrap} ref={containerRef}>
      {children && (
        <TextFieldLabelStyle htmlFor={inputId}>
          {children}
          {props.required && <TextFieldRequiredStyle>*</TextFieldRequiredStyle>}
        </TextFieldLabelStyle>
      )}
      <TextFieldInnerStyle noGap={noGap}>
        <>
          {left}
          {element ? (
            element
          ) : mask ? (
            <TextFieldInputMaskStyle
              {...props}
              data-testid={factoryTestId(props, 'input')}
              id={inputId}
              className={className}
              ref={inputRef as never}
              mask={mask}
              type={type}
              autoComplete={autocomplete || 'off'}
              formatChars={formatChars}
              alwaysShowMask={!noShowMask}
              value={value as never}
              title={
                (title || value || defaultValue || props.placeholder) as never
              }
              onChange={(e) => handleChange(e.target.value)}
              onFocus={() => onFocus?.(inputRef.current as never)}
              onClick={onClick}
            />
          ) : props.type === 'area' ? (
            <TextFieldTextAreaStyle
              {...props}
              data-testid={factoryTestId(props, 'input')}
              id={inputId}
              className={className}
              ref={inputRef as never}
              autoComplete={autocomplete || 'off'}
              value={value as never}
              title={
                (title || value || defaultValue || props.placeholder) as never
              }
              onChange={(e) => handleChange(e.target.value)}
              onFocus={() => onFocus?.(inputRef.current as never)}
              onClick={onClick}
            />
          ) : (
            <TextFieldInputStyle
              {...props}
              data-testid={factoryTestId(props, 'input')}
              id={inputId}
              className={className}
              ref={inputRef as never}
              type={type as never}
              autoComplete={autocomplete || 'off'}
              value={value as never}
              title={
                (title || value || defaultValue || props.placeholder) as never
              }
              onWheel={handleScroll}
              onChange={(e) => handleChange(e.target.value)}
              onFocus={() => onFocus?.(inputRef.current as never)}
              onClick={onClick}
            />
          )}
          {after}
          {(loading || showClearBtn || showPicker || right) && (
            <TextFieldSpacer />
          )}
          {loading ? (
            <TextFieldLoadingStyle />
          ) : (
            <>
              {showClearBtn ? (
                <TextFieldIconBtn
                  data-testid={factoryTestId(props, 'clear')}
                  type="button"
                  onClick={handleClear}
                >
                  <IconClose />
                </TextFieldIconBtn>
              ) : (
                right
              )}
              {showPicker && (
                <TextFieldIconBtn
                  data-testid={factoryTestId(props, 'picker')}
                  type="button"
                  disabled={props.disabled}
                  onClick={handlePicker}
                >
                  <IconCalendar />
                </TextFieldIconBtn>
              )}
            </>
          )}
        </>
      </TextFieldInnerStyle>
      {bottom}
      {(hint || props.error) && (
        <TextFieldHintStyle>{hint || props.error}</TextFieldHintStyle>
      )}
    </TextFieldStyle>
  );
}

export const HubTextField = React.forwardRef(HubTextFieldInner) as <
  T = unknown
>(
  props: HubTextFieldProps<T> & { ref?: React.ForwardedRef<HubTextFieldRef> }
) => ReturnType<typeof HubTextFieldInner>;
