/**
 * Sombras definidas pelo style-guide.
 */
export const shadows = {
  '1': '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  '2': '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  '3': '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)'
};

/**
 * Sombras definidas pelo style-guide.
 */
export type Shadows = typeof shadows;

/**
 * Sombra definida pelo style-guide.
 */
export type Shadow = keyof Shadows;

/**
 * Lista de sombras disponiveis no style-guide.
 */
export const shadowsList = Object.keys(shadows) as Shadow[];
