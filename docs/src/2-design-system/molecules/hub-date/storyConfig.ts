import { HubCalendarMode } from '@hubert/atoms';
import { HubDate, HubDateProps } from '@hubert/molecules';
import {
  BOOL,
  DATE,
  EXTENDS,
  HEIGHT,
  ID,
  LIST_OF,
  ON_CHANGE,
  WIDTH,
  factoryMeta
} from '~/utils';

export const HubDateConfig = factoryMeta<HubDateProps>({
  title: 'Design System/Molecules/HubDate',
  component: HubDate,
  description: 'import { HubDate } from "@hubert/molecules";',
  args: {},
  props: {
    extends: EXTENDS('Atoms/HubTextField', 'Atoms/HubCalendar'),
    id: ID(),
    editable: BOOL(
      'Se false não permite digitar no input, somente selecionar no HubCalendar',
      true
    ),
    width: WIDTH(),
    height: HEIGHT(),
    headless: BOOL('Deixa o calendario sem o header (btn avançar e volta)'),
    initialMode: LIST_OF<HubCalendarMode>('HubCalendarMode', [
      'days',
      'months',
      'years'
    ]),
    mandatoryMode: BOOL(
      'Bloqueia outros modos, deixam possivel somente visualizar o calendario utilizando o "initialMode"'
    ),
    range: BOOL('Selecione sempre duas datas, inicio e fim'),
    withActions: BOOL('Mostra o rodapé do calendario com as ações'),
    value: DATE(),
    onChange: ON_CHANGE(undefined, 'ISODate')
  }
});
