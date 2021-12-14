import ShoppingItem from '@domain/ShoppingItem';
import TitleSectionContainer from '@domain/TitleSectionContainer';
import { Children } from 'react';
import type { ReactElement } from 'react';
import { StyledContainer } from './styled';

const DUMMY_DATA = [
  {
    id: 1,
    imageSrc: 'http://via.placeholder.com/100x100',
    title: '보드카',
    price: 2000,
    vendor: 'NAVER'
  },
  {
    id: 2,
    imageSrc: 'http://via.placeholder.com/90x90',
    title: '앙고스투라 비터',
    price: 8400,
    vendor: 'AUCTION'
  },
  {
    id: 3,
    imageSrc: 'http://via.placeholder.com/80x80',
    title: '트리플 섹',
    price: 11500,
    vendor: 'SSG 닷컴'
  },
  {
    id: 4,
    imageSrc: 'http://via.placeholder.com/100x100',
    title: '보드카',
    price: 9000,
    vendor: 'YAHOO'
  }
];
const shoppingItemList = Children.toArray(
  DUMMY_DATA.map((shoppingItem) => (
    <ShoppingItem
      imageSrc={shoppingItem.imageSrc}
      price={shoppingItem.price}
      title={shoppingItem.title}
      vendor={shoppingItem.vendor}
    ></ShoppingItem>
  ))
);

const ShoppingPage = (): ReactElement => {
  return (
    <>
      <StyledContainer>
        <TitleSectionContainer
          alignItems={true}
          bold={true}
          dividerColor='BLACK'
          dividerThickness='5px'
          dividerVisible={true}
          dividerWidth='200px'
          gap='20px'
          titleSize='lg'
          titleText='부족한 재료를 채워보세요!'
        >
          <div>{shoppingItemList}</div>
        </TitleSectionContainer>
      </StyledContainer>
    </>
  );
};

export default ShoppingPage;
