import { useCallback, useState } from 'react';

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [state, setState] = useState(initialValue);

  const handleToggle = useCallback((): void => {
    setState((state) => !state);
  }, []);

  return [state, handleToggle];
};

export default useToggle;
