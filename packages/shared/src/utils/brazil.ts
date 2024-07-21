import { getLocales } from './browser';
import { alphaNumFormatter, numberFormatter } from './string';

const CPF_BLACKLIST = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
  '12345678909'
];

const CNPJ_BLACKLIST = [
  '00000000000000',
  '11111111111111',
  '22222222222222',
  '33333333333333',
  '44444444444444',
  '55555555555555',
  '66666666666666',
  '77777777777777',
  '88888888888888',
  '99999999999999'
];

const CEP_BLACKLIST = [
  '00000000',
  '11111111',
  '22222222',
  '33333333',
  '44444444',
  '55555555',
  '66666666',
  '77777777',
  '88888888',
  '99999999',
  '12345678'
];

function cpfCheckDigits(digits: string) {
  const numbers: Array<number> = digits.split('').map((number) => {
    return parseInt(number, 10);
  });

  const modulus = numbers.length + 1;
  const multiplied: Array<number> = numbers.map(
    (number, index) => number * (modulus - index)
  );
  const mod = multiplied.reduce((buffer, number) => buffer + number) % 11;

  return mod < 2 ? 0 : 11 - mod;
}

function cnpjCheckDigits(digits: string) {
  let index = 2;
  const reverse = digits.split('').reduce((buffer, number) => {
    return [parseInt(number, 10)].concat(buffer);
  }, [] as Array<number>);

  const sum = reverse.reduce((buffer, number) => {
    buffer += number * index;
    index = index === 9 ? 2 : index + 1;
    return buffer;
  }, 0);

  const mod = sum % 11;
  return mod < 2 ? 0 : 11 - mod;
}

/**
 * CPF number validator
 * @param number String
 * @return Boolean
 */
export function cpfValidator(number: string) {
  const nums = numberFormatter(number);

  // CPF must be defined
  if (!nums) {
    return false;
  }

  // CPF must have 11 chars
  if (nums.length !== 11) {
    return false;
  }

  // CPF can't be blacklisted
  if (CPF_BLACKLIST.includes(nums)) {
    return false;
  }

  let numbers = nums.substr(0, 9);
  numbers += cpfCheckDigits(numbers);
  numbers += cpfCheckDigits(numbers);

  return numbers.substr(-2) === nums.substr(-2);
}

/**
 * CNPJ number validator
 * @param number String
 * @return Boolean
 */
export function cnpjValidator(number: string) {
  const nums = numberFormatter(number);

  // CNPJ must be defined
  if (!nums) {
    return false;
  }

  // CNPJ must have 14 chars
  if (nums.length !== 14) {
    return false;
  }

  // CNPJ can't be blacklisted
  if (CNPJ_BLACKLIST.includes(nums)) {
    return false;
  }

  let numbers = nums.substr(0, 12);
  numbers += cnpjCheckDigits(numbers);
  numbers += cnpjCheckDigits(numbers);

  return numbers.substr(-2) === nums.substr(-2);
}

/**
 * CPF/CNPJ number validator
 * @param number String
 * @return Boolean
 */
export function cpfCnpjValidator(number: string) {
  const nums = numberFormatter(number);
  return nums.length > 11 ? cnpjValidator(number) : cpfValidator(number);
}

/**
 * @alias cpfCnpjValidator
 */
export function isCpfCnpj(number: string) {
  return cpfCnpjValidator(number);
}

/**
 * Add special characters to CPF human read
 * @param value String
 * @return String
 */
export function cpfFormatter(value?: string) {
  const nums = numberFormatter(value);
  return nums.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Add special characters to CNPJ human read
 * @param value String
 * @return String
 */
export function cnpjFormatter(value?: string) {
  const nums = numberFormatter(value);
  return nums.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

/**
 * Add special characters to RG human read
 * @param value String
 * @return String
 */
export function rgFormatter(value?: string) {
  const nums = numberFormatter(value);
  return nums.replace(/^(\d{1,2})(\d{3})(\d{3})([\dX])$/, '$1.$2.$3-$4');
}

/**
 * Add special characters to cpf/cnpj human read
 * @param value String
 * @return String
 */
export function cpfCnpjFormatter(value?: string) {
  const nums = numberFormatter(value);
  return nums.length > 11 ? cnpjFormatter(value) : cpfFormatter(value);
}

/**
 * @alias cpfValidator
 */
export function isCpf(number: string) {
  return cpfValidator(number);
}

/**
 * @alias cnpjValidator
 */
export function isCnpj(number: string) {
  return cnpjValidator(number);
}

/**
 * CEP number validator
 * @param number String
 * @return Boolean
 */
export function cepValidator(value?: string) {
  const nums = numberFormatter(value);

  if (!nums) {
    return false;
  }
  if (nums.length !== 8) {
    return false;
  }
  if (CEP_BLACKLIST.includes(nums)) {
    return false;
  }

  return true;
}

/**
 * Add special characters to cep human read
 * @param value String
 * @return String
 */
export function cepFormatter(value?: string) {
  const nums = numberFormatter(value);
  return nums.replace(/^(\d{5})(\d{3})/, '$1-$2');
}

/**
 * Check navigator languages
 * @param value String
 * @return String
 */
export function isPtBr() {
  return getLocales().includes('pt');
}

/**
 * Validate RNE string
 * @param value String
 * @return Boolean
 */
export function isRNE(value?: string): boolean {
  return !!alphaNumFormatter(value).match(/^[A-Za-z]\d{6}[A-Za-z]$/);
}
