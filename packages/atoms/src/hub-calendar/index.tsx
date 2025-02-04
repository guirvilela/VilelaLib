import { useI18nFormatter, useI18nMessage } from '@hubert/i18n';
import {
  ISODate,
  array,
  capitalizedCase,
  dateISO,
  factoryTestId,
  isDateEqual,
  monthISO,
  parseDate
} from '@hubert/shared';
import React from 'react';
import IconNext from './icon-next';
import {
  CalendarActionsStyle,
  CalendarDayStyle,
  CalendarDaysStyle,
  CalendarHeadLinkStyle,
  CalendarHeadNextStyle,
  CalendarHeadPrevStyle,
  CalendarHeadStyle,
  CalendarHeadTitleStyle,
  CalendarMonthYearStyle,
  CalendarMonthsStyle,
  CalendarPeriodStyle,
  CalendarStyle,
  CalendarTodayStyle,
  CalendarYearsStyle
} from './styles';
import {
  HubCalendarEvent,
  HubCalendarItem,
  HubCalendarMode,
  HubCalendarProps
} from './types';

export type { HubCalendarEvent, HubCalendarMode, HubCalendarProps };

function parseValueDate(v?: ISODate[]) {
  if (!v) return [];
  if (v[0] && v[1]) return [parseDate(v[0]), parseDate(v[1])];
  if (v[0]) return [parseDate(v[0])];
  return [];
}

function isDisabled(
  current: ISODate,
  v?: boolean | ISODate[] | ((date: ISODate) => boolean),
  min?: ISODate,
  max?: ISODate
) {
  if (Array.isArray(v)) {
    return v.some((d) => current === d);
  }
  if (typeof v === 'function') {
    return v(current);
  }
  if (v === true) {
    return v;
  }
  if (min && max) {
    return current < min || current > max;
  }
  if (min) {
    return current < min;
  }
  if (max) {
    return current > max;
  }
  return false;
}

function getEvent(
  current: ISODate,
  v?: HubCalendarEvent[] | ((date: ISODate) => HubCalendarEvent)
) {
  return Array.isArray(v)
    ? v.find((x) => x.date === current)
    : typeof v === 'function'
    ? v(current)
    : undefined;
}

