import styled from 'styled-components';

import { HubFormProps } from './types';

export const FormStyle = styled.form<HubFormProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, gap }) => (gap ? theme.spaces[gap] : theme.spaces[3])};
  width: 100%;
`;
