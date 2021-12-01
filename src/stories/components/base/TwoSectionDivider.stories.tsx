/* eslint-disable @typescript-eslint/no-magic-numbers */
import TwoSectionDivider from '@base/TwoSectionDivider';
import type { TwoSectionDividerProps } from '@base/TwoSectionDivider/types';
import styled from '@emotion/styled';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Base',
  component: TwoSectionDivider,
  argTypes: {
    ratio: {
      control: 'inline-radio',
      options: ['1:1', '1:2', '2:1', '2:3', '3:2', '1:4', '4:1'],
      mapping: {
        '1:1': [1, 1],
        '1:2': [1, 2],
        '2:1': [2, 1],
        '2:3': [2, 3],
        '3:2': [3, 2],
        '1:4': [1, 4],
        '4:1': [4, 1]
      }
    },
    width: {
      control: 'number'
    },
    height: {
      control: 'number'
    },
    direction: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical']
    },
    rotate: {
      control: 'inline-radio',
      options: ['-90deg', '-60deg', '-30deg', '0deg', '30deg', '60deg', '90deg']
    }
  }
};

const StyledSection = styled.div`
  &:nth-of-type(2n) {
    background-color: aliceblue;
  }
  &:nth-of-type(2n + 1) {
    background-color: darkblue;
  }
`;

export const Default = (props: TwoSectionDividerProps): ReactElement => (
  <TwoSectionDivider height={200} width={500} {...props}>
    <StyledSection></StyledSection>
    <StyledSection></StyledSection>
  </TwoSectionDivider>
);
