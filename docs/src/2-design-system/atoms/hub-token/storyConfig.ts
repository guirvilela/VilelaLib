import { HubToken, HubTokenProps } from '@hubert/atoms';
import { Typo, typoList } from '@hubert/styles';
import {
  BG_COLOR,
  BG_COLOR_LEVEL,
  BOOL,
  BORDER_COLOR,
  BORDER_COLOR_LEVEL,
  COLOR,
  COLOR_LEVEL,
  factoryMeta,
  LIST_OF,
  NUMBER,
  ON_CHANGE,
  VALUE
} from '~/utils';

export const HubTokenConfig = factoryMeta<HubTokenProps>({
  title: 'Design System/Atoms/HubToken',
  component: HubToken,
  description: 'import { HubToken } from "@hubert/atoms";',
  args: {},
  props: {
    length: NUMBER('Quantidade de char que pode ser inserido'),
    onlyNumber: BOOL('Só permite inserir numeros'),
    typo: LIST_OF<Typo>('Typo', Array.from(typoList)),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    borderColor: BORDER_COLOR(),
    borderColorLevel: BORDER_COLOR_LEVEL(),
    bgColor: BG_COLOR(),
    bgColorLevel: BG_COLOR_LEVEL(),
    value: VALUE(),
    onChange: ON_CHANGE()
  }
});
