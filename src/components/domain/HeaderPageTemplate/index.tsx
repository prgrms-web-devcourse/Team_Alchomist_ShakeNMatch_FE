import type { ReactElement } from 'react';
import { Header } from '@domain';
import type { HeaderPageTemplateProps } from './types';
import { StyledContainer } from './styled';

const HeaderPageTemplate = ({
  children
}: HeaderPageTemplateProps): ReactElement => {
  return (
    <>
      <Header />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default HeaderPageTemplate;
