import type { ChangeEvent, KeyboardEvent, ReactElement } from 'react';
import { useState } from 'react';
import { Image } from '@base';
import { useNavigate } from 'react-router';
import searchBot from '@assets/characters/searchBot.png';
import {
  StyledContainer,
  StyledBot,
  StyledInputBackground,
  StyledTextBackground,
  StyledInput,
  StyledSpeechBubble
} from './styled';
import useClickAway from '@hooks/useClickAway';
import ChangingText from '@domain/ChangingText';

const bartenderConversation = [
  '찾으시는 칵테일이 있다면 저를 클릭 해주세요!',
  '저는 국제 바텐더 협회의 정회원이랍니다! 믿거나 말거나~',
  '당신의 눈동자에 건배!',
  '칵테일! 칵테이! 칵테삼! 하하하'
];

const SearchBot = (): ReactElement => {
  const [showInput, setShowInput] = useState(false);
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const clickAwayRef = useClickAway<HTMLInputElement>(() => {
    setShowInput(false);
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setKeyword(value);
  };

  const handleClick = (): void => {
    setShowInput(true);
  };

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      navigate(`/search/${keyword}`);
    }
  };

  return (
    <StyledContainer>
      <StyledBot ref={clickAwayRef} onClick={handleClick}>
        <Image height='150px' mode='contain' src={searchBot} width='150px' />
        <StyledInputBackground>
          <StyledInput
            isVisible={showInput}
            placeholder='칵테일 이름을 검색해보세요'
            onChange={handleChange}
            onKeyDown={handleKeydown}
          />
        </StyledInputBackground>
      </StyledBot>
      {!showInput && (
        <StyledTextBackground>
          <StyledSpeechBubble>
            <ChangingText textList={bartenderConversation} />
          </StyledSpeechBubble>
        </StyledTextBackground>
      )}
    </StyledContainer>
  );
};

export default SearchBot;
