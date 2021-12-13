import ThemeSelector from '@domain/ThemeSelector';
import type { ThemeSelectorProps } from '@domain/ThemeSelector/types';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Domain/ThemeSelector',
  component: ThemeSelector
};

export const Default = (args: ThemeSelectorProps): ReactElement => (
  <ThemeSelector
    onChangeIndex={(e): void => {
      alert(e);
    }}
    {...args}
  />
);
