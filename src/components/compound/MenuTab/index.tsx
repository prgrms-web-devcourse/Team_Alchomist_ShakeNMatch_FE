import type { ReactElement } from 'react';
import { useState, useEffect, cloneElement, Children } from 'react';
import { StyledContainer, StyledTab, StyledTabWrapper } from './styled';
import type { MenuTabProps } from './types';

const MenuTab = ({
  children,
  initialOnChild,
  tabText
}: MenuTabProps): ReactElement => {
  const [displayingChildIdx, setDisplayingChildIdx] = useState(initialOnChild);
  const [childrenEl, setChildrenEl] = useState<React.ReactFragment[]>();

  const handleContent = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { id } = e.currentTarget.dataset;

    if (displayingChildIdx === id) {
      return;
    }

    if (id) {
      setDisplayingChildIdx(id);
    }
  };

  useEffect(() => {
    const childrenEl = Children.toArray(
      children.map((child, index) =>
        cloneElement(child, {
          style: {
            display:
              index === parseInt(displayingChildIdx, 10) ? 'block' : 'none'
          },
          ...child.props
        })
      )
    );

    setChildrenEl(childrenEl);
  }, [displayingChildIdx]);

  return (
    <StyledContainer>
      {childrenEl}
      <StyledTabWrapper>
        {Children.toArray(
          tabText.map((text, index) => (
            // eslint-disable-next-line react/jsx-key
            <StyledTab data-id={index} onClick={handleContent}>
              {text}
            </StyledTab>
          ))
        )}
      </StyledTabWrapper>
    </StyledContainer>
  );
};

export default MenuTab;
