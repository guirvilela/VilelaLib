import {
  HubButton,
  HubCalendar,
  HubCard,
  HubIcon,
  HubPopover,
  HubSource,
  HubTextField
} from '@hubert/atoms';
import { useI18nFormatter } from '@hubert/i18n';
import {
  ISODate,
  capitalizedCase,
  dateISO,
  factoryTestId,
  isDate
} from '@hubert/shared';
import IconOutlineCalendar from '@hubert/styles/lib/icons/icon-outline-calendar.svg';
import React from 'react';

import { HubDateProps } from './types';

export type { HubDateProps };

export function HubDate({
  id,
  editable = true,

  width,
  height,
  onClose,

  placeholder,
  readOnly,
  required,
  loading,
  wrap,
  clearable,
  inputTypo,
  color,
  colorLevel,
  borderColor,
  borderColorLevel,
  bgColor,
  bgColorLevel,
  error,
  onClear,
  onClick,
  onFocus,
  left,
  right,
  bottom,
  hint,

  range,
  size,
  typo,
  withActions,

  value,
  onChange,
  children,

  ...props
}: HubDateProps) {
  const f = useI18nFormatter();

  const ref = React.useRef<HTMLDivElement>();

  const [opened, setOpened] = React.useState<HubSource>();

  const label = React.useMemo(() => {
    if (!value?.[0]) return '';
    if (props.mandatoryMode && props.initialMode === 'months') {
      return capitalizedCase(f.longMonthYearFormatter(value?.[0]));
    }
    if (props.mandatoryMode && props.initialMode === 'years') {
      return f.yearFormatter(value?.[0]);
    }
    if (range) {
      return `${f.dateFormatter(value?.[0])} - ${f.dateFormatter(value?.[1])}`;
    }
    return f.dateFormatter(value?.[0]);
  }, [range, value]);

  const disabled = React.useMemo(() => {
    return Array.isArray(props.disabled)
      ? props.disabled.some((d) => value?.includes(d))
      : props.disabled === true;
  }, [props.disabled, value]);

  function handleClose() {
    setOpened(undefined);
    onClose?.();
  }

  function handleChange(v: ISODate[]) {
    if (v && (range ? v[0] && v[1] : v[0])) {
      setOpened(undefined);
    }
    onChange?.(v);
  }

  function handleInputChange(v?: string) {
    if (!editable) return;

    if (!v) {
      onChange?.([]);
    } else {
      const dts = String(v).trim();
      if (range) {
        const dates = [
          dts.substring(0, 10),
          dts.substring(dts.length - 10, dts.length)
        ];
        if (isDate(dates[0]) && isDate(dates[1])) {
          onChange?.([dateISO(dates[0]), dateISO(dates[1])]);
        }
      } else {
        if (isDate(dts)) {
          onChange?.([dateISO(dts)]);
        }
      }
    }
  }

  function handleClick(e: HubSource) {
    setOpened(e);
    onClick?.();
  }

  return (
    <>
      <HubPopover
        data-testid={factoryTestId(props, 'popover')}
        source={opened}
        onClose={handleClose}
        width={width || '270px'}
        height={height || '316px'}
        content={
          <HubCard pad={['2', '3', '1', '3']} borderless>
            <HubCalendar
              {...props}
              range={range}
              size={size || 'md'}
              typo={typo || 'body2'}
              value={value}
              onChange={handleChange}
              withActions={withActions === undefined ? true : withActions}
            />
          </HubCard>
        }
      />
      <HubTextField
        id={`hub-date-${id}`}
        data-testid={factoryTestId(props, 'input')}
        readOnly={props.mandatoryMode || readOnly}
        typo={inputTypo}
        color={color}
        colorLevel={colorLevel}
        borderColor={borderColor}
        borderColorLevel={borderColorLevel}
        bgColor={bgColor}
        bgColorLevel={bgColorLevel}
        placeholder={placeholder}
        required={required}
        loading={loading}
        clearable={clearable}
        wrap={wrap}
        disabled={disabled}
        defaultValue={label as never}
        error={error}
        left={left}
        right={
          right || (
            <HubButton
              ref={ref}
              data-testid={factoryTestId(props, 'picker')}
              variant="icon"
              onClick={handleClick}
            >
              <HubIcon icon={IconOutlineCalendar} />
            </HubButton>
          )
        }
        bottom={bottom}
        hint={hint}
        onLazyChange={handleInputChange}
        onClick={!editable ? handleClick : undefined}
        onClear={onClear}
        onFocus={onFocus}
      >
        {children}
      </HubTextField>
    </>
  );
}
