import { ISODate } from '../types';
import { zeroTwoDigits } from './number';
import { numberFormatter } from './string';

/**
 * Return true if is valid date
 * @param date ISODate | Date | String (locale format)
 * @return Boolean
 */
export function isDate(v?: ISODate | Date) {
  if (!v) return false;

  if (v instanceof Date) {
    return true;
  }
  if (typeof v !== 'string') {
    return false;
  }

  const dateStr = v.split('T')[0];
  const numbers = numberFormatter(dateStr);
  if (numbers.length === 8) {
    try {
      let day = numbers.substring(6, 8);
      let month = numbers.substring(4, 6);
      let year = numbers.substring(0, 4);
      if (dateStr[2] === '/' || dateStr[2] === '-') {
        day = numbers.substring(0, 2);
        month = numbers.substring(2, 4);
        year = numbers.substring(4);
      }
      return !!new Date(Number(day), Number(month), Number(year));
    } catch {
      // nothing
    }
  }
  return false;
}

/**
 * Return true if is empty date
 * @param date ISODate | Date
 * @return Boolean
 */
export function isDateEmpty(date?: ISODate | Date) {
  if (!date) return true;
  if (date instanceof Date) {
    return false;
  }
  if (typeof date !== 'string') {
    return true;
  }
  if (date.includes('0001-01-01')) {
    return true;
  }
  return false;
}

interface SetDateValues {
  day?: number;
  month?: number;
  year?: number;
  hour?: number;
  min?: number;
  sec?: number;
}

/**
 * Set values in date
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
export function setDate(
  v: ISODate | Date,
  values: SetDateValues,
  add?: boolean
) {
  let date = v;
  if (typeof date === 'string') date = parseISO(date);
  if (typeof values.day === 'number')
    date.setDate(add ? date.getDate() + values.day : values.day);
  if (typeof values.month === 'number')
    date.setMonth(add ? date.getMonth() + values.month : values.month - 1);
  if (typeof values.year === 'number')
    date.setFullYear(add ? date.getFullYear() + values.year : values.year);
  if (typeof values.hour === 'number')
    date.setHours(add ? date.getHours() + values.hour : values.hour);
  if (typeof values.min === 'number')
    date.setMinutes(add ? date.getMinutes() + values.min : values.min);
  if (typeof values.sec === 'number')
    date.setSeconds(add ? date.getSeconds() + values.sec : values.sec);
  return date;
}

/**
 * Set values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
export function setISO(
  date: ISODate | Date,
  values: SetDateValues,
  add?: boolean
) {
  return formatISO(setDate(date, values, add));
}

/**
 * Set values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
export function setDateISO(
  date: ISODate | Date,
  values: SetDateValues,
  add?: boolean
) {
  return dateISO(setDate(date, values, add));
}

/**
 * Set values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
export function setTimeISO(
  date: ISODate | Date,
  values: SetDateValues,
  add?: boolean
) {
  return timeISO(setDate(date, values, add));
}

interface AddDateValues {
  days?: number;
  months?: number;
  years?: number;
  hours?: number;
  mins?: number;
  secs?: number;
}

/**
 * Add values in date
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
export function addDate(date: ISODate | Date, values: AddDateValues) {
  return setDate(
    date,
    {
      day: values.days,
      month: values.months,
      year: values.years,
      hour: values.hours,
      min: values.mins,
      sec: values.secs
    },
    true
  );
}

/**
 * Add values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
export function addISO(date: ISODate | Date, values: AddDateValues) {
  return formatISO(addDate(date, values));
}

/**
 * Add values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
export function addDateISO(date: ISODate | Date, values: AddDateValues) {
  return dateISO(addDate(date, values));
}

/**
 * Add values in time ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
export function addTimeISO(date: ISODate | Date, values: AddDateValues) {
  return timeISO(addDate(date, values));
}

/**
 * Parse date from iso date string
 * @param date ISODate | Date
 * @return Date
 */
