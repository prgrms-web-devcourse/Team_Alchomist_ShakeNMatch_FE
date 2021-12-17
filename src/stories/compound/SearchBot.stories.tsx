import SearchBot from '@domain/SearchBot';
import type { ReactElement } from 'react';

export default {
  title: 'Component/domain/SearchBot',
  component: SearchBot
};

export const Default = (): ReactElement => {
  return <SearchBot />;
};
