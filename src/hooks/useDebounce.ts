import { useRef } from 'react';

const useDebounce = (
  handler: (...args: any) => void,
  delay: number
): [() => void, () => void] => {
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  const debounceHandler = (): void => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(handler, delay);
  };

  const clearDebounce = (): void => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      console.log('devounce cancel');
    }
  };

  return [debounceHandler, clearDebounce];
};

export default useDebounce;
