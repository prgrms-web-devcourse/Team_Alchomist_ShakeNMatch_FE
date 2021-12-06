import styled from '@emotion/styled';
import type { PreviewProps } from './types';

const StyledUploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledUploadPreview = styled.div<PreviewProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 428px;
  height: 197px;
  border: 4px solid;
  border-color: ${({ dragging }): string => (!dragging ? 'black' : 'cyan')};
  background-image: url(${({ fileSrcUrl }): string =>
    fileSrcUrl ? fileSrcUrl : ''});
  background-size: cover;
  background-position: center;
`;

export { StyledInput, StyledUploadContainer, StyledUploadPreview };
