import { HubIconSvg } from '@hubert/atoms';
import {
  Color,
  ColorLevel,
  Space,
  Typo,
  colorLevels,
  colorsList,
  spacesList,
  typoList
} from '@hubert/styles';
import React from 'react';
import { PropsType } from './sb-improves';

export const RADIUS = (desc?: string): PropsType<Space> => ({
  description: desc || 'Customize o border-radius desse component',
  type: 'select',
  options: spacesList,
  typeLabel: 'Space',
  typeDetail: `import { Space } from '@hubert/styles';`
});

export const WIDTH = (desc?: string): PropsType<string> => ({
  description: desc || 'Customize o width desse component',
  type: 'text'
});

export const HEIGHT = (desc?: string): PropsType<string> => ({
  description: desc || 'Customize o height desse component',
  type: 'text'
});

export const SIZE = (desc?: string): PropsType<string> => ({
  description: desc || 'Customize o tamanho desse component (width e height)',
  type: 'text'
});

export const ID = (desc?: string): PropsType<string> => ({
  description: desc || 'É necessario adicionar um id a este component',
  type: 'text'
});

export const DATE = (desc?: string, range?: boolean): PropsType<string> => ({
  description: desc || 'Data em formato ISO aplicado a prop',
  type: 'text',
  typeLabel: range ? '[ISODate, ISODate]' : 'ISODate',
  typeDetail: `import { ISODate } from '@hubert/shared';`
});

export const DISABLED = (desc?: string): PropsType<boolean> => ({
  description: desc || 'Desabilita este component',
  type: 'boolean'
});

export const COLOR = (desc?: string): PropsType<Color> => ({
  description: desc || 'Customize a cor desse component',
  type: 'select',
  options: colorsList,
  typeLabel: 'Color',
  typeDetail: `import { Color } from '@hubert/styles';`
});

export const COLOR_LEVEL = (desc?: string): PropsType<ColorLevel> => ({
  description: desc || 'Customize o nivel da cor desse component',
  type: 'select',
  options: colorLevels,
  typeLabel: 'ColorLevel',
  typeDetail: `import { ColorLevel } from '@hubert/styles';`
});

export const TEXT_COLOR = (desc?: string): PropsType<Color> =>
  COLOR(desc || 'Customize a cor do texto desse component');

export const TEXT_COLOR_LEVEL = (desc?: string): PropsType<ColorLevel> =>
  COLOR_LEVEL(desc || 'Customize o nivel da cor do texto desse component');

export const BG_COLOR = (desc?: string): PropsType<Color> =>
  COLOR(desc || 'Customize a cor de fundo desse component');

export const BG_COLOR_LEVEL = (desc?: string): PropsType<ColorLevel> =>
  COLOR_LEVEL(desc || 'Customize o nivel da cor de fundo desse component');

export const BORDER_COLOR = (desc?: string): PropsType<Color> =>
  COLOR(desc || 'Customize a cor da borda desse component');

export const BORDER_COLOR_LEVEL = (desc?: string): PropsType<ColorLevel> =>
  COLOR_LEVEL(desc || 'Customize o nivel da cor da borda desse component');

export const TYPO = (desc?: string): PropsType<Typo> => ({
  description: desc || 'Customize o estilo de tipografia desse component',
  type: 'select',
  options: typoList,
  typeLabel: 'Typo',
  typeDetail: `import { Typo } from '@hubert/styles';`
});

export const PADDING = (desc?: string): PropsType<Space> => ({
  description: desc || 'Customize o padding desse component',
  type: 'object',
  options: spacesList,
  typeLabel: 'Space|Space[]',
  typeDetail: `import { Space } from '@hubert/styles';`
});

export const GAP = (desc?: string): PropsType<Space> => ({
  description:
    desc || 'Customize o gap entre os elementos dentro desse component',
  type: 'select',
  options: spacesList,
  typeLabel: 'Space',
  typeDetail: `import { Space } from '@hubert/styles';`
});

export const LAYER = (desc?: string): PropsType<number> => ({
  description: desc || 'Customize o zIndex/camada desse component',
  type: 'text',
  typeLabel: 'Number'
});

