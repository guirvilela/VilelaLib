import { HubAnimation, HubAnimationProps } from '@hubert/atoms';
import { replaceAll, titleCase } from '@hubert/shared';
import { BOOL, factoryMeta, HEIGHT, SIZE, WIDTH } from '~/utils';
import data from './data';

export const HubAnimationConfig = factoryMeta<HubAnimationProps>({
  title: 'Design System/Atoms/HubAnimation',
  component: HubAnimation,
  description: `
    import { HubAnimation } from "@hubert/atoms";
    import AnimationName from '@hubert/styles/lib/animations/<animation-name>.json';
  `,
  args: {
    source: 'animation-error',
    width: '64px',
    height: '64px',
    loop: true
  },
  props: {
    source: {
      options: Object.keys(data),
      defaultValue: undefined,
      description: 'Animation Data',
      typeLabel: 'HubAnimationData',
      typeDetail: `import { HubAnimationData } from '@hubert/atoms';`,
      type: 'select'
    },
    autoplay: BOOL('Inicia a animação automaticamente'),
    loop: BOOL('Reproduz a animação em loop'),
    size: SIZE(),
    width: WIDTH(),
    height: HEIGHT()
  },
  transformSource: (snippet, ctx) => {
    if (ctx.name === 'Default') {
      const el = document.getElementById(`story--${ctx.id}`);
      const iconName = el?.children?.[0]?.children?.[1]?.['title'];
      return String(snippet)
        .replace(/source={{[^]*}}/gi, `source={${titleCase(iconName)}}`)
        .split('\n')
        .filter((row) => !row.includes('RemoveElement'))
        .map((row) => {
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
  }
});
