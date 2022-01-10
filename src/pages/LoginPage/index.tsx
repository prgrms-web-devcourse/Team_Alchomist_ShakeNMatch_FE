import { Image, Modal } from '@base';
import { BackButton, LoginButton, TitleSectionContainer } from '@domain';
import type { ReactElement } from 'react';
import { useCallback } from 'react';
import BartenderSrc from '@assets/characters/searchBartender.png';
import { StyledPageContainerWithBackground } from '@base/PageContainerWithBackground/styled';
import { useCustomNavigate } from '@contexts/CustomNavigate';
import { COLOR, MODAL_SIZE } from '@constants';

const LoginPage = (): ReactElement => {
  const { navigate } = useCustomNavigate();

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <StyledPageContainerWithBackground>
      <Modal
        backgroundColor={COLOR.TRANSPARENT}
        color={COLOR.BASIC_WHITE_OPACITY}
        size={MODAL_SIZE.SM}
        visible
      >
        <div style={{ padding: 20, height: '100%' }}>
          <TitleSectionContainer
            titleSize='xs'
            titleText='어서오세요! 오늘은 어떻게 드시겠어요?'
          >
            <section
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 50,
                justifyContent: 'flex-end',
                marginBottom: 50
              }}
            >
              <Image height={150} mode='fill' src={BartenderSrc} width={150} />
              <LoginButton />
            </section>
          </TitleSectionContainer>
        </div>
      </Modal>
      <BackButton color='NAVY' onClick={handleBack} />
    </StyledPageContainerWithBackground>
  );
};

export default LoginPage;
