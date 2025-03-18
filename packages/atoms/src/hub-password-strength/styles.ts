import styled from 'styled-components';

export const PasswordContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces[1]};
  padding: ${({ theme }) => theme.spaces[1]} 0;
`;

export const PasswordRectStyle = styled.div`
  width: 50px;
  height: 6px;
  border-radius: 12px;
  background-color: ${({ color }) => color};
`;

export const PasswordHintStyle = styled.span`
  font-family: ${({ theme }) => theme.typography.body2.family};
  font-size: ${({ theme }) => theme.typography.body2.size};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
  color: ${({ theme }) => theme.colors.neutral[500]};
  margin-left: ${({ theme }) => theme.spaces[2]};
`;
