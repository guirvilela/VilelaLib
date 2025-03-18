import { HubFileUpload, HubFileUploadProps } from '@hubert/atoms';
import {
  BOOL,
  COLOR,
  COLOR_LEVEL,
  DISABLED,
  ELEMENT,
  factoryMeta,
  FUNCTION,
  SIZE,
  STRING,
  VALUE
} from '~/utils';

export const HubFileUploadConfig = factoryMeta<HubFileUploadProps>({
  title: 'Design System/Atoms/HubFileUpload',
  component: HubFileUpload,
  description: 'import { HubFileUpload } from "@hubert/atoms";',
  transformSource: (snippet, { name }) => {
    return name === 'Complex'
      ? `
const fileList = [
{ name: 'Contrato.pdf', disabled: false, error: '' },
{ name: 'Contrato2.pdf', percent: 75, disabled: false, error: '' },
{
name: 'Contrato2.pdf',
percent: 75,
disabled: false,
error: 'Ops! Arquivo não baixado'
}
];

<HubGrid gap="5">
{fileList.map((file, i) => (
<HubCard
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
<HubFileUpload
extensions="PDF, DOC e PNG"
size="5"
/>
</HubGrid>
    `
      : snippet;
  },
  args: {
    extensions: 'PDF, DOC e PNG',
    size: '5M'
  },
  props: {
    title: STRING(),
    extensions: STRING(),
    accept: STRING(),
    size: SIZE(),
    color: COLOR(),
    colorLevel: COLOR_LEVEL(),
    loading: BOOL(),
    disabled: DISABLED(),
    multiple: BOOL(),
    value: VALUE('File[]'),
    onChange: FUNCTION(undefined, 'File[]', 'Promise<any> | void'),
    element: ELEMENT()
  }
});
