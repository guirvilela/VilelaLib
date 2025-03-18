/**
 * Espaçamentos definidos pelo style-guide.
 */
export const spaces = {
  /** return 0px */
  '0': '0px',
  /** return 4px */
  '1': '4px',
  /** return 8px */
  '2': '8px',
  /** return 16px */
  '3': '16px',
  /** return 20px */
  '4': '20px',
  /** return 24px */
  '5': '24px',
  /** return 32px */
  '6': '32px',
  /** return 40px */
  '7': '40px',
  /** return 48px */
  '8': '48px',
  /** return 56px */
  '9': '56px',
  /** return 64px */
  '10': '64px',
  /** return 72px */
  '11': '72px',
  /** return 80px */
  '12': '80px',
  /** return 88px */
  '13': '88px',
  /** return 96px */
  '14': '96px',
  /** return 104px */
  '15': '104px',
  /** return 112px */
  '16': '112px',
  /** return 120px */
  '17': '120px',
  /** return 128px */
  '18': '128px'
};

/**
 * Espaçamentos definidos pelo style-guide.
 */
export type Spaces = typeof spaces;

/**
 * Espaçamento definido pelo style-guide.
 */
export type Space = keyof Spaces;

/**
 * Lista de espaçamentos disponiveis no style-guide.
 */
export const spacesList = Object.keys(spaces) as Space[];
