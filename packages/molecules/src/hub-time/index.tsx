import { HubButton, HubGrid, HubIcon, HubTextField } from '@hubert/atoms';
import { useI18nFormatter } from '@hubert/i18n';
import {
  dateISO,
  debounce,
  factoryTestId,
  parseDate,
  setISO,
  timeISO
} from '@hubert/shared';
import IconOutlineDownArrow from '@hubert/styles/lib/icons/icon-outline-down-arrow.svg';
import IconOutlineUpArrow from '@hubert/styles/lib/icons/icon-outline-up-arrow.svg';
import React from 'react';
import { HubTimeProps } from './types';

export type { HubTimeProps };

const lazyDigitavel = debounce(1000);
const lazyUpDown = debounce(500);

function factoryDate(time?: string) {
  if (!time) return '';
  return `${dateISO(new Date())}T${time}`;
}

export function HubTime({
  id,
  value,
  onChange,
  children,
  ...props
}: HubTimeProps) {
  const f = useI18nFormatter();

  const [source, setSource] = React.useState(factoryDate(value));

  const label = React.useMemo(
    () => (source ? f.hourFormatter(source) : ''),
    [source]
  );

  const handleChange = React.useCallback(
    (v: string) => {
      lazyDigitavel(() => {
        if (!v) {
          setSource('');
          onChange?.('');
          return;
        }

        try {
          let [h, m] = v.split(':');

          if (!m) {
            m = h.substring(h.length - 2, h.length);
            h = h.substring(h.length - 4, h.length - 2);
            if (!h) {
              h = m;
              m = '0';
            }
          }

          let hour = Number(h),
            min = Number(m);

          if (hour > 23) {
            min = hour;
            hour = 0;
          }
          if (min > 59) {
            min = 0;
          }

          if (hour >= 0 && hour <= 23) {
            if (min >= 0 && min <= 59) {
              const date = setISO(source, { hour, min, sec: 0 });
              setSource(date);
              onChange?.(timeISO(date));
              return;
            }
          }
        } catch {
          //
        }
        setSource(factoryDate(value));
      });
    },
    [source, value, onChange]
  );

  const handleUp = React.useCallback(() => {
    try {
      const parsed = parseDate(source);
      const hour = parsed.getHours(),
        min = parsed.getMinutes();

      let date = '';

      if (min === 59) {
        date = setISO(source, { hour: hour + 1, min: 0, sec: 0 });
      } else if (min >= 0 && min <= 14) {
        date = setISO(source, { hour, min: 15, sec: 0 });
      } else if (min >= 15 && min <= 29) {
        date = setISO(source, { hour, min: 30, sec: 0 });
      } else if (min >= 30 && min <= 44) {
        date = setISO(source, { hour, min: 45, sec: 0 });
      } else {
        date = setISO(source, { hour, min: 59, sec: 0 });
      }

      setSource(date);
      lazyUpDown(() => onChange?.(timeISO(date)));
    } catch {
      //
    }
  }, [source, onChange]);

  const handleDown = React.useCallback(() => {
    try {
      const parsed = parseDate(source);
      const hour = parsed.getHours(),
        min = parsed.getMinutes();

      let date = '';

      if (min === 0) {
        date = setISO(source, { hour: hour - 1, min: 59, sec: 0 });
      } else if (min <= 59 && min >= 46) {
        date = setISO(source, { hour, min: 45, sec: 0 });
      } else if (min <= 45 && min >= 31) {
        date = setISO(source, { hour, min: 30, sec: 0 });
      } else if (min <= 30 && min >= 16) {
        date = setISO(source, { hour, min: 15, sec: 0 });
      } else {
        date = setISO(source, { hour, min: 0, sec: 0 });
      }

      setSource(date);
      lazyUpDown(() => onChange?.(timeISO(date)));
    } catch {
      //
    }
  }, [source, onChange]);

  React.useEffect(() => {
    setSource(factoryDate(value));
  }, [value]);

  return (
    <HubTextField
      {...props}
      id={`hub-time-${id}`}
      defaultValue={label}
      onChange={handleChange}
      right={
        <HubGrid width="auto">
          <HubButton
            variant="action"
            data-testid={factoryTestId(props, 'up')}
            onClick={handleUp}
          >
            <HubIcon icon={IconOutlineUpArrow} size="sm" />
          </HubButton>
          <HubButton
            variant="action"
            data-testid={factoryTestId(props, 'down')}
            onClick={handleDown}
          >
            <HubIcon icon={IconOutlineDownArrow} size="sm" />
          </HubButton>
        </HubGrid>
      }
      pad={['1', '2']}
    >
      {children}
    </HubTextField>
  );
}
