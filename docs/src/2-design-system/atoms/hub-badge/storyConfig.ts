import { HubBadge, HubBadgeProps } from '@hubert/atoms';
import {
  BOOL,
  CHILDREN,
  COLOR,
  COLOR_LEVEL,
  factoryMeta,
  HEIGHT,
  PADDING,
  RADIUS,
  SIZE,
  STRING,
  TEXT,
  TEXT_COLOR,
  TEXT_COLOR_LEVEL,
  WIDTH
} from '~/utils';

export const HubAlertConfig = factoryMeta<HubBadgeProps>({
  title: 'Design System/Atoms/HubBadge',
  component: HubBadge,
  description: 'import { HubBadge } from "@hubert/atoms";',
  args: {
    children: TEXT.Title
  },
  props: {
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    textColor: TEXT_COLOR(),
    textColorLevel: TEXT_COLOR_LEVEL(),
    radius: RADIUS(),
    pad: PADDING(),
    rounded: BOOL('Efeito arredondado, radius 50%'),
    float: BOOL('Ativa o modo "float"'),
    content: STRING('Conteudo do badge em modo "float"'),
    size: SIZE(),
    width: WIDTH(),
    height: HEIGHT(),
    position: {
      description: 'Ajuste da posição quando em modo "float"',
      type: 'text',
      typeLabel: 'Space|[Space,Space]',
      typeDetail: `import { Space } from '@hubert/styles';`
    },
    children: CHILDREN()
  }
});
