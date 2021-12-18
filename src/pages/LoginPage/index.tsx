import { Image, Modal } from '@base';
import { BackButton, KaKaoButton, TitleSectionContainer } from '@domain';
import type { ReactElement } from 'react';
import BartenderSrc from '@assets/characters/searchBartender.png';
import { useNavigate } from 'react-router';
import { StyledPageContainerWithBackground } from '@base/PageContainerWithBackground/styled';

const LoginPage = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <StyledPageContainerWithBackground>
      <Modal
        backgroundColor='TRANSPARENT'
        color='BASIC_WHITE_OPACITY'
        size='sm'
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
              <KaKaoButton />
            </section>
          </TitleSectionContainer>
        </div>
      </Modal>
      <BackButton
        color='NAVY'
        onClick={(): void => {
          navigate(-1);
        }}
      />
    </StyledPageContainerWithBackground>
  );
};

export default LoginPage;
