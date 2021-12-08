import styled from '@emotion/styled';
import type { AlbumProps } from './types';
import { ALBUM_ATTRIBUTES } from './types';

const StyledContainer = styled.div<Required<Pick<AlbumProps, 'type'>>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px 20px;
  width: ${({ type }): string => ALBUM_ATTRIBUTES[type].width};
  height: ${({ type }): string => ALBUM_ATTRIBUTES[type].height};
  border: 2px solid #ffffff;
  border-radius: ${({ type }): string =>
    ALBUM_ATTRIBUTES[type].shape === 'circle' ? '50%' : '20%'};
`;

export { StyledContainer };
