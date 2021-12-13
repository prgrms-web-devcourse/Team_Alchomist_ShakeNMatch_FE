import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

const useHover = <T extends HTMLElement>(): [boolean, RefObject<T>] => {
  const [isHovered, setIsHovered] = useState(false);
  const elRef = useRef<T>(null);

  useEffect(() => {
    const handleMouseOver = (): void => {
      setIsHovered(true);
    };
    const handleMouseLeave = (): void => {
      setIsHovered(false);
    };

    elRef.current?.addEventListener('mouseover', handleMouseOver);
    elRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return (): void => {
      elRef.current?.removeEventListener('mouseoveer', handleMouseOver);
      elRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return [isHovered, elRef];
};

export default useHover;
