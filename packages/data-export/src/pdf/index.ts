/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../config';

declare const pdfMake: any;

/** Tamanhos de pagina */
export type ExportPDFSize = 'A0' | 'A1' | 'A2' | 'A3' | 'A4';
/** Orientações de pagina */
export type ExportPDFOrientation = 'portrait' | 'landscape';
/** Tipos de alinhamento em celula de tabela */
export type ExportPDFAlignment = 'left' | 'center' | 'right' | 'justify';
/** Tipos de alinhamento em estilos */
export type ExportPDFPositionAlignment =
  | 'left'
  | 'top'
  | 'right'
  | 'bottom'
  | 'center';
/** Tipos de decoração de texto em estilos */
export type ExportPDFPositionDecoration =
  | 'underline'
  | 'overline'
  | 'lineThrough';

/**
 * Objeto de configuração do arquivo final em PDF
 */
export interface ExportPDFConfig {
  pageSize?: ExportPDFSize;
  pageOrientation?: ExportPDFOrientation;
  /** [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins */
  pageMargins?: number[];
  /** pages this element is visible on (e.g. multi-line text could be on more than one page) */
  pageNumbers?: number[];
  /**
   * create custom styles
   * @example
   * bodyBold: {
   *   bold: true,
   *   fontSize: 9
   * },
   * red: {
   *   color: '#ed5565'
   * },
   * customFont: {
   *   font: 'customFontName'
   * }
   * */
  styles?: { [key: string]: ExportPDFStyles };
  /**
   * font files must be accessible via url address (access by style config 'font')
   *
   * @example
   * fonts: {
   *    normal: 'https://example.com/fonts/fontFile.ttf',
   *    bold: 'https://example.com/fonts/fontFile2.ttf',
   *    italics: 'https://example.com/fonts/fontFile3.ttf',
   *    bolditalics: 'https://example.com/fonts/fontFile4.ttf'
   *  }
   */
  fonts?: {
    normal?: string;
    bold?: string;
    italics?: string;
    bolditalics?: string;
  };
}

/**
 * Objeto de configuração de uma tabela a ser inserida no conteudo do PDF
 */
export interface ExportPDFTableConfig {
  layout?: {
    /**
     * border line color (horizontal)
     * @returns string hex color
     */
    hLineColor?: (index: number, node: any) => string;
    /**
     * border line color (vertical)
     * @returns string hex color
     */
    vLineColor?: (index: number, node: any) => string;
    /**
     * width line color (horizontal)
     * @returns pixel number
     */
    hLineWidth?: (index: number, node: any) => number;
    /**
     * width line color (horizontal)
     * @returns pixel number
     */
    vLineWidth?: (index: number, node: any) => number;
    /**
     * cell left space
     * @returns pixel number
     */
    paddingLeft?: (index: number) => number;
    /**
     * cell top space
     * @returns pixel number
     */
    paddingTop?: (index: number) => number;
    /**
     * cell right space
     * @returns pixel number
     */
    paddingRight?: (index: number) => number;
    /**
     * cell bottom space
     * @returns pixel number
     */
    paddingBottom?: (index: number) => number;
  };
  /** generate table in PDF (use ExportPDFTableUtils for format cells) */
  table?: {
    /**
     * you can declare how many rows should be treated as headers
     *
     * headers are automatically repeated if the table spans over multiple pages
     * @returns lines count number
     */
    headerRows: number;
    /**
     * widths of columns
     * ['\*', 'auto', 100, '\*']
     *
     *@example
     *  pdfmake: css
     *  '*'    : 100%
     *  'auto' : auto
     *  100    : 100px
     *  80     : 80px
     *
     *  'same count of columns in body row'
     */
    widths: (string | number)[];
    /** header, body and footer of table in same prop */
    body: ExportPDFOptions[][];
  };
  /** margin: [left, top, right, bottom], [horizontal, vertical] */
  margin?: number[];
  /** border: [left, top, right, bottom], [horizontal, vertical] */
  border?: boolean[];
  /**
   * generate image in PDF
   * @example
   * image: "data:image/jpeg;base64,...encodedContent..."
   * image: "https://www2.hubert.com.br/logo.png"
   */
  image?: string;
  /**
   * generate qr code
   * @example
   * qr: "bla bla bla"
   */
  qr?: string;
  /** image or qr code width (if you specify both width and height - image will be stretched) */
  width?: number;
  /** image or qr code height (if you specify both width and height - image will be stretched) */
  height?: number;
  /** you can also fit the image or qr code, inside a rectangle ([100, 100]) */
  fit?: number[];
  /** you can also cover the image inside a rectangle */
  cover?: {
    width: number;
    height: number;
    valign: ExportPDFPositionAlignment;
    align: ExportPDFPositionAlignment;
  };
  /** generate bulleted list, to treat a paragraph as a bulleted list, set an array of items under the ul key */
  ul?: ExportPDFOptions[];
  /** generate numbered  list, to treat a paragraph as a numbered list, set an array of items under the ul key */
  ol?: ExportPDFOptions[];
  /** jump to next page, after or before of this element */
  pageBreak?: 'after' | 'before';
}

