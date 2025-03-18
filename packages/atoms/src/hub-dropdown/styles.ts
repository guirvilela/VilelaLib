import { animations } from '@hubert/styles';
import styled from 'styled-components';
import { HubDropdownProps } from './types';

export const DropdownIconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutral[400]};
  border-left: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  svg {
    margin-left: ${({ theme }) => theme.spaces[2]};
  }
  cursor: pointer;
`;

export const DropdownTriggerStyle = styled.div<{
  opened?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${DropdownIconStyle} {
    svg {
      transform: ${({ opened }) => `rotate(${opened ? '180deg' : '0deg'})`};
      transition: 0.5s ease-in-out transform;
    }
  }
`;

export const DropdownOverlayStyle = styled.div`
  position: fixed;
  inset: 0;
  z-index: 60;
`;

export const DropdownStyle = styled.ul<
  Omit<
    HubDropdownProps,
    'children' | 'keyLabel' | 'keyValue' | 'keySearch' | 'compareKey'
  > & { top?: number }
>`
  position: absolute;
  z-index: 61;
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.spaces[2]} 0;
  background: ${({ theme }) => theme.colors.white[500]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: 4px;
  animation: 0.5s ease ${() => animations.fadein};
  max-height: ${({ height }) => height || '200px'};
  overflow-y: auto;
`;

export const DropdownItemStyle = styled.li<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[2]};
  padding: ${({ theme }) => theme.spaces[2]};
  color: ${({ theme }) => theme.colors.neutral[800]};
  font-weight: 400;
  transition: background-color 1s;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.body2.family};
  font-size: ${({ theme }) => theme.typography.body2.size};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
  ${({ theme, selected }) =>
    selected ? `background-color: ${theme.colors.neutral[200]};` : ''}

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
  }
`;

export const DropdownCheckStyle = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: ${({ theme }) => theme.spaces[3]};
  height: ${({ theme }) => theme.spaces[3]};
  color: ${({ theme }) => theme.colors.white[500]};

  ${({ theme, selected }) => {
    if (selected) {
      return `
        background-color: ${theme.colors.primary[500]};
      `;
    }
    return `
      background-color: ${theme.colors.white[500]};
      border: 1px solid ${theme.colors.neutral[400]};
    `;
  }}
`;

export const DropdownEmptyStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spaces[1]};
  font-family: ${({ theme }) => theme.typography.body2.family};
  font-size: ${({ theme }) => theme.typography.body2.size};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
  font-weight: 600;
`;
