import { HubFeedback, HubFeedbackProps } from '@hubert/molecules';
import {
  BOOL,
  ELEMENT,
  factoryMeta,
  FUNCTION,
  HEIGHT,
  TEXT,
  WIDTH
} from '~/utils';

export const HubFeedbackConfig = factoryMeta<HubFeedbackProps>({
  title: 'Design System/Molecules/HubFeedback',
  component: HubFeedback,
  description: 'import { HubFeedback } from "@hubert/molecules";',
  args: {
    title: TEXT.Title,
    content: TEXT.Paragraph,
    status: 'error',
    width: '420px'
  },
  props: {
    opened: BOOL(),
    status: {
      description: 'Tipo do status, muda cor e icone',
      options: ['success', 'error', 'warning', 'info'],
      type: 'inline-radio',
      typeLabel: 'HubStatus',
      typeDetail: `import { HubStatus } from "@hubert/molecules";`
    },
    title: ELEMENT('Componente/texto a ser inserido no header do modal'),
    content: ELEMENT('Componente/texto a ser inserido no conteudo do modal'),
    width: WIDTH(),
    height: HEIGHT(),
    onClose: FUNCTION(
      'Função utilizada no onclick do botão de cancelar/negação'
    ),
    okLabel: ELEMENT('Elemento/texto utilizado no botão de confirmação'),
    onOk: FUNCTION('Função utilizada no onclick do botão de confirmação'),
    actions: ELEMENT(
      'Elemento inserido no rodapé do modal, caso seja necessario ter outros botões'
    )
  }
});
