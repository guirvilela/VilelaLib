import { HubList } from '@hubert/atoms';
import styled from 'styled-components';

export const ListStyle = styled(HubList)`
  @media print {
    max-height: unset;
    height: auto;
    overflow: unset;
  }
`;
