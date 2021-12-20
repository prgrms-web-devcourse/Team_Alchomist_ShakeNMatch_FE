import { useState } from 'react';

const useSessionStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void, () => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  const setValue = (value: T): void => {
    try {
      const valueToStore =
        typeof value === 'function' ? value(storedValue) : value;

      setStoredValue(valueToStore);
      sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      console.error(e);
    }
  };

  const clearValue = (): void => {
    try {
      setStoredValue(initialValue);
      sessionStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setValue, clearValue];
};

export default useSessionStorage;
