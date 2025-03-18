import { Color, ColorLevel, Theme } from '../../variables';

/**
 * Objeto de configuração do ThemeProvider
 */
export interface ThemeConfig {
  customTheme?: Partial<Theme>;
  bgColor: Color;
  bgColorLevel?: ColorLevel;
  textColor?: Color;
  textColorLevel?: ColorLevel;
  height?: string;
  withGlobals?: boolean;
}
