import type { ReactElement } from 'react';
import { Children, isValidElement, useMemo, cloneElement } from 'react';
import { StyledSectionContainer } from './styled';
import type { TwoSectionDividerProps } from './types';

const ONE = 1;
const HUNDRED = 100;
const DEFAULT_SIZE = '100px';

const TwoSectionDivider = ({
  children,
  ratio = [ONE, ONE],
  direction = 'horizontal',
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  rotate = '0deg',
  ...props
}: TwoSectionDividerProps): ReactElement => {
  const ratioSum = useMemo(
    () => ratio.reduce((acc, num) => acc + num),
    [ratio]
  );
  const SectionPercentages = useMemo(
    () => ratio.map((num) => `${(HUNDRED * num) / ratioSum}%`),
    [ratio, ratioSum]
  );

  const nodes = Children.toArray(children).map((element, idx) => {
    if (isValidElement(element) && ratio[idx]) {
      let width, height;
      switch (direction) {
        case 'horizontal':
          width = SectionPercentages[idx];
          height = '100%';
          break;
        case 'vertical':
          width = '100%';
          height = SectionPercentages[idx];
          break;
        default:
          console.error('direction must be horizontal or vertical!');
          return;
      }
      return cloneElement(element, {
        style: {
          ...props.style,
          width,
          height
        }
      });
    }
  });

  return (
    <StyledSectionContainer
      direction={direction}
      height={height}
      rotate={rotate}
      width={width}
      {...props}
    >
      {nodes}
    </StyledSectionContainer>
  );
};

export default TwoSectionDivider;
