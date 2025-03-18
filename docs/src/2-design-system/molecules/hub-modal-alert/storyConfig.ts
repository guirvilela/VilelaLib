import { HubModalAlert, HubModalAlertProps } from '@hubert/molecules';
import {
  BOOL,
  DISABLED,
  ELEMENT,
  EXTENDS,
  factoryMeta,
  FUNCTION,
  TEXT
} from '~/utils';

export const HubModalAlertConfig = factoryMeta<HubModalAlertProps>({
  title: 'Design System/Molecules/HubModalAlert',
  component: HubModalAlert,
  description: 'import { HubModalAlert } from "@hubert/molecules";',
  args: {
    title: TEXT.Title,
    content: TEXT.Paragraph,
    message: TEXT.Subtitle,
    labelCancel: TEXT.Button,
    labelDone: TEXT.Button,
    status: 'error'
  },
  props: {
    extends: EXTENDS('Atoms/HubModal', 'Atoms/HubAlert'),
    opened: BOOL(),
    status: {
      description: 'Tipo do status, muda cor e icone',
      options: ['success', 'error', 'warning', 'info'],
      type: 'inline-radio',
      typeLabel: 'HubStatus',
      typeDetail: `import { HubStatus } from "@hubert/molecules";`
    },
    message: ELEMENT('Elemento/texto utilizado como conteudo do alerta'),
    content: ELEMENT('Elemento/texto utilizado no conteudo do modal'),
    labelCancel: ELEMENT(
      'Elemento/texto utilizado no botão de cancelar/negação'
    ),
    onClose: FUNCTION(
      'Função utilizada no onclick do botão de cancelar/negação'
    ),
    labelDone: ELEMENT('Elemento/texto utilizado no botão de confirmação'),
    onDone: FUNCTION('Função utilizada no onclick do botão de confirmação'),
    loading: BOOL('Desativa e mostra o spinner no botão de ação'),
    disabled: DISABLED('Desativa o botão de ação')
  }
});
