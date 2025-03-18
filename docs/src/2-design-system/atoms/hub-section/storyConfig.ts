import { HubSection, HubSectionProps } from '@hubert/atoms';
import { CHILDREN, ELEMENT, factoryMeta, PADDING, TEXT } from '~/utils';

export const HubSectionConfig = factoryMeta<HubSectionProps>({
  title: 'Design System/Atoms/HubSection',
  component: HubSection,
  description: 'import { HubSection } from "@hubert/atoms";',
  args: {
    title: TEXT.Title
  },
  props: {
    title: ELEMENT(
      'Elemento posicionado como titulo da section (pode ser string)'
    ),
    pad: PADDING(),
    children: CHILDREN('Elemento posicionado como conteudo da section')
  }
});
