import { useRef } from 'react';

const useDebounce = (
  handler: (...args: any) => void,
  delay: number
): (() => void) => {
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  const debounceHandler = (): void => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(handler, delay);
  };

  return debounceHandler;
};

export default useDebounce;