function HubCalendarInner(
  {
    range,
    headless,
    initialMode,
    mandatoryMode,
    disabled: disabledAll,
    events,
    previousDisabled,
    nextDisabled,
    min,
    max,
    value,
    onChange,
    onCalendarChange,
    withActions,
    children,
    ...props
  }: HubCalendarProps,
  ref
) {
  const t = useI18nMessage();
  const f = useI18nFormatter();

  const [currentDate, setCurrentDate] = React.useState(parseDate(value?.[0]));
  const [hoverDate, setHoverDate] = React.useState<Date>();

  const [source, setSource] = React.useState<Date[]>(parseValueDate(value));
  const [mode, setMode] = React.useState<HubCalendarMode>(
    initialMode || 'days'
  );

  const hasHoverEffect = React.useMemo(
    () => range && source[0] && !source[1],
    [range, source]
  );

  const days = React.useMemo<HubCalendarItem[]>(() => {
    const lastDayPrevious = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    const firstDayCurrent = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDayCurrent = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const firstDayNext = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );

    const firstPeriodDay = firstDayCurrent.getDay() + 1;
    const lastPeriodDay = lastDayCurrent.getDay() + 1;

    const daysPrevious = array(firstPeriodDay - 1, 0)
      .map((_, i) => {
        const date = new Date(
          lastDayPrevious.getFullYear(),
          lastDayPrevious.getMonth(),
          lastDayPrevious.getDate() - i
        );
        const disabled = isDisabled(dateISO(date), disabledAll, min, max);
        const event = getEvent(dateISO(date), events);
        const active = hasHoverEffect
          ? date > source[0] && hoverDate && date <= hoverDate
          : date > source[0] && source[1] && date < source[1];
        return {
          previous: true,
          selected:
            isDateEqual(source[0], date) || isDateEqual(source[1], date),
          active,
          today: isDateEqual(new Date(), date),
          label: date.getDate(),
          date,
          disabled,
          event
        };
      })
      .reverse();

    const daysCurrent = array(lastDayCurrent.getDate(), 1, true).map((day) => {
      const date = new Date(
        lastDayCurrent.getFullYear(),
        lastDayCurrent.getMonth(),
        day
      );
      const disabled = isDisabled(dateISO(date), disabledAll, min, max);
      const event = getEvent(dateISO(date), events);
      const active = hasHoverEffect
        ? date > source[0] && hoverDate && date <= hoverDate
        : date > source[0] && source[1] && date < source[1];
      return {
        selected: isDateEqual(source[0], date) || isDateEqual(source[1], date),
        active,
        today: isDateEqual(new Date(), date),
        label: day,
        date,
        disabled,
        event
      };
    });

    const daysNext = array(7 - lastPeriodDay, 1, true).map((day) => {
      const date = new Date(
        firstDayNext.getFullYear(),
        firstDayNext.getMonth(),
        day
      );
      const disabled = isDisabled(dateISO(date), disabledAll, min, max);
      const event = getEvent(dateISO(date), events);
      const active = hasHoverEffect
        ? date > source[0] && hoverDate && date <= hoverDate
        : date > source[0] && source[1] && date < source[1];
      return {
        next: true,
        selected: isDateEqual(source[0], date) || isDateEqual(source[1], date),
        active,
        today: isDateEqual(new Date(), date),
        label: day,
        date,
        disabled,
        event
      };
    });

    return [...daysPrevious, ...daysCurrent, ...daysNext];
  }, [currentDate, source, hoverDate, range, min, max, disabledAll]);

  const months = React.useMemo<HubCalendarItem[]>(() => {
    return array(12, 0, true).map((x) => {
      const date = new Date(
        currentDate.getFullYear(),
        x - 1,
        min || max ? parseDate(min || max).getDate() : 1
      );
      const disabled = isDisabled(dateISO(date), disabledAll, min, max);
      return {
        label: t(`hub-calendar_month-${x}`),
        date,
        selected: source[0] && monthISO(source[0]) === monthISO(date),
        disabled
      };
    });
  }, [currentDate, source, min, max, disabledAll]);

  const years = React.useMemo<HubCalendarItem[]>(() => {
    return [-2, -1, 0, 1, 2, 3].map((x) => {
      const date = new Date(
        currentDate.getFullYear() + x,
        currentDate.getMonth(),
        min || max ? parseDate(min || max).getDate() : 1
      );

      const disabled = isDisabled(dateISO(date), disabledAll, min, max);
      return {
        label: date.getFullYear(),
        date,
        selected: source[0] && source[0].getFullYear() === date.getFullYear(),
        disabled
      };
    });
  }, [currentDate, source, min, max, disabledAll]);

  const todayIsDisable = React.useMemo(() => {
    const date = new Date();
    return isDisabled(dateISO(date), disabledAll, min, max);
  }, [min, max, disabledAll]);

  function handleChangeMonth(amount: number) {
    const date = new Date(
      currentDate.getFullYear() + (mode !== 'days' ? amount : 0),
      currentDate.getMonth() + (mode === 'days' ? amount : 0),
      1
    );
    handleCurrentDate(date);
  }

  function handlePrevious() {
    handleChangeMonth(-1);
  }

  function handleNext() {
    handleChangeMonth(1);
  }

  function handleClickDay(v: HubCalendarItem) {
    if (v.disabled) return;

    if (v.previous || v.next) {
      handleCurrentDate(v.date);
    }

    if (range) {
      if (v.date === source[0]) {
        setSource([source[0], v.date]);
        onChange?.([dateISO(source[0]), dateISO(v.date)]);
      }
      if (!source[0] || source[1]) {
        setSource([v.date]);
        onChange?.([dateISO(v.date)]);
      } else {
        setSource(
          v.date < source[0] ? [v.date, source[0]] : [source[0], v.date]
        );
        onChange?.(
          v.date < source[0]
            ? [dateISO(v.date), dateISO(source[0])]
            : [dateISO(source[0]), dateISO(v.date)]
        );
      }
    } else {
      setSource([v.date]);
      onChange?.([dateISO(v.date)]);
    }
  }

  function handleClickMonth(v: HubCalendarItem) {
    if (mandatoryMode) {
      if (initialMode === 'days') {
        setMode('days');
      }
      if (initialMode === mode) {
        handleClickDay({ ...v, date: v.date });
      } else {
        handleCurrentDate(v.date);
      }
    } else {
      handleCurrentDate(v.date);
      setMode('days');
    }
  }

  function handleClickYear(v: HubCalendarItem) {
    if (mandatoryMode) {
      if (initialMode === 'days' || initialMode === 'months') {
        setMode('months');
      }
      if (initialMode === mode) {
        handleClickDay({ ...v, date: v.date });
      } else {
        handleCurrentDate(v.date);
      }
    } else {
      handleCurrentDate(v.date);
      setMode('months');
    }
  }

  function handleToday() {
    const date = new Date();

    handleCurrentDate(date);

    handleClickDay({
      today: true,
      label: 0,
      date,
      disabled: todayIsDisable
    });
  }

  function handleCurrentDate(v: Date) {
    setCurrentDate(v);
    onCalendarChange?.(dateISO(v));
  }

  React.useEffect(() => {
    if (value) {
      const date = parseValueDate(value);
      if (
        (source[0] && date[0] && source[0] !== date[0]) ||
        (source[1] && date[1] && source[1] !== date[1])
      ) {
        setSource(date);
      }
      if (currentDate && date[0] && currentDate !== date[0]) {
        setCurrentDate(date[0]);
      }
    }
  }, [value]);

  return (
    <CalendarStyle {...props} ref={ref}>
      {!headless && (
        <CalendarHeadStyle>
          <CalendarHeadPrevStyle
            data-testid={factoryTestId(props, 'previous')}
            type="button"
            disabled={previousDisabled}
            onClick={handlePrevious}
          >
            <IconNext />
          </CalendarHeadPrevStyle>
          <CalendarHeadTitleStyle>
            {mode === 'days' && (
              <>
                <CalendarHeadLinkStyle
                  data-testid={factoryTestId(props, 'head-month')}
                  type="button"
                  onClick={() => setMode('months')}
                >
                  {capitalizedCase(f.longMonthFormatter(currentDate))}
                </CalendarHeadLinkStyle>
                <CalendarHeadLinkStyle
                  data-testid={factoryTestId(props, 'head-year')}
                  type="button"
                  onClick={() => setMode('years')}
                >
                  {f.yearFormatter(currentDate)}
                </CalendarHeadLinkStyle>
              </>
            )}
            {(mode === 'months' || (mode === 'years' && mandatoryMode)) && (
              <>
                {!mandatoryMode && (
                  <CalendarHeadLinkStyle
                    data-testid={factoryTestId(props, 'head-day')}
                    type="button"
                    onClick={() => setMode('days')}
                  >
                    {f.dateMonthFormatter(currentDate)}
                  </CalendarHeadLinkStyle>
                )}
                <CalendarHeadLinkStyle
                  data-testid={factoryTestId(props, 'head-year')}
                  type="button"
                  onClick={() => setMode('years')}
                >
                  {f.yearFormatter(currentDate)}
                </CalendarHeadLinkStyle>
              </>
            )}
            {mode === 'years' && !mandatoryMode && (
              <>
                <CalendarHeadLinkStyle
                  data-testid={factoryTestId(props, 'head-day')}
                  type="button"
                  onClick={() => setMode('days')}
                >
                  {f.customDateFormatter({ day: '2-digit' })(currentDate)}
                </CalendarHeadLinkStyle>
                <CalendarHeadLinkStyle
                  data-testid={factoryTestId(props, 'head-month')}
                  type="button"
                  onClick={() => setMode('months')}
                >
                  {capitalizedCase(f.longMonthFormatter(currentDate))}
                </CalendarHeadLinkStyle>
              </>
            )}
          </CalendarHeadTitleStyle>
          <CalendarHeadNextStyle
            data-testid={factoryTestId(props, 'next')}
            type="button"
            disabled={nextDisabled}
            onClick={handleNext}
          >
            <IconNext />
          </CalendarHeadNextStyle>
        </CalendarHeadStyle>
      )}
      {mode === 'days' ? (
        <CalendarDaysStyle>
          {array(7, 0, true).map((x, i) => (
            <CalendarPeriodStyle key={`hub-calendar-period-${i}`}>
              {t(`hub-calendar_period-${x}`)}
            </CalendarPeriodStyle>
          ))}
          {days.map((day, i) => (
            <CalendarDayStyle
              key={`hub-calendar-day-${i}`}
              {...day}
              data-testid={factoryTestId(props, `day-${day.label}`)}
              type="button"
              title={
                day.today && day.event?.reason
                  ? `${t('hub-calendar_today')}\n\n${day.event?.reason}`
                  : day.today
                  ? t('hub-calendar_today')
                  : day.event?.reason
              }
              onMouseOver={() => hasHoverEffect && setHoverDate(day.date)}
              onMouseOut={() => hasHoverEffect && setHoverDate(undefined)}
              onClick={() => handleClickDay(day)}
            >
              {day.label}
            </CalendarDayStyle>
          ))}
        </CalendarDaysStyle>
      ) : mode === 'months' ? (
        <CalendarMonthsStyle>
          {months.map((month, i) => (
            <CalendarMonthYearStyle
              key={`hub-calendar-month-${i}`}
              {...month}
              data-testid={factoryTestId(props, `month-${month.label}`)}
              type="button"
              active={!month.disabled}
              disabled={false}
              onClick={() => handleClickMonth(month)}
            >
              {month.label}
            </CalendarMonthYearStyle>
          ))}
        </CalendarMonthsStyle>
      ) : (
        <CalendarYearsStyle>
          {years.map((year, i) => (
            <CalendarMonthYearStyle
              key={`hub-calendar-year-${i}`}
              {...year}
              data-testid={factoryTestId(props, `year-${year.label}`)}
              type="button"
              active={!year.disabled}
              disabled={false}
              onClick={() => handleClickYear(year)}
            >
              {year.label}
            </CalendarMonthYearStyle>
          ))}
        </CalendarYearsStyle>
      )}
      {(withActions || children) && (
        <CalendarActionsStyle>
          {withActions && (
            <CalendarTodayStyle
              data-testid={factoryTestId(props, 'today')}
              type="button"
              disabled={todayIsDisable}
              onClick={handleToday}
            >
              {t('hub-calendar_today')}
            </CalendarTodayStyle>
          )}
          {children}
        </CalendarActionsStyle>
      )}
    </CalendarStyle>
  );
}

export const HubCalendar = React.forwardRef(HubCalendarInner) as (
  props: HubCalendarProps & { ref?: React.ForwardedRef<unknown> }
) => ReturnType<typeof HubCalendarInner>;
