import * as styled_components from 'styled-components';
import { DefaultTheme } from 'styled-components';
import React from 'react';

/** Objeto que contem animações prontas */
declare const animations: {
    fadein: styled_components.Keyframes;
    fadeout: styled_components.Keyframes;
    spin: styled_components.Keyframes;
    indeterminate: styled_components.Keyframes;
    shimmer: styled_components.Keyframes;
    growup: (percent?: string | number) => styled_components.Keyframes;
    blink: styled_components.Keyframes;
};
/** Objeto que contem animações prontas */
declare type Animations = typeof animations;

/**
 * Breakpoints disponiveis a ser utilizado pelos utils
 */
declare enum Breakpoint {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    xxl = "xxl"
}
/**
 * Objeto com a configuração de cada breakpoint
 */
declare const breakpoints: {
    /** Return Breakpoint.xs = 480px */
    xs: string;
    /** Return Breakpoint.sm = 576px */
    sm: string;
    /** Return Breakpoint.md = 768px */
    md: string;
    /** Return Breakpoint.lg = 992px */
    lg: string;
    /** Return Breakpoint.xl = 1200px */
    xl: string;
    /** Return Breakpoint.xxl = 1600px */
    xxl: string;
};
/**
 * Objeto com a configuração de cada breakpoint
 */
declare type Breakpoints = typeof breakpoints;
/**
 * Lista de breakpoints disponiveis no style-guide.
 */
declare const breakpointList: Breakpoint[];

/**
 * Cores definidas pelo style-guide.
 */
declare const colors: {
    primary: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    condominios: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    imoveis: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    outsourcing: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    info: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    success: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    error: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    warning: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    neutral: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    neutralGrey: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    white: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    black: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
    transparent: {
        A900: string;
        A800: string;
        A700: string;
        A600: string;
        A500: string;
        A400: string;
        A300: string;
        A200: string;
        A100: string;
        '900': string;
        '800': string;
        '700': string;
        '600': string;
        '500': string;
        '400': string;
        '300': string;
        '200': string;
        '100': string;
    };
};
/**
 * Cores definidas pelo style-guide.
 */
declare type Colors = typeof colors;
/**
 * Lista de cores disponiveis no style-guide.
 */
declare const colorsList: ("transparent" | "primary" | "condominios" | "imoveis" | "outsourcing" | "info" | "success" | "error" | "warning" | "neutral" | "neutralGrey" | "white" | "black")[];
/**
 * Nome da cor no style-guide.
 */
declare type Color = keyof Colors;
/**
 * Nivel da cor alternativa no style-guide.
 */
declare type ColorLevelAlternative = 'A900' | 'A800' | 'A700' | 'A600' | 'A500' | 'A400' | 'A300' | 'A200' | 'A100';
/**
 * Nivel da cor no style-guide.
 */
declare type ColorLevel = '900' | '800' | '700' | '600' | '500' | '400' | '300' | '200' | '100' | ColorLevelAlternative;
/**
 * Lista de niveis de cor disponivel no style-guide.
 */
declare const colorLevels: ColorLevel[];

