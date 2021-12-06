import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

const useClickAway = <T extends HTMLElement>(
  handler: (e?: Event) => void
): RefObject<T> => {
  const ref = useRef<T>(null);
  const saveHandler = useRef(handler);

  useEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleEvent: EventListener = (e) => {
      if (!el.contains(e.target as HTMLElement)) {
        saveHandler.current(e);
      }
    };

    document.addEventListener('mousedown', handleEvent);

    return (): void => {
      document.removeEventListener('mousedown', handleEvent);
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
