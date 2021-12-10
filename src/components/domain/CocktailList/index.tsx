import { Children } from 'react';
import type { ReactElement } from 'react';
import { Text } from '@base';
import { StyledContainer, StyledMotionWrapper } from './styled';
import type { CocktailListProps } from './types';
import Album from '@compound/Album';

const CocktailList = ({
  cocktailList = [],
  noResultMsg = '죄송합니다. 추천 칵테일이 존재하지 않습니다.'
}: CocktailListProps): ReactElement => {
  console.log(cocktailList);
  return (
    <StyledContainer>
      {cocktailList.length ? (
        Children.toArray(
          cocktailList.map((cocktail) => (
            <StyledMotionWrapper>
              <Album
                imageSrc={cocktail.icon}
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
  );
};

export default CocktailList;
