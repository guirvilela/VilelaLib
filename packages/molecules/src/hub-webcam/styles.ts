import styled from 'styled-components';

export const VideoContainer = styled.video`
  @media (${({ theme }) => theme.mediaQuery.md}) {
    width: 100%;
  }
`;

export const PreviewContainer = styled.canvas`
  @media (${({ theme }) => theme.mediaQuery.md}) {
    width: 100%;
  }
`;
