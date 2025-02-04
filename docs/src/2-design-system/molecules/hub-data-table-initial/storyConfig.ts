import {
  HubDataTableInitial,
  HubDataTableInitialProps
} from '@hubert/molecules';
import { BOOL, COLOR, factoryMeta, PADDING, SIZE, STRING, TEXT } from '~/utils';

export const HubDataTableInitialConfig = factoryMeta<HubDataTableInitialProps>({
  title: 'Design System/Molecules/HubDataTableInitial',
  component: HubDataTableInitial,
  description: 'import { HubDataTableInitial } from "@hubert/molecules";',
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
