import { HubCard, HubCardProps, HubGrid, HubTable } from '@hubert/atoms';
import React from 'react';
import { TEXT } from '~/utils';
import { hubTableColumns, hubTableData } from '../hub-table/storyConfig';
import { HubCardConfig } from './storyConfig';

export const Default = (args: HubCardProps) => {
  return <HubCard {...args}>{TEXT.Paragraph}</HubCard>;
};

export const Accent = (args: HubCardProps) => {
  return (
    <HubCard {...args} color="white" accent="info">
      {TEXT.Paragraph}
    </HubCard>
  );
};

export const Borderless = (args: HubCardProps) => {
  return (
    <HubCard {...args} color="info" colorLevel="200" borderless>
      {TEXT.Paragraph}
    </HubCard>
  );
};

export const WithTable = (args: HubCardProps) => {
  return (
    <HubCard {...args} color="white">
      <HubTable columns={hubTableColumns} data={hubTableData as never} />
    </HubCard>
  );
};

export const WithGrid = (args: HubCardProps) => {
  return (
    <HubGrid gap="3">
      <HubGrid gap="3" cols={['8', '4']}>
        <HubCard {...args} pad="3" color="info" colorLevel="200" height="100%">
          {TEXT.Paragraph}
        </HubCard>
        <HubCard
          {...args}
          pad="3"
          color="success"
          colorLevel="200"
          height="100%"
          borderless
        >
          {TEXT.Line}
        </HubCard>
      </HubGrid>
      <HubGrid gap="3" cols={['4', '8']}>
        <HubCard
          {...args}
          pad="3"
          color="imoveis"
          colorLevel="200"
          height="100%"
          borderless
        >
          {TEXT.Line}
        </HubCard>
        <HubCard
          {...args}
          pad="3"
          color="warning"
          colorLevel="200"
          height="100%"
        >
          {TEXT.Paragraph}
        </HubCard>
      </HubGrid>
    </HubGrid>
  );
};

export default HubCardConfig;
