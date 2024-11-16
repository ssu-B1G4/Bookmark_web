import { useEffect, useRef } from 'react';

export const useEffectOnce = (callback: () => void) => {
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;

    if (typeof callback === 'function') {
      callback();
    }
  }, []);
};
