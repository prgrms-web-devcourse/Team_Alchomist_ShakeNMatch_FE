import { useRef } from 'react';

const useDebounce = <T extends any[]>(
  handler: (...args: T) => void,
  delay: number
): ((...args: T) => void) => {
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  const debounceHandler = (...args: T): void => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      handler(...args);
    }, delay);
  };

  return debounceHandler;
};

export default useDebounce;
