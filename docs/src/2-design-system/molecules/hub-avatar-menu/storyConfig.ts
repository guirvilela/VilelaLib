import { HubAvatarMenu, HubAvatarMenuProps } from '@hubert/molecules';
import {
  BG_COLOR,
  BG_COLOR_LEVEL,
  COLOR,
  COLOR_LEVEL,
  LIST_OF,
  TEXT,
  WIDTH,
  factoryMeta
} from '~/utils';

type HubAvatarMenuOptions = HubAvatarMenuProps['options'];

export const HubAvatarMenuConfig = factoryMeta<HubAvatarMenuProps>({
  title: 'Design System/Molecules/HubAvatarMenu',
  component: HubAvatarMenu,
  description: 'import { HubAvatarMenu } from "@hubert/molecules";',
  args: {
    name: TEXT.Subtitle,
    photo: '/assets/img/avatar.png',
    width: '128px'
  },
  props: {
    name: {
      description: 'Nome do usuario',
      type: 'text'
    },
    photo: {
      description: 'Url da foto do usuario',
      type: 'text'
    },
    width: WIDTH(),
    menuWidth: WIDTH(),
    bgColor: BG_COLOR(),
    bgColorLevel: BG_COLOR_LEVEL(),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    options: LIST_OF<HubAvatarMenuOptions>(`
    {
      icon?: HubIconSvg | undefined;
      label: string;
      href?: string | undefined;
      customElement?: ((item: React.ReactNode, index?: number | undefined) => React.ReactNode) | undefined;
      onClick?: (() => void) | undefined;
    }
    `)
  }
});
