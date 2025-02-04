import styled from 'styled-components';

import { animations } from '@hubert/styles';
import { HubSkeletonItemProps, HubSkeletonProps } from './types';

export const SkeletonStyle = styled.div<HubSkeletonProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[2]};
  padding: ${({ theme }) => theme.spaces[2]} 0;
  width: 100%;
`;

export const SkeletonStyleItem = styled.div<HubSkeletonItemProps>`
  display: inline-block;
  height: ${({ theme, head }) => (head ? theme.spaces[5] : theme.spaces[3])};
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.neutralGrey[300]};
  width: ${({ width }) => width};
  margin-bottom: ${({ theme, head }) => (head ? theme.spaces[2] : undefined)};

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    content: '';
    animation: ${() => animations.shimmer} 2s infinite;
  }
`;
