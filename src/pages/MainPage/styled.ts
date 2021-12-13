import ImageButton from '@compound/ImageButton';
import { COLOR } from '@constants';
import Logo from '@domain/Logo';
import type { CSSObject } from '@emotion/styled';
import styled from '@emotion/styled';

interface StyledPageContainerProps {
  selectedMenu: 'theme' | 'jango' | null;
}

const StyledPageContainer = styled.div<StyledPageContainerProps>`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${COLOR.IVORY};

  & .logo {
    ${({ selectedMenu }): CSSObject | undefined => {
      if (selectedMenu) {
        return { top: '15%' };
      }
    }}
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: height 0.3 ease-in-out;
`;

const StyledKaKaoButton = styled(ImageButton)`
  transition: opacity 0.5s ease-in-out;
  padding: 0;
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 1s ease-out;
`;

export {
  StyledPageContainer,
  StyledLogoContainer,
  StyledKaKaoButton,
  StyledLogo
};
