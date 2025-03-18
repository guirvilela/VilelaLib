import { HubAvatar, HubAvatarProps } from '@hubert/atoms';
import { getInitials } from '@hubert/shared';
import {
  BOOL,
  COLOR,
  COLOR_LEVEL,
  factoryMeta,
  FUNCTION,
  SIZE,
  SOURCE,
  STRING,
  TYPO
} from '~/utils';

export const HubAvatarConfig = factoryMeta<HubAvatarProps>({
  title: 'Design System/Atoms/HubAvatar',
  component: HubAvatar,
  description: `import { HubAvatar } from "@hubert/atoms";`,
  args: {
    initials: getInitials('Joe doe')
  },
  props: {
    src: SOURCE(),
    initials: STRING(''),
    typo: TYPO(),
    size: SIZE(),
    borderless: BOOL('Se TRUE não aplica borda'),
    color: COLOR('Cor de fundo'),
    colorLevel: COLOR_LEVEL('Nivel da cor de fundo'),
    colorText: COLOR('Cor dos textos'),
    colorTextLevel: COLOR_LEVEL('Nivel cor dos textos'),
    alt: STRING('Texto alternativo, nativo do html'),
    onClick: FUNCTION()
  }
});
