import type { ReactElement } from 'react';
import type { ShoppingItemProps } from './types';
import { Text, Image } from '@base';
import {
  StyledContainer,
  StyledImage,
  StyledInfo,
  StyledTitle,
  StyledVerticalLine
} from './styled';

const DEFAULT_IMAGE_WIDTH = '100px';
const DEFAULT_IMAGE_HEIGHT = '100px';
const DEFAULT_IMAGE_SRC = 'http://via.placeholder.com/100x100';
const DEFAULT_TITLE = '재료가 비어있습니다.';
const DEFAULT_PRICE = 0;
const DEFAULT_VENDOR = '구매처가 비어있습니다';

const ShoppingItem = ({
  imageWidth = DEFAULT_IMAGE_WIDTH,
  imageHeight = DEFAULT_IMAGE_HEIGHT,
  imageSrc = DEFAULT_IMAGE_SRC,
  title = DEFAULT_TITLE,
  price = DEFAULT_PRICE,
  vendor = DEFAULT_VENDOR
}: ShoppingItemProps): ReactElement => {
  return (
    <StyledContainer>
      <StyledImage>
        <Image
          height={imageHeight}
          mode='cover'
          src={imageSrc}
          width={imageWidth}
        />
      </StyledImage>
      <StyledTitle>
        <Text bold={true} color='BLACK' size='md'>
          {title}
        </Text>
      </StyledTitle>
      <StyledVerticalLine />
      <StyledInfo>
        <Text bold={true} color='BLACK' size='sm'>
          {vendor}
        </Text>
        <Text bold={true} color='RED' size='sm'>
          {`${price}원`}
        </Text>
      </StyledInfo>
    </StyledContainer>
  );
};

export default ShoppingItem;
