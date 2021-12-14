import { useRef } from 'react';

const useDebounce = <T extends any[]>(
  handler: (...args: T) => void,
  delay: number
): [(...args: T) => void, () => void] => {
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  const debounceHandler = (...args: T): void => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      handler(...args);
    }, delay);
  };

  const clearDebounce = (): void => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      console.log('debounce cancel');
    }
  };

  return [debounceHandler, clearDebounce];
};

export default useDebounce;
