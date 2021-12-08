import Divider from '@base/Divider';
import type { ReactElement } from 'react';
import { Children, isValidElement, useMemo, cloneElement } from 'react';
import { StyledSectionContainer } from './styled';
import type { SectionDividerProps } from './types';

const FULL_PERCENTAGE = 100;
const DEFAULT_RATIO = [1, 1];
const DEFAULT_SIZE = '100px';

const SectionDivider = ({
  children,
  ratio = DEFAULT_RATIO,
  direction = 'horizontal',
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  radius = '0px',
  rotate = '0deg',
  showDivider,
  dividerOptions,
  ...props
}: SectionDividerProps): ReactElement => {
  const ratioSum = useMemo(
    () => ratio.reduce((acc, num) => acc + num),
    [ratio]
  );
  const SectionPercentages = useMemo(
    () => ratio.map((num) => `${(FULL_PERCENTAGE * num) / ratioSum}%`),
    [ratio, ratioSum]
  );

  const nodes = Children.toArray(children)
    .map((element, idx, elements) => {
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
        const el = cloneElement(element, {
          style: {
            ...props.style,
            width,
            height
          }
        });

        if (showDivider && idx !== elements.length - 1) {
          return [
            el,
            <Divider
              key={idx}
              direction={direction === 'horizontal' ? 'vertical' : 'horizontal'}
              {...dividerOptions}
            />
          ];
        }
        return el;
      }
    })
    .reduce((acc: ReactElement[], val) => (val ? acc.concat(val) : acc), []);

  return (
    <StyledSectionContainer
      direction={direction}
      height={height}
      radius={radius}
      rotate={rotate}
      width={width}
      {...props}
    >
      {nodes}
    </StyledSectionContainer>
  );
};

export default SectionDivider;
