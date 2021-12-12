import styled from '@emotion/styled';
import type { AlbumProps } from './types';
import { ALBUM_ATTRIBUTES } from './types';
import { COLOR } from '@utils/constants/colors';

const StyledContainer = styled.div<Required<Pick<AlbumProps, 'type'>>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  background-color: ${COLOR.BASIC_WHITE};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: ${({ type }): string => ALBUM_ATTRIBUTES[type].width};
  height: ${({ type }): string => ALBUM_ATTRIBUTES[type].height};
  border: 2px solid ${COLOR.BASIC_WHITE};
  border-radius: ${({ type }): string =>
    ALBUM_ATTRIBUTES[type].shape === 'circle' ? '50%' : '20px'};
`;

export { StyledContainer };
