import { HubProgressBar, HubProgressBarProps } from '@hubert/atoms';
import { BOOL, COLOR, COLOR_LEVEL, factoryMeta, HEIGHT, NUMBER } from '~/utils';

export const HubProgressBarConfig = factoryMeta<HubProgressBarProps>({
  title: 'Design System/Atoms/HubProgressBar',
  component: HubProgressBar,
  description: 'import { HubProgressBar } from "@hubert/atoms";',
  args: {},
  props: {
    percent: NUMBER('Representa o quanto a barra esta preenchida'),
    height: HEIGHT(),
    indeterminate: BOOL('Adiciona efeito de loop a barra'),
    shaped: BOOL('Remove borda arredondada'),
    mini: BOOL('Diminui o tamanho da barra'),
    play: BOOL('Adiciona efeito de 0 a 100% a barra'),
    playSeconds: BOOL(
      'Tempo que leva para chegar a 100% automatica (se `play` = true)'
    ),
    display: BOOL('Mostra label com o numero do percentual atual'),
    bgColorless: BOOL('Remove cor de fundo da barra'),
    color: COLOR(),
    colorLevel: COLOR_LEVEL()
  }
});
