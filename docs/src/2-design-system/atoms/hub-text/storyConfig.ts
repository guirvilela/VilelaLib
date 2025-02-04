import { HubText, HubTextProps } from '@hubert/atoms';
import {
  Align,
  align,
  FontStyle,
  fontStyle,
  FontWeight,
  TextDecoration,
  textDecoration,
  TextTransform,
  textTransform,
  Typo,
  typoList,
  weightList
} from '@hubert/styles';
import {
  BOOL,
  CHILDREN,
  COLOR,
  COLOR_LEVEL,
  factoryMeta,
  LIST_OF,
  NOWRAP,
  NUMBER,
  STRING
} from '~/utils';

export const HubTextConfig = factoryMeta<HubTextProps>({
  title: 'Design System/Atoms/HubText',
  component: HubText,
  description: 'import { HubText } from "@hubert/atoms";',
  args: {},
  props: {
    typo: LIST_OF<Typo>('Typo', Array.from(typoList)),
    weight: LIST_OF<FontWeight>('FontWeight', Array.from(weightList)),
    align: LIST_OF<Align>('Align', Array.from(align)),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    nowrap: NOWRAP(),
    prewrap: BOOL('Força o texto não quebrar linha entre espaços'),
    title: STRING(
      'Texto apresentando em formato de tooltip nativo, sem cortes (html `title` prop)'
    ),
    decoration: LIST_OF<TextDecoration>(
      'TextDecoration',
      Array.from(textDecoration)
    ),
    spacing: STRING('css font spacing'),
    size: {
      description: 'Tamanho da font (font-size)',
      typeLabel: 'Space',
      typeDetail: 'import { Space } from "@hubert/styles";'
    },
    height: {
      description: 'Tamanho da linha (line-height)',
      typeLabel: 'Space',
      typeDetail: 'import { Space } from "@hubert/styles";'
    },
    max: NUMBER(
      'Tamanho maximo que o texto será apresentado, após o valor, o texto será cortado e substituido por três pontos.'
    ),
    fontStyle: LIST_OF<FontStyle>('FontStyle', Array.from(fontStyle)),
    transform: LIST_OF<TextTransform>(
      'TextTransform',
      Array.from(textTransform)
    ),
    children: CHILDREN('Texto a ser apresentado')
  }
});
