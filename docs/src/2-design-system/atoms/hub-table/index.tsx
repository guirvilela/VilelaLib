import {
  HubButton,
  HubIcon,
  HubTable as HubTableComponent,
  HubTableProps,
  HubTableRow
} from '@hubert/atoms';
import IconMenu from '@hubert/styles/lib/icons/icon-outline-horizontal-menu.svg';
import React from 'react';
import styled from 'styled-components';
import { TEXT } from '~/utils';
import {
  HubTableConfig,
  hubTableCompleteColumns,
  hubTableData
} from './storyConfig';

const HubTable = styled(HubTableComponent)`
  background-color: white;
`;

export const Default = (args: HubTableProps) => {
  return <HubTable {...args} />;
};

export const ColumnsConfig = (args: HubTableProps) => {
  return <HubTable {...args} columns={hubTableCompleteColumns as never} />;
};

const hubTableActionsColumns = [
  [
    {
      label: TEXT.Title,
      key: 'propA'
    },
    {
      label: TEXT.Title,
      key: 'propB'
    },
    {
      label: '',
      key: 'propC',
      align: 'end',
      render: () => (
        <HubButton variant="icon">
          <HubIcon icon={IconMenu} />
        </HubButton>
      )
    }
  ]
];

export const Actions = (args: HubTableProps) => {
  return <HubTable {...args} columns={hubTableActionsColumns as never} />;
};

export const WithBorder = (args: HubTableProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (hubTableData as HubTableRow<any>[]).map((x) => ({
    ...x,
    configs:
      x.propA === 'value A 3'
        ? {
            borderColor: 'warning',
            borderColorLevel: '500',
            accentColor: 'warning',
            accentColorLevel: '500'
          }
        : undefined
  }));
  return (
    <HubTable
      {...args}
      data={data}
      configs={{
        borderless: true
      }}
      rowConfigs={{
        gap: '2',
        borderColor: 'neutral',
        borderColorLevel: '300'
      }}
    />
  );
};

export const WithFooter = (args: HubTableProps) => {
  return (
    <HubTable
      {...args}
      columns={hubTableCompleteColumns as never}
      height="180px"
      foots={[
        {
          propA: 'Total',
          propB: '',
          propC: '1000'
        } as never
      ]}
    />
  );
};

export default HubTableConfig;
