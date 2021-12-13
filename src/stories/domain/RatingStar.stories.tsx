import RatingStar from '@domain/RatingStar';
import type { RatingStarProps } from '@domain/RatingStar/types';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Domain/RatingStar',
  component: RatingStar,
  argTypes: {
    mode: {
      control: { type: 'select' },
      defaultValue: 'edit',
      options: ['edit', 'show']
    },
    maxRate: { control: { type: 'number' }, defaultValue: 5 },
    rateTobeDisplayed: { control: { type: 'number' }, defaultValue: 0 }
  }
};

export const Default = (props: RatingStarProps): ReactElement => (
  <RatingStar {...props} />
);
