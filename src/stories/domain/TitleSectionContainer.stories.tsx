import TitleSectionContainer from '@domain/TitleSectionContainer';
import type { ReactElement } from 'react';
import type { TitleSectionContainerProps } from '@components/domain/TitleSectionContainer/types';

export default {
  title: 'Component/domain/TitleSectionContainer',
  component: TitleSectionContainer,
  argTypes: {
    titleText: {
      control: 'text'
    },
    dividerVisible: {
      control: 'boolean'
    },
    dividerColor: {
      control: 'select',
      options: [
        undefined,
        'BASIC_WHITE',
        'LIGHT_GRAY',
        'DARK_GRAY',
        'BLACK',
        'LIGHT_PINK',
        'BASIC_PINK',
        'MIDDLE_PINK',
        'STRONG_PINK',
        'NAVY',
        'ORANGE',
        'VIOLET',
        'IVORY',
        'LIGHT_YELLOW',
        'DARK_YELLOW',
        'BLUE',
        'GREEN'
      ]
    },
    dividerWidth: {
      control: 'number'
    },
    dividerThickness: {
      control: 'number'
    },
    gap: {
      control: 'number'
    },
    bold: {
      control: 'boolean'
    }
  }
};

export const Defatult = (props: TitleSectionContainerProps): ReactElement => {
  return (
    <TitleSectionContainer {...props}>
      <div>내용물입니다</div>
    </TitleSectionContainer>
  );
};
