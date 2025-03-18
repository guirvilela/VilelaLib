/** Lista de alinhamentos utilizados nos componentes/estilos */
export const align = ['start', 'center', 'end'] as const;
/** Alinhamento utilizado nos estilos */
export type Align = typeof align[number];

/** Lista de tamanhos utilizados nos componentes/estilos */
export const size = ['xs', 'sm', 'md', 'lg'] as const;
/** Tamanho utilizado nos estilos */
export type Size = typeof size[number];

/** Lista de decoração de texto utilizados nos componentes/estilos */
export const textDecoration = [
  'overline',
  'line-through',
  'underline',
  'none'
] as const;
/** Decoração de texto utilizado nos estilos */
export type TextDecoration = typeof textDecoration[number];

/** Lista de estilo de fonte utilizados nos componentes/estilos */
export const fontStyle = ['oblique', 'italic', 'normal'] as const;
/** Estilo de fonte utilizado nos estilos */
export type FontStyle = typeof fontStyle[number];

/** Lista de transformação de texto utilizados nos componentes/estilos */
export const textTransform = [
  'capitalize',
  'lowercase',
  'uppercase',
  'none'
] as const;
/** Transformação de texto utilizado nos estilos */
export type TextTransform = typeof textTransform[number];

/** Lista de posições/alinhamento utilizados nos componentes/estilos */
export const position = ['top', 'right', 'bottom', 'left'] as const;
/** Posição/Alinhamento utilizado nos estilos */
export type Position = typeof position[number];

/** Lista de posições complexas utilizados nos componentes/estilos */
export const positionExtra = [
  ...position,
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight'
] as const;
/** Posição complexa utilizado nos estilos */
export type PositionExtra = typeof positionExtra[number];

/** Lista de displays css utilizados nos componentes/estilos */
export const displayPosition = [
  'relative',
  'absolute',
  'fixed',
  'static',
  'sticky'
] as const;
/** Display css utilizado nos estilos */
export type DisplayPosition = typeof displayPosition[number];

/** Lista de ordenações utilizados nos componentes/estilos */
export const sort = ['normal', 'asc', 'desc'] as const;
/** Ordenação utilizado nos estilos */
export type Sort = typeof sort[number];

/** Lista de gatilhos/evento utilizados nos componentes/estilos */
export const trigger = ['hover', 'focus', 'click'] as const;
/** Gatilho/evento utilizado nos estilos */
export type Trigger = typeof trigger[number];

/** Lista de overflow utilizados nos componentes/estilos */
export const overflow = ['auto', 'hidden', 'overlay'] as const;
/** Overflow css utilizado nos estilos */
export type Overflow = typeof overflow[number];

/** Lista de estilos de botões utilizados nos componentes/estilos */
export const variant = [
  'default',
  'outline',
  'ghost',
  'icon',
  'action'
] as const;
/** Estilo de botão utilizado nos estilos */
export type Variant = typeof variant[number];

/** Lista de tipos de botão utilizados nos componentes/estilos */
export const type = ['button', 'reset', 'submit'] as const;
/** Tipo de botão utilizado nos estilos */
export type Type = typeof type[number];

/** Lista de tipo de redirect de links utilizados nos componentes/estilos */
export const target = ['_blank', '_parent', '_self'] as const;
/** Tipo de redirect de link utilizado nos estilos */
export type Target = typeof target[number];

/** Lista de tipos de inputs utilizados nos componentes/estilos */
export const inputType = [
  'text',
  'cpf',
  'cnpj',
  'area',
  'cep',
  'phone',
  'date',
  'time',
  'datetime',
  'month',
  'week',
  'color',
  'email',
  'uf',
  'number',
  'password'
] as const;
/** Tipos de inputs utilizado nos estilos */
export type InputType = typeof inputType[number];

/** Lista de estilos de borda utilizados nos componentes/estilos */
export const borderStyle = [
  'dotted',
  'dashed',
  'solid',
  'none',
  'hidden'
] as const;
/** Estilo de borda utilizado nos estilos */
export type BorderStyle = typeof borderStyle[number];

/** Lista de tipos de autocomplete utilizados nos componentes/estilos */
export const autocomplete = [
  'username',
  'current-password',
  'new-password',
  'on',
  'off'
] as const;
/** Tipo de autocomplete utilizado nos estilos */
export type Autocomplete = typeof autocomplete[number];

/** Lista de cursores de mouse utilizados nos componentes/estilos */
export const cursor = [
  'default',
  'pointer',
  'not-allowed',
  'context-menu',
  'help',
  'progress',
  'wait',
  'cell',
  'crosshair',
  'text',
  'vertical-text',
  'alias',
  'copy',
  'all-scroll',
  'col-resize',
  'row-resize',
  'n-resize',
  'e-resize',
  's-resize',
  'w-resize',
  'ne-resize',
  'nw-resize',
  'se-resize',
  'sw-resize',
  'ew-resize',
  'ns-resize',
  'nesw-resize',
  'nwse-resize',
  'zoom-in',
  'zoom-out',
  'grab',
  'grabbing'
] as const;
/** Cursor de mouse utilizado nos estilos */
export type Cursor = typeof cursor[number];

/** Lista de tipos de resize utilizados nos componentes/estilos */
export const resize = [
  'none',
  /** default */
  'both',
  'horizontal',
  'vertical'
] as const;
/** Tipo de resize utilizado nos estilos */
export type Resize = typeof resize[number];
