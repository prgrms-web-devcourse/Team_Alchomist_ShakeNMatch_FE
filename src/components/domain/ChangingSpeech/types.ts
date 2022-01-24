import type { ColorType, ITextSize } from '@models/types';

interface ChaningTextProps {
  textList: string[];
  intervalTime?: number;
  textSize?: ITextSize;
  textColor?: ColorType;
}

interface StyledContainerProps {
  visible: boolean;
  displayTime: number;
}

export type { ChaningTextProps, StyledContainerProps };
