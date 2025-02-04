import { HubButton, HubButtonProps } from '@hubert/atoms';
import {
  Cursor,
  cursor,
  Target,
  target,
  Type,
  type,
  Variant,
  variant
} from '@hubert/styles';
import {
  BG_COLOR,
  BG_COLOR_LEVEL,
  BOOL,
  BORDER_COLOR,
  BORDER_COLOR_LEVEL,
  CHILDREN,
  COLOR,
  COLOR_LEVEL,
  DISABLED,
  factoryMeta,
  FUNCTION,
  HREF,
  ID,
  LIST_OF,
  ON_CLICK,
  RADIUS,
  SIZE,
  TEXT
} from '~/utils';

export const HubButtonConfig = factoryMeta<HubButtonProps>({
  title: 'Design System/Atoms/HubButton',
  component: HubButton,
  description: 'import { HubButton } from "@hubert/atoms";',
  args: {
    children: TEXT.Title
  },
  props: {
    id: ID(),
    link: BOOL('Troca element <button> por <a>'),
    full: BOOL('Preenche a linha, width 100%'),
    disabled: DISABLED(),
    loading: BOOL('Desativa e mostra o spinner'),
    size: SIZE(),
    href: HREF(),
    rounded: BOOL('Efeito arredondado, radius 50%'),
    noPadding: BOOL(),
    clickable: BOOL(
      'Se false desativa o evento de click, mas não aplica o efeito do disabled'
    ),
    noHover: BOOL(),
    bgHover: BOOL(),
    active: BOOL(),
    noHideLabel: BOOL(
      'Não esconde label ao adicionar outros efeito como o loading'
    ),
    radius: RADIUS(),
    type: LIST_OF<Type>('Type', Array.from(type)),
    target: LIST_OF<Target>('Target', Array.from(target)),
    variant: LIST_OF<Variant>('Variant', Array.from(variant)),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    bgColor: BG_COLOR(),
    bgColorLevel: BG_COLOR_LEVEL(),
    borderColor: BORDER_COLOR(),
    borderColorLevel: BORDER_COLOR_LEVEL(),
    cursor: LIST_OF<Cursor>('Cursor', Array.from(cursor)),
    dragTrigger: BOOL(),
    onClick: ON_CLICK(),
    onHover: FUNCTION('Dispara ao passar o mouse sobre o elemento'),
    children: CHILDREN('Label ou elementos a ser posicionado como filho')
  }
});