/** Lista de alinhamentos utilizados nos componentes/estilos */
declare const align: readonly ["start", "center", "end"];
/** Alinhamento utilizado nos estilos */
declare type Align = typeof align[number];
/** Lista de tamanhos utilizados nos componentes/estilos */
declare const size: readonly ["xs", "sm", "md", "lg"];
/** Tamanho utilizado nos estilos */
declare type Size = typeof size[number];
/** Lista de decoração de texto utilizados nos componentes/estilos */
declare const textDecoration: readonly ["overline", "line-through", "underline", "none"];
/** Decoração de texto utilizado nos estilos */
declare type TextDecoration = typeof textDecoration[number];
/** Lista de estilo de fonte utilizados nos componentes/estilos */
declare const fontStyle: readonly ["oblique", "italic", "normal"];
/** Estilo de fonte utilizado nos estilos */
declare type FontStyle = typeof fontStyle[number];
/** Lista de transformação de texto utilizados nos componentes/estilos */
declare const textTransform: readonly ["capitalize", "lowercase", "uppercase", "none"];
/** Transformação de texto utilizado nos estilos */
declare type TextTransform = typeof textTransform[number];
/** Lista de posições/alinhamento utilizados nos componentes/estilos */
declare const position: readonly ["top", "right", "bottom", "left"];
/** Posição/Alinhamento utilizado nos estilos */
declare type Position = typeof position[number];
/** Lista de posições complexas utilizados nos componentes/estilos */
declare const positionExtra: readonly ["top", "right", "bottom", "left", "topLeft", "topRight", "bottomLeft", "bottomRight"];
/** Posição complexa utilizado nos estilos */
declare type PositionExtra = typeof positionExtra[number];
/** Lista de displays css utilizados nos componentes/estilos */
declare const displayPosition: readonly ["relative", "absolute", "fixed", "static", "sticky"];
/** Display css utilizado nos estilos */
declare type DisplayPosition = typeof displayPosition[number];
/** Lista de ordenações utilizados nos componentes/estilos */
declare const sort: readonly ["normal", "asc", "desc"];
/** Ordenação utilizado nos estilos */
declare type Sort = typeof sort[number];
/** Lista de gatilhos/evento utilizados nos componentes/estilos */
declare const trigger: readonly ["hover", "focus", "click"];
/** Gatilho/evento utilizado nos estilos */
declare type Trigger = typeof trigger[number];
/** Lista de overflow utilizados nos componentes/estilos */
declare const overflow: readonly ["auto", "hidden", "overlay"];
/** Overflow css utilizado nos estilos */
declare type Overflow = typeof overflow[number];
/** Lista de estilos de botões utilizados nos componentes/estilos */
declare const variant: readonly ["default", "outline", "ghost", "icon", "action"];
/** Estilo de botão utilizado nos estilos */
declare type Variant = typeof variant[number];
/** Lista de tipos de botão utilizados nos componentes/estilos */
declare const type: readonly ["button", "reset", "submit"];
/** Tipo de botão utilizado nos estilos */
declare type Type = typeof type[number];
/** Lista de tipo de redirect de links utilizados nos componentes/estilos */
declare const target: readonly ["_blank", "_parent", "_self"];
/** Tipo de redirect de link utilizado nos estilos */
declare type Target = typeof target[number];
/** Lista de tipos de inputs utilizados nos componentes/estilos */
declare const inputType: readonly ["text", "cpf", "cnpj", "area", "cep", "phone", "date", "time", "datetime", "month", "week", "color", "email", "uf", "number", "password"];
/** Tipos de inputs utilizado nos estilos */
declare type InputType = typeof inputType[number];
/** Lista de estilos de borda utilizados nos componentes/estilos */
declare const borderStyle: readonly ["dotted", "dashed", "solid", "none", "hidden"];
/** Estilo de borda utilizado nos estilos */
declare type BorderStyle = typeof borderStyle[number];
/** Lista de tipos de autocomplete utilizados nos componentes/estilos */
declare const autocomplete: readonly ["username", "current-password", "new-password", "on", "off"];
/** Tipo de autocomplete utilizado nos estilos */
declare type Autocomplete = typeof autocomplete[number];
/** Lista de cursores de mouse utilizados nos componentes/estilos */
declare const cursor: readonly ["default", "pointer", "not-allowed", "context-menu", "help", "progress", "wait", "cell", "crosshair", "text", "vertical-text", "alias", "copy", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", "grab", "grabbing"];
/** Cursor de mouse utilizado nos estilos */
declare type Cursor = typeof cursor[number];
/** Lista de tipos de resize utilizados nos componentes/estilos */
declare const resize: readonly ["none", "both", "horizontal", "vertical"];
/** Tipo de resize utilizado nos estilos */
declare type Resize = typeof resize[number];

/**
 * Objeto com a configuração do grid de 12 colunas.
 */
declare const grid: {
    /** Return 0% */
    '0': string;
    /** Return 8.333333333% */
    '1': string;
    /** Return 16.66666667% */
    '2': string;
    /** Return 25% */
    '3': string;
    /** Return 33.33333333% */
    '4': string;
    /** Return 41.66666667% */
    '5': string;
    /** Return 50% */
    '6': string;
    /** Return 58.33333333% */
    '7': string;
    /** Return 66.66666667% */
    '8': string;
    /** Return 75% */
    '9': string;
    /** Return 83.33333333% */
    '10': string;
    /** Return 91.66666667% */
    '11': string;
    /** Return 100% */
    '12': string;
};
/**
 * Objeto com a configuração do grid de 12 colunas.
 */
declare type Grid = typeof grid;
/**
 * Tipo que representa um tamanho de coluna dentro do grid de 12 colunas
 */
declare type Col = keyof Grid;
/**
 * Lista de tamanhos de coluna do grid disponivel no style-guide.
 */
declare const gridList: ("12" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11")[];

/**
 * Objeto a configuração dos media query, utilizando os breakpoints pré-configurados.
 */
declare const mediaQuery: {
    /** max-width: 480px */
    xs: string;
    /** max-width: 576px */
    sm: string;
    /** max-width: 768px */
    md: string;
    /** max-width: 992px */
    lg: string;
    /** max-width: 1200px */
    xl: string;
    /** max-width: 1600px */
    xxl: string;
    /** max-width: {size} */
    custom: (size: string) => string;
    /** min-width: 480px */
    gtXs: string;
    /** min-width: 576px */
    gtSm: string;
    /** min-width: 768px */
    gtMd: string;
    /** min-width: 992px */
    gtLg: string;
    /** min-width: 1200px */
    gtXl: string;
    /** min-width: 1600px */
    gtXxl: string;
    /** min-width: {size} */
    gtCustom: (size: string) => string;
};
/**
 * Objeto a configuração dos media query, utilizando os breakpoints pré-configurados.
 */
declare type MediaQuerys = typeof mediaQuery;
/**
 * Representa um media query, utilizando os breakpoints pré-configurados.
 */
declare type MediaQuery = keyof Omit<MediaQuerys, 'custom' | 'gtCustom'>;

/**
 * Sombras definidas pelo style-guide.
 */
declare const shadows: {
    '1': string;
    '2': string;
    '3': string;
};
/**
 * Sombras definidas pelo style-guide.
 */
declare type Shadows = typeof shadows;
/**
 * Sombra definida pelo style-guide.
 */
declare type Shadow = keyof Shadows;
/**
 * Lista de sombras disponiveis no style-guide.
 */
declare const shadowsList: ("1" | "2" | "3")[];

/**
 * Espaçamentos definidos pelo style-guide.
 */
declare const spaces: {
    /** return 0px */
    '0': string;
    /** return 4px */
    '1': string;
    /** return 8px */
    '2': string;
    /** return 16px */
    '3': string;
    /** return 20px */
    '4': string;
    /** return 24px */
    '5': string;
    /** return 32px */
    '6': string;
    /** return 40px */
    '7': string;
    /** return 48px */
    '8': string;
    /** return 56px */
    '9': string;
    /** return 64px */
    '10': string;
    /** return 72px */
    '11': string;
    /** return 80px */
    '12': string;
    /** return 88px */
    '13': string;
    /** return 96px */
    '14': string;
    /** return 104px */
    '15': string;
    /** return 112px */
    '16': string;
    /** return 120px */
    '17': string;
    /** return 128px */
    '18': string;
};
/**
 * Espaçamentos definidos pelo style-guide.
 */
declare type Spaces = typeof spaces;
/**
 * Espaçamento definido pelo style-guide.
 */
declare type Space = keyof Spaces;
/**
 * Lista de espaçamentos disponiveis no style-guide.
 */
declare const spacesList: ("17" | "14" | "12" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "13" | "15" | "16" | "18")[];

/**
 * Lista de tipografias disponiveis no style-guide.
 */
declare const typography: {
    /** Family: Kanit, Size: 40px */
    h1: {
        family: string;
        size: string;
        lineHeight: number;
        letterSpacing: string;
    };
    /** Family: Kanit, Size: 32px */
    h2: {
        family: string;
        size: string;
        lineHeight: number;
        letterSpacing: string;
    };
    /** Family: Kanit, Size: 24px */
    h3: {
        family: string;
        size: string;
        lineHeight: number;
        letterSpacing: string;
    };
    /** Family: Kanit, Size: 20px */
    h4: {
        family: string;
        size: string;
        lineHeight: number;
        letterSpacing: string;
    };
    /** Family: Nunito Sans, Size: 18px */
    subtitle: {
        family: string;
        size: string;
        lineHeight: number;
        letterSpacing: string;
    };
    /** Family: Kanit, Size: 16px */
    subtitle2: {
        family: string;
        size: string;
        lineHeight: number;
        letterSpacing: string;
    };
    /** Family: Nunito Sans, Size: 16px */
    body1: {
        family: string;
        size: string;
        lineHeight: number;
        letterSpacing: string;
    };
    /** Family: Nunito Sans, Size: 14px */
    body2: {
        family: string;
        size: string;
        lineHeight: number;
        letterSpacing: string;
    };
    /** Family: Nunito Sans, Size: 12px */
    body3: {
        family: string;
        size: string;
        lineHeight: number;
        letterSpacing: string;
    };
};
/**
 * Lista de tipografias disponiveis no style-guide.
 */
declare type Typography = typeof typography;
/**
 * Tipografia disponivel no style-guide.
 */
declare type Typo = keyof Typography;
/**
 * Espessura da tipografia disponivel no style-guide.
 */
declare type FontWeight = '400' | '500' | '600' | '700' | '800';
/**
 * Lista de tipografias disponiveis no style-guide.
 */
declare const typoList: ("h1" | "h2" | "h3" | "h4" | "subtitle" | "subtitle2" | "body1" | "body2" | "body3")[];
/**
 * Lista de espessuras de tipografia disponiveis no style-guide.
 */
declare const weightList: FontWeight[];

/** Objeto com todas as variaveis do style-guide */
interface Theme {
    typography: Typography;
    spaces: Spaces;
    colors: Colors;
    breakpoints: Breakpoints;
    mediaQuery: MediaQuerys;
    shadows: Shadows;
    grid: Grid;
}
/** Objeto com todas as variaveis do style-guide */
declare const theme: Theme;

/**
 * Hook com utils para trabalhar com responsividade
 * Exporta o breakpoint atual e funções utils
 *
 * @example
 * const { isMobile } = useResponsive();
 */
declare function useResponsive(): {
    breakpoint: Breakpoint | undefined;
    isMobile: boolean;
    isDesktop: boolean;
    isIframe: boolean;
    isLargeDesktop: boolean;
    isBreakpoint: (v: Breakpoint) => boolean;
};

/**
 * Função utilizada para adicionar um layout pré-configurado em uma pagina (pode ser utilizada com composition)
 *
 * @example
 * export default compose(
 *   withLayout(DefaultLayout)
 * )(CadastroAreasPage);
 */
declare function withLayout<P extends object>(LayoutElement: (props?: P) => JSX.Element, layoutProps?: P): (Component: any) => React.NamedExoticComponent<object>;

/**
 * Objeto de configuração do ThemeProvider
 */
interface ThemeConfig {
    customTheme?: Partial<Theme>;
    bgColor: Color;
    bgColorLevel?: ColorLevel;
    textColor?: Color;
    textColorLevel?: ColorLevel;
    height?: string;
    withGlobals?: boolean;
}

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
declare const ThemeProvider: ({ configs, children }: ThemeProviderProps) => React.JSX.Element;
/**
 * Função que pode ser utilizada nas controllers/pages para acessar o contexto do ThemeProvider
 *
 * @example
 * const theme = useTheme();
 */
declare const useTheme: () => DefaultTheme;

/**
 * Converte pixel de string para numero
 * @param px String
 * @return Number
 */
declare function parsePixel(px?: string): number;
/**
 * Retorna uma cor aleatória do style-guide
 * @return Color
 */
declare function randomColor(): "transparent" | "primary" | "condominios" | "imoveis" | "outsourcing" | "info" | "success" | "error" | "warning" | "neutral" | "neutralGrey" | "white" | "black";
/**
 * Retorna um nivel de cor aleatória do style-guide
 * @return ColorLevel
 */
declare function randomColorLevel(): ColorLevel;
/**
 * Util para adicionar alpha em cor hexadecimal
 * @param color String (Hex color)
 * @param opacity Number (Decimal)
 * @return String (Hex color with alpha)
 */
declare function addAlphaHex(color: string, opacity?: number): string;

export { Align, Animations, Autocomplete, BorderStyle, Breakpoint, Breakpoints, Col, Color, ColorLevel, ColorLevelAlternative, Colors, Cursor, DisplayPosition, FontStyle, FontWeight, Grid, InputType, MediaQuery, MediaQuerys, Overflow, Position, PositionExtra, Resize, Shadow, Shadows, Size, Sort, Space, Spaces, Target, TextDecoration, TextTransform, Theme, ThemeConfig, ThemeProvider, Trigger, Type, Typo, Typography, Variant, addAlphaHex, align, animations, autocomplete, borderStyle, breakpointList, breakpoints, colorLevels, colors, colorsList, cursor, displayPosition, fontStyle, grid, gridList, inputType, mediaQuery, overflow, parsePixel, position, positionExtra, randomColor, randomColorLevel, resize, shadows, shadowsList, size, sort, spaces, spacesList, target, textDecoration, textTransform, theme, trigger, type, typoList, typography, useResponsive, useTheme, variant, weightList, withLayout };
