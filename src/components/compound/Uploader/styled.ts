import styled from '@emotion/styled';
import type { PreviewProps } from './types';
import { COLOR } from '@constants';

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
  background-image: ${({ fileSrcUrl }): string =>
    fileSrcUrl ? `url(${fileSrcUrl})` : ''};
  background-size: cover;
  background-position: center;
  width: 280px;
  height: 150px;
  background-color: ${COLOR.BASIC_WHITE};
  border: 1px dashed ${COLOR.DARK_GRAY};
`;

export { StyledInput, StyledUploadContainer, StyledUploadPreview };
