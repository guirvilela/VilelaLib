import { HubYesNo, HubYesNoProps } from '@hubert/organisms';
import { BOOL, ELEMENT, EXTENDS, factoryMeta, FUNCTION, STRING } from '~/utils';

export const HubYesNoConfig = factoryMeta<HubYesNoProps>({
  title: 'Design System/Organisms/HubYesNo',
  component: HubYesNo,
  description: 'import { HubYesNo } from "@hubert/organisms";',
  args: {},
  props: {
    extends: EXTENDS('Molecules/HubModalAlert'),
    opened: BOOL(),
    action: {
      description:
        '`Http` action, utilizamos as props error, success, loading para mostrar os alerts',
      typeLabel: 'Action',
      typeDetail: `import { Action } from '@hubert/http';`
    },
    labelCancel: ELEMENT(
      'Elemento/texto utilizado no botão de cancelar/negação'
    ),
    onClose: FUNCTION(
      'Função utilizada no onclick do botão de cancelar/negação'
    ),
    labelDone: ELEMENT('Elemento/texto utilizado no botão de confirmação'),
    onDone: FUNCTION('Função utilizada no onclick do botão de confirmação'),
    value: STRING(
      'Habilita e utiliza como valor do textarea utilizado para o usuario inserir algum texto (ex: motivo de edição ou remoção de um recurso)'
    ),
    placeholder: STRING(
      'Placeholder do textarea utilizado para o usuario inserir algum texto (ex: motivo de edição ou remoção de um recurso)'
    ),
    onChange: FUNCTION(
      'Disparado quando mudar o valor do textarea utilizado para o usuario inserir algum texto (ex: motivo de edição ou remoção de um recurso)'
    )
  }
});
