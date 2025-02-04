import { HubTextField, HubTextFieldProps } from '@hubert/atoms';
import {
  Align,
  align,
  Autocomplete,
  autocomplete,
  InputType,
  inputType,
  Resize,
  resize,
  Typo,
  typoList
} from '@hubert/styles';
import {
  BG_COLOR,
  BG_COLOR_LEVEL,
  BOOL,
  BORDER_COLOR,
  BORDER_COLOR_LEVEL,
  COLOR,
  COLOR_LEVEL,
  DISABLED,
  ELEMENT,
  factoryMeta,
  FUNCTION,
  ID,
  LIST_OF,
  NOWRAP,
  NUMBER,
  ON_CHANGE,
  PADDING,
  STRING,
  TEXT,
  VALUE
} from '~/utils';

export const HubTextFieldConfig = factoryMeta<HubTextFieldProps>({
  title: 'Design System/Atoms/HubTextField',
  component: HubTextField,
  description: 'import { HubTextField } from "@hubert/atoms";',
  args: {
    id: '#',
    placeholder: TEXT.Title,
    children: TEXT.Label
  },
  props: {
    id: ID(),
    type: LIST_OF<InputType>('InputType', Array.from(inputType)),
    className: STRING('nome da classe css'),
    mask: STRING('Padrão utilizado para construir a mascara'),
    maskChar: BOOL('Altera os chars que simboliza a mascara do input'),
    noShowMask: BOOL('Não mostra os chars que simboliza a mascara do input'),
    title: STRING(
      'Texto apresentando em formato de tooltip nativo, sem cortes (html `title` prop)'
    ),
    placeholder: STRING('Texto utilizado como placeholder do input nativo'),
    required: BOOL(
      'Adiciona status required no input nativo e um indicador em vermelho na label'
    ),
    readOnly: BOOL(
      'Adiciona status readonly no input nativo e bloqueia os eventos de `onChange`'
    ),
    disabled: DISABLED(),
    noGap: BOOL(
      'Remove o gap entre elementos dentro do container (`left`, `after` e `right`)'
    ),
    clearable: BOOL(
      'Mostra btn X para limpar o input completamente, se tiver um valor valido'
    ),
    loading: BOOL('Mostra spinner a direita quando ativo'),
    autoFocus: BOOL('Input entra em foco ao ser renderizado'),
    wrap: NOWRAP(),
    rows: NUMBER('Quantidade de linhas quando o tipo for `TextArea`'),
    minLength: NUMBER('Quantidade minima quando o tipo for `text`'),
    maxLength: NUMBER('Quantidade maxima quando o tipo for `text`'),
    min: NUMBER('Quantidade minima quando o tipo for `number` ou `date`'),
    max: NUMBER('Quantidade maxima quando o tipo for `number` ou `date`'),
    step: NUMBER(
      'Numero que será somado ao valor quando o tipo for `number` e clicar nas setas'
    ),
    autocomplete: LIST_OF<Autocomplete>(
      'Autocomplete',
      Array.from(autocomplete)
    ),
    align: LIST_OF<Align>('Align', Array.from(align)),
    typo: LIST_OF<Typo>('Typo', Array.from(typoList)),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    borderColor: BORDER_COLOR(),
    borderColorLevel: BORDER_COLOR_LEVEL(),
    bgColor: BG_COLOR(),
    bgColorLevel: BG_COLOR_LEVEL(),
    placeholderColor: COLOR(),
    placeholderColorLevel: COLOR_LEVEL(),
    pad: PADDING(),
    value: VALUE('Valor do input, atualizado a cada inserção'),
    defaultValue: VALUE(
      'Valor do input, inserido no inicio, mas não modificado a cada inserção'
    ),
    error: STRING(
      'Texto apresentado no rodapé do input, tambem deixa a borda e texto em vermelho'
    ),
    resize: LIST_OF<Resize>('Resize', Array.from(resize)),
    onChange: ON_CHANGE('Dispara e envia o valor do input a cada inserção'),
    onLazyChange: ON_CHANGE(
      'Dispara e envia o valor do input após parar de digitar'
    ),
    onShowPicker: {
      description: 'Disparado ao clicar no icone de picker nativo',
      typeLabel: '(el: HTMLInputElement) => void'
    },
    onClick: {
      description: 'Disparado ao clicar no input',
      typeLabel: '(e: HubSource) => void'
    },
    onFocus: {
      description: 'Disparado quando o input ganhar foco',
      typeLabel: '(el: HTMLInputElement) => void'
    },
    onClear: FUNCTION(
      'Disparado ao limpar o texto, precisa ativar o `clearable`'
    ),
    containerRef: {
      description:
        'React prop `ref` do container do input (não é o elemento input)',
      typeLabel: '(el: HTMLDivElement) => void'
    },
    left: ELEMENT(
      'Elemento posicionado a esquerda do input (dentro do container)'
    ),
    right: ELEMENT(
      'Elemento posicionado a direita do input (dentro do container)'
    ),
    bottom: ELEMENT(
      'Elemento posicionado abaixo do input (dentro do container)'
    ),
    hint: ELEMENT(
      'Elemento/texto posicionado abaixo do input, utilizado como dica para o usuario (fora do container)'
    ),
    element: ELEMENT(
      'Elemento que substitui o input nativo, mas mantem o container'
    ),
    after: ELEMENT(
      'Elemento posicionado logo após o input, não alinhado a direita, apenas um espaço de distancia do input (dentro do container)'
    ),
    children: ELEMENT('Label do input')
  }
});
