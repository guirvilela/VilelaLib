import styled from 'styled-components';

import { HubSectionProps } from './types';

export const SectionTitleStyle = styled.div`
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[3]}`};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary[500]};
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  width: 100%;
  border-radius: 4px;
`;

export const SectionContentStyle = styled.div`
  width: 100%;
`;

export const SectionStyle = styled.div<HubSectionProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${SectionContentStyle} {
    ${({ theme, pad }) => {
      if (typeof pad === 'string') {
        return `padding: ${theme.spaces[pad]} ${theme.spaces[pad]};`;
      }
      if (Array.isArray(pad)) {
        return `padding: ${pad.reduce(
          (acc, x) => acc + `${theme.spaces[x]} `,
          ''
        )};`;
      }
      return `padding: ${theme.spaces[3]} ${theme.spaces[2]};`;
    }}
  }
`;
