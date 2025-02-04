import { HubGrid, HubGridProps } from '@hubert/atoms';
import {
  Align,
  align,
  Col,
  displayPosition,
  DisplayPosition,
  gridList,
  MediaQuery,
  overflow,
  Overflow
} from '@hubert/styles';
import {
  BOOL,
  CHILDREN,
  factoryMeta,
  GAP,
  HEIGHT,
  LAYER,
  LIST_OF,
  NUMBER,
  PADDING,
  STRING,
  WIDTH
} from '~/utils';

export const HubGridConfig = factoryMeta<HubGridProps>({
  title: 'Design System/Atoms/HubGrid',
  component: HubGrid,
  description: 'import { HubGrid } from "@hubert/atoms";',
  args: {
    row: true,
    cols: ['6', '4', '2'],
    filled: true,
    gap: '3'
  },
  props: {
    row: BOOL('Flex row ou column (default)'),
    filled: BOOL('Adiciona width 100%'),
    fluid: BOOL('Adiciona margin auto'),
    flex: BOOL(
      'Adiciona flex 1, pode ser utilizado para preencher automaticamente outros elementos flex-box'
    ),
    spacer: BOOL(
      'Similar ao `spacer`, pode ser utilizado como espaçador entre dois elemento dentro de um grid container'
    ),
    block: BOOL('Força o display block'),
    align: LIST_OF<Align>('Align', Array.from(align)),
    justify: LIST_OF<Align | 'space-between' | 'space-around'>(
      'Align|space-between|space-around',
      [...Array.from(align), 'space-between', 'space-around']
    ),
    gap: GAP(),
    gutter: PADDING('Customize o padding negativo desse component'),
    pad: PADDING(),
    cols: LIST_OF<Col>('Col', Array.from(gridList)),
    width: WIDTH(),
    height: HEIGHT(),
    minHeight: HEIGHT(),
    maxHeight: HEIGHT(),
    overflow: LIST_OF<Overflow>('Overflow', Array.from(overflow)),
    layer: LAYER(),
    inset: STRING('Adiciona inset ao elemento'),
    position: LIST_OF<DisplayPosition>(
      'DisplayPosition',
      Array.from(displayPosition)
    ),
    responsive: LIST_OF<MediaQuery>('MediaQuery', [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      'xxl'
    ]),
    order: NUMBER('Adiciona order ao elemento'),
    rowStart: NUMBER('Adiciona row start ao elemento'),
    rowEnd: NUMBER('Adiciona row end ao elemento'),
    columnStart: NUMBER('Adiciona column start ao elemento'),
    columnEnd: NUMBER('Adiciona column end ao elemento'),
    rowSize: STRING('Adiciona grid-auto-rows ao elemento'),
    children: CHILDREN()
  }
});
