import {
  addDate,
  cnpjValidator,
  cpfValidator,
  daysDiff,
  formatISO,
  monthsDiff,
  yearsDiff
} from './utils';

describe('DATE utils', () => {
  it('formatISO new date', () => {
    expect(formatISO(new Date())).toBe('1970-01-01T12:00:00');
  });
  it('formatISO null date', () => {
    expect(formatISO('0001-01-01')).toBe('');
  });
  it('daysDiff', () => {
    expect(daysDiff(new Date(), addDate(new Date(), { days: 3 }))).toBe(3);
  });
  it('monthsDiff', () => {
    expect(monthsDiff(new Date(), addDate(new Date(), { months: 3 }))).toBe(3);
  });
  it('yearsDiff', () => {
    expect(yearsDiff(new Date(), addDate(new Date(), { years: 3 }))).toBe(3);
  });
});

describe('Brazil utils', () => {
  it('cpf validator return true', () => {
    expect(cpfValidator('374.042.630-69')).toBe(true);
  });
  it('cnpj validator return true', () => {
    expect(cnpjValidator('72.315.962/0001-40')).toBe(true);
  });
  it('cpf validator return false', () => {
    expect(cpfValidator('123.321.123-32')).toBe(false);
  });
  it('cnpj validator return false', () => {
    expect(cnpjValidator('12.321.123/3212-31')).toBe(false);
  });
});
