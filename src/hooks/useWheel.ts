import type { RefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface IDelta {
  deltaX: number;
  deltaY: number;
}

const useWheel = <T extends HTMLElement>(): [RefObject<T>, IDelta] => {
  const ref = useRef<T>(null);
  const [delta, setDelta] = useState<IDelta>({ deltaX: 0, deltaY: 0 });

  const handleWheel = useCallback((e: WheelEvent): void => {
    e.preventDefault();
    setDelta({ deltaX: e.deltaX, deltaY: e.deltaY });
  }, []);

  useEffect(() => {
    ref.current?.addEventListener<'wheel'>('wheel', handleWheel);

    return (): void =>
      ref.current?.removeEventListener<'wheel'>('wheel', handleWheel);
  }, [ref]);

  return [ref, delta];
};

export default useWheel;
