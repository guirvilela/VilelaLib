import { HubCalendar, HubCalendarMode, HubCalendarProps } from '@hubert/atoms';
import {
  BOOL,
  CHILDREN,
  DATE,
  factoryMeta,
  LIST_OF,
  ON_CHANGE,
  SIZE,
  TYPO,
  WIDTH
} from '~/utils';

export const HubCalendarConfig = factoryMeta<HubCalendarProps>({
  title: 'Design System/Atoms/HubCalendar',
  component: HubCalendar,
  description: 'import { HubCalendar } from "@hubert/atoms";',
  args: {},
  props: {
    headless: BOOL('Remove o header do calendario'),
    initialMode: LIST_OF<HubCalendarMode>('HubCalendarMode', [
      'days',
      'months',
      'years'
    ]),
    mandatoryMode: BOOL(
      "Bloqueia outros modos do calendario, se 'initialMode' informado!"
    ),
    range: BOOL('Seleciona duas datas, de - até'),
    disabled: {
      description:
        'Desativa a seleção de datas, pode desativar tudo, um range de datas ou baseado em logica.',
      type: 'boolean',
      typeLabel: 'boolean | ISODate[] | ((date: ISODate) => boolean)'
    },
    events: {
      description:
        'Adiciona detalhes em uma ou mais datas, tooltip e cores diferentes.',
      type: 'none',
      typeLabel: 'HubCalendarEvent[] | ((date: ISODate) => HubCalendarEvent)',
      typeDetail: 'import { HubCalendarEvent } from "@hubert/atoms";'
    },
    previousDisabled: BOOL('Desabilita o botão de voltar o mês, ano'),
    nextDisabled: BOOL('Desabilita o botão de avançar o mês, ano'),
    size: SIZE(),
    typo: TYPO(),
    typoHeader: TYPO(),
    min: DATE(),
    max: DATE(),
    withActions: BOOL(),
    width: WIDTH(),
    value: DATE(undefined, true),
    onChange: ON_CHANGE('Dispara ao clicar em uma data', 'ISODate[]'),
    onCalendarChange: ON_CHANGE(
      'Dispara ao mudar a data no calendario, mas sem clicar (avançar, outros eventos)',
      'ISODate'
    ),
    children: CHILDREN('Elemento posicionado no rodapé do calendario')
  }
});
