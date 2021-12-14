import type { ChangeEvent, KeyboardEvent, ReactElement } from 'react';
import { useState } from 'react';
import { Image } from '@base';
import { useNavigate } from 'react-router';
import searchBot from '@assets/characters/searchBot.png';
import {
  StyledContainer,
  StyledBot,
  StyledInputBackground,
  StyledInput
} from './styled';
import useClickAway from '@hooks/useClickAway';

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
    </StyledContainer>
  );
};

export default SearchBot;
