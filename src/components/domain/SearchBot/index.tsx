import type { ChangeEvent, KeyboardEvent, ReactElement } from 'react';
import { useState } from 'react';
import { Input, Text } from '@base';
import { useNavigate } from 'react-router';
import searchBot from '@assets/characters/searchBot.png';
import {
  StyledContainer,
  StyledBot,
  StyledInputBackground,
  StyledImage
} from './styled';
import useClickAway from '@hooks/useClickAway';
import ChangingSpeech from '@domain/ChangingSpeech';
import { BARTENDER_CONVERSATION } from '@constants/bartender';

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
        <StyledImage
          height='150px'
          mode='contain'
          src={searchBot}
          width='150px'
        />
        <StyledInputBackground isVisible={showInput}>
          <Text bold size='xs'>
            찾으시는 칵테일이 있나요?
          </Text>
          <Input
            placeholder='칵테일 이름을 검색해보세요'
            onChange={handleChange}
            onKeyDown={handleKeydown}
          />
        </StyledInputBackground>
      </StyledBot>
      {!showInput && <ChangingSpeech textList={BARTENDER_CONVERSATION} />}
    </StyledContainer>
  );
};

export default SearchBot;
