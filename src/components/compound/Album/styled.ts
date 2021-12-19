import styled from '@emotion/styled';
import type { AlbumProps } from './types';
import { ALBUM_ATTRIBUTES } from './types';
import { COLOR } from '@utils/constants/colors';

const StyledContainer = styled.div<
  Required<Pick<AlbumProps, 'type' | 'backgroundColor'>>
>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(fit-content, auto) 15px;
  justify-items: center;
  align-items: center;
  background-color: ${({ backgroundColor }): string => COLOR[backgroundColor]};
  box-shadow: 0 0px 5px -3px ${COLOR.NAVY},
    inset 0px 0px 4px ${COLOR.BASIC_WHITE};
  width: ${({ type }): string => ALBUM_ATTRIBUTES[type].width};
  height: ${({ type }): string => ALBUM_ATTRIBUTES[type].height};
  border-radius: ${({ type }): string =>
    ALBUM_ATTRIBUTES[type].shape === 'circle' ? '50%' : '20px'};
  padding-top: 15px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  & > span {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 3px -2px ${COLOR.BLACK},
      inset 0px 0px 4px ${COLOR.BASIC_WHITE};
  }

  &:active {
    transform: translateY(0px);
    box-shadow: none;
  }
`;

export { StyledContainer };
