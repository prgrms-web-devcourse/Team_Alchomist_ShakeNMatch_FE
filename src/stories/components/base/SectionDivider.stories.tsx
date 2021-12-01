/* eslint-disable @typescript-eslint/no-magic-numbers */
import SectionDivider from '@base/SectionDivider';
import type { SectionDividerProps } from '@base/SectionDivider/types';
import styled from '@emotion/styled';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Base',
  component: SectionDivider,
  argTypes: {
    ratio: {
      control: 'inline-radio',
      options: [
        '1:1',
        '1:2',
        '2:1',
        '2:3',
        '3:2',
        '1:4',
        '4:1',
        '1:1:1',
        '1:2:1'
      ],
      mapping: {
        '1:1': [1, 1],
        '1:2': [1, 2],
        '2:1': [2, 1],
        '2:3': [2, 3],
        '3:2': [3, 2],
        '1:4': [1, 4],
        '4:1': [4, 1],
        '1:1:1': [1, 1, 1],
        '1:2:1': [1, 2, 1]
      }
    },
    width: {
      control: 'number'
    },
    height: {
      control: 'number'
    },
    radius: {
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
  &:nth-of-type(3n) {
    background-color: aliceblue;
  }
  &:nth-of-type(3n + 1) {
    background-color: darkblue;
  }
  &:nth-of-type(3n + 2) {
    background-color: darkcyan;
  }
`;

export const TwoSections = (props: SectionDividerProps): ReactElement => (
  <SectionDivider height={200} width={500} {...props}>
    <StyledSection></StyledSection>
    <StyledSection></StyledSection>
  </SectionDivider>
);

export const ThreeSections = (props: SectionDividerProps): ReactElement => (
  <SectionDivider height={200} width={500} {...props}>
    <StyledSection></StyledSection>
    <StyledSection></StyledSection>
    <StyledSection></StyledSection>
  </SectionDivider>
);
