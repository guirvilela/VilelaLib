import { HubIcon, HubIconProps } from '@hubert/atoms';
import { replaceAll, titleCase } from '@hubert/shared';
import {
  BG_COLOR,
  BG_COLOR_LEVEL,
  COLOR,
  COLOR_LEVEL,
  factoryMeta,
  HEIGHT,
  NUMBER,
  PADDING,
  SIZE,
  WIDTH
} from '~/utils';
import allIcons from './icons';

export const HubIconConfig = factoryMeta<HubIconProps>({
  title: 'Design System/Atoms/HubIcon',
  component: HubIcon,
  description: `
    import { HubIcon } from "@hubert/atoms";
    import IconName from '@hubert/styles/lib/icons/<icon-name>.svg';
  `,
  transformSource: (snippet, ctx) => {
    if (ctx.name === 'Default') {
      const el = document.getElementById(`story--${ctx.id}`);
      const iconName = el?.children?.[0]?.children?.[1]?.['title'];
      return String(snippet)
        .split('\n')
        .filter((row) => !row.includes('RemoveElement'))
        .map((row) => {
          row = replaceAll(
            row,
            'icon={() => {}}',
            `icon={${titleCase(iconName)}}`
          );
          row = replaceAll(
            row,
            'function noRefCheck() {}',
            `${titleCase(iconName)}`
          );
          row = replaceAll(
            row,
            'function noRefCheck(){}',
            `${titleCase(iconName)}`
          );
          row = replaceAll(row, `title="${iconName}"`, '');
          row = row.replace(`  `, '');
          return row;
        })
        .filter((row) => !!replaceAll(row, ' ', ''))
        .join('\n');
    }
    return snippet;
  },
  args: {
    size: 'lg',
    color: 'primary'
  },
  props: {
    size: SIZE(),
    width: WIDTH(),
    height: HEIGHT(),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    bgColor: BG_COLOR(),
    bgColorLevel: BG_COLOR_LEVEL(),
    pad: PADDING(),
    rotate: NUMBER(),
    icon: {
      options: Object.keys(allIcons),
      type: 'select',
      defaultValue: 'icon-outline-add-new',
      description: 'SVG Icon',
      typeLabel: 'HubIconSvg',
      typeDetail: `import { HubIconSvg } from '@hubert/atoms';`
    }
  }
});
