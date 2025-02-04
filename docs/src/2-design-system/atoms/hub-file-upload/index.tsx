import {
  HubFileUpload as FileUpload,
  HubButton,
  HubCard,
  HubGrid,
  HubIcon,
  HubProgressBar,
  HubText
} from '@hubert/atoms';
import IconClose from '@hubert/styles/lib/icons/icon-outline-close.svg';
import IconReload from '@hubert/styles/lib/icons/icon-outline-reload.svg';
import React from 'react';
import styled from 'styled-components';
import { TEXT } from '~/utils';

import { HubFileUploadConfig } from './storyConfig';

const HubFileUpload = styled(FileUpload)`
  width: 600px;
`;

export const Default = (args) => {
  const [files, setFiles] = React.useState<File[]>([]);

  React.useEffect(() => {
    console.log('ON-CHANGE', files);
  }, [files]);

  return <HubFileUpload {...args} value={files} onChange={setFiles} />;
};

export const Complex = (args) => {
  const [file, setFile] = React.useState<File[]>([]);

  const fileList = [
    { name: 'Contrato.pdf', disabled: false, error: '' },
    { name: 'Contrato2.pdf', percent: 75, disabled: false, error: '' },
    {
      name: 'Contrato2.pdf',
      percent: 75,
      disabled: false,
      error: 'Ops! Arquivo corrompido.'
    }
  ];

  return (
    <HubGrid gap="5">
      {fileList.map((file, i) => (
        <HubCard
          key={`file-item-${i}`}
          color="neutral"
          colorLevel="200"
          pad="2"
        >
          <HubGrid row justify="space-between" align="center">
            <HubGrid gap="2" width="94%">
              <HubText typo="body1">{file.name}</HubText>
              {file.percent && (
                <HubProgressBar
                  color={file.error ? 'error' : 'primary'}
                  percent={file.percent}
                />
              )}
              {file.error && (
                <HubText typo="body2" color="error">
                  {file.error}
                </HubText>
              )}
            </HubGrid>
            <HubButton
              variant="icon"
              disabled={file.disabled || file.percent === 100}
            >
              <HubIcon icon={file.error ? IconReload : IconClose} />
            </HubButton>
          </HubGrid>
        </HubCard>
      ))}
      <HubFileUpload {...args} value={file} onChange={setFile} />
    </HubGrid>
  );
};

export const WithAnotherElement = (args) => {
  const [file, setFile] = React.useState<File[]>([]);
  return (
    <HubFileUpload
      {...args}
      value={file}
      onChange={setFile}
      element={<HubButton>{TEXT.Title}</HubButton>}
    />
  );
};

export default HubFileUploadConfig;
