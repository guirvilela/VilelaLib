import {
  HubCard,
  HubGrid,
  HubPagination,
  HubPaginationProps,
  HubTable
} from '@hubert/atoms';
import { usePagination } from '@hubert/shared';
import React from 'react';

import { hubTableColumns } from '../hub-table/storyConfig';
import { HubPaginationConfig } from './storyConfig';

export const Default = (args: HubPaginationProps) => {
  return <HubPagination {...args} />;
};

const hubTableData = [
  {
    propA: 'value A 1',
    propB: 'value B 1',
    propC: 'value C 1'
  },
  {
    propA: 'value A 2',
    propB: 'value B 2',
    propC: 'value C 2'
  },
  {
    propA: 'value A 3',
    propB: 'value B 3',
    propC: 'value C 3'
  },
  {
    propA: 'value A 4',
    propB: 'value B 4',
    propC: 'value C 4'
  },
  {
    propA: 'value A 5',
    propB: 'value B 5',
    propC: 'value C 5'
  },
  {
    propA: 'value A 6',
    propB: 'value B 6',
    propC: 'value C 6'
  },
  {
    propA: 'value A 7',
    propB: 'value B 7',
    propC: 'value C 7'
  },
  {
    propA: 'value A 8',
    propB: 'value B 8',
    propC: 'value C 8'
  },
  {
    propA: 'value A 9',
    propB: 'value B 9',
    propC: 'value C 9'
  },
  {
    propA: 'value A 10',
    propB: 'value B 10',
    propC: 'value C 10'
  },
  {
    propA: 'value A 11',
    propB: 'value B 11',
    propC: 'value C 11'
  },
  {
    propA: 'value A 12',
    propB: 'value B 12',
    propC: 'value C 12'
  },
  {
    propA: 'value A 13',
    propB: 'value B 13',
    propC: 'value C 13'
  },
  {
    propA: 'value A 14',
    propB: 'value B 14',
    propC: 'value C 14'
  },
  {
    propA: 'value A 15',
    propB: 'value B 15',
    propC: 'value C 15'
  },
  {
    propA: 'value A 16',
    propB: 'value B 16',
    propC: 'value C 16'
  },
  {
    propA: 'value A 17',
    propB: 'value B 17',
    propC: 'value C 17'
  }
];

export const WithTable = (args: HubPaginationProps) => {
  const {
    data,
    currentPage,
    totalItems,
    pageSize,
    onChange,
    onChangePageSize
  } = usePagination({
    source: hubTableData,
    initialPageSize: 3
  });

  return (
    <HubCard color="white" pad="3">
      <HubGrid align="center" gap="3">
        <HubTable columns={hubTableColumns} data={data as never} />
        <HubPagination
          {...args}
          current={currentPage}
          pageSize={pageSize}
          totalItems={totalItems}
          onChange={onChange}
          onChangePageSize={onChangePageSize}
        />
      </HubGrid>
    </HubCard>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const xAccumulate = (args: HubPaginationProps) => {
  const { data, onAccumulate } = usePagination({
    source: hubTableData,
    initialPageSize: 5
  });

  return (
    <HubCard color="white" pad="3">
      <HubGrid align="center" gap="3">
        <HubTable
          columns={hubTableColumns}
          data={data as never}
          height="120px"
          onLoadMore={onAccumulate}
        />
      </HubGrid>
    </HubCard>
  );
};

export default HubPaginationConfig;
