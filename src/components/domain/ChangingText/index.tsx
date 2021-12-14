import type { ReactElement } from 'react';
import { useState, useRef, useEffect } from 'react';
import { Text } from '@base';
import type { ChaningTextProps } from './types';

const DEFAULT_TIME = 3000;

const ChangingText = ({
  textList,
  intervalTime = DEFAULT_TIME,
  textSize = 'xs',
  textColor = 'BLACK'
}: ChaningTextProps): ReactElement => {
  const [textContent, setTextContent] = useState(textList[0]);
  const textIndex = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const index = textIndex.current++;
      console.log('ment!');
      setTextContent(textList[index % textList.length]);
    }, intervalTime);

    return (): void => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Text color={textColor} size={textSize}>
      {textContent}
    </Text>
  );
};

export default ChangingText;
