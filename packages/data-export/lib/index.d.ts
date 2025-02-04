/**
 * Generate CSV from Array and download file
 * @param name String (nome arquivo)
 * @param content Array (dados a ser utilizado)
 * @param header Array (opcional, quando enviar o header não utilizamos a primeira linha do content como header)
 *
 * @example
 * await exportCSV('nome-arquivo-x', [{ a: 'A', b: 'B', c: 'C' }]);
 */
declare function exportCSV<T extends object>(name: string, content: T[], header?: string[]): void;
/**
 * Generate Excel from Array and download file
 * @param name String (nome arquivo)
 * @param content Array (dados a ser utilizado)
 * @param header Array (opcional, quando enviar o header não utilizamos a primeira linha do content como header)
 *
 * @example
 * await exportExcel('nome-arquivo-x', [{ a: 'A', b: 'B', c: 'C' }]);
 */
declare function exportExcel<T extends object>(name: string, content: T[], header?: string[]): void;

/**
 * Tipos de imagens disponivel para exportar o arquivo qrcode
 */
declare enum ExportImageType {
    PNG = 1,
    JPEG = 2,
    BLOB = 3,
    SVG = 4
}
declare function filter(node: HTMLElement): boolean;
interface Options$1 {
    backgroundColor?: string;
    width?: string;
    height?: string;
    quality?: number;
    cacheBust?: boolean;
    imagePlaceholder?: string;
    pixelRatio?: number;
    skipAutoScale?: boolean;
    filter?: typeof filter;
}
/**
 * Generate Image from HTML and download file
 * @param name String (nome arquivo)
 * @param el HTMLElement (elemento html que sera utilizado)
 * @param type ExportImageType (PNG, JPEG, BLOB, SVG)
 *
 * @example
 * await exportImage('nome-arquivo-x', document.getElementById('asd'));
 * await exportImage('nome-arquivo-x', elementRef.content);
 */
declare function exportImage<T = HTMLElement>(name: string, el: T | null, type?: ExportImageType, options?: Options$1): Promise<void>;
/**
 * Generate Image from HTML and return url as base64
 * @param el HTMLElement (elemento html que sera utilizado)
 *
 * @example
 * const url = await generateImage(document.getElementById('asd'));
 * const url = await generateImage(elementRef.content);
 */
declare function generateImage<T extends HTMLElement>(el: T | null, options?: Options$1): Promise<any>;

/** Tamanhos de pagina */
declare type ExportPDFSize = 'A0' | 'A1' | 'A2' | 'A3' | 'A4';
/** Orientações de pagina */
declare type ExportPDFOrientation = 'portrait' | 'landscape';
/** Tipos de alinhamento em celula de tabela */
declare type ExportPDFAlignment = 'left' | 'center' | 'right' | 'justify';
/** Tipos de alinhamento em estilos */
declare type ExportPDFPositionAlignment = 'left' | 'top' | 'right' | 'bottom' | 'center';
/** Tipos de decoração de texto em estilos */
declare type ExportPDFPositionDecoration = 'underline' | 'overline' | 'lineThrough';
/**
 * Objeto de configuração do arquivo final em PDF
 */
interface ExportPDFConfig {
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
    styles?: {
        [key: string]: ExportPDFStyles;
    };
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
interface ExportPDFTableConfig {
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
interface ExportPDFStyles {
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
/**
 * Objeto de configuração de cada celula (estilo, conteudo, etc)
 */
interface ExportPDFOptions {
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
declare type ExportPDFTableCell = ExportPDFOptions;
/**
 * Classe que expoe diversos metodos para construir o conteudo do PDF
 */
declare class ExportPDFTableUtils {
    static numberStyle(v: string | number): "" | "red";
    static HeaderLeft(v: string | number, options?: ExportPDFOptions): ExportPDFTableCell;
    static HeaderCenter(v: string | number, options?: ExportPDFOptions): ExportPDFTableCell;
    static HeaderRight(v: string | number, options?: ExportPDFOptions): ExportPDFTableCell;
    static BodyLeft(v: string | number, options?: ExportPDFOptions): ExportPDFTableCell;
    static BodyCenter(v: string | number, options?: ExportPDFOptions): ExportPDFTableCell;
    static BodyRight(v: string | number, options?: ExportPDFOptions): ExportPDFTableCell;
    static FooterLeft(v: string | number, options?: ExportPDFOptions): ExportPDFTableCell;
    static FooterCenter(v: string | number, options?: ExportPDFOptions): ExportPDFTableCell;
    static FooterRight(v: string | number, options?: ExportPDFOptions): ExportPDFTableCell;
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
declare function exportPDF(name: string, content: (ExportPDFOptions & ExportPDFTableConfig)[], configs?: ExportPDFConfig): Promise<void>;

declare const optsDefault: {
    width: number;
    height: number;
    colorDark: string;
    colorLight: string;
};
declare type Options = Partial<typeof optsDefault>;
/**
 * Generate QRCode render in html
 * @param el HTMLElement
 * @param content String (Conteudo do QRCode, texto normal)
 *
 * @example
 * await renderQrCode(ref.current, 'Hello World!');
 * await renderQrCode(document.getElementById('teste'), 'Hello World!');
 */
declare function renderQrCode<T = HTMLElement>(el: T | null, content: string, options?: Options): Promise<void>;
/**
 * Generate QRCode return url in base64
 * @returns url String
 *
 * @example
 * const url = await generateQrCode('Hello World!');
 */
declare function generateQrCode(content: string, options?: Options): Promise<string>;
/**
 * Generate QRCode download file
 * @param name String (nome arquivo)
 * @param content String (conteudo do qrcode)
 *
 * @example
 * await exportQrCode('nome-arquivo-x', 'Hello World!');
 */
declare function exportQrCode(name: string, content: string, options?: Options): Promise<void>;

export { ExportImageType, ExportPDFAlignment, ExportPDFConfig, ExportPDFOptions, ExportPDFOrientation, ExportPDFPositionAlignment, ExportPDFPositionDecoration, ExportPDFSize, ExportPDFStyles, ExportPDFTableCell, ExportPDFTableConfig, ExportPDFTableUtils, exportCSV, exportExcel, exportImage, exportPDF, exportQrCode, generateImage, generateQrCode, renderQrCode };
