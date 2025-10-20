// hooks/useToggle.ts
import { useState, useCallback } from 'react';
import type { UseToggleReturn } from '../types/hook';

export const useToggle = (initialValue = false): UseToggleReturn => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, toggle, { setTrue, setFalse, setValue }];
};
