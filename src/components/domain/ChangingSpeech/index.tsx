import type { ReactElement } from 'react';
import { useState, useRef, useEffect } from 'react';
import { Text } from '@base';
import type { ChaningTextProps } from './types';
import { StyledContainer, StyledSpeechBubble } from './styled';

const DEFAULT_TIME = 3000;

const ChangingText = ({
  textList,
  intervalTime = DEFAULT_TIME,
  textSize = 'xs',
  textColor = 'BLACK'
}: ChaningTextProps): ReactElement => {
  const [textContent, setTextContent] = useState(textList[0]);
  const [visible, setVisible] = useState(false);
  const textIndex = useRef(0);

  useEffect(() => {
    const changeVisible = (): void => {
      setVisible((prev) => !prev);
    };

    const changeText = (): void => {
      const index = textIndex.current++;

      setTextContent(textList[index % textList.length]);
    };

    const visibleInterval = setInterval(changeVisible, intervalTime);

    changeText();
    const textInterval = setInterval(changeText, intervalTime * 2);

    return (): void => {
      clearInterval(visibleInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <StyledContainer displayTime={DEFAULT_TIME} visible={visible}>
      <StyledSpeechBubble>
        <Text color={textColor} size={textSize}>
          {textContent}
        </Text>
      </StyledSpeechBubble>
    </StyledContainer>
  );
};

export default ChangingText;
