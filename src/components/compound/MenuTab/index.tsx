import type { ReactElement } from 'react';
import {
  useMemo,
  useState,
  useRef,
  useEffect,
  cloneElement,
  Children
} from 'react';
import {
  StyledContainer,
  StyledTab,
  StyledTabWrapper,
  StyledBackground
} from './styled';
import type { MenuTabProps } from './types';

const MenuTab = ({
  children,
  initialOnChild = '0',
  tabText,
  onTabChange
}: MenuTabProps): ReactElement => {
  const [displayingChildIdx, setDisplayingChildIdx] = useState(initialOnChild);
  const [childrenEl, setChildrenEl] = useState<React.ReactFragment[]>();
  const [backgroundSize, setBackgroundSize] = useState<number>();
  const firstTabRef = useRef<HTMLDivElement | null>(null);
  const secondTabRef = useRef<HTMLDivElement | null>(null);

  const firstTabSize = useMemo(() => {
    if (firstTabRef.current) {
      return firstTabRef.current.offsetHeight;
    }
  }, [firstTabRef.current]);

  useEffect(() => {
    if (initialOnChild === '0') {
      firstTabRef.current &&
        setBackgroundSize(firstTabRef.current.offsetHeight);
    } else {
      secondTabRef.current &&
        setBackgroundSize(secondTabRef.current.offsetHeight);
    }
  }, []);

  const handleContent = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { id } = e.currentTarget.dataset;

    if (!id || displayingChildIdx === id) {
      return;
    }

    setBackgroundSize(e.currentTarget.offsetHeight);
    setDisplayingChildIdx(id);
    onTabChange?.(id);
  };

  useEffect(() => {
    const childrenEl = Children.toArray(
      children.map((child, index) =>
        cloneElement(child, {
          style: {
            display:
              index === parseInt(displayingChildIdx, 10) ? 'flex' : 'none'
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
            <StyledTab
              ref={index === 0 ? firstTabRef : secondTabRef}
              data-id={index}
              isSelected={index === parseInt(displayingChildIdx, 10)}
              onClick={handleContent}
            >
              {text}
            </StyledTab>
          ))
        )}
        <StyledBackground
          firstTabSize={firstTabSize}
          selectedTab={displayingChildIdx}
          size={backgroundSize}
        />
      </StyledTabWrapper>
    </StyledContainer>
  );
};

export default MenuTab;
