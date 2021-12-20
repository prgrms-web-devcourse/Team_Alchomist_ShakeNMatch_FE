import type { ColorKeys, TextSizeKeys } from '@models/types';

interface ChaningTextProps {
  textList: string[];
  intervalTime?: number;
  textSize?: TextSizeKeys;
  textColor?: ColorKeys;
}

interface StyledContainerProps {
  visible: boolean;
  displayTime: number;
}

export type { ChaningTextProps, StyledContainerProps };
