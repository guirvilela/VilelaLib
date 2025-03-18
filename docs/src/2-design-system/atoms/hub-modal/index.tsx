import {
  HubButton,
  HubGrid,
  HubModal,
  HubModalProps,
  HubTable,
  HubText,
  HubTextField
} from '@hubert/atoms';
import React from 'react';
import { TEXT } from '~/utils';
import { hubTableColumns, hubTableData } from '../hub-table/storyConfig';
import { HubModalConfig } from './storyConfig';

export const Default = (args: HubModalProps) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <HubButton onClick={() => setOpened(true)}>Open Modal</HubButton>
      <HubModal {...args} opened={opened} onClose={() => setOpened(false)}>
        <HubText typo="body1">{TEXT.Paragraph}</HubText>
      </HubModal>
    </>
  );
};

export const Header = (args: HubModalProps) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <HubButton onClick={() => setOpened(true)}>Open Modal</HubButton>
      <HubModal
        {...args}
        header={TEXT.Title}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <HubText typo="body1">{TEXT.Paragraph}</HubText>
      </HubModal>
    </>
  );
};

export const Actions = (args: HubModalProps) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <HubButton onClick={() => setOpened(true)}>Open Modal</HubButton>
      <HubModal
        {...args}
        opened={opened}
        onClose={() => setOpened(false)}
        actions={
          <>
            <HubButton variant="ghost" full>
              {TEXT.Button}
            </HubButton>
            <HubButton full>{TEXT.Button}</HubButton>
          </>
        }
      >
        <HubText typo="body1">{TEXT.Paragraph}</HubText>
      </HubModal>
    </>
  );
};

export const WithForm = (args: HubModalProps) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <HubButton onClick={() => setOpened(true)}>Open Modal</HubButton>
      <HubModal
        {...args}
        header={TEXT.Title}
        opened={opened}
        onClose={() => setOpened(false)}
        actions={
          <HubGrid gap="3" cols={['4', '4', '4']}>
            <div />
            <HubButton variant="ghost" color="error" full>
              {TEXT.Button}
            </HubButton>
            <HubButton full>{TEXT.Button}</HubButton>
          </HubGrid>
        }
      >
        <HubGrid gap="3">
          <HubTextField
            id="hub-modal-sb-field"
            type="month"
            required
            placeholder={TEXT.Line}
          >
            {TEXT.Line}
          </HubTextField>
        </HubGrid>
      </HubModal>
    </>
  );
};

export const WithTable = (args: HubModalProps) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <HubButton onClick={() => setOpened(true)}>Open Modal</HubButton>
      <HubModal
        {...args}
        header={TEXT.Title}
        opened={opened}
        onClose={() => setOpened(false)}
        actions={
          <>
            <HubButton variant="ghost" full>
              {TEXT.Button}
            </HubButton>
            <HubButton color="error" full>
              {TEXT.Button}
            </HubButton>
          </>
        }
      >
        <HubGrid gap="3">
          <HubTable
            columns={hubTableColumns}
            data={hubTableData as never}
            height="200px"
          />
        </HubGrid>
      </HubModal>
    </>
  );
};

export const WithPosition = (args: HubModalProps) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <HubButton onClick={() => setOpened(true)}>Open Modal</HubButton>
      <HubModal
        {...args}
        opened={opened}
        onClose={() => setOpened(false)}
        pad="0"
        position="right"
        width="250px"
        height="100vh"
      >
        <HubText typo="body1">{TEXT.Paragraph}</HubText>
      </HubModal>
    </>
  );
};

export default HubModalConfig;
