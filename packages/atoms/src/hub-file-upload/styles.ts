import { animations } from '@hubert/styles';
import styled from 'styled-components';
import { HubFileUploadProps } from './types';

export const FileUploadIconStyle = styled.div``;

export const FileUploadTitleStyle = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces[1]};
`;
export const FileUploadTitleColorStyle = styled.span``;

export const FileUploadInputStyle = styled.input`
  display: none;
`;

export const FileUploadExtStyle = styled.span`
  display: flex;
  gap: ${({ theme }) => theme.spaces[1]};

  ${({ theme }) => `
    font-family: ${theme.typography['body2'].family};
    font-size: ${theme.typography['body2'].size};
    line-height: ${theme.typography['body2'].lineHeight};
    letter-spacing: ${theme.typography['body2'].letterSpacing};
  `}
`;

export const FileUploadStyle = styled.div<
  HubFileUploadProps & { hide: boolean }
>`
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[2]}`};
  gap: ${({ theme }) => theme.spaces[2]};
  border: 1px dashed ${({ theme }) => theme.colors.neutral[400]};
  border-radius: 4px;
  font-weight: 600;
  width: 100%;
  ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : 'cursor: pointer;')}

  ${({ theme, disabled }) => `
    font-family: ${theme.typography['body1'].family};
    font-size: ${theme.typography['body1'].size};
    line-height: ${theme.typography['body1'].lineHeight};
    letter-spacing: ${theme.typography['body1'].letterSpacing};
    color: ${
      disabled ? theme.colors.neutralGrey[400] : theme.colors.neutral[800]
    };
  `}

  &:hover {
    border: 1px dashed
      ${({ theme, color, colorLevel }) =>
        color && colorLevel
          ? theme.colors[color][colorLevel]
          : color
          ? theme.colors[color][500]
          : theme.colors.info[500]};
  }

  ${FileUploadTitleColorStyle},
  ${FileUploadIconStyle} {
    color: ${({ theme, color, colorLevel, disabled }) =>
      disabled
        ? theme.colors.neutralGrey[300]
        : color && colorLevel
        ? theme.colors[color][colorLevel]
        : color
        ? theme.colors[color][500]
        : theme.colors.info[500]};
  }

  ${FileUploadExtStyle} {
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.neutralGrey[300] : theme.colors.neutralGrey[600]};
  }
`;

export const FileUploadOverlayStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 1;
`;

export const FileUploadLoadingStyle = styled.div`
  width: ${({ theme }) => theme.spaces[5]};
  height: ${({ theme }) => theme.spaces[5]};
  border-radius: 50%;
  animation: 1s linear infinite ${() => animations.spin},
    ${() => animations.fadein} 1s ease;

  border: 3px solid ${({ theme }) => theme.colors.primary[100]};
  border-top: 3px solid ${({ theme }) => theme.colors.primary[500]};
`;
