// hooks/useLoading.ts
import { useState } from 'react';
import type { UseLoadingReturn } from '../types/hook';

export const useLoading = <T = any>(
  asyncFunction: (...args: any[]) => Promise<T>
): UseLoadingReturn<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = async (...args: any[]): Promise<T> => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunction(...args);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, execute };
};