import { Children } from 'react';
import type { ReactElement } from 'react';
import { Text } from '@base';
import { StyledContainer, StyledMotionWrapper } from './styled';
import type { CocktailListProps, CocktailIconsKeys } from './types';
import { CocktailIcons, TOTAL_COCKTAIL_ICONS } from '@assets/cocktails';
import { Album } from '@compound';

const DEFAULT_MSG = '죄송합니다. 추천 칵테일이 존재하지 않습니다.';

const CocktailList = ({
  cocktailList = [],
  noResultMsg = DEFAULT_MSG,
  handleAlbumClick
}: CocktailListProps): ReactElement => {
  return (
    <StyledContainer>
      {cocktailList.length ? (
        Children.toArray(
          cocktailList.map((cocktail, index) => {
            return (
              <StyledMotionWrapper resultIndex={index}>
                <Album
                  cocktailId={cocktail.id}
                  handleAlbumClick={handleAlbumClick}
                  imageSrc={cocktail.type}
                  text={cocktail.name}
                  type='result'
                />
              </StyledMotionWrapper>
            );
          })
        )
      ) : (
        <Text block color='DARK_GRAY' size='md'>
          {noResultMsg}
        </Text>
      )}
    </StyledContainer>
  );
};

export default CocktailList;
