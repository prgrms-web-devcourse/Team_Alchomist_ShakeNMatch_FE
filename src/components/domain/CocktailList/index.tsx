import { Children, useState } from 'react';
import type { ReactElement } from 'react';
import { Text } from '@base';
import { StyledContainer, StyledMotionWrapper } from './styled';
import type { CocktailListProps, CocktailIconsKeys } from './types';
import { CocktailIcons, TOTAL_COCKTAIL_ICONS } from '@assets/cocktails';
import { Album } from '@compound';
import { CocktailDetailModal } from '@domain';

const DEFAULT_MSG = '죄송합니다. 추천 칵테일이 존재하지 않습니다.';

const CocktailList = ({
  cocktailList = [],
  noResultMsg = DEFAULT_MSG
}: CocktailListProps): ReactElement => {
  const [clickedCocktailId, setClickedCocktailId] = useState<number | null>(
    null
  );

  const handleAlbumClick = (cocktailId: number): void => {
    setClickedCocktailId(cocktailId);
  };

  return (
    <>
      <StyledContainer>
        {cocktailList.length ? (
          Children.toArray(
            cocktailList.map((cocktail, index) => (
              <StyledMotionWrapper resultIndex={index}>
                <Album
                  cocktailId={cocktail.id}
                  handleAlbumClick={handleAlbumClick}
                  imageSrc={
                    CocktailIcons[
                      (index % TOTAL_COCKTAIL_ICONS) as CocktailIconsKeys
                    ]
                  }
                  text={cocktail.name}
                  type='result'
                />
              </StyledMotionWrapper>
            ))
          )
        ) : (
          <Text block color='DARK_GRAY' size='md'>
            {noResultMsg}
          </Text>
        )}
      </StyledContainer>
      <CocktailDetailModal
        backgroundColor='DARK_GRAY_OPACITY'
        clickedCocktailId={clickedCocktailId}
        color='IVORY'
        size='lg'
        visible={!!clickedCocktailId}
        onClose={(): void => {
          setClickedCocktailId(null);
        }}
      />
    </>
  );
};

export default CocktailList;
