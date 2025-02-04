import { HubStatusAlert, HubStatusAlertProps } from '@hubert/molecules';
import { ELEMENT, factoryMeta, FUNCTION, NUMBER, TEXT } from '~/utils';

export const HubStatusAlertConfig = factoryMeta<HubStatusAlertProps>({
  title: 'Design System/Molecules/HubStatusAlert',
  component: HubStatusAlert,
  description: 'import { HubStatusAlert } from "@hubert/molecules";',
  args: {
    message: TEXT.Subtitle,
    status: 'error'
  },
  props: {
    status: {
      description: 'Tipo do status, muda cor e icone',
      options: ['success', 'error', 'warning', 'info'],
      type: 'inline-radio',
      typeLabel: 'HubStatus',
      typeDetail: `import { HubStatus } from "@hubert/molecules";`
    },
    message: ELEMENT('Elemento/texto utilizado como conteudo do alerta'),
    timeout: NUMBER(
      'Milisegundos utilizado para fechar automaticamente o alerta (dispara `onCloseMsg`)'
    ),
    onCloseMsg: FUNCTION(
      'Disparado ao fechar o alerta clicando no X ou quando tiver o `timeout` habilitado'
    )
  }
});
