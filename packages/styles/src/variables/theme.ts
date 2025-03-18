import { Breakpoints, breakpoints } from './breakpoints';
import { Colors, colors } from './colors';
import { Grid, grid } from './grid';
import { MediaQuerys, mediaQuery } from './mediaQuery';
import { Shadows, shadows } from './shadow';
import { Spaces, spaces } from './spaces';
import { Typography, typography } from './typography';

/** Objeto com todas as variaveis do style-guide */
export interface Theme {
  typography: Typography;
  spaces: Spaces;
  colors: Colors;
  breakpoints: Breakpoints;
  mediaQuery: MediaQuerys;
  shadows: Shadows;
  grid: Grid;
}

/** Objeto com todas as variaveis do style-guide */
export const theme: Theme = {
  typography,
  spaces,
  colors,
  breakpoints,
  mediaQuery,
  shadows,
  grid
};
