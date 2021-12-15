import type { ReactElement } from 'react';
import { useState, useRef, useEffect } from 'react';
import { Text } from '@base';
import type { ChaningTextProps } from './types';
import { StyledContainer, StyledSpeechBubble } from './styled';

const DEFAULT_TIME = 3000;
const TRANSITION_DELAY = 300;

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
      console.log(index);
      console.log(textList[index % textList.length]);
      setTextContent(textList[index % textList.length]);
    };

    const visibleInterval = setInterval(changeVisible, intervalTime);

    changeText();
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const textInterval = setInterval(
      changeText,
      intervalTime * 2 + TRANSITION_DELAY
    );

    return (): void => {
      clearInterval(visibleInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <StyledContainer transitionDelay={TRANSITION_DELAY} visible={visible}>
      <StyledSpeechBubble>
        <Text color={textColor} size={textSize}>
          {textContent}
        </Text>
      </StyledSpeechBubble>
    </StyledContainer>
  );
};

export default ChangingText;