export function parseISO(date?: ISODate | Date) {
  if (date && date instanceof Date) return date;
  const iso = formatISO(date);
  if (iso) {
    return new Date(iso);
  }
  return new Date();
}

/**
 * Parse date from iso or date
 * @param date ISODate | Date
 * @return Date
 */
export function parseDate(date?: ISODate | Date) {
  return parseISO(date);
}

/**
 * Create or parse date
 * @param date ISODate | Date
 * @return Date
 */
export function date(date?: ISODate | Date) {
  return parseDate(date);
}

/**
 * Return iso date from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
export function formatISO(date?: ISODate | Date): ISODate {
  if (!date) {
    return '';
  }

  if (date instanceof Date) {
    const year = date.getFullYear(),
      month = zeroTwoDigits(date.getMonth() + 1),
      day = zeroTwoDigits(date.getDate()),
      hours = zeroTwoDigits(date.getHours()),
      mins = zeroTwoDigits(date.getMinutes()),
      secs = zeroTwoDigits(date.getSeconds());
    return `${year}-${month}-${day}T${hours}:${mins}:${secs}`;
  }

  if (typeof date !== 'string') {
    return '';
  }

  if (date.includes('0001-01-01')) {
    return '';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dateStr, _, timeStr] = String(date).split(/(T|\s)/);

  if (!dateStr) {
    return '';
  }

  const numbers = numberFormatter(dateStr);
  let part1 = numbers.substring(6, 8);
  let part2 = numbers.substring(4, 6);
  let part3 = numbers.substring(0, 4);
  if (dateStr[2] === '/' || dateStr[2] === '-') {
    part1 = numbers.substring(0, 2);
    part2 = numbers.substring(2, 4);
    part3 = numbers.substring(4, 8);
  }

  if (!timeStr) {
    return `${part3}-${part2}-${part1}T12:00:00`;
  }
  if (timeStr.length === 5) {
    return `${part3}-${part2}-${part1}T${timeStr}:00`;
  }
  if (timeStr.length > 8) {
    return `${part3}-${part2}-${part1}T${timeStr.substring(0, 8)}`;
  }

  return `${part3}-${part2}-${part1}T${timeStr}`;
}

/**
 * Return only date in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
export function dateISO(date?: ISODate | Date): ISODate {
  return formatISO(date).split('T')[0];
}

/**
 * Return only year and month in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
export function monthISO(date?: ISODate | Date): ISODate {
  return dateISO(date).substring(0, 7);
}

/**
 * Return only year and week number in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
export function weekISO(date?: ISODate | Date): ISODate {
  const x = parseISO(date);
  const onejan = setDate(x, { day: 0, month: 1 });
  const year = x.getFullYear();
  const week = Math.ceil(
    ((x.valueOf() - onejan.valueOf()) / 86400000 + onejan.getDay() + 1) / 7
  );
  return `${year}-W${zeroTwoDigits(week)}`;
}

/**
 * Return time number in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
export function timeISO(date?: ISODate | Date): ISODate {
  return formatISO(date).split('T')[1];
}

/**
 * Return true if date A equal B
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
export function isDateEqual(a?: ISODate | Date, b?: ISODate | Date) {
  return dateISO(a) === dateISO(b);
}

/**
 * Return difference of days between dates
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
export function daysDiff(a: ISODate | Date, b: ISODate | Date) {
  const date1 = new Date(a);
  const date2 = new Date(b);
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Return difference of months between dates
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
export function monthsDiff(a: ISODate | Date, b: ISODate | Date) {
  let months = 0;
  const date1 = new Date(a);
  const date2 = new Date(b);

  months = (date2.getFullYear() - date1.getFullYear()) * 12;
  months -= date1.getMonth();
  months += date2.getMonth();
  return months <= 0 ? 0 : months;
}

/**
 * Return difference of years between dates
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
export function yearsDiff(a: ISODate | Date, b: ISODate | Date) {
  const date1 = new Date(a);
  const date2 = new Date(b);

  return date2.getFullYear() - date1.getFullYear();
}
