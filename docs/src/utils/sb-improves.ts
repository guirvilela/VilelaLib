import { Meta } from '@storybook/react';

export type PropType =
  | 'select'
  | 'text'
  | 'boolean'
  | 'object'
  | 'inline-radio'
  | 'none';

function factoryDefaultValue(control: PropType) {
  switch (control) {
    // case 'boolean':
    //   return false;
    case 'text':
      return '';
    default:
      return undefined;
  }
}

function factoryTypeLabel(control: PropType) {
  switch (control) {
    case 'boolean':
      return 'Boolean';
    case 'object':
      return 'Object';
    case 'text':
      return 'String';
    case 'none':
      return 'None';
    default:
      return 'List';
  }
}

function factoryValueLabel(control: PropType) {
  switch (control) {
    case 'boolean':
      return 'false';
    default:
      return 'empty';
  }
}

export interface PropsType<T> {
  description: string;
  type?: PropType;
  defaultValue?: T;
  typeLabel?: string;
  typeDetail?: string;
  valueLabel?: string;
  valueDetail?: string;
  options?: readonly T[];
}

export interface MetaProps<T> {
  /**
   * Storybook meta title (caminho e nome da story no menu)
   * @example
   * title: 'Design System/Atoms/HubAlert'
   */
  title?: string;
  /**
   * Componente React (não pode ser o jsx, passar somente a função direta sem executa-lá)
   * @example
   * title: HubAlert
   */
  component?: React.ComponentType<T>;
  /**
   * Descrição de como realizar o importe do componente
   * @example
   * component: 'import { HubAlert } from "@hubert/atoms";'
   */
  description?: string;
  /** Função que modifica parte do exemplo de codigo gerado pelo storybook (pode fazer replace de algum parte) */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformSource?: (snippet: string, ctx: any) => string;
  /** Objeto com os valores iniciais da propriedades do componente */
  args: Partial<T>;
  /** Objeto com as definições das propriedades do componente */
  props: Record<keyof T, PropsType<T[keyof T]>> & {
    extends?: PropsType<never>;
  };
}

export function factoryMeta<T>({
  title,
  component,
  description,
  transformSource,
  args,
  props
}: MetaProps<T>): Meta<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {
    args,
    argTypes: Object.keys(props).reduce((acc, x) => {
      acc[x] = {
        defaultValue:
          props[x].defaultValue || factoryDefaultValue(props[x].type),
        description: props[x].description,
        table: {
          type: {
            summary: props[x].typeLabel || factoryTypeLabel(props[x].type),
            detail: props[x].typeDetail
          },
          defaultValue: {
            summary: props[x].valueLabel || factoryValueLabel(props[x].type),
            detail: props[x].valueDetail
          }
        },
        control: props[x].type || 'none',
        options: props[x].options
      };
      return acc;
    }, {})
  };

  if (title) {
    result.title = title;
  }
  if (component) {
    result.component = component;
  }
  if (description) {
    result.parameters = {
      docs: {
        description: {
          component: `
    ${description}
        `
        },
        transformSource
      }
    };
  } else if (transformSource) {
    result.parameters = {
      docs: {
        transformSource
      }
    };
  }

  return result;
}
