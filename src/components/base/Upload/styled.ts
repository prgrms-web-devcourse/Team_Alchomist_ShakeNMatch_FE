import styled from '@emotion/styled';
// import defaultUploader from '../../../assets/defaultUploader.svg';
import type { PreviewProps } from './types';

const StyledUploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const StyledInput = styled.input`
  display: none;
`;

const SytledUploadPreview = styled.div<PreviewProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 428px;
  height: 197px;
  border-color: ${({ dragging }): string => (dragging ? 'black' : 'cyan')};
  background-image: url(${({ imgSrc }): string => (imgSrc ? imgSrc : '')});
  background-size: cover;
`;

export { StyledInput, StyledUploadContainer, SytledUploadPreview };
