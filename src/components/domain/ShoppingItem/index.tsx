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
import { COLOR, TEXT_SIZE, IMG_MODE } from '@constants';

const DEFAULT_IMAGE_WIDTH = '100px';
const DEFAULT_IMAGE_HEIGHT = '100px';
const DEFAULT_IMAGE_SRC = 'http://via.placeholder.com/100x100';
const DEFAULT_TITLE = '재료가 비어있습니다.';
const DEFAULT_PRICE = '0';
const DEFAULT_VENDOR = '구매처가 비어있습니다';

const ShoppingItem = ({
  imageWidth = DEFAULT_IMAGE_WIDTH,
  imageHeight = DEFAULT_IMAGE_HEIGHT,
  imageSrc = DEFAULT_IMAGE_SRC,
  title = DEFAULT_TITLE,
  price = DEFAULT_PRICE,
  vendor = DEFAULT_VENDOR,
  onClick
}: ShoppingItemProps): ReactElement => {
  const fommattedPrice = price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <StyledContainer onClick={onClick}>
      <StyledImage>
        <Image
          height={imageHeight}
          mode={IMG_MODE.COVER}
          src={imageSrc}
          width={imageWidth}
        />
      </StyledImage>
      <StyledTitle>
        <Text
          bold={true}
          color={COLOR.BLACK}
          dangerously={true}
          size={TEXT_SIZE.xs}
        >
          {title}
        </Text>
      </StyledTitle>
      <StyledVerticalLine />
      <StyledInfo>
        <Text bold={true} color={COLOR.BLACK} size={TEXT_SIZE.xs}>
          {vendor}
        </Text>
        <Text bold={true} color={COLOR.RED} size={TEXT_SIZE.xs}>
          {`${fommattedPrice}원`}
        </Text>
      </StyledInfo>
    </StyledContainer>
  );
};

export default ShoppingItem;
