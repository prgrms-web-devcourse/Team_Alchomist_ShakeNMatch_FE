import MainMenuSelector from '@domain/MainMenuSelector';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { StyledBackButton, StyledPageContainer } from './styled';

const MainPage = (): ReactElement => {
  const [selectedMenu, setSelectedMenu] = useState<'theme' | 'jango' | null>(
    null
  );

  return (
    <StyledPageContainer>
      <StyledBackButton
        style={{ display: selectedMenu ? 'inline-block' : 'none' }}
        onClick={(): void => {
          setSelectedMenu(null);
        }}
      />
      <MainMenuSelector
        selectedMenu={selectedMenu}
        onMenuSelected={(menu): void => {
          setSelectedMenu(menu);
        }}
      />
    </StyledPageContainer>
  );
};

export default MainPage;
