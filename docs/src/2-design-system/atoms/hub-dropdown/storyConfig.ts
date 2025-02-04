import { HubDropdown, HubDropdownProps } from '@hubert/atoms';
import {
  BOOL,
  factoryMeta,
  FUNCTION,
  HEIGHT,
  LIST_OF,
  VALUE,
  WIDTH
} from '~/utils';

export const HubDropdownConfig = factoryMeta<HubDropdownProps>({
  title: 'Design System/Atoms/HubDropdown',
  component: HubDropdown,
  description: 'import { HubDropdown } from "@hubert/atoms";',
  transformSource: () => {
    return `
{/*
Single option: selectedValue === string | number | T
Multiple: selectedValue === Array of string | number | T
*/}
<HubDropdown
items={itemsList}
value={selectedValue}
onChange={(v) => setSelectedValue(v)}
>
{(label) => (
<HubTextField
  id="field-a"
  placeholder="Lorem to ipsum"
  value={label}
  right={<HubDropdownIcon />}
  readOnly
  required
>
  Lorem to ipsum
</HubTextField>
)}
</HubDropdown>
    `;
  },
  args: {},
  props: {
    opened: BOOL(),
    disabled: BOOL(),
    position: LIST_OF<'top' | 'bottom' | 'above'>('top|bottom|above', [
      'top',
      'bottom',
      'above'
    ]),
    width: WIDTH(),
    height: HEIGHT(),
    items: LIST_OF('T'),
    keyLabel: {
      description:
        'Nome da prop no objeto que sera utilizada para mostrar como label.',
      type: 'none',
      typeLabel: 'string | ((item: T) => string | React.ReactNode)'
    },
    keyValue: {
      description:
        'Nome da prop no objeto que sera utilizada para comparar com o value selecionado, não precisa informar caso o value seja um objeto complexo (utilizar "compareKey").',
      type: 'none',
      typeLabel: 'string | ((item: T) => V)'
    },
    keySearch: {
      description:
        'Nome da prop no objeto que sera utilizada para realizar a pesquisa ao digitar.',
      type: 'none',
      typeLabel: 'string | ((item: T) => string)'
    },
    compareKey: {
      description:
        'Nome da prop no objeto que sera utilizada para comparar com o value selecionado, caso o value seja um objeto complexo.',
      type: 'none',
      typeLabel: 'string | ((item: T) => V)'
    },
    value: VALUE(),
    onOpen: FUNCTION(),
    onClose: FUNCTION(),
    onChange: {
      description: 'Dispara ao seleciona um item no dropdown.',
      type: 'none',
      typeLabel: '(value: V, index: number, item: T) => void'
    },
    children: {
      description: 'Dispara ao seleciona um item no dropdown.',
      type: 'none',
      typeLabel:
        '(label: string, search: (v: string) => void) => React.ReactNode | React.ReactNode[]'
    }
  }
});
