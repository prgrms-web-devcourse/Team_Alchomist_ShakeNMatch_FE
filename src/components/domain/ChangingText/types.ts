import type { ColorKeys, TextSizeKeys } from '@models/types';

interface ChaningTextProps {
  textList: string[];
  intervalTime?: number;
  textSize?: TextSizeKeys;
  textColor?: ColorKeys;
}

export type { ChaningTextProps };
