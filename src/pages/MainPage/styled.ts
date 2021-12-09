import ImageButton from '@compound/ImageButton';
import { COLOR } from '@constants';
import BackButton from '@domain/BackButton';
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

const StyledBackButton = styled(BackButton)`
  cursor: pointer;
  position: absolute;
  left: 10px;
  bottom: 20px;
  z-index: 1001;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
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
  StyledBackButton,
  StyledLogoContainer,
  StyledKaKaoButton,
  StyledLogo
};
