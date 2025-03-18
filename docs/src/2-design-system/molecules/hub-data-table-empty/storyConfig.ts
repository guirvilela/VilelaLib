import { HubDataTableEmpty, HubDataTableEmptyProps } from '@hubert/molecules';
import { BOOL, COLOR, factoryMeta, PADDING, SIZE, STRING, TEXT } from '~/utils';

export const HubDataTableEmptyConfig = factoryMeta<HubDataTableEmptyProps>({
  title: 'Design System/Molecules/HubDataTableEmpty',
  component: HubDataTableEmpty,
  description: 'import { HubDataTableEmpty } from "@hubert/molecules";',
  args: {
    title: TEXT.Title,
    content: TEXT.Line
  },
  props: {
    title: STRING('Customiza o texto do titulo (opcional)'),
    content: STRING('Customiza o texto do conteudo da mensagem (opcional)'),
    horizontal: BOOL('Muda a orientação do titulo de conteudo'),
    color: COLOR(),
    size: SIZE(),
    pad: PADDING()
  }
});
