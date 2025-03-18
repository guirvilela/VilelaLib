import { breakpoints } from './breakpoints';

const xs = `max-width: ${breakpoints.xs}`;
const sm = `max-width: ${breakpoints.sm}`;
const md = `max-width: ${breakpoints.md}`;
const lg = `max-width: ${breakpoints.lg}`;
const xl = `max-width: ${breakpoints.xl}`;
const xxl = `max-width: ${breakpoints.xxl}`;
const custom = (size: string) => `max-width: ${size}`;
const gtXs = `min-width: ${breakpoints.xs}`;
const gtSm = `min-width: ${breakpoints.sm}`;
const gtMd = `min-width: ${breakpoints.md}`;
const gtLg = `min-width: ${breakpoints.lg}`;
const gtXl = `min-width: ${breakpoints.xl}`;
const gtXxl = `min-width: ${breakpoints.xxl}`;
const gtCustom = (size: string) => `min-width: ${size}`;

/**
 * Objeto a configuração dos media query, utilizando os breakpoints pré-configurados.
 */
export const mediaQuery = {
  /** max-width: 480px */
  xs,
  /** max-width: 576px */
  sm,
  /** max-width: 768px */
  md,
  /** max-width: 992px */
  lg,
  /** max-width: 1200px */
  xl,
  /** max-width: 1600px */
  xxl,
  /** max-width: {size} */
  custom,
  /** min-width: 480px */
  gtXs,
  /** min-width: 576px */
  gtSm,
  /** min-width: 768px */
  gtMd,
  /** min-width: 992px */
  gtLg,
  /** min-width: 1200px */
  gtXl,
  /** min-width: 1600px */
  gtXxl,
  /** min-width: {size} */
  gtCustom
};

/**
 * Objeto a configuração dos media query, utilizando os breakpoints pré-configurados.
 */
export type MediaQuerys = typeof mediaQuery;

/**
 * Representa um media query, utilizando os breakpoints pré-configurados.
 */
export type MediaQuery = keyof Omit<MediaQuerys, 'custom' | 'gtCustom'>;
