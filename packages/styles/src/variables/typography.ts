/**
 * Lista de tipografias disponiveis no style-guide.
 */
export const typography = {
  /** Family: Kanit, Size: 40px */
  h1: {
    family: 'Kanit',
    size: '40px',
    lineHeight: 1.2105263157894737,
    letterSpacing: '-0.02em'
  },
  /** Family: Kanit, Size: 32px */
  h2: {
    family: 'Kanit',
    size: '32px',
    lineHeight: 1.2666666666666666,
    letterSpacing: '-0.01em'
  },
  /** Family: Kanit, Size: 24px */
  h3: {
    family: 'Kanit',
    size: '24px',
    lineHeight: 1.3333333333333333,
    letterSpacing: '0em'
  },
  /** Family: Kanit, Size: 20px */
  h4: {
    family: 'Kanit',
    size: '20px',
    lineHeight: 1.4,
    letterSpacing: '0.01em'
  },
  /** Family: Nunito Sans, Size: 18px */
  subtitle: {
    family: 'Nunito Sans',
    size: '18px',
    lineHeight: 1.5,
    letterSpacing: '0.01em'
  },
  /** Family: Kanit, Size: 16px */
  subtitle2: {
    family: 'Kanit',
    size: '16px',
    lineHeight: 1.5714285714285714,
    letterSpacing: '-0.01em'
  },
  /** Family: Nunito Sans, Size: 16px */
  body1: {
    family: 'Nunito Sans',
    size: '16px',
    lineHeight: 1.5714285714285714,
    letterSpacing: '0.01em'
  },
  /** Family: Nunito Sans, Size: 14px */
  body2: {
    family: 'Nunito Sans',
    size: '14px',
    lineHeight: 1.6666666666666667,
    letterSpacing: '0.01em'
  },
  /** Family: Nunito Sans, Size: 12px */
  body3: {
    family: 'Nunito Sans',
    size: '12px',
    lineHeight: 1.6666666666666667,
    letterSpacing: '0.01em'
  }
};

/**
 * Lista de tipografias disponiveis no style-guide.
 */
export type Typography = typeof typography;

/**
 * Tipografia disponivel no style-guide.
 */
export type Typo = keyof Typography;

/**
 * Espessura da tipografia disponivel no style-guide.
 */
export type FontWeight = '400' | '500' | '600' | '700' | '800';

/**
 * Lista de tipografias disponiveis no style-guide.
 */
export const typoList = Object.keys(typography) as Typo[];

/**
 * Lista de espessuras de tipografia disponiveis no style-guide.
 */
export const weightList = ['400', '500', '600', '700', '800'] as FontWeight[];
