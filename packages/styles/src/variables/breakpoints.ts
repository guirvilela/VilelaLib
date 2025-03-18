/**
 * Breakpoints disponiveis a ser utilizado pelos utils
 */
export enum Breakpoint {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl'
}
/**
 * Objeto com a configuração de cada breakpoint
 */
export const breakpoints = {
  /** Return Breakpoint.xs = 480px */
  [Breakpoint.xs]: '480px',
  /** Return Breakpoint.sm = 576px */
  [Breakpoint.sm]: '576px',
  /** Return Breakpoint.md = 768px */
  [Breakpoint.md]: '768px',
  /** Return Breakpoint.lg = 992px */
  [Breakpoint.lg]: '992px',
  /** Return Breakpoint.xl = 1200px */
  [Breakpoint.xl]: '1200px',
  /** Return Breakpoint.xxl = 1600px */
  [Breakpoint.xxl]: '1600px'
};

/**
 * Objeto com a configuração de cada breakpoint
 */
export type Breakpoints = typeof breakpoints;

/**
 * Lista de breakpoints disponiveis no style-guide.
 */
export const breakpointList = Object.keys(breakpoints) as Breakpoint[];
