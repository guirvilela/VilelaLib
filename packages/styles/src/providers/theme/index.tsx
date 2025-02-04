import React from 'react';
import {
  DefaultTheme,
  ThemeProvider as StyledProvider,
  ThemeContext
} from 'styled-components';
import { Theme, theme as defaultTheme } from '../../variables';
import ThemeGlobals from './globals';
import { ThemeConfig } from './types';

export type { ThemeConfig };

interface ThemeProviderProps {
  configs: ThemeConfig;
  children?: React.ReactNode;
}

/**
 * React provider que expoe toda a logica do style-guide.
 *
 * @example
 * <ThemeProvider configs={themeConfig}>
 *   <OutrosComponents />
 * </ThemeProvider>
 *
 * const theme = useTheme();
 */
export const ThemeProvider = ({ configs, children }: ThemeProviderProps) => {
  const [customTheme, setCustomTheme] = React.useState(configs?.customTheme);

  const changeTheme = React.useCallback(
    (v: Partial<Theme>) => setCustomTheme(v),
    []
  );

  const value = React.useMemo(
    () => ({
      ...defaultTheme,
      ...customTheme,
      changeTheme
    }),
    [customTheme]
  );

  return (
    <StyledProvider theme={value}>
      {configs?.withGlobals && <ThemeGlobals {...configs} />}
      {children}
    </StyledProvider>
  );
};

/**
 * Função que pode ser utilizada nas controllers/pages para acessar o contexto do ThemeProvider
 *
 * @example
 * const theme = useTheme();
 */
export const useTheme = () => React.useContext<DefaultTheme>(ThemeContext);