/**
 * Objeto de configuração dos estilos possiveis a ser aplicado no pdf (tipo css)
 */
export interface ExportPDFStyles {
  /**font name from config of fonts (ExportPDFConfig.fonts) */
  font?: string;
  fontSize?: number;
  lineHeight?: number;
  characterSpacing?: number;

  /** background-color */
  background?: string;
  color?: string;
  markerColor?: string;

  decoration?: ExportPDFPositionDecoration;
  alignment?: ExportPDFPositionAlignment;
  bold?: boolean;
  italics?: boolean;
}

const defaultConfig: ExportPDFConfig = {
  pageSize: 'A4',
  pageOrientation: 'portrait',
  pageMargins: [16, 16, 16, 48]
};

const defaultTableLayout: ExportPDFTableConfig['layout'] = {
  hLineColor: function () {
    return '#d9d9d9';
  },
  vLineColor: function () {
    return '#d9d9d9';
  }
};

const defaultStyles: { [key: string]: ExportPDFStyles } = {
  title: {
    bold: true,
    fontSize: 14
  },
  subtitle: {
    bold: true,
    fontSize: 9
  },
  body: {
    fontSize: 9
  },
  bodyBold: {
    bold: true,
    fontSize: 9
  },
  red: {
    color: '#ed5565'
  },
  green: {
    color: '#1da462'
  },
  gray: {
    color: '#aeaeae'
  },
  bold: {
    bold: true
  },
  italic: {
    italics: true
  },
  centered: {
    alignment: 'center'
  },
  left: {
    alignment: 'left'
  },
  right: {
    alignment: 'right'
  },
  underline: {
    decoration: 'underline'
  },
  bgGray: {
    background: '#eeeeee'
  }
};

/**
 * Objeto de configuração de cada celula (estilo, conteudo, etc)
 */
export interface ExportPDFOptions {
  /** generate paragraph or label of table, list, etc */
  text?: string;
  /** background color of cell table */
  fillColor?: string;
  /** same colspan of html table td for pdf table columns */
  colSpan?: number;
  /**
   * list of styles to apply in this element
   *
   * @example
   * default styles
   * style: ['title','subtitle','body','bodyBold','red','green','gray','bold','italic','centered','left','right']
   *
   * custom styles
   * style: ['yourCustomStyle']
   */
  style?: string[];
  /** element alignment or column align for table */
  alignment?: ExportPDFAlignment;
  /** table config border */
  border?: boolean[];
  /** formatter for text content */
  formatter?: (v: string | number) => string;
}

export type ExportPDFTableCell = ExportPDFOptions;

/**
 * Classe que expoe diversos metodos para construir o conteudo do PDF
 */
export class ExportPDFTableUtils {
  public static numberStyle(v: string | number) {
    return v ? (Number(v) <= 0 ? 'red' : '') : '';
  }

  public static HeaderLeft(
    v: string | number,
    options?: ExportPDFOptions
  ): ExportPDFTableCell {
    return {
      text: String(options?.formatter?.(v) || v),
      alignment: 'left',
      fillColor: '#eeeeee',
      border: [true, true, false, true],
      style: ['bodyBold', this.numberStyle(v)],
      ...options
    };
  }

