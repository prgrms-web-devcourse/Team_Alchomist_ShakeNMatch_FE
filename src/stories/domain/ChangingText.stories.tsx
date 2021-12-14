import ChangingText from '@domain/ChangingText';
import type { ReactElement } from 'react';

export default {
  title: 'Component/domain/ChangingText',
  component: ChangingText
};

const text = ['안녕하세요?', '커피 한 잔 하실래요?', '칵테일 좋아하시나요?'];

export const Default = (): ReactElement => {
  return <ChangingText textList={text} />;
};
