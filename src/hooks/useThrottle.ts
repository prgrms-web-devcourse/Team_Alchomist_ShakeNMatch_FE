import { useCallback, useState } from 'react';

const useThrottle = (
  handler: (...args: any[]) => void
): [() => void, () => void, boolean] => {
  const [isLoading, setIsLoading] = useState(false);

  const throttleHandler = useCallback((): void => {
    if (isLoading) return;
    setIsLoading(true);
    handler();
  }, [isLoading, handler]);

  const setIsLoadingFalse = useCallback(() => {
    setIsLoading(false);
  }, []);

  return [throttleHandler, setIsLoadingFalse, isLoading];
};

export default useThrottle;
