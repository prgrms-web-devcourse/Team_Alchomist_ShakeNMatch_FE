import DebounceInput from '@domain/DebounceInput';
import type { ReactElement } from 'react';

export default {
  title: 'Component/domain/DebounceInput',
  component: DebounceInput
};

export const Default = (): ReactElement => {
  return (
    <DebounceInput
      onSearchDone={(searchResults): void => {
        console.log('검색된 칵테일: ', searchResults);
      }}
    />
  );
};
