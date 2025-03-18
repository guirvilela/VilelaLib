import { HubForm, HubFormProps } from '@hubert/atoms';
import { CHILDREN, factoryMeta, FUNCTION, GAP } from '~/utils';

export const HubFormConfig = factoryMeta<HubFormProps>({
  title: 'Design System/Atoms/HubForm',
  component: HubForm,
  description: 'import { HubForm } from "@hubert/atoms";',
  args: {},
  props: {
    gap: GAP(),
    onSubmit: FUNCTION(undefined, 'HTMLFormElement'),
    children: CHILDREN()
  }
});