  public static HeaderCenter(
    v: string | number,
    options?: ExportPDFOptions
  ): ExportPDFTableCell {
    return {
      text: String(options?.formatter?.(v) || v),
      alignment: 'right',
      fillColor: '#eeeeee',
      border: [false, true, false, true],
      style: ['bodyBold', this.numberStyle(v)],
      ...options
    };
  }

  public static HeaderRight(
    v: string | number,
    options?: ExportPDFOptions
  ): ExportPDFTableCell {
    return {
      text: String(options?.formatter?.(v) || v),
      alignment: 'right',
      fillColor: '#eeeeee',
      border: [false, true, true, true],
      style: ['bodyBold', this.numberStyle(v)],
      ...options
    };
  }

  public static BodyLeft(
    v: string | number,
    options?: ExportPDFOptions
  ): ExportPDFTableCell {
    return {
      text: String(options?.formatter?.(v) || v),
      alignment: 'left',
      border: [true, true, false, true],
      style: ['body', this.numberStyle(v)],
      ...options
    };
  }

  public static BodyCenter(
    v: string | number,
    options?: ExportPDFOptions
  ): ExportPDFTableCell {
    return {
      text: String(options?.formatter?.(v) || v),
      alignment: 'right',
      border: [false, true, false, true],
      style: ['body', this.numberStyle(v)],
      ...options
    };
  }

  public static BodyRight(
    v: string | number,
    options?: ExportPDFOptions
  ): ExportPDFTableCell {
    return {
      text: String(options?.formatter?.(v) || v),
      alignment: 'right',
      border: [false, true, true, true],
      style: ['body', this.numberStyle(v)],
      ...options
    };
  }

  public static FooterLeft(
    v: string | number,
    options?: ExportPDFOptions
  ): ExportPDFTableCell {
    return {
      text: String(options?.formatter?.(v) || v),
      alignment: 'left',
      border: [true, true, false, true],
      style: ['bodyBold', this.numberStyle(v)],
      ...options
    };
  }

  public static FooterCenter(
    v: string | number,
    options?: ExportPDFOptions
  ): ExportPDFTableCell {
    return {
      text: String(options?.formatter?.(v) || v),
      alignment: 'right',
      border: [false, true, false, true],
      style: ['bodyBold', this.numberStyle(v)],
      ...options
    };
  }

  public static FooterRight(
    v: string | number,
    options?: ExportPDFOptions
  ): ExportPDFTableCell {
    return {
      text: String(options?.formatter?.(v) || v),
      alignment: 'right',
      border: [false, true, true, true],
      style: ['bodyBold', this.numberStyle(v)],
      ...options
    };
  }
}

async function importScripts() {
  return new Promise((resolve) => {
    if (typeof pdfMake !== 'undefined') {
      return resolve(true);
    }

    const script = document.createElement('script');
    const fonts = document.createElement('script');

    script.src = config.pdfmakeScript;
    fonts.src = config.pdfmakeFonts;

    script.onload = function () {
      document.head.appendChild(fonts);
    };
    fonts.onload = function () {
      resolve(true);
    };

    document.head.appendChild(script);
  });
}

/**
 * Função responsavel por criar e exportar o PDF como arquivo
 * @param name Nome do arquivo, sem extensão
 * @param content Conteudo do PDF configurado
 * @param configs Objeto de configuração do arquivo de PDF
 *
 * @example
 * await exportPDF(
 *  'relatorio-reservas',
 *  [{
 *    text: 'RELATORIO RESERVAS',
 *    style: 'title',
 *    alignment: 'center',
 *    margin: [0, 3]
 *  }],
 *  {
 *    pageSize: 'A4',
 *    pageOrientation: 'portrait'
 *  }
 * );
 */
export async function exportPDF(
  name: string,
  content: (ExportPDFOptions & ExportPDFTableConfig)[],
  configs?: ExportPDFConfig
) {
  await importScripts();

  if (configs?.fonts) {
    pdfMake.fonts = {
      ...pdfMake.fonts,
      ...configs?.fonts
    };
  }

  pdfMake
    .createPdf({
      ...defaultConfig,
      ...configs,
      content: content?.map((x) =>
        x.table
          ? {
              ...x,
              layout: {
                ...defaultTableLayout,
                ...x.layout
              }
            }
          : x
      ),
      styles: {
        ...defaultStyles,
        ...configs?.styles
      }
    })
    .download(`${name}.pdf`);
}