export const FUNCTION = (
  desc?: string,
  value?: string,
  returns?: string
): PropsType<never> => ({
  description:
    desc ||
    'Executa ao disparar o evento citado (ex: "onClick" será disparado ao clicar)',
  type: 'none',
  typeLabel: value
    ? `(v:${value}) => ${returns || 'void'}`
    : `() => ${returns || 'void'}`
});

export const ELEMENT = (desc?: string): PropsType<React.ReactNode> => ({
  description:
    desc ||
    `Componente inserido seguindo o nome da prop (ex: "left" será inserido no lado esquerdo)`,
  type: 'text',
  typeLabel: 'ReactNode'
});

export const CHILDREN = <T extends React.ReactNode>(
  desc?: string
): PropsType<T> => ({
  description:
    desc || 'Componente filho, consulte os exemplos para mais informações',
  type: 'none',
  typeLabel: 'ReactNode'
});

export const CHILDRENS = <T extends React.ReactNode>(
  desc?: string
): PropsType<T | T[]> => CHILDREN<T>(desc);

export const LIST_OF = <T>(typeLabel: string, list?: T[]): PropsType<T> => ({
  description: `Lista/Array de um tipo primitivo ou objeto, definição abaixo:`,
  type: list ? 'select' : 'none',
  typeLabel: typeLabel,
  options: list
});

export const VALUE = (desc?: string, value?: string): PropsType<never> => ({
  description: desc || 'O valor do estado atual do componente',
  type: 'none',
  typeLabel: value || 'T'
});

export const ON_CLICK = (desc?: string): PropsType<never> =>
  FUNCTION(desc || 'Função executada ao clicar no elemento');

export const ON_CHANGE = (desc?: string, value?: string): PropsType<never> =>
  FUNCTION(desc || 'Função executada ao mudar o valor do estado', value);

export const HUB_ICON_SVG = (desc?: string): PropsType<HubIconSvg> => ({
  description: desc || 'Função executada ao mudar o valor do estado',
  type: 'none',
  typeLabel: 'HubIconSvg',
  typeDetail: `import { HubIconSvg } from '@hubert/atoms';`
});

export const BOOL = (desc?: string, initial?: boolean): PropsType<boolean> => ({
  description: desc || 'Ative ou desative o estado citado na prop',
  type: 'boolean',
  defaultValue: initial
});

export const NOWRAP = (desc?: string, initial?: boolean): PropsType<boolean> =>
  BOOL(desc || 'Força o texto não quebrar linha entre espaços', initial);

export const STRING = (desc?: string): PropsType<string> => ({
  description: desc || 'Texto aplicado a prop',
  type: 'text'
});

export const NUMBER = (desc?: string): PropsType<number> => ({
  description: desc || 'Numero aplicado a prop',
  type: 'text'
});

export const HREF = (desc?: string): PropsType<string> => ({
  description: desc || 'Url/link do destino',
  type: 'text'
});

export const SOURCE = (desc?: string): PropsType<string> => ({
  description: desc || 'Url da imagem',
  type: 'text'
});

export const OBJECT = (
  desc: string,
  typeLabel: string,
  packageName = 'atoms'
): PropsType<never> => ({
  description: desc,
  type: 'none',
  typeLabel,
  typeDetail: `import { ${typeLabel} } from '@hubert/${packageName}';`
});

/**
 * @param path String (caminho para o component estendido)
 *
 * @example
 * - EXTENDS('Atoms/HubAvatar')
 * - EXTENDS('Molecules/HubModalAlert')
 * - EXTENDS('Atoms/HubAvatar', 'Molecules/HubModalAlert')
 */
export const EXTENDS = (...path: string[]): PropsType<never> => {
  const links = path.map(
    (x) =>
      `<a href="/?path=/docs/design-system-${x
        .replace('/', '-')
        .toLowerCase()}--default">${x.split('/')[1]}</a>`
  );

  return {
    description: `Este componente possui propriedades estendida de outros components, mais detalhes em ${links.join(
      ', '
    )}.`,
    type: 'none',
    typeLabel: ''
  };
};
