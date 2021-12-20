import type { ReactElement } from 'react';
import { Header } from '@domain';
import type { HeaderPageTemplateProps } from './types';

const HeaderPageTemplate = ({
  children
}: HeaderPageTemplateProps): ReactElement => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderPageTemplate;
