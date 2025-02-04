import styled from 'styled-components';

export const InputColor = styled.input.attrs({
  type: 'color'
})`
  background-color: transparent;
  border: none;
  width: ${({ theme }) => theme.spaces[6]};
  border-radius: ${({ theme }) => theme.spaces[2]};
`;
